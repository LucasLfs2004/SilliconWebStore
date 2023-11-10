import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewCard from '../../components/NewCard';
import PurchaseResume from '../../components/PurchaseResume';
import { setPayForm } from '../../store/actions/paymentActions';
import * as C from './styles';

const Payment = () => {
  const payment = useSelector(state => state.payment);
  const dispatch = useDispatch();
  return (
    <C.Container>
      <Header />
      <C.Title>Endereço de entrega</C.Title>
      <C.Ship>
        <C.InfosShip>
          <C.Line>
            <C.Icon src='/assets/icons/truck.svg' />
            <C.Subtitle>Endereço principal</C.Subtitle>
          </C.Line>
          <C.Paragraph className='spaced'>
            Rua Vicente do Rêgo Monteiro, 137
          </C.Paragraph>
          <C.Paragraph className='spaced'>
            Parque Brasil - 04843-060
          </C.Paragraph>
          <C.Paragraph className='spaced'>Lucas Ferreira Silva</C.Paragraph>
        </C.InfosShip>
        <C.ButtonsShip>
          <C.Button>
            <img src='/assets/icons/edit.svg' alt='' />
            Editar
          </C.Button>
          <C.Button>Selecionar outro</C.Button>
          <C.Button>Novo endereço</C.Button>
        </C.ButtonsShip>
      </C.Ship>
      <C.Title>Forma de Pagamento</C.Title>
      <C.Payment>
        <C.ItemPay className={payment.payForm === 'boleto' && 'selected'}>
          <C.PayCard onClick={() => dispatch(setPayForm('boleto'))}>
            {payment.payForm === 'boleto' ? (
              <img src='/assets/icons/boletoBlue.svg' alt='' />
            ) : (
              <img src='/assets/icons/boletoWhite.svg' alt='' />
            )}
            <C.Paragraph>Boleto bancário</C.Paragraph>
          </C.PayCard>
          <C.InfoPay className={payment.payForm === 'boleto' && 'view'}>
            <C.List>
              <li>2 dias úteis para efetuação do pagamento</li>
              <li>2 dias úteis para comprovação do pagamento</li>
              <C.Paragraph className='mini'>
                Caso seu boleto expire, o pedido será cancelado automaticamente
              </C.Paragraph>
            </C.List>
          </C.InfoPay>
        </C.ItemPay>
        <C.ItemPay className={payment.payForm === 'credit-card' && 'selected'}>
          <C.PayCard onClick={() => dispatch(setPayForm('credit-card'))}>
            {payment.payForm === 'credit-card' ? (
              <img src='/assets/icons/creditCardBlue.svg' alt='' />
            ) : (
              <img src='/assets/icons/creditCardWhite.svg' alt='' />
            )}
            <C.Paragraph>Cartão de crédito</C.Paragraph>
          </C.PayCard>
          {payment.payForm === 'credit-card' && <NewCard view={true} />}
        </C.ItemPay>
        <C.ItemPay className={payment.payForm === 'pix' && 'selected'}>
          <C.PayCard onClick={() => dispatch(setPayForm('pix'))}>
            {payment.payForm === 'pix' ? (
              <img src='/assets/icons/pixBlue.svg' alt='' />
            ) : (
              <img src='/assets/icons/pixWhite.svg' alt='' />
            )}
            <C.Paragraph>PIX</C.Paragraph>
          </C.PayCard>
          <C.InfoPay className={payment.payForm === 'pix' && 'view'}>
            <C.List>
              <li>Aprovação imediata</li>
              <li>1 Hora para efetuar o pagamento</li>
              <li>Expedição do pedido mais rápida</li>
            </C.List>
          </C.InfoPay>
        </C.ItemPay>
      </C.Payment>
      <PurchaseResume />
      <C.ButtonsPayment>
        <C.ButtonNavigation>Finalizar pagamento</C.ButtonNavigation>
        <C.ButtonNavigation className='transparent'>Voltar</C.ButtonNavigation>
      </C.ButtonsPayment>
      <Footer />
    </C.Container>
  );
};

export default Payment;
