import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearUser } from '../../store/actions/userActions';
// import { clearUser } from '../../store/actions/userActions';
import * as C from './styles';

const Menu = () => {
  const user = useSelector(state => state.user);
  console.log('user', user);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(clearUser());
    console.log('logout efetuado');
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
            {user.access_token ? (
              <C.LoggedRow>
                <C.UserInfos>
                  <p className='nome'>{user.data.name}</p>
                  <p className='email'>{user.data.email}</p>
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

        {user.isSeller && (
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
