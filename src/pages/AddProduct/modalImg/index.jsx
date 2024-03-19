import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
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
    console.log('useEffect');
    setPreviewImages(images);
    setSelectedFiles(files);
  }, [images, files]);

  const changeOrder = (position, direction) => {
    console.log('initializeChangeOrder: ', {
      position: position,
      direction: direction,
      positionPlusDirection: position + direction,
    });
    // previewImages
    const image = previewImages[position];
    let array = [...previewImages];
    array[position] = previewImages[position + direction];
    array[position + direction] = image;
    setPreviewImages(array);

    const file = selectedFiles[position];
    console.log('file: ', file, '\nposition: ', position);
    let arrayFile = [...selectedFiles];
    arrayFile[position] = selectedFiles[position + direction];
    arrayFile[position + direction] = file;
    console.log('files after update', arrayFile);
    setSelectedFiles(arrayFile);
  };

  return (
    <C.container visible={visible ? 'flex' : 'none'}>
      <C.Modal>
        <C.Title>Editar imagens</C.Title>

        <C.Carousel>
          {previewImages &&
            previewImages.map((image, index) => (
              <C.ItemDiv key={index} className='carousel-item'>
                <img src={image} alt={`Imagem ${index}`} />
                <div>
                  <C.BtnArrow
                    onClick={() => changeOrder(index, -1)}
                    disabled={index === 0 ? true : false}
                  >
                    <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
                  </C.BtnArrow>
                  <C.BtnArrow
                    onClick={() => changeOrder(index, 1)}
                    disabled={index === previewImages.length - 1 ? true : false}
                  >
                    <img src='/assets/icons/arrowRightIcon.svg' alt='' />
                  </C.BtnArrow>
                </div>
              </C.ItemDiv>
            ))}
        </C.Carousel>
        <C.Box>
          <C.BtnModal type='button' onClick={closeModal}>
            <p>Cancelar</p>
          </C.BtnModal>
          <C.BtnModal
            type='button'
            onClick={() => {
              console.log('selected files: ', selectedFiles);
              setImages(previewImages);
              setFiles(selectedFiles);
              setModalVisible(false);
            }}
          >
            <p>Confirmar</p>
          </C.BtnModal>
        </C.Box>
      </C.Modal>
    </C.container>
  );
};

export default ModalImage;
