import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCep,
  getProfile,
  patchShipInfo,
  postShipInfo,
} from '../../services/Requests';
import { initializeUser } from '../../store/actions/userActions';
import { shipZod } from './shipZod';

import { useNavigate } from 'react-router';

const useShipModal = (closeModal, editObj, setEditObj) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [checkedPrincipalShip, setCheckedPrincipalShip] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(shipZod),
  });

  const { data: profile, refetch: refetchProfile } = useQuery({
    queryKey: ['profile-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getProfile(user.access_token);
        // console.log('profile user', response);

        if (response?.status && response.status === 401) {
          dispatch(initializeUser());
          localStorage.removeItem('user');
          navigate('/signin', {
            state: {
              message: 'Sua sessão expirou, realize o login novamente',
            },
          });
        }

        response.birthday = moment(response.birthday)
          .locale('pt-br')
          .format('DD/MM/YYYY');
        return response;
      }
    },
  });

  const submitForm = async data => {
    const params = {
      ...data,
      principal_ship: checkedPrincipalShip,
    };
    if (user.access_token) {
      let id = null;
      if (editObj === undefined) {
        const retorno = await postShipInfo(user.access_token, params);
        console.log('POST BEM SUCEDIDO', retorno);
        id = retorno.id;
      } else {
        const retorno = await patchShipInfo(user.access_token, {
          ...params,
          id: editObj.ship_id,
        });
        console.log('PATCH BEM SUCEDIDO', retorno);
        id = editObj.ship_id;
      }
      await refetchProfile();
      setEditObj(undefined);
      setCheckedPrincipalShip(false);
      closeModal(id);
    }
  };

  const handleCepChange = async event => {
    const cep = event.target.value;

    if (cep.replaceAll('-', '').length === 8) {
      const dadosDoCep = await getCep(cep);
      const dataRegister = {
        street: dadosDoCep.logradouro,
        state: dadosDoCep.uf,
        city: dadosDoCep.localidade,
        district: dadosDoCep.bairro,
      };
      Object.keys(dataRegister).forEach(campo => {
        if (!register(campo)) return; // Garante que o campo está registrado no formulário
        if (!register(campo).value) setValue(campo, dataRegister[campo]);
      });
    }
  };

  const setEditValues = () => {
    console.log(editObj);
    const dataRegister = {
      cep:
        editObj !== undefined && editObj?.cep && editObj.cep !== undefined
          ? editObj.cep
          : '',
      city: editObj?.city,
      complement: editObj?.complement,
      district: editObj?.district,
      street: editObj?.street,
      phone_number:
        editObj !== undefined &&
        editObj?.phone_number &&
        editObj?.phone_number !== undefined
          ? editObj.phone_number
          : '',
      receiver: editObj?.receiver_name,
      name: editObj?.ship_name,
      number: editObj?.ship_number,
      state: editObj?.state,
    };

    Object.keys(dataRegister).forEach(campo => {
      if (!register(campo)) return; // Garante que o campo está registrado no formulário
      if (!register(campo).value) setValue(campo, dataRegister[campo]);
    });
  };

  useEffect(() => {
    setEditValues();
  }, [editObj]);

  useEffect(() => {
    console.log(register.cep);
  }, [register]);

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    profile,
    submitForm,
    checkedPrincipalShip,
    setCheckedPrincipalShip,
    handleCepChange,
    setEditValues,
  };
};

export default useShipModal;
