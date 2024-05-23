import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../../../store/actions/paymentActions';
import { TopBox } from '../../../carrinho/components/cartResume/styles';
import usePayment from '../../usePayment';
import * as C from './styles';

export const PurchaseResume = () => {
  const { shipValue, cart } = usePayment();
  const payment = useSelector(state => state.payment);
  const [payInfos, setPayInfos] = useState({ payMethod: '', imgIcon: '' });
  const dispatch = useDispatch();

  console.log('payment redux: ', payment);

  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, [cart]);

  useEffect(() => {
    console.log(`useEffect do PurchaseResume`);
    switch (payment.payForm.method) {
      case 'boleto':
        setPayInfos({
          payForm: 'boleto',
          payMethod: 'Boleto bancário',
          imgIcon: '/assets/icons/boletoBlue.svg',
        });
        break;
      case 'credit-card':
        setPayInfos({
          payForm: 'credit-card',
          payMethod: 'Cartão de crédito',
          imgIcon: '/assets/icons/creditCardBlue.svg',
        });
        break;
      case 'pix':
        setPayInfos({
          payForm: 'pix',
          payMethod: 'Pix',
          imgIcon: '/assets/icons/pixBlue.svg',
        });
        break;
      default:
        return;
    }
  }, [payment]);

  console.log('cart: ', cart);

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
                  {(item?.value?.price_now * item?.amount).toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    },
                  )}
                </C.Paragraph>
              </C.RowP>
            ))}
          {cart.discount_value > 0 && (
            <C.RowP>
              <C.Paragraph>Desconto</C.Paragraph>
              <C.Paragraph className='red'>
                -{' '}
                {cart.discount_value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </C.Paragraph>
            </C.RowP>
          )}
          <C.RowP>
            <C.Paragraph>Entrega</C.Paragraph>
            {shipValue && shipValue !== null && (
              <C.Paragraph>
                {shipValue > 0
                  ? shipValue.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })
                  : 'Grátis'}
              </C.Paragraph>
            )}
          </C.RowP>
          <C.RowP className='total'>
            <C.Paragraph>Total</C.Paragraph>
            <C.Paragraph className='right'>
              {window.screen.width > 1024 && cart.list_portions.length > 0
                ? cart?.list_portions[
                    cart.portions - 1
                  ]?.value_credit.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })
                : cart.product_total_value}
              <br />
              {window.screen.width > 1024 && cart.list_portions.length > 0 && (
                <span>
                  {`Em até ${cart.portions}x de ${cart.list_portions[
                    cart.portions - 1
                  ].value_portion.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}`}
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
                {/* <C.Paragraph>{payInfos.payForm}</C.Paragraph> */}
                {payment.imgIcon !== '' && <C.Icon src={payment.imgIcon} />}
              </C.PayMethod>
            </C.Row>
            <C.Row className='align-top'>
              <C.Paragraph className='emphasis'>Total a pagar:</C.Paragraph>
              <C.Paragraph className='emphasis right'>
                {payment?.payForm?.method === 'credit-card'
                  ? `${
                      payment.payForm.portion.often
                    }x de ${payment.payForm.portion.value_portion.toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                      },
                    )}`
                  : cart.cart_total_value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })}
                <br />
                {payment?.payForm?.method === 'credit-card' && (
                  <C.Span>
                    {payment.payForm.portion.value_credit.toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                      },
                    )}
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
          <C.ButtonNavigation>Finalizar pagamento</C.ButtonNavigation>
          <C.ButtonNavigation className='transparent'>
            Voltar
          </C.ButtonNavigation>
        </C.ButtonsPayment>
      </C.BottomBox>
    </C.Resume>
  );
};

export default PurchaseResume;
