import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculatePayment,
  clearVoucher,
} from '../../store/actions/paymentActions';

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(clearVoucher());
    }
    dispatch(calculatePayment(cart));
  }, [cart, dispatch]);

  return cart;
};
