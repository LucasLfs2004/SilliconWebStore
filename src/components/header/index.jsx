import Menu from '../SideBar';
import * as C from './styles';

const Header = () => {
  return (
    <C.Header>
      <C.DivBlock>
        <C.Logo>
          <h1>SILLICON</h1>
          <img src='/assets/imgs/vga-azul.svg' alt='' />
        </C.Logo>
      </C.DivBlock>
      <C.Pesquisa>
        <input type='text' />
        <button>
          <img src='/assets/imgs/searchIcon.svg' alt='' />
        </button>
      </C.Pesquisa>
      <C.DivBlock>
        <C.Carrinho>
          <img src='/assets/imgs/carrinho.svg' alt='' />
        </C.Carrinho>
        <Menu />
      </C.DivBlock>
    </C.Header>
  );
};

export default Header;
