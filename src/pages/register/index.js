import { useNavigate } from "react-router-dom";
import './style-cadastrar.css'

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formulario enviado")
        navigate('/produtos', {state: 'teste'})

    }    
    return(
        <div className="formulario">
        <h2>Faça seu cadastro e aproveite descontos especiais</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
}

export default Register;