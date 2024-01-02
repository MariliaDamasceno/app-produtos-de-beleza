
import React, { useState , useContext} from 'react';
import "./Login.css";
import { AuthContext } from '../../Context/AuthContext';
import logo from '../../assents/logo.png'


const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    senha: ''
  });

  const {loginUser} = useContext(AuthContext);

  
  const handleChangeValue = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(inputValue)
  };

  return (
    
    <div className="login">
      <div className="login-box">
        <img className='logo' src={logo} alt='logotipo food app' />
        <h1>Faça seu login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChangeValue} />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" onChange={handleChangeValue} />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p className='paragrafo1'>
          Criar uma conta
        </p>
      </div>
    </div>
  );
};

export default Login;
