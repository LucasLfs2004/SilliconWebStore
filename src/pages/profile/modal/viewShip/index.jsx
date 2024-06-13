import { ParagraphShip } from '../../styles';
import * as C from './styles';

const ModalViewShip = ({
  visible,
  modalVisible,
  profile,
  principalShip,
  handlePrincipalShip,
  addShip,
  editShip,
  deleteShip,
}) => {
  return (
    <C.Container>
      <C.Modal visible={visible ? 'flex' : 'none'}>
        <C.Row className='padding-horizontal' paddinghorizontal={20}>
          <C.Title>Editar Endereços de entrega</C.Title>
          <C.Row>
            <C.Btn className='add-btn' onClick={addShip}>
              <img src='/assets/icons/closeIconCyan.svg' alt='' />
            </C.Btn>
            <C.Btn onClick={() => modalVisible(false)}>
              <img src='/assets/icons/closeIconCyan.svg' alt='' />
            </C.Btn>
          </C.Row>
        </C.Row>
        <C.ContentShip>
          {profile?.ship_info?.map((item, index) => (
            <C.ShipCard key={index}>
              <C.Row className='mt' mt={6}>
                <C.TextBorderBottom>{item.ship_name}</C.TextBorderBottom>
                <C.Row>
                  <C.Btn
                    className='trash'
                    onClick={() => deleteShip(item.ship_id)}
                  >
                    <img src='/assets/icons/trash.svg' alt='' />
                  </C.Btn>
                  <C.Btn onClick={() => editShip(item)}>
                    <img src='/assets/icons/editIconPurple.svg' alt='' />
                  </C.Btn>
                </C.Row>
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
    </C.Container>
  );
};

export default ModalViewShip;
