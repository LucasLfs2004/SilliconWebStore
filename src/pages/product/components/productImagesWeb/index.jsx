import { useState } from 'react';
import { api_path } from '../../../../constants/api_path';
import SimpleInfos from '../simpleInfos';
import * as C from './styles';

const ProductImagesWeb = ({ product }) => {
  const [img, setImg] = useState(
    product?.images?.length > 0
      ? `${api_path}/image/product/${product.images[0]}`
      : '',
  );
  // console.log('product on productImagesWeb', product);

  return (
    <C.Content>
      <C.ImagesColumn className='images-carousel-web'>
        {product.images.length > 0 &&
          product.images.map((item, key) => (
            <C.PreviewCard
              key={key}
              onClick={() => setImg(`${api_path}/image/product/${item}`)}
            >
              <img src={`${api_path}/image/product/${item}`} alt='' />
            </C.PreviewCard>
          ))}
      </C.ImagesColumn>

      <C.ContentColumn>
        <SimpleInfos product={product} />
        <C.ProductImage>
          <img src={img} alt='' />
        </C.ProductImage>
      </C.ContentColumn>
    </C.Content>
  );
};

export default ProductImagesWeb;
