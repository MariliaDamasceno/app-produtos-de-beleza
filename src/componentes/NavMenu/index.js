import { Link } from "react-router-dom";
import './style.css'

const NavMenu = () => {
    return (
        <nav className="NavMenu">
            <h1 className="NavMenu-h1">Os melhores produtos veganos</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/register'>Cadastrar</Link></li>
            </ul>
        </nav>
    )
}

export default NavMenu;