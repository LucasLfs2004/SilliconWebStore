import { useParams } from 'react-router';
import Stars from '../../../../components/Stars';
import { products } from '../../../../falseDatabase/products';
import { seller } from '../../../../falseDatabase/seller';
import CarouselProductMobile from '../CarouselProductMobile';
import ProductImagesWeb from '../productImagesWeb';
import * as C from './styles';

const ProductPresentation = () => {
  const id = parseInt(useParams().id);
  const product = products.find(item => item.id === id);
  const sellerName = seller.find(item => item.id === product.seller_id).name;
  return (
    <C.DarkArea>
      <C.Rating>
        <Stars rating={product.rating} />
        <C.RatingValue>
          {product.rating} ({product.amount_rating})
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
        Vendido e entregue por <span>{sellerName}</span>
      </C.Seller>
    </C.DarkArea>
  );
};

export default ProductPresentation;
