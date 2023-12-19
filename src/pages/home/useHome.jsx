import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../store/actions/paymentActions';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/Requests';

export const useHome = () => {
  const cart = useSelector(state => state.cart);
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

  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, [cart]);

  return { products, isError, isLoading, cart };
};
