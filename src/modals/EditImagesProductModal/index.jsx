import { BtnCloseTop, ContainerModal, ModalWhite } from '../../CommomStyles';
import * as C from './styles';

const EditImagesProductModal = ({ visible, closeModal, product }) => {
  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'48px'}>
      <ModalWhite width={'800px'} height={'fit-content'} padding={'24px 48px'}>
        <C.TopContent>
          <C.Title>Editar images</C.Title>
          <BtnCloseTop type='button' onClick={closeModal}>
            Cancelar
          </BtnCloseTop>
        </C.TopContent>
        <C.ProductName>{product?.name}</C.ProductName>
        <C.Box></C.Box>
      </ModalWhite>
    </ContainerModal>
  );
};

export default EditImagesProductModal;
