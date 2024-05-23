import * as C from './styles';
import { ParagraphShip } from './styles';

const ModalSelectShip = ({ visible, profile, closeModal, selectShip }) => {
  return (
    <C.Container>
      <C.Modal visible={visible ? 'flex' : 'none'}>
        <C.Row className='padding-horizontal' paddinghorizontal={20}>
          <C.Title>Editar Endereços de entrega</C.Title>
          <C.Row>
            <C.Btn onClick={() => closeModal()}>
              <img src='/assets/icons/closeIconCyan.svg' alt='' />
            </C.Btn>
          </C.Row>
        </C.Row>
        <C.ContentShip>
          {profile?.ship_info?.map((item, index) => (
            <C.ShipCard key={index}>
              <C.Row className='mt' mt={6}>
                <C.TextBorderBottom>{item.ship_name}</C.TextBorderBottom>
              </C.Row>
              <C.Row className='between max-width' maxwidth={400}>
                <ParagraphShip>{item.receiver_name}</ParagraphShip>
                <ParagraphShip>{item.cep}</ParagraphShip>
              </C.Row>
              <C.Row>
                <ParagraphShip>
                  {item.street}, {item.ship_number}
                </ParagraphShip>
              </C.Row>
              <C.Row>
                <ParagraphShip>{item.district}</ParagraphShip>
              </C.Row>
              <C.Row>
                <C.BtnPrincipal onClick={() => selectShip(item)}>
                  Selecionar endereço
                </C.BtnPrincipal>
              </C.Row>
            </C.ShipCard>
          ))}
        </C.ContentShip>
      </C.Modal>
    </C.Container>
  );
};

export default ModalSelectShip;
