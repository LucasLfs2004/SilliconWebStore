import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../SideBar';
import * as C from './styles';

const HeaderPage = ({ img_path, page_title }) => {
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
      <C.Page>
        <img src={img_path} alt='' />
        <h1>{page_title}</h1>
      </C.Page>
      <C.DivBlock>
        {/* <Link className='carrinho' to={'/carrinho'}>
          <img src='/assets/imgs/carrinho.svg' alt='' />
        </Link> */}
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </C.DivBlock>
    </C.Header>
  );
};

export default HeaderPage;
