import { Paragraph, Subtitle } from '../../styles';
import * as C from './styles';

const ShipComponent = () => {
  return (
    <C.Ship>
      <C.InfosShip>
        <C.Line>
          <C.Icon src='/assets/icons/truck.svg' />
          <Subtitle>Endereço principal</Subtitle>
        </C.Line>
        <Paragraph className='spaced'>
          Rua Vicente do Rêgo Monteiro, 137
        </Paragraph>
        <Paragraph className='spaced'>Parque Brasil - 04843-060</Paragraph>
        <Paragraph className='spaced'>Lucas Ferreira Silva</Paragraph>
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
