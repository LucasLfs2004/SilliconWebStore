import { Link } from "react-router-dom";
import Header from "../../components/header";
import * as C from './styles';

export const SideMenu = () => {
    return (
        <C.Container>
            <Header/>
            <C.UserArea>
                <img src="/assets/imgs/userIcon.svg" alt="" />
                <div>
                    <Link to='login'>
                        Login
                    </Link>
                    <br />
                    <span>ou</span>
                    <br />
                    <Link>
                    Criar conta
                    </Link>
                </div>
            </C.UserArea>
            <C.List>
                <C.Item>
                    <p>
                        Lançamentos
                    </p>
                </C.Item>
                <C.Item>
                    <p>
                        Ofertas do dia
                    </p>
                </C.Item>
                <C.Item>
                    <p>
                        Categoria
                    </p>
                </C.Item>
                <C.Item>
                    <p>
                        Marcas
                    </p>
                </C.Item>
                <C.Item>
                    <p>
                        Mais Vendidos
                    </p>
                </C.Item>
            </C.List>
        </C.Container>
    )
}

export default SideMenu;