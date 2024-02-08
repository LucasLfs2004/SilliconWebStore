import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearVoucher, setVoucher } from '../../../../services/Requests';
import { setCart } from '../../../../store/actions/cartActions';
import { ButtonPurple, InputDisplay, Title } from '../../styles';
import * as C from './styles';

export const VoucherCard = () => {
  const payment = useSelector(state => state.payment);
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const [cupom, setCupom] = useState('');
  const dispatch = useDispatch();

  const applyVoucher = async () => {
    if (user.access_token) {
      const cartUpdated = await setVoucher(user.access_token, {
        code: String(cupom.toUpperCase()),
      });
      console.log(cartUpdated);
      dispatch(setCart(cartUpdated));
    } else {
      console.log('User not logged');
    }
  };

  const removeVoucher = async () => {
    if (user.access_token) {
      const cartUpdated = await clearVoucher(user.access_token);
      dispatch(setCart(cartUpdated));
    } else {
      console.log('User not logged');
    }
  };

  return (
    <C.CupomArea>
      <Title className='only-web'>
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
        <ButtonPurple
          onClick={() =>
            cart.voucher !== null && cupom === ''
              ? removeVoucher()
              : applyVoucher()
          }
        >
          {cart.voucher !== null && cupom === '' ? 'Limpar' : 'Aplicar'}
        </ButtonPurple>
      </C.RowCupom>

      <C.CupomApply>
        {cart.voucher !== null && (
          <>
            <p className='green'>Cupom aplicado: {cart?.voucher}</p>
            <span>
              {cart.discount > 1
                ? `${cart.discount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })} de desconto`
                : `${cart.discount * 100}% off`}
            </span>
          </>
        )}
      </C.CupomApply>
    </C.CupomArea>
  );
};

export default VoucherCard;
