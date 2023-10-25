import { products } from '../../falseDatabase/products';
import CardProduct from '../CardProduct';
import * as C from './styles';

const ProductArea = () => {
  return (
    <C.Container>
      {products && products.map((item, index) => <CardProduct item={item} />)}
    </C.Container>
  );
};

export default ProductArea;
