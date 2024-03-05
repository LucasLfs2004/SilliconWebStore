import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getProfile, setPrincipalShipUser } from '../../services/Requests';
import { initializeUser } from '../../store/actions/userActions';

export const useProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [principalShip, setPrincipalShip] = useState({});
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
      setModalEditVisible(false);
    }
  };

  return {
    profile,
    principalShip,
    modalEditVisible,
    setModalEditVisible,
    handlePrincipalShip,
  };
};
