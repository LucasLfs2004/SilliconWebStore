// import { products } from '../../falseDatabase/products';
import CardProduct from '../CardProduct';
import * as C from './styles';

const ProductArea = ({ products }) => {
  console.log('products', products);
  return (
    <C.Container>
      {products?.length > 0 &&
        products.map((item, index) => <CardProduct key={index} item={item} />)}
    </C.Container>
  );
};

export default ProductArea;
