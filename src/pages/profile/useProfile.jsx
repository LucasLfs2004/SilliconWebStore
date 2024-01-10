import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProfile } from '../../services/Requests';

export const useProfile = () => {
  const user = useSelector(state => state.user);
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
        console.log(response);
        response.birthday = moment(response.birthday)
          .locale('pt-br')
          .format('DD/MM/YYYY');
        return response;
      }
    },
  });

  return { profile };
};
