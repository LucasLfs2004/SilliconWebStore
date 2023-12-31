import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { banners, bannersWeb } from '../../falseDatabase/banner';
import * as C from './styles';

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <C.Container>
      <Slider className='carousel-image-product' {...settings}>
        {banners &&
          window.screen.width < 1024 &&
          banners.map((image, index) => (
            <C.ItemBanner key={index} className='carousel-item'>
              <img src={image} alt={`Imagem ${index}`} />
            </C.ItemBanner>
          ))}
        {bannersWeb &&
          window.screen.width > 1024 &&
          bannersWeb.map((image, index) => (
            <C.ItemBanner key={index} className='carousel-item'>
              <img src={image} alt={`Imagem ${index}`} />
            </C.ItemBanner>
          ))}
      </Slider>
    </C.Container>
  );
};

export default BannerCarousel;
