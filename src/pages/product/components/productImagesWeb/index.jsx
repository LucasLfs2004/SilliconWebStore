import { useState } from 'react';
import { brands } from '../../../../falseDatabase/brands';
import SimpleInfos from '../simpleInfos';
import * as C from './styles';

const ProductImagesWeb = ({ product }) => {
  const productImgs = product.image;
  console.log(productImgs);
  const brandProduct = brands.find(item => item.id === product.brand_id);
  const [img, setImg] = useState(productImgs[0]);

  return (
    <C.Content>
      <C.ImagesColumn>
        {productImgs.length > 0 &&
          productImgs.map((item, key) => (
            <C.PreviewCard key={key} onClick={() => setImg(item)}>
              <img src={item} alt='' />
            </C.PreviewCard>
          ))}
      </C.ImagesColumn>

      <C.ContentColumn>
        <SimpleInfos brandProduct={brandProduct} product={product} />
        <C.ProductImage>
          <img src={img} alt='' />
        </C.ProductImage>
      </C.ContentColumn>
    </C.Content>
  );
};

export default ProductImagesWeb;
