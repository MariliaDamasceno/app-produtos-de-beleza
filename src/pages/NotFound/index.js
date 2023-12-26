import { Link } from "react-router-dom";
import './style.css'
const NotFound = () => {
    return(
        <div>
        <h1>404 - Not Found</h1>
        <Link to = '/'>Voltar para home</Link>
        </div>
    )
}

export default NotFound;