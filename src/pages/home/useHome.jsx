import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../store/actions/paymentActions';

import { useQuery } from '@tanstack/react-query';
import { getBanners, getCart, getProducts, getProductsInOffers } from '../../services/Requests';
import { setBanner } from '../../store/actions/bannerActions';
import { setCart } from '../../store/actions/cartActions';

export const useHome = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const {
    data: offerProducts,
  } = useQuery({
    queryKey: ['products-in-offer'],
    queryFn: async () => await getProductsInOffers(),
  })

  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['products-home'],
    queryFn: async () => await getProducts(),
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

  const { data: banners } = useQuery({
    queryKey: ['banners-data'],
    queryFn: async () => await getBanners(),
  });

  const recommendedProducts = products?.filter(item => (item.value.price_now === null))

  useEffect(() => {
    dispatch(setBanner(banners));
  }, [banners]);

  useEffect(() => {
    dispatch(setCart(cartRequest));
  }, [cartRequest]);

  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, [cart]);



  return { products, isError, isLoading, cart, offerProducts, recommendedProducts };
};
