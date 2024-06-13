import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  deleteShipInfo,
  getProfile,
  patchShipInfo,
  postShipInfo,
  setPrincipalShipUser,
} from '../../services/Requests';
import { initializeUser } from '../../store/actions/userActions';

export const useProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //states from redux
  const user = useSelector(state => state.user);

  //useStates
  const [modalViewShipVisible, setModalViewShipVisible] = useState(false);
  const [modalShipVisible, setModalShipVisible] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [checkedPrincipalShip, setCheckedPrincipalShip] = useState(false);
  const [principalShip, setPrincipalShip] = useState({});
  const [shipEditObject, setShipEditObject] = useState(undefined);

  useEffect(() => {
    if (
      user?.access_token === null ||
      user?.access_token === undefined ||
      user === undefined
    ) {
      window.location.href = '/signin';
    }
  }, [user]);

  const { data: profile, refetch } = useQuery({
    queryKey: ['profile-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getProfile(user.access_token);

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

  useEffect(() => {
    if (profile?.ship_info) {
      profile.ship_info.forEach(function (item) {
        if (profile.principal_ship === item.ship_id) {
          setPrincipalShip(item);
        }
      });
    }
  }, [profile]);

  const handlePrincipalShip = async id => {
    const success = await setPrincipalShipUser(id, user.access_token);
    if (success) {
      toastSuc('Endereço definido como principal!');
      await refetch();
      setModalViewShipVisible(false);
    }
  };

  const deleteShip = async id => {
    const success = await deleteShipInfo(user.access_token, id);
    if (success) {
      toastSuc('Endereço excluído!');
      await refetch();
    }
  };

  const submitForm = async data => {
    const params = {
      ...data,
      principal_ship: checkedPrincipalShip,
    };
    if (user.access_token) {
      if (shipEditObject === undefined) {
        const retorno = await postShipInfo(user.access_token, params);
        if (retorno) {
          toastSuc('Endereço adicionado com sucesso!');
        } else {
          toastErr('Um erro aconteceu, por favor tente novamente.');
        }
      } else {
        const retorno = await patchShipInfo(user.access_token, {
          ...params,
          id: shipEditObject.ship_id,
        });
        if (retorno) {
          toastSuc('Endereço alterado com sucesso!');
        } else {
          toastErr('Um erro aconteceu, por favor tente novamente.');
        }
      }
      await refetch();
      setShipEditObject(undefined);
      setCheckedPrincipalShip(false);
      setModalShipVisible(false);
    }
  };

  return {
    profile,
    principalShip,
    modalViewShipVisible,
    setModalViewShipVisible,
    modalShipVisible,
    setModalShipVisible,
    modalProfile,
    setModalProfile,
    handlePrincipalShip,
    submitForm,
    checkedPrincipalShip,
    setCheckedPrincipalShip,
    shipEditObject,
    setShipEditObject,
    deleteShip,
  };
};

export const shipZod = z
  .object({
    name: z
      .string()
      .min(3, 'Este campo deve ter no mínimo 3 caracteres')
      .transform(field => DOMPurify.sanitize(field)),
    cep: z
      .string()
      .min(8, 'Preencha um cep válido')
      .regex(/^[0-9]{5}-?[0-9]{3}$/, 'Insira um CEP válido')
      .nonempty('Este campo é obrigatório')
      .transform(field => DOMPurify.sanitize(field)),
    phone_number: z
      .string()
      .regex(
        /^\([0-9]{2}\) 9[0-9]{4}-?[0-9]{4}$/,
        'Insira um número de telefone válido, Ex: (11) 91234-5678',
      )
      .max(15, 'Preencha um número de telefone válido')
      .transform(field => DOMPurify.sanitize(field)),
    number: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    street: z
      .string()
      .nonempty('Esse campo é obrigatório')
      .transform(field => DOMPurify.sanitize(field)),
    district: z
      .string()
      .nonempty('Esse campo é obrigatório')
      .transform(field => DOMPurify.sanitize(field)),
    state: z
      .string()
      .nonempty('Esse campo é obrigatório')
      .transform(field => DOMPurify.sanitize(field)),
    city: z
      .string()
      .nonempty('Esse campo é obrigatório')
      .transform(field => DOMPurify.sanitize(field)),
    receiver: z
      .string()
      .min(3, 'Insira um nome para o destinatário')
      .nonempty('Esse campo é obrigatório')
      .transform(field => DOMPurify.sanitize(field)),
    complement: z.string().transform(field => DOMPurify.sanitize(field)),
  })
  .required();

export const profileZod = z
  .object({
    name: z
      .string()
      .min(3, 'Este campo deve ter no mínimo 3 caracteres')
      .transform(field => DOMPurify.sanitize(field)),
    gender: z
      .string()
      .nonempty({ message: 'Selecione um gênero' })
      .transform(field => DOMPurify.sanitize(field)),
    phone_number: z
      .string()
      .regex(
        /^\([0-9]{2}\) 9[0-9]{4}-?[0-9]{4}$/,
        'Insira um número de telefone válido, Ex: (11) 91234-5678',
      )
      .max(15, 'Preencha um número de telefone válido')
      .transform(field => DOMPurify.sanitize(field)),
  })
  .required();
