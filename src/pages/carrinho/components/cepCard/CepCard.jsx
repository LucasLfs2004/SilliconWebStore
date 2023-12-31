import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { ButtonPurple, InputDisplay, Title } from '../../styles';
import * as C from './styles';
import { useCepCard } from './useCepCard';

const CepCard = () => {
  const { cep, setCep, searchCep, payment } = useCepCard();

  return (
    <C.CepArea className='cep-area'>
      <C.RowBox className='mobile-end'>
        <Title className='only-web'>
          <img src='/assets/icons/locationIcon.svg' alt='' />
          <h1>Endereço de entrega</h1>
        </Title>
        <Link to={'/'}>Esqueci meu CEP</Link>
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
            <ButtonPurple onClick={() => searchCep()}>Calcular</ButtonPurple>
          </C.RowCep>

          <C.CepInfo>
            {payment.shipInfos.logradouro &&
              payment.shipInfos.bairro &&
              `${payment?.shipInfos?.logradouro} - ${payment?.shipInfos?.bairro}`}
          </C.CepInfo>
        </C.ColumnBox>
        <C.ShipValue>
          {payment.shipValue > 0 && (
            <>
              <C.Subtitle>
                <div>
                  <img src='/assets/icons/truckIcon.svg' alt='' />
                  <h2>Frete:</h2>
                </div>
                <h1>
                  {payment.shipValue.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </h1>
              </C.Subtitle>
              <C.TimeShip>5 dias úteis</C.TimeShip>
            </>
          )}
        </C.ShipValue>
      </C.RowBox>
    </C.CepArea>
  );
};

export default CepCard;
