import * as C from './styles';

const NewCard = props => {
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
      {props.portions && (
        <C.Row>
          <C.Select></C.Select>
        </C.Row>
      )}
    </C.Display>
  );
};

export default NewCard;
