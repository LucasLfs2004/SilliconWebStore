import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  getCart,
  removeCartItem,
  updateCartItem,
} from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';

export const useCart = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (user === null) {
      navigate('/signin');
    }
  }, [user]);

  const dispatch = useDispatch();

  const { data: cartRequest, refetch: refetchCartRequest } = useQuery({
    queryKey: ['cart-data'],
    queryFn: async () =>
      user.access_token && (await getCart(user.access_token)),
  });

  useEffect(() => {
    refetchCartRequest();
  }, []);

  useEffect(() => {
    dispatch(setCart(cartRequest));
  }, [cartRequest]);

  const updateItemCart = async (amount, item) => {
    if (amount > 0) {
      const response = await updateCartItem(user.access_token, {
        id: item.id,
        amount: amount,
      });
      if (response) {
        refetchCartRequest();
      }
    }
  };

  const removeItemCart = async item => {
    const response = await removeCartItem(user.access_token, item.id);
    if (response) {
      toastSuc(`${item.name} removido do carrinho`);
      refetchCartRequest();
    } else {
      toastErr('A ação não pôde ser concluída, por favor tente novamente');
    }
  };

  return { cart, user, removeItemCart, updateItemCart, refetchCartRequest };
};
