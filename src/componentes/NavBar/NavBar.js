import React, { useContext } from 'react';
import logo from '../../assents/logo.png';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineExitToApp } from 'react-icons/md';
import './NavBar.css'
import NavMenu from '../NavMenu';

const NavBar = () => {
   const { userLogged, logoutUser } = useContext(AuthContext)
   const navigate = useNavigate()    
    return (
        <>
          <header className='header-navbar'>
            <nav className='nav-container'>
              <div className='brand-container'>
                <div className='logo-container'>
                  <img src={logo} alt='Logo' className='logo' />
                </div>
                <div className='title-container'>
                  <h1 >Salão Beleza</h1>
                </div>
              </div>
              <div className='user-container'>
                {userLogged ? (
                  <div className='user-info'>
                    <div className='cart-icon'>
                      <span className='cart-count'>2</span>
                      <FaShoppingCart className='cart-icon' />
                    </div>
                    <img src='' alt='' className='user-avatar' />
                    <p className='user-greeting'>Bem vindo, Nome!</p>
                    <MdOutlineExitToApp className='exit-icon'  onClick={logoutUser}/>
                  </div>
                ) : (
                  <div className='buttons-container'>
                    <button onClick={() => navigate('/login')} className='login-button'>
                      Login
                    </button>
                    <button className='register-button'>Register</button>
                  </div>
                )}
              </div>
            </nav>
          </header>
          <NavMenu />
        </>
      );
    };

export default NavBar;