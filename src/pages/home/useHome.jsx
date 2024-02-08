import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../store/actions/paymentActions';

import { useQuery } from '@tanstack/react-query';
import { getCart, getProducts } from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';

export const useHome = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['products-home'],
    queryFn: async () => {
      const response = await getProducts();
      return response;
    },
  });

  const { data: cartRequest } = useQuery({
    queryKey: ['cart-profile-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getCart(user.access_token);
        return response;
      }
    },
  });

  useEffect(() => {
    console.log('cartRequest', cartRequest);
    dispatch(setCart(cartRequest));
  }, [cartRequest]);

  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, [cart]);

  return { products, isError, isLoading, cart };
};
