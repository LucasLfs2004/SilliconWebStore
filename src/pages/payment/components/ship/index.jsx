import { Paragraph, Subtitle } from '../../styles';
import usePayment from '../../usePayment';
import * as C from './styles';

const ShipComponent = () => {
  const { shipSelected } = usePayment();

  return (
    <C.Ship>
      <C.InfosShip>
        <C.Line>
          <C.Icon src='/assets/icons/truck.svg' />
          <Subtitle>Endereço principal</Subtitle>
        </C.Line>
        <Paragraph className='spaced'>
          {shipSelected?.street}, {shipSelected?.ship_number}
        </Paragraph>
        <Paragraph className='spaced'>
          {shipSelected?.district} - {shipSelected?.cep}
        </Paragraph>
        <Paragraph className='spaced'>{shipSelected?.receiver_name}</Paragraph>
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
  );
};

export default ShipComponent;
