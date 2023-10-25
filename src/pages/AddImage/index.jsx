import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '../../components/Header';
import { uploadImages } from '../../services/Requests';
import * as C from './styles';

const AddImage = () => {
  // console.log(brand);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const numberOfItens = 1;
  const [itemWidth, setItemWidth] = useState(0);
  const widthAreaRef = useRef(null);
  const widthScroll = useRef(null);

  const handleFileChange = event => {
    const newfile = Array.from(event.target.files);
    setSelectedFiles(files => [...files, ...newfile]);

    const newImages = newfile.map(file => URL.createObjectURL(file));
    setPreviewImages(prevImages => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    setItemWidth(widthAreaRef?.current?.offsetWidth / numberOfItens);
  }, []);

  console.log(selectedFiles);

  const handleUploadImages = e => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('files', file, file.name);
    });

    console.log(formData);

    const retorno = uploadImages(formData);
    console.log(retorno);
  };

  return (
    <C.Container>
      <Header />
      <C.Section>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <C.Title className='title'>Cadastrar produto</C.Title>
        </div>
        <C.Area ref={widthAreaRef}>
          <C.Form onSubmit={handleUploadImages} width={itemWidth}>
            <C.InputImg>
              <p>Adicionar imagens</p>
              <input
                type='file'
                id='img-input'
                src=''
                alt=''
                accept='image/png, image/jpeg'
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor='img-input'>
                <img src='/assets/imgs/vgathin.svg' alt='vga' />
                <p>adicionar imagens</p>
              </label>

              <C.Carousel>
                <Slider className='carousel-image-product' {...settings}>
                  {previewImages &&
                    previewImages.map((image, index) => (
                      <C.ItemDiv key={index} className='carousel-item'>
                        <img src={image} alt={`Imagem ${index}`} />
                      </C.ItemDiv>
                    ))}
                </Slider>
              </C.Carousel>
            </C.InputImg>
            <button type='submit'>Submit</button>
          </C.Form>
        </C.Area>
        <C.Message>
          <Link to={'/'}>cancelar</Link>
        </C.Message>
      </C.Section>
      <C.Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </C.Footer>
    </C.Container>
  );
};

export default AddImage;
