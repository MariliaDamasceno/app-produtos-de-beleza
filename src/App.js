import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import { Produtos } from './pages/produtos/index';
import Produto from './pages/produto/index';
import NotFound from './pages/NotFound';
import Register from './pages/register';
import ProdutoReviews from './pages/ProdutoReviews';
import { AuthProvider } from './Context/AuthContext';
import NavBar from './componentes/NavBar/NavBar';
import ProtectedRoute from './routes/ProtectedRoute';



function App() {
  return (
    <>
      <AuthProvider>     
        <NavBar />
        <Routes>
          <Route path='/produtos' element={
            <ProtectedRoute>
              <Produtos/>
            </ProtectedRoute>
          }/>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />         
          <Route path='/produto/:id' element={<Produto />}>
            <Route path='reviews' element={<ProdutoReviews />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
