import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { ButtonPurple, InputDisplay, Title } from '../../styles';
import * as C from './styles';
import { useCepCard } from './useCepCard';

const CepCard = () => {
  const { cep, setCep, searchCep, payment, calcShip, cart } = useCepCard();
  console.log(cart);

  return (
    <C.CepArea className='cep-area'>
      <C.RowBox className='mobile-end'>
        <Title className='only-web'>
          <img src='/assets/icons/locationIcon.svg' alt='' />
          <h1>Endereço de entrega</h1>
        </Title>
        <Link
          to={'https://buscacepinter.correios.com.br/app/endereco/index.php?t'}
        >
          Esqueci meu CEP
        </Link>
      </C.RowBox>
      <C.RowBox>
        <C.ColumnBox>
          <C.RowCep>
            <InputDisplay>
              <p>Insira seu CEP:</p>
              <InputMask
                mask={'99999-999'}
                placeholder=''
                value={cep}
                onChange={e => setCep(e.target.value)}
                className='center'
              />
            </InputDisplay>
            <ButtonPurple onClick={() => calcShip()}>Calcular</ButtonPurple>
          </C.RowCep>

          <C.CepInfo>{cart.ship_street && cart.ship_street}</C.CepInfo>
        </C.ColumnBox>
        <C.ShipValue>
          <>
            <C.Subtitle>
              <div>
                <img src='/assets/icons/truckIcon.svg' alt='' />
                <h2>Frete:</h2>
              </div>
              <h1>
                {cart.ship_value > 0
                  ? cart.ship_value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })
                  : 'Grátis'}
              </h1>
            </C.Subtitle>
            <C.TimeShip>{cart.ship_deadline} dias úteis</C.TimeShip>
          </>
        </C.ShipValue>
      </C.RowBox>
    </C.CepArea>
  );
};

export default CepCard;
