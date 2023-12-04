import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../../../store/actions/paymentActions';

export const useCartResume = () => {
  const [payInfos, setPayInfos] = useState(initialPayInfos);
  const cart = useSelector(state => state.cart);
  const payment = useSelector(state => state.payment);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart.length > 0 && payment.valueTotal === 0) {
      console.log('Calculando pagamento');
      dispatch(calculatePayment(cart));
    }
    if (payment.portions.length > 0) {
      setPayInfos({
        totalValue: (payment.valueTotal + payment.shipValue).toLocaleString(
          'pt-BR',
          {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          },
        ),
        valueCredit: (
          payment.portions[payment.portions.length - 1].valueCredit +
          payment.shipValue
        ).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }),
        valuePortion: (
          payment.portions[payment.portions.length - 1].valuePortion +
          (payment.shipValue / payment.portions.length - 1)
        ).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }),
        shipValue: payment.shipValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }),
        discountInCash:
          payment.portions.length > 0 &&
          (
            payment.portions[payment.portions.length - 1].valueCredit +
            payment.shipValue -
            (payment.valueTotal + payment.shipValue)
          ).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          }),
        maxOften: payment.portions[payment.portions.length - 1].often,
        discountValue: payment.discountValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }),
      });
    }
  }, [cart, dispatch, payment]);

  return { payInfos, payment, cart };
};

export const initialPayInfos = {
  totalValue: '',
  valueCredit: '',
  valuePortion: '',
  shipValue: '',
  discountInCash: '',
  maxOften: '',
  discountValue: '',
};
