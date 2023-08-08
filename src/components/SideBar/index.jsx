import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <C.Container>
      <C.Sidebar onClick={() => setShowMenu(!showMenu)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='13'
          viewBox='0 0 20 13'
          fill='none'
        >
          <line y1='0.5' x2='20' y2='0.5' stroke='#D1D9E6' />
          <line y1='4.5' x2='20' y2='4.5' stroke='#D1D9E6' />
          <line y1='8.5' x2='20' y2='8.5' stroke='#D1D9E6' />
          <line y1='12.5' x2='20' y2='12.5' stroke='#D1D9E6' />
        </svg>
      </C.Sidebar>
      <C.Menu show={showMenu.toString()}>
        <C.UserRow>
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.5064 12.9411C11.5815 12.9421 10.6771 12.6688 9.90753 12.1557C9.13799 11.6425 8.53794 10.9127 8.18328 10.0584C7.82863 9.20419 7.73532 8.26395 7.91515 7.35667C8.09498 6.44939 8.53987 5.61583 9.19354 4.96145C9.84721 4.30707 10.6803 3.86127 11.5874 3.68046C12.4945 3.49964 13.4348 3.59194 14.2894 3.94566C15.144 4.29939 15.8745 4.89865 16.3885 5.66763C16.9025 6.43661 17.1768 7.34076 17.1768 8.26569C17.1755 9.50441 16.6832 10.6921 15.8077 11.5685C14.9323 12.4448 13.7452 12.9385 12.5064 12.9411ZM12.5064 5.11661C11.8822 5.11561 11.2717 5.29987 10.7522 5.64607C10.2327 5.99227 9.82765 6.48483 9.5883 7.06138C9.34894 7.63793 9.28605 8.27255 9.40759 8.88486C9.52913 9.49718 9.82964 10.0597 10.2711 10.5011C10.7125 10.9425 11.275 11.243 11.8873 11.3646C12.4996 11.4861 13.1342 11.4232 13.7108 11.1838C14.2873 10.9445 14.7799 10.5394 15.1261 10.02C15.4723 9.50048 15.6565 8.88996 15.6555 8.26569C15.6555 7.43051 15.3238 6.62953 14.7332 6.03896C14.1426 5.44839 13.3416 5.11661 12.5064 5.11661Z'
              fill='#5CE1E6'
            />
            <path
              d='M12.5065 25C9.70733 24.9973 6.98987 24.0564 4.78844 22.3276C4.7062 22.2624 4.63815 22.181 4.58845 22.0886C4.53874 21.9962 4.50844 21.8946 4.49939 21.79C4.49939 21.7089 4.49939 21.6328 4.49939 21.5517C4.49939 20.4995 4.70663 19.4577 5.10928 18.4856C5.51193 17.5135 6.1021 16.6302 6.8461 15.8862C7.59009 15.1422 8.47335 14.5521 9.44543 14.1494C10.4175 13.7468 11.4594 13.5395 12.5115 13.5395C13.5637 13.5395 14.6056 13.7468 15.5777 14.1494C16.5497 14.5521 17.433 15.1422 18.177 15.8862C18.921 16.6302 19.5112 17.5135 19.9138 18.4856C20.3165 19.4577 20.5237 20.4995 20.5237 21.5517C20.5237 21.6328 20.5237 21.7089 20.5237 21.79C20.5147 21.8946 20.4843 21.9962 20.4346 22.0886C20.3849 22.181 20.3169 22.2624 20.2347 22.3276C18.0305 24.0585 15.3091 24.9996 12.5065 25ZM6.02068 21.3539C7.90155 22.734 10.1736 23.4781 12.5065 23.4781C14.8393 23.4781 17.1114 22.734 18.9923 21.3539C18.926 19.6782 18.2137 18.0931 17.0046 16.9309C15.7955 15.7687 14.1835 15.1196 12.5065 15.1196C10.8294 15.1196 9.21743 15.7687 8.00835 16.9309C6.79928 18.0931 6.08696 19.6782 6.02068 21.3539Z'
              fill='#5CE1E6'
            />
            <path
              d='M12.5065 25C9.55026 25.0015 6.68915 23.9552 4.43129 22.047C2.17343 20.1387 0.664963 17.492 0.173776 14.5769C-0.317411 11.6617 0.24048 8.66685 1.74837 6.1241C3.25626 3.58135 5.61655 1.65531 8.41006 0.688042C11.2036 -0.279226 14.2495 -0.225116 17.0069 0.840761C19.7643 1.90664 22.0547 3.91529 23.4713 6.51C24.8879 9.1047 25.3391 12.1175 24.7447 15.0134C24.1503 17.9092 22.5487 20.5007 20.2245 22.3275C18.0231 24.0564 15.3056 24.9973 12.5065 25ZM12.5065 1.53144C10.2253 1.53154 8.00097 2.24287 6.14304 3.5664C4.2851 4.88994 2.88604 6.75981 2.14062 8.91574C1.3952 11.0717 1.3405 13.4064 1.98414 15.5948C2.62779 17.7833 3.93774 19.7166 5.73166 21.1257C7.3501 22.3959 9.29301 23.1855 11.3387 23.4044C13.3843 23.6234 15.4503 23.2628 17.3009 22.364C19.1515 21.4651 20.7121 20.0641 21.8047 18.3209C22.8973 16.5777 23.4779 14.5624 23.4801 12.505C23.4761 9.5959 22.3186 6.80706 20.2616 4.74998C18.2045 2.6929 15.4156 1.53546 12.5065 1.53144Z'
              fill='#02EDDF'
            />
          </svg>

          <C.ActionUser>
            <Link to={'/login'}>Entrar</Link>
            <p>ou</p>
            <Link to={'/create-account'}>Criar conta</Link>
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
      </C.Menu>
    </C.Container>
  );
};

export default Menu;
