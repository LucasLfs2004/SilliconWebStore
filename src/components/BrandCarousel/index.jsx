import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import { brands } from '../../falseDatabase/brands';
import { api_path } from '../../constants/api_path';
import * as C from './styles';
import { useBrandCarousel } from './useBrandCarousel';

const BrandCarousel = () => {
  const { brands } = useBrandCarousel();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.screen.width > 1024 ? 6 : 3,
    slidesToScroll: window.screen.width > 1024 ? 6 : 3,
  };

  return (
    <C.Container>
      <C.Carousel>
        <Slider className='carousel-image-product' {...settings}>
          {brands?.length > 0 &&
            brands?.map((item, index) => (
              <C.ItemBrand
                key={index}
                className='carousel-item'
                href={`/brand/${item.id}`}
              >
                <img
                  src={`${api_path}/image/brand/${item.brand_logo}`}
                  alt={`Imagem ${item.brand}`}
                />
              </C.ItemBrand>
            ))}
        </Slider>
      </C.Carousel>
    </C.Container>
  );
};

export default BrandCarousel;
