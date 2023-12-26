import { Link } from "react-router-dom";
import './style.css'

const NavMenu = () => {
    return (
        <nav>
            <h1>Salão de beleza</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/register'>Cadastrar</Link></li>
            </ul>
        </nav>
    )
}

export default NavMenu;