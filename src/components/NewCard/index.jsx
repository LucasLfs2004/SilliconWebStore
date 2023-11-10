import { useSelector } from 'react-redux';
import * as C from './styles';

const NewCard = (portions = false) => {
  const payment = useSelector(state => state.payment);
  return (
    <C.Display>
      <C.Row>
        <C.Input width={'100%'} placeholder='número do cartão' />
      </C.Row>
      <C.Row>
        <C.Input width={'100%'} placeholder='nome impresso no cartão' />
      </C.Row>
      <C.Row>
        <C.Input width={'20%'} placeholder='cvv' />
        <C.Input width={'30%'} placeholder='validade' />
        <C.Input width={'40%'} placeholder='data de nascimento' />
      </C.Row>
      <C.Row>
        <C.Input width={'100%'} placeholder='CPF/CNPJ do titular do cartão' />
      </C.Row>
      {portions && (
        <C.Row>
          <C.Select width={'100%'}>
            <option value='null'>Selecionar parcela</option>
            {payment.portions.map((item, key) => (
              <option value={item.often} key={key}>
                {item.often} x de{' '}
                {item.valuePortion.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </option>
            ))}
          </C.Select>
        </C.Row>
      )}
    </C.Display>
  );
};

export default NewCard;
