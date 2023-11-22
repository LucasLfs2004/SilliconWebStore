import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Menu from '../SideBar';
import * as C from './styles';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <C.Header>
      <C.DivBlock>
        <C.Logo>
          <Link to={'/'}>
            <h1>SILLICON</h1>
            <img src='/assets/imgs/vga-azul.svg' alt='' />
          </Link>
        </C.Logo>
      </C.DivBlock>
      <Search />
      <C.DivBlock>
        <Link className='carrinho' to={'/carrinho'}>
          <img src='/assets/imgs/carrinho.svg' alt='' />
        </Link>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </C.DivBlock>
    </C.Header>
  );
};

export default Header;
