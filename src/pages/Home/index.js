import React from "react";
import ProductList from '../../componentes/productList'
const Home = () => {
    return (
        <>
            <section className="home-banner w-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-#423036 text-center text-5xl md:text-4xl lg:text-5xl font-bold" style={{ textShadow: '4px 4px 7px rgba(0, 0, 0, 0.6)', color: '#423036' }}>Olá! Seja bem-vindo(a)!</h1>
                    <h2 className="text-#423036 text-center text-5xl md:text-4xl lg:text-5xl font-bold" style={{ textShadow: '4px 4px 7px rgba(0, 0, 0, 0.6)', color: '#423036' }}>Faça seu pedido!</h2>
                </div>
            </section>
            <ProductList />

        </>
    )
}

export default Home;