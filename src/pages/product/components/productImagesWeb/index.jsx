import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { api_path } from '../../../../constants/api_path';
import SimpleInfos from '../simpleInfos';
import * as C from './styles';

const ProductImagesWeb = ({ product }) => {
  const [img, setImg] = useState(
    product?.images?.length > 0
      ? `${api_path}/image/product/${product.images[0]}`
      : '',
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  console.log(product.images);

  return (
    <C.Content>
      {product?.images?.length > 4 ? (
        <C.Carousel>
          <Slider className='carousel-image-product' {...settings}>
            {product?.images?.length > 0 &&
              product.images.map((item, index) => (
                <C.ItemCard>
                  <C.PreviewCard
                    key={index}
                    className='carousel-item'
                    onClick={() => setImg(`${api_path}/image/product/${item}`)}
                  >
                    <img
                      src={`${api_path}/image/product/${item}`}
                      alt={`Imagem ${item}`}
                    />
                  </C.PreviewCard>
                </C.ItemCard>
              ))}
          </Slider>
        </C.Carousel>
      ) : (
        <C.Carousel className='no-carousel'>
          {product?.images?.length > 0 &&
            product.images.map((item, index) => (
              <C.ItemCard>
                <C.PreviewCard
                  key={index}
                  className='carousel-item'
                  onClick={() => setImg(`${api_path}/image/product/${item}`)}
                >
                  <img
                    src={`${api_path}/image/product/${item}`}
                    alt={`Imagem ${item}`}
                  />
                </C.PreviewCard>
              </C.ItemCard>
            ))}
        </C.Carousel>
      )}
      <C.ContentColumn>
        <SimpleInfos product={product} />
        <C.ProductImage>
          <img src={img} alt='' />
        </C.ProductImage>
        {/* <CarouselImageWeb items={product?.images} setImg={setImg} /> */}
      </C.ContentColumn>
    </C.Content>
  );
};

export default ProductImagesWeb;
