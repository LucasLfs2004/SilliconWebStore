import { ParagraphShip } from '../../styles';
import * as C from './styles';

const ModalEditShip = ({
  visible,
  modalVisible,
  profile,
  principalShip,
  handlePrincipalShip,
}) => {
  return (
    <C.Modal visible={visible ? 'flex' : 'none'}>
      <C.Row>
        <C.Title>Editar Endereços de entrega</C.Title>
        <C.Btn className='add-btn' onClick={() => modalVisible(false)}>
          <img src='/assets/icons/closeIconCyan.svg' alt='' />
        </C.Btn>
        <C.Btn onClick={() => modalVisible(false)}>
          <img src='/assets/icons/closeIconCyan.svg' alt='' />
        </C.Btn>
      </C.Row>
      <C.ContentShip>
        {profile?.ship_info?.map((item, index) => (
          <C.ShipCard>
            <C.Row className='mt' mt={6}>
              <C.TextBorderBottom>{item.ship_name}</C.TextBorderBottom>
              <C.Btn>
                <img src='/assets/icons/editIconPurple.svg' alt='' />
              </C.Btn>
            </C.Row>
            <C.Row className='between'>
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
              {principalShip?.ship_id !== item?.ship_id && (
                <C.BtnPrincipal
                  onClick={() => handlePrincipalShip(item.ship_id)}
                >
                  Tornar endereço principal
                </C.BtnPrincipal>
              )}
            </C.Row>
          </C.ShipCard>
        ))}
      </C.ContentShip>
    </C.Modal>
  );
};

export default ModalEditShip;
