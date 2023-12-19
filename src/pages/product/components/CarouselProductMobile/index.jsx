import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { api_path } from '../../../../constants/api_path';
import * as C from './styles';

const CarouselProductMobile = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <C.CarouselImages>
      <Slider className='carousel-image-product' {...settings}>
        {product &&
          product?.images?.map((img_path, index) => (
            <C.ImgProduct key={index}>
              <img
                src={`${api_path}/image/product/${img_path}`}
                alt={`Imagem ${product.name} - ${index}`}
              />
            </C.ImgProduct>
          ))}
      </Slider>
    </C.CarouselImages>
  );
};

export default CarouselProductMobile;
