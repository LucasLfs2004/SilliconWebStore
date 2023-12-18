import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import { brands } from '../../falseDatabase/brands';
import { api_path } from '../../constants/api_path';
import * as C from './styles';
import { settings, useBrandCarousel } from './useBrandCarousel';

const BrandCarousel = () => {
  const { brands } = useBrandCarousel();

  return (
    <C.Container>
      <C.Carousel>
        <Slider className='carousel-image-product' {...settings}>
          {brands &&
            brands.map((item, index) => (
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
