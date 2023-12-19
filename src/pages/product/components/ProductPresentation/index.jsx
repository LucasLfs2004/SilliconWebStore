import Stars from '../../../../components/Stars';
import CarouselProductMobile from '../CarouselProductMobile';
import ProductImagesWeb from '../productImagesWeb';
import * as C from './styles';

const ProductPresentation = ({ product }) => {
  // const id = parseInt(useParams().id);
  // const product = products.find(item => item.id === id);
  // const sellerName = seller.find(item => item.id === product.seller_id).name;
  return (
    <C.DarkArea>
      <C.Rating>
        <Stars rating={product?.rating?.rating} />
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
