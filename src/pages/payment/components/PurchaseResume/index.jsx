import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatePayment } from '../../../../store/actions/paymentActions';
import { TopBox } from '../../../carrinho/components/cartResume/styles';
import * as C from './styles';

export const PurchaseResume = () => {
  const cart = useSelector(state => state.cart);
  const payment = useSelector(state => state.payment);
  const [payInfos, setPayInfos] = useState({ payMethod: '', imgIcon: '' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculatePayment(cart));
  }, [cart]);

  useEffect(() => {
    console.log(`useEffect do PurchaseResume`);
    switch (payment.payForm.method) {
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
      <TopBox>
        <C.Title className='blue no-padding'>Resumo</C.Title>
        <C.ResumeList>
          {cart &&
            cart.map((item, index) => (
              <C.RowP key={index}>
                <C.Paragraph>
                  {item.amount} x {item.product.name}
                </C.Paragraph>
                <C.Paragraph>
                  {(item.product.value.priceNow * item.amount).toLocaleString(
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
          {payment.discountValue > 0 && (
            <C.RowP>
              <C.Paragraph>Desconto</C.Paragraph>
              <C.Paragraph>{payInfos.discountValue}</C.Paragraph>
            </C.RowP>
          )}
          <C.RowP>
            <C.Paragraph>Entrega</C.Paragraph>
            {payment.shipValue > 0 && (
              <C.Paragraph>{payInfos.shipValue}</C.Paragraph>
            )}
          </C.RowP>
          {/* <C.RowP className='total'>
          <C.Paragraph>Total</C.Paragraph>
          <C.Paragraph className='right'>
            {window.screen.width > 1024 && payment.portions.length > 0
              ? payInfos.valueCredit
              : payInfos.totalValue}
            <br />
            {window.screen.width > 1024 && payment.portions.length > 0 && (
              <span>
                {`Em até ${payInfos.maxOften}x de ${payInfos.discountInCash}`}
              </span>
            )}
          </C.Paragraph>
        </C.RowP> */}
        </C.ResumeList>
      </TopBox>
      <C.BottomBox>
        <C.ResumeValues>
          <C.Title className='mini'>Total</C.Title>
          <C.Infos>
            <C.Row>
              <C.Paragraph className='emphasis'>Método:</C.Paragraph>
              <C.PayMethod>
                <C.Paragraph>{payInfos.payMethod}</C.Paragraph>
                {payInfos.imgIcon !== '' && <C.Icon src={payInfos.imgIcon} />}
              </C.PayMethod>
            </C.Row>
            <C.Row>
              <C.Paragraph className='emphasis'>Total a pagar:</C.Paragraph>
              <C.Paragraph className='emphasis'>
                {payment.valueTotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
                <br />
                {payment.payForm === 'credit-cart' && <C.Span>Portions</C.Span>}
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
