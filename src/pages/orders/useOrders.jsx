import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getOrders } from '../../services/Requests';

const useOrders = () => {
  const user = useSelector(state => state.user);

  const { data: orders, refetch } = useQuery({
    queryKey: ['profile-data'],
    queryFn: async () =>
      user.access_token && (await getOrders(user.access_token)),
  });

  return { orders };
};

export default useOrders;
