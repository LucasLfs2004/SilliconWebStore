import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseRealCurrency } from '../../../../functions/realCurrency';
import { calculatePayment } from '../../../../store/actions/paymentActions';
import { TopBox } from '../../../carrinho/components/cartResume/styles';
import usePayment from '../../usePayment';
import * as C from './styles';

export const PurchaseResume = () => {
  const { shipValue, cart, finishOrder } = usePayment();
  const payment = useSelector(state => state.payment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, [cart]);

  return (
    <C.Resume>
      <TopBox>
        <C.Title className='blue no-padding'>Resumo</C.Title>
        <C.ResumeList>
          {cart &&
            cart?.items?.map((item, index) => (
              <C.RowP key={index}>
                <C.Paragraph>
                  {item?.amount} x {item?.name}
                </C.Paragraph>
                <C.Paragraph>
                  {parseRealCurrency(item?.value?.price_now * item?.amount)}
                </C.Paragraph>
              </C.RowP>
            ))}
          {cart.discount_value > 0 && (
            <C.RowP>
              <C.Paragraph>Desconto</C.Paragraph>
              <C.Paragraph className='red'>
                - {parseRealCurrency(cart.discount_value)}
              </C.Paragraph>
            </C.RowP>
          )}
          <C.RowP>
            <C.Paragraph>Entrega</C.Paragraph>
            {shipValue && shipValue !== null && (
              <C.Paragraph>
                {shipValue > 0 ? parseRealCurrency(shipValue) : 'Grátis'}
              </C.Paragraph>
            )}
          </C.RowP>
          <C.RowP className='total'>
            <C.Paragraph>Total</C.Paragraph>
            <C.Paragraph className='right'>
              {window.screen.width > 1024 && cart.list_portions.length > 0
                ? parseRealCurrency(
                    cart?.list_portions[cart.portions - 1]?.value_credit,
                  )
                : cart.product_total_value}
              <br />
              {window.screen.width > 1024 && cart.list_portions.length > 0 && (
                <span>
                  {`Em até ${cart.portions}x de ${parseRealCurrency(
                    cart.list_portions[cart.portions - 1].value_portion,
                  )}`}
                </span>
              )}
            </C.Paragraph>
          </C.RowP>
        </C.ResumeList>
      </TopBox>
      <C.BottomBox>
        <C.ResumeValues>
          <C.Title className='mini'>Total</C.Title>
          <C.Infos>
            <C.Row>
              <C.Paragraph className='emphasis'>Método:</C.Paragraph>
              <C.PayMethod>
                <C.Paragraph>{payment.method}</C.Paragraph>
                {payment.imgIcon !== '' && <C.Icon src={payment.imgIcon} />}
              </C.PayMethod>
            </C.Row>
            <C.Row className='align-top'>
              <C.Paragraph className='emphasis'>Total a pagar:</C.Paragraph>
              <C.Paragraph className='emphasis right'>
                {payment?.payForm?.method === 'credit-card'
                  ? `${payment.payForm.portion.often}x de ${parseRealCurrency(
                      payment.payForm.portion.value_portion,
                    )}`
                  : parseRealCurrency(cart.cart_total_value)}
                <br />
                {payment?.payForm?.method === 'credit-card' && (
                  <C.Span>
                    {parseRealCurrency(payment.payForm.portion.value_credit)}
                  </C.Span>
                )}{' '}
              </C.Paragraph>
            </C.Row>
          </C.Infos>
        </C.ResumeValues>
        {/* <C.Box>
        <C.Paragraph>Endereço principal</C.Paragraph>
        <C.Span>Rua Vicente do Rêgo Monteiro, 137 - Parque Brasil</C.Span>
      </C.Box> */}

        <C.ButtonsPayment>
          <C.ButtonNavigation onClick={() => finishOrder()}>
            Finalizar pagamento
          </C.ButtonNavigation>
          <C.ButtonNavigation className='transparent'>
            Voltar
          </C.ButtonNavigation>
        </C.ButtonsPayment>
      </C.BottomBox>
    </C.Resume>
  );
};

export default PurchaseResume;
