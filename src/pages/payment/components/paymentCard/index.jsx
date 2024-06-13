import { useDispatch, useSelector } from 'react-redux';
import { parseRealCurrency } from '../../../../functions/realCurrency';
import { setPayForm } from '../../../../store/actions/paymentActions';
import { Paragraph } from '../../styles';
import usePayment from '../../usePayment';
import * as C from './styles';

const PaymentCard = () => {
  const payment = useSelector(state => state.payment);
  const dispatch = useDispatch();

  const { cart } = usePayment();

  return (
    <C.Payment>
      <C.Title>Forma de Pagamento</C.Title>
      <C.ItemPay className={payment.payForm.method === 'boleto' && 'selected'}>
        <C.PayCard onClick={() => dispatch(setPayForm({ method: 'boleto' }))}>
          {payment.payForm.method === 'boleto' ? (
            <img src='/assets/icons/boletoBlue.svg' alt='' />
          ) : (
            <img src='/assets/icons/boletoWhite.svg' alt='' />
          )}
          <Paragraph>Boleto bancário</Paragraph>
        </C.PayCard>
        <C.InfoPay className={payment.payForm.method === 'boleto' && 'view'}>
          <C.List>
            <li>2 dias úteis para efetuação do pagamento</li>
            <li>2 dias úteis para comprovação do pagamento</li>
            <Paragraph className='mini'>
              Caso seu boleto expire, o pedido será cancelado automaticamente
            </Paragraph>
          </C.List>
        </C.InfoPay>
      </C.ItemPay>
      <C.ItemPay
        className={payment.payForm.method === 'credit-card' && 'selected'}
      >
        <C.PayCard
          onClick={() =>
            dispatch(
              setPayForm({
                method: 'credit-card',
                portion: cart.list_portions.length > 0 && cart.list_portions[0],
              }),
            )
          }
        >
          {payment.payForm.method === 'credit-card' ? (
            <img src='/assets/icons/creditCardBlue.svg' alt='' />
          ) : (
            <img src='/assets/icons/creditCardWhite.svg' alt='' />
          )}
          <Paragraph>Cartão de crédito</Paragraph>
        </C.PayCard>
        {payment.payForm.method === 'credit-card' && (
          <C.Portion>
            <select
              name='parcelas'
              id=''
              onChange={e => {
                dispatch(
                  setPayForm({
                    method: 'credit-card',
                    portion: JSON.parse(e.target.value),
                  }),
                );
              }}
            >
              {cart?.list_portions?.map(portion => (
                <option key={portion.often} value={JSON.stringify(portion)}>
                  {`${portion.often}x de ${parseRealCurrency(
                    portion.value_portion,
                  )} - ${parseRealCurrency(portion.value_credit)} à vista`}
                </option>
              ))}
            </select>
          </C.Portion>
        )}
      </C.ItemPay>
      <C.ItemPay className={payment.payForm.method === 'pix' && 'selected'}>
        <C.PayCard onClick={() => dispatch(setPayForm({ method: 'pix' }))}>
          {payment.payForm.method === 'pix' ? (
            <img src='/assets/icons/pixBlue.svg' alt='' />
          ) : (
            <img src='/assets/icons/pixWhite.svg' alt='' />
          )}
          <Paragraph>PIX</Paragraph>
        </C.PayCard>
        <C.InfoPay className={payment.payForm.method === 'pix' && 'view'}>
          <C.List>
            <li>Aprovação imediata</li>
            <li>1 Hora para efetuar o pagamento</li>
            <li>Expedição do pedido mais rápida</li>
          </C.List>
        </C.InfoPay>
      </C.ItemPay>
    </C.Payment>
  );
};

export default PaymentCard;
