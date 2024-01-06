import React, { useState } from 'react'
import Product from '../product'
import { findAllProducts } from '../../service/productService';
import { useEffect } from 'react';

const ProductList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Hambúrguer');
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProducts();
    }, [])

    const getAllProducts = async() => {
      const response = await findAllProducts();
      setProducts(response.data);
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-3'>
            <div className='flex items-center justify-center space-x-14'>
                <p className={`menu-tab rounded-full cursor-pointer ${categoriaTab === 'Cabelo' ? 'bg-primary text-secondary p-2 border-2 border-primary' : 'active-menu-tab p-2 border-2 border-#753E4F'} `} onClick={() => setCategoriaTab('Cabelo')}>Cabelo</p>
                <p className={`menu-tab rounded-full cursor-pointer ${categoriaTab === 'Maquiagem' ? 'bg-primary text-secondary p-2 border-2 border-primary' : 'active-menu-tab p-2 border-2 border-#753E4F'} `} onClick={() => setCategoriaTab('Maquiagem')}>Maquiagem</p>
                <p className={`menu-tab rounded-full cursor-pointer ${categoriaTab === 'Unhas' ? 'bg-primary text-secondary p-2 border-2 border-primary' : 'active-menu-tab p-2 border-2 border-#753E4F'} `} onClick={() => setCategoriaTab('Unhas')}>Unhas</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12'>
                {products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
    
    
    
}

export default ProductList