import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ContainerModal, ModalWhite } from '../../CommomStyles';
import { api_path } from '../../constants/api_path';
import * as C from './styles';

const DescriptionModal = ({
  product,
  visible,
  closeModal,
  submit,
  editor,
  setEditor,
}) => {
  // const [editor, setEditor] = useState(EditorState.createEmpty());

  console.log(editor);
  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'64px'}>
      <ModalWhite width={'1104px'} height={'min-content'} padding={'32px 48px'}>
        <C.Box>
          <C.Title>Descrição do produto</C.Title>
          <C.BtnClose type='button' onClick={closeModal}>
            Cancelar
          </C.BtnClose>
        </C.Box>
        {product && (
          <C.InfoProduct>
            <C.ImageProduct>
              <img
                src={`${api_path}/image/product/${product?.images[0]}`}
                alt=''
              />
            </C.ImageProduct>
            <C.NameProduct>{product?.name}</C.NameProduct>
          </C.InfoProduct>
        )}
        <C.EditorCard>
          <ReactQuill theme='snow' value={editor} onChange={setEditor} />
        </C.EditorCard>
        <C.BtnConfirmArea>
          <C.BtnConfirm
            type='button'
            onClick={() =>
              submit({ description: editor, id_product: product?.id })
            }
          >
            Confirmar
          </C.BtnConfirm>
        </C.BtnConfirmArea>
      </ModalWhite>
    </ContainerModal>
  );
};

export default DescriptionModal;
