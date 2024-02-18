import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSellerData } from '../../services/Requests';

const UseMyStore = () => {
  const user = useSelector(state => state.user);
  //   const [principalShip, setPrincipalShip] = useState({});
  useEffect(() => {
    if (
      user?.access_token === null ||
      user?.access_token === undefined ||
      user === undefined
    ) {
      window.location.href = '/signin';
    }
  }, [user]);

  const { data: sellerData } = useQuery({
    queryKey: ['seller-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getSellerData(user.access_token);
        return response;
      }
    },
  });

  return { sellerData };
};

export default UseMyStore;
