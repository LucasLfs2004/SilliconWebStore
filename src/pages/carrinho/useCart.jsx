import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';

export const useCart = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const { data: cartRequest } = useQuery({
    queryKey: ['cart-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getCart(user.access_token);
        dispatch(setCart(response));
        console.log('response queryKey cart-data', response);
        return response;
      }
    },
  });

  return { cart, user };
};
