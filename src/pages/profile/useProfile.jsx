import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
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

  useEffect(() => {
    console.log('executando verificação do endereço principal');
    if (profile?.ship_info) {
      profile.ship_info.forEach(function (item) {
        console.log(item);
        if (profile.principal_ship === item.ship_id) {
          setPrincipalShip(item);
        }
      });
    }
  }, [profile]);

  const handlePrincipalShip = async id => {
    const success = await setPrincipalShipUser(id, user.access_token);
    if (success) {
      await refetch();
      setModalViewShipVisible(false);
    }
  };

  const submitForm = async data => {
    // console.log('SUBMIT COMPLETO: ', data);
    const params = {
      ...data,
      principal_ship: checkedPrincipalShip,
    };
    if (user.access_token) {
      if (shipEditObject === undefined) {
        const retorno = await postShipInfo(user.access_token, params);
        console.log('POST BEM SUCEDIDO', retorno);
      } else {
        const retorno = await patchShipInfo(user.access_token, {
          ...params,
          id: shipEditObject.ship_id,
        });
        console.log('PATCH BEM SUCEDIDO', retorno);
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
    handlePrincipalShip,
    submitForm,
    checkedPrincipalShip,
    setCheckedPrincipalShip,
    shipEditObject,
    setShipEditObject,
  };
};
