import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewCard from '../../components/NewCard';
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
        <C.ItemPay className={pay === 1 && 'selected'}>
          <C.PayCard onClick={() => setPay(1)}>
            {pay === 1 ? (
              <img src='/assets/icons/boletoBlue.svg' alt='' />
            ) : (
              <img src='/assets/icons/boletoWhite.svg' alt='' />
            )}
            <C.Paragraph>Boleto bancário</C.Paragraph>
          </C.PayCard>
          <C.InfoPay className={pay === 1 && 'view'}>
            <C.List>
              <li>2 dias úteis para efetuação do pagamento</li>
              <li>2 dias úteis para comprovação do pagamento</li>
              <C.Paragraph className='mini'>
                Caso seu boleto expire, o pedido será cancelado automaticamente
              </C.Paragraph>
            </C.List>
          </C.InfoPay>
        </C.ItemPay>
        <C.ItemPay className={pay === 2 && 'selected'}>
          <C.PayCard onClick={() => setPay(2)}>
            {pay === 2 ? (
              <img src='/assets/icons/creditCardBlue.svg' alt='' />
            ) : (
              <img src='/assets/icons/creditCardWhite.svg' alt='' />
            )}
            <C.Paragraph>Cartão de crédito</C.Paragraph>
          </C.PayCard>
          {pay === 2 && <NewCard />}
        </C.ItemPay>
        <C.ItemPay className={pay === 3 && 'selected'}>
          <C.PayCard onClick={() => setPay(3)}>
            {pay === 3 ? (
              <img src='/assets/icons/pixBlue.svg' alt='' />
            ) : (
              <img src='/assets/icons/pixWhite.svg' alt='' />
            )}
            <C.Paragraph>PIX</C.Paragraph>
          </C.PayCard>
          <C.InfoPay className={pay === 3 && 'view'}>
            <C.List>
              <li>Aprovação imediata</li>
              <li>1 Hora para efetuar o pagamento</li>
              <li>Expedição do pedido mais rápida</li>
            </C.List>
          </C.InfoPay>
        </C.ItemPay>
      </C.Payment>
      <C.Resume>
        <C.Title className='blue no-padding'>Resumo</C.Title>
        <C.Paragraph>Método selecionado: </C.Paragraph>
        <C.Paragraph>Total a pagar: </C.Paragraph>
        {pay === 2 && <C.Span>Portions</C.Span>}
        <C.Box>
          <C.Paragraph>Endereço principal</C.Paragraph>
          <C.Span>Rua Vicente do Rêgo Monteiro, 137 - Parque Brasil</C.Span>
        </C.Box>
      </C.Resume>
      <Footer />
    </C.Container>
  );
};

export default Payment;
