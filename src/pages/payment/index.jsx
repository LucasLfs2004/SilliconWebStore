import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as C from './styles';

const Payment = () => {
  const [pay, setPay] = useState(0);

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
        <C.PayCard
          onClick={() => setPay(1)}
          className={pay === 1 && 'selected'}
        >
          {pay === 1 ? (
            <img src='/assets/icons/boletoBlue.svg' alt='' />
          ) : (
            <img src='/assets/icons/boletoWhite.svg' alt='' />
          )}
          <C.Paragraph>Boleto bancário</C.Paragraph>
        </C.PayCard>
        <C.PayCard
          onClick={() => setPay(2)}
          className={pay === 2 && 'selected'}
        >
          {pay === 2 ? (
            <img src='/assets/icons/creditCardBlue.svg' alt='' />
          ) : (
            <img src='/assets/icons/creditCardWhite.svg' alt='' />
          )}
          <C.Paragraph> Cartão de crédito</C.Paragraph>
        </C.PayCard>
        <C.PayCard
          onClick={() => setPay(3)}
          className={pay === 3 && 'selected'}
        >
          {pay === 3 ? (
            <img src='/assets/icons/pixBlue.svg' alt='' />
          ) : (
            <img src='/assets/icons/pixWhite.svg' alt='' />
          )}
          <C.Paragraph>PIX</C.Paragraph>
        </C.PayCard>
      </C.Payment>
      <Footer />
    </C.Container>
  );
};

export default Payment;
