import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BtnCloseTop, ContainerModal, ModalWhite } from '../../CommomStyles';
import { api_path } from '../../constants/api_path';
import * as C from './styles';
import UseEditImages from './useEditImages';

const EditImagesProductModal = ({ visible, closeModal, product, refetch }) => {
  const {
    settings,
    previewImages,
    setPreviewImages,
    removeImage,
    handleFileChange,
    selectedFiles,
    handleEditImages,
    changeOrder,
    cancelEdit,
  } = UseEditImages(product, closeModal, refetch);

  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'48px'}>
      <ModalWhite width={'800px'} height={'fit-content'} padding={'24px 48px'}>
        <C.TopContent>
          <C.Title>Editar images</C.Title>
          <BtnCloseTop type='button' onClick={closeModal}>
            Cancelar
          </BtnCloseTop>
        </C.TopContent>
        <C.InfoProduct>
          <C.ImgProduct>
            <img
              src={`${api_path}/image/product/${product?.images[0]}`}
              alt=''
            />
          </C.ImgProduct>
          <C.NameProduct>{product?.name}</C.NameProduct>
        </C.InfoProduct>
        <C.InputImg>
          <p>Adicionar imagens</p>
          <input
            type='file'
            id='img-input'
            src=''
            alt=''
            value={''}
            accept='image/png, image/jpeg'
            multiple
            onChange={handleFileChange}
          />
          <label htmlFor='img-input'>
            <img src='/assets/imgs/vgathin.svg' alt='vga' />
            <p>adicionar imagens</p>
          </label>
        </C.InputImg>
        <C.Carousel>
          <Slider className='carousel-image-product' {...settings}>
            {previewImages &&
              previewImages.map((image, index) => (
                <C.ItemDiv
                  key={`btn-arrow-carousel-${index}`}
                  className='carousel-item'
                >
                  <C.BtnActions>
                    <C.BtnArrow
                      onClick={() => changeOrder(index, -1)}
                      disabled={index === 0 ? true : false}
                    >
                      <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
                    </C.BtnArrow>
                    <C.BtnDelete
                      onClick={() => removeImage(image.file, image.id)}
                    >
                      <img src='/assets/icons/trash.svg' alt='' />
                    </C.BtnDelete>
                    <C.BtnArrow
                      onClick={() => changeOrder(index, 1)}
                      disabled={
                        index + 1 === previewImages.length ? true : false
                      }
                    >
                      <img src='/assets/icons/arrowRightIcon.svg' alt='' />
                    </C.BtnArrow>
                  </C.BtnActions>
                  <img
                    src={
                      String(image.file).includes('blob:http:')
                        ? image.file
                        : `${api_path}/image/product/${image.file}`
                    }
                    alt={`Imagem ${index}`}
                  />
                </C.ItemDiv>
              ))}
          </Slider>
        </C.Carousel>

        <C.BtnArea>
          <C.BtnConfirm
            type='button'
            className='red'
            onClick={() => {
              cancelEdit();
              closeModal();
            }}
          >
            Cancelar
          </C.BtnConfirm>
          <C.BtnConfirm onClick={() => handleEditImages()}>
            Confirmar
          </C.BtnConfirm>
        </C.BtnArea>
      </ModalWhite>
    </ContainerModal>
  );
};

export default EditImagesProductModal;
