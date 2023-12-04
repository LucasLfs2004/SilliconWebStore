import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculatePayment,
  setVoucher,
} from '../../../../store/actions/paymentActions';
import { ButtonPurple, InputDisplay, Title } from '../../styles';
import * as C from './styles';

export const VoucherCard = () => {
  const payment = useSelector(state => state.payment);
  const cart = useSelector(state => state.cart);
  const [cupom, setCupom] = useState('');
  const dispatch = useDispatch();

  const applyCupom = () => {
    if (cupom.toLowerCase() === 'nadamal') {
      dispatch(setVoucher({ voucher: 'nadamal', discount: 0.05 }));
      dispatch(calculatePayment(cart));
      setCupom('');
    }
  };

  return (
    <C.CupomArea>
      <Title>
        <img src='  assets/icons/voucherIcon.svg' alt='' />
        <h1>Cupom de desconto</h1>
      </Title>
      <C.RowCupom>
        <InputDisplay>
          <p className='mobile-only'>Cupom de desconto:</p>
          <input
            value={cupom}
            className='extended'
            onChange={e => setCupom(e.target.value)}
          />
        </InputDisplay>
        <ButtonPurple onClick={() => applyCupom()}>Aplicar</ButtonPurple>
      </C.RowCupom>

      <C.CupomApply>
        {payment?.voucher !== null && (
          <>
            <p className='green'>Cupom aplicado: {payment?.voucher}</p>
            <span>
              {payment.discount > 1
                ? `${payment.discount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })} de desconto`
                : `${payment.discount * 100}% off`}
            </span>
          </>
        )}
      </C.CupomApply>
    </C.CupomArea>
  );
};

export default VoucherCard;
