import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ContainerModal, ModalWhite } from '../../../CommomStyles';
import * as C from './styles';

export const ModalImage = ({
  visible,
  closeModal,
  images,
  files,
  setFiles,
  setImages,
  setModalVisible,
}) => {
  const [previewImages, setPreviewImages] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState(null);

  useEffect(() => {
    setPreviewImages(images);
    setSelectedFiles(files);
  }, [images, files]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: previewImages?.length >= 4 ? 4 : previewImages?.length,
    slidesToScroll: 1,
  };

  const changeOrder = (position, direction) => {
    const image = previewImages[position];
    let array = [...previewImages];
    array[position] = previewImages[position + direction];
    array[position + direction] = image;
    setPreviewImages(array);

    const file = selectedFiles[position];

    let arrayFile = [...selectedFiles];
    arrayFile[position] = selectedFiles[position + direction];
    arrayFile[position + direction] = file;

    setSelectedFiles(arrayFile);
  };

  const removeImage = position => {
    setPreviewImages(
      previewImages.filter(element => element !== previewImages[position]),
    );
    setSelectedFiles(
      selectedFiles.filter(element => element !== selectedFiles[position]),
    );
  };

  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'48px'}>
      <ModalWhite width={'800px'} height={'fit-content'} padding={'24px 48px'}>
        <C.Title>Editar imagens</C.Title>

        <C.Carousel>
          <Slider className='carousel-image-product' {...settings}>
            {previewImages &&
              previewImages?.map((image, index) => (
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
                    <C.BtnDelete onClick={() => removeImage(index)}>
                      <img src='/assets/icons/trash.svg' alt='' />
                    </C.BtnDelete>
                    <C.BtnArrow
                      onClick={() => changeOrder(index, 1)}
                      disabled={
                        index === previewImages.length - 1 ? true : false
                      }
                    >
                      <img src='/assets/icons/arrowRightIcon.svg' alt='' />
                    </C.BtnArrow>
                  </C.BtnActions>
                  <div className='img'>
                    <img src={image} alt={`Imagem ${index}`} />
                  </div>
                </C.ItemDiv>
              ))}
          </Slider>
        </C.Carousel>
        <C.Box>
          <C.BtnModal type='button' onClick={closeModal}>
            <p>Cancelar</p>
          </C.BtnModal>
          <C.BtnModal
            type='button'
            onClick={() => {
              setImages(previewImages);
              setFiles(selectedFiles);
              setModalVisible(false);
            }}
          >
            <p>Confirmar</p>
          </C.BtnModal>
        </C.Box>
      </ModalWhite>
    </ContainerModal>
  );
};

export default ModalImage;
