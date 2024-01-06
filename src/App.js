import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import Register from './pages/register';
import { AuthProvider } from './Context/AuthContext';
import NavBar from './componentes/NavBar/NavBar';
import ProtectedRoute from './routes/ProtectedRoute';
import Admin from './pages/Admin';
import AddProduct from './pages/addProducts';
import EditProduct from './pages/EditProduct';
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';
import Complete from './pages/complete';



function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
           <Route path='/product/:id' element={
            <ProtectedRoute>
              <ProductInfo/>
            </ProtectedRoute>
          }/>
            <Route path='/cart' element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }/>
           <Route path='/complete' element={
            <ProtectedRoute>
              <Complete/>
            </ProtectedRoute>
          }/>
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
           <Route path='/admin/add-product' element={
            <ProtectedRoute>
              <AddProduct/>
            </ProtectedRoute>
          }/>
           <Route path='/admin/edit-product/:id' element={
            <ProtectedRoute>
              <EditProduct/>
            </ProtectedRoute>
          }/>

        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
