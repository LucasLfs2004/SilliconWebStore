import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfile } from '../../services/Requests';

export const useProfile = () => {
  const user = useSelector(state => state.user);
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

  const { data: profile } = useQuery({
    queryKey: ['profile-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getProfile(user.access_token);
        // console.log('profile user', response);
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

  // const { data: cart } = useQuery({
  //   queryKey: ['cart-profile-data'],
  //   queryFn: async () => {
  //     if (user.access_token) {
  //       const response = await getCart(user.access_token);
  //       return response;
  //     }
  //   },
  // });

  return { profile, principalShip };
};
