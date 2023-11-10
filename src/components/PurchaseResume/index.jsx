import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../store/actions/paymentActions';
import * as C from './styles';

export const PurchaseResume = () => {
  const cart = useSelector(state => state.cart);
  const payment = useSelector(state => state.payment);
  const [payInfos, setPayInfos] = useState({ payMethod: '', imgIcon: '' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, []);

  useEffect(() => {
    switch (payment.payForm) {
      case 'boleto':
        setPayInfos({
          payMethod: 'Boleto bancário',
          imgIcon: '/assets/icons/boletoBlue.svg',
        });
        break;
      case 'credit-card':
        setPayInfos({
          payMethod: 'Cartão de crédito',
          imgIcon: '/assets/icons/creditCardBlue.svg',
        });
        break;
      case 'pix':
        setPayInfos({
          payMethod: 'Pix',
          imgIcon: '/assets/icons/pixBlue.svg',
        });
        break;
      default:
        return;
    }
  }, [payment]);
  return (
    <C.Resume>
      <C.Title className='blue no-padding'>Resumo</C.Title>
      <C.Row>
        <C.Paragraph>Método de pagamento: {payInfos.payMethod}</C.Paragraph>
        {payInfos.imgIcon !== '' && <C.Icon src={payInfos.imgIcon} />}
      </C.Row>
      <C.Paragraph>
        Total a pagar:{' '}
        {payment.valueTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}
      </C.Paragraph>
      {payment.payForm === 'credit-cart' && <C.Span>Portions</C.Span>}
      <C.Box>
        <C.Paragraph>Endereço principal</C.Paragraph>
        <C.Span>Rua Vicente do Rêgo Monteiro, 137 - Parque Brasil</C.Span>
      </C.Box>
    </C.Resume>
  );
};

export default PurchaseResume;
