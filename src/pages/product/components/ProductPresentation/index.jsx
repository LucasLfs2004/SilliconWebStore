import Stars from '../../../../components/Stars';
import CarouselProductMobile from '../CarouselProductMobile';
import ProductImagesWeb from '../productImagesWeb';
import * as C from './styles';

const ProductPresentation = ({ product }) => {
  return (
    <C.DarkArea>
      <C.Rating>
        <Stars rating={product?.rating?.rating_value} />
        <C.RatingValue>
          {product?.rating?.rating} ({product?.rating?.amount_rating})
        </C.RatingValue>
      </C.Rating>
      <C.ProductImages>
        {window.screen.width < 1024 ? (
          <CarouselProductMobile product={product} />
        ) : (
          <ProductImagesWeb product={product}></ProductImagesWeb>
        )}
      </C.ProductImages>
      <C.Seller>
        Vendido e entregue por <span>{product.store_name}</span>
      </C.Seller>
    </C.DarkArea>
  );
};

export default ProductPresentation;
