
import React, { useState , useContext} from 'react';
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
    <main className='h-screen w-full banner'>
      <div className='flex flex-col items-center pt-20 h-screen'>
        <img className='w-52' src={logo} alt='logotipo food app' />
        <form
          onSubmit={handleSubmit}
          action=''
          className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'
        >
          <div className='flex flex-col space-y-6'>
            <input
              type='email'
              placeholder='Digite seu email'
              name='email'
              className='w-ful px-4 py-3 rounded-lg ring-red-200 border bg-gray-200 focus:outline-none transition duration-300'
              onChange={handleChangeValue}
            />

            <input
              type='password'
              placeholder='Digite sua senha'
              name='senha'
              className='w-ful px-4 py-3 rounded-lg ring-red-200 border bg-gray-200 focus:outline-none transition duration-300'
              onChange={handleChangeValue}
            />
          </div>
          <button
            type='submit'
            className='w-full py- bg-primary text-white focus:ring-4 mt-6 rounded-lg transition duration-300'
          >
            Entrar
          </button>
        </form>
        <p className='text-base text-primary text-center my-6 hover:underline cursor-pointer'>
          Criar uma conta
        </p>
      </div>
    </main>
  );
};


export default Login;
