
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <h1>Faça seu login</h1>
        <form className="login-form">
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
    </div>
  );
};

export default Login;
