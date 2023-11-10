import { Link } from 'react-router-dom';
import * as C from './styles';

export const EmptyCart = () => {
  return (
    <C.EmptyCart>
      <h3>Nenhum item foi adicionado ao seu carrinho :(</h3>
      <p>Que tal olhar outros produtos?</p>
      <Link to={'/'}>
        <img src='/assets/icons/carrinho.svg' alt='' />
        Ir às compras
      </Link>
    </C.EmptyCart>
  );
};

export default EmptyCart;
