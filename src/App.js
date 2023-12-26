import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import  {Produtos}  from './pages/produtos/index';
import Produto from './pages/produto/index';
import NotFound from './pages/NotFound';
import Register from './pages/register';
import ProdutoReviews from './pages/ProdutoReviews';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/produto/:id' element={<Produto />}>
        <Route path='reviews' element={<ProdutoReviews />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

  );
}

export default App;
