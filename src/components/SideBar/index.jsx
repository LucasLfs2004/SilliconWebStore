import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const Menu = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('user')),
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem('user');
    setUserInfo(null);
    // console.log(localStorage);
  };

  return (
    <C.Container>
      <C.Sidebar onClick={() => setShowMenu(!showMenu)}>
        <img src='/assets/icons/menuIcon.svg' alt='' />
      </C.Sidebar>
      <C.Menu show={showMenu.toString()}>
        <C.UserRow>
          <img src='/assets/icons/userIcon.svg' alt='' />

          <C.ActionUser>
            {JSON.parse(localStorage.getItem('user')) &&
            JSON.parse(localStorage.getItem('user')) !== null &&
            JSON.parse(localStorage.getItem('user')) !== undefined ? (
              <C.LoggedRow>
                <C.UserInfos>
                  <p className='nome'>{userInfo.name}</p>
                  <p className='email'>{userInfo.email}</p>
                </C.UserInfos>
                <button onClick={e => handleLogout(e)}>Sair</button>
              </C.LoggedRow>
            ) : (
              <>
                <Link to={'/login'}>Entrar</Link>
                <p>ou</p>
                <Link to={'/create-account'}>Criar conta</Link>
              </>
            )}
          </C.ActionUser>
        </C.UserRow>
        <C.List>
          <C.Item>
            <Link>Lançamentos</Link>
          </C.Item>
          <C.Item>
            <Link>Ofertas do dia</Link>
          </C.Item>
          <C.Item>
            <Link>Departamentos</Link>
          </C.Item>
          <C.Item>
            <Link>Mais vendidos</Link>
          </C.Item>
        </C.List>

        {JSON.parse(localStorage.getItem('user'))?.is_seller && (
          <C.List>
            <C.Item>
              <Link to={'/add-product'}>Adicionar produto</Link>
            </C.Item>
          </C.List>
        )}
      </C.Menu>
    </C.Container>
  );
};

export default Menu;
