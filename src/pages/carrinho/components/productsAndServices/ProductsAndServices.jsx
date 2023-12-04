import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../../store/actions/cartActions';
import ItemCart from '../itemCart/ItemCart';
import * as C from './styles';

const ProductsAndServices = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <C.CartComponent>
      <C.Top>
        <C.Title>Produtos e Serviços</C.Title>
        <C.BtnDelete onClick={() => dispatch(clearCart())}>
          <img src='/assets/icons/trash.svg' alt='' />
          Remover Todos
        </C.BtnDelete>
      </C.Top>
      <C.SellFrom>
        <p>
          Vendido e Entregue por <strong>Sillicon Store</strong>
        </p>
      </C.SellFrom>
      <C.CartArea>
        {cart &&
          cart.map((item, index) => <ItemCart key={index} item={item} />)}
      </C.CartArea>
    </C.CartComponent>
  );
};

export default ProductsAndServices;
