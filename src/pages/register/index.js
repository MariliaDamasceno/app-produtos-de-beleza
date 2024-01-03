import { useNavigate } from "react-router-dom";
import logo from '../../assents/logo.png'
import { useState } from "react";
import { registerUser } from "../../service/authService";


const Register = () => {
  const [inputValue, setInputValue] = useState({
    nome: '',
    email: '',
    senha: '',
    imagem:''
  });
  const navigate = useNavigate();


 const handleChangeValue = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser(inputValue)
    if (response.data){
      alert(`Usuario ${response.data.nome} cadastrado com sucesso`)
      navigate('/login')
  }
}
 
  return (
    <main className="h-screen w-full">
      <div className="flex pt-20 flex-col items-center h-screen">
        <img src={logo} alt="Logo Salão" className="w-10"></img>
        <h2 className="text-2xl text-gray-600">Faça seu cadastro e aproveite descontos especiais</h2>
        <form className="bg-write w-96 mt-6 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            
            <input type="text" id="name" name="nome" placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:right-1 focus:outline-none transition duration-300 border border-gr focus:shadow-xl" 
              onChange={handleChangeValue}/>

            <input type="email" id="email" name="email" placeholder="Digite seu email"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:right-1 focus:outline-none transition duration-300 border border-gr focus:shadow-xl" 
              onChange={handleChangeValue}/>

            <input type="password" id="senha" name="senha" placeholder="Digite sua senha"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:right-1 focus:outline-none transition duration-300 border border-gr focus:shadow-xl" 
              onChange={handleChangeValue}/>

            <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:right-1 focus:outline-none transition duration-300 border border-gr focus:shadow-xl" 
              onChange={handleChangeValue}/>
          </div>
          <button
            type='submit'
            className='w-full py- bg-primary text-white focus:ring-4 mt-6 rounded-lg transition duration-300'>
            Entrar</button>
        </form>
      </div>
    </main>
  )
}

export default Register;