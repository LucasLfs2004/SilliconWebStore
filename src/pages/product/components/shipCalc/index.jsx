import InputMask from 'react-input-mask';
import { parseRealCurrency } from '../../../../functions/realCurrency';
import * as C from './styles';
import useCep from './useCep';

const ShipCalcCard = () => {
  const { cep, setCep, shipValue, calcShip } = useCep();

  return (
    <C.Card>
      <C.RowCep>
        <p>Insira seu CEP:</p>
        <InputMask
          mask={'99999-999'}
          type='text'
          placeholder='00000-000'
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <C.ButtonCep onClick={async () => await calcShip()}>
          Calcular
        </C.ButtonCep>
        <a
          target='_blank'
          href='https://buscacepinter.correios.com.br/'
          rel='noreferrer'
        >
          Esqueci meu CEP
        </a>
      </C.RowCep>
      <C.CepLocation>
        {shipValue?.cep?.logradouro &&
          shipValue?.cep?.bairro &&
          `${shipValue.cep.logradouro} - ${shipValue.cep.bairro}`}
        <br />
        {shipValue?.cep?.localidade &&
          shipValue?.cep?.uf &&
          `${shipValue.cep.localidade} - ${shipValue.cep.uf}`}
        <br />
        {shipValue?.value?.value && shipValue?.value?.deadline && (
          <span>
            {shipValue?.value?.value > 0
              ? parseRealCurrency(shipValue.value.value)
              : 'Grátis'}
            {' - '}
            {shipValue?.value?.deadline &&
              ` ${shipValue.value.deadline} dias úteis`}
          </span>
        )}
      </C.CepLocation>
    </C.Card>
  );
};

export default ShipCalcCard;
