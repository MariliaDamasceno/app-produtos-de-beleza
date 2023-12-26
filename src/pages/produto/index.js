import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { produtosData } from '../produtos/index';
import './style.css'

const Produto = () => {
    const { id } = useParams();


    const produto = produtosData().find((produto) => produto.id === Number(id));
    const produtoDetails = getProdutoDetails(produto);

    return (
        <div className="produto-container">
            <h1>{produtoDetails.nome}</h1>
            <img className="produto-imagem" src={produtoDetails.imagem} alt={produtoDetails.nome} />
            <p className="produto-descricao">{produtoDetails.descricao}</p>
            <p className="produto-preco">{produtoDetails.preco}</p>
            <Link to={'/produtos'} className="produto-link">Voltar</Link>
            <Outlet />
        </div>
    );
};
const getProdutoDetails = (produto) => {
   
    if (produto) {
        
        return {
            nome: produto.nome,
            imagem: produto.imagem,
            descricao: produto.descricao,
            preco: produto.preco,
        };
    } else {
        
        return {
            nome: "Produto não encontrado",
            imagem: "",
            descricao: "",
            preco: "",
        };
    }
};

export default Produto;

