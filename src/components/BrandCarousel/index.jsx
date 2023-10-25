import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { brands } from '../../falseDatabase/brands';
import * as C from './styles';

const BrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <C.Container>
      <C.Carousel>
        <Slider className='carousel-image-product' {...settings}>
          {brands &&
            brands.map((item, index) => (
              <C.ItemBrand
                key={index}
                className='carousel-item'
                href={item.href}
              >
                <img src={item.img_path} alt={`Imagem ${item.brand}`} />
              </C.ItemBrand>
            ))}
        </Slider>
      </C.Carousel>
    </C.Container>
  );
};

export default BrandCarousel;
