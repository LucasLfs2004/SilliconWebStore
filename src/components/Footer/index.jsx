import { Link } from 'react-router-dom'
import * as C from './styles'

const Footer = () => {
    return (
        <C.Footer>
            <C.Row>
                <C.List>
                    <Link to={'/'}>
                        <img src="/assets/icons/miniArrow.svg" alt="" />
                        Institucional
                    </Link>
                    <Link to={'/'}>
                        <img src="/assets/icons/miniArrow.svg" alt="" />
                        Departamentos
                    </Link>
                    <Link to={'/'}>
                        <img src="/assets/icons/miniArrow.svg" alt="" />
                        Atendimento
                    </Link>
                    <Link to={'/'}>
                        <img src="/assets/icons/miniArrow.svg" alt="" />
                        Compra Segura
                    </Link>
                    <Link to={'/'}>
                        <img src="/assets/icons/miniArrow.svg" alt="" />
                        FAQ
                    </Link>
                </C.List>
                <C.Column>
                    <C.Logo src="/assets/LOGO/silliconFooterTransparent.svg" />
                    <C.Store>
                        <img src="/assets/LOGO/playStore.svg" alt="" />
                        <img src="/assets/LOGO/appleStore.svg" alt="" />
                    </C.Store>
                </C.Column>
            </C.Row>
            <C.Bottom>
                <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
                <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
            </C.Bottom>
        </C.Footer>
    )
}

export default Footer