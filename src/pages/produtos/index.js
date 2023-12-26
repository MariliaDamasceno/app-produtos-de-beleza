import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const produtosData = () => [
    {
        id: 1,
        nome: "Produto 1",
        descricao: "Descrição do Produto 1.",
        preco: "R$ 19,99",
        imagem: "https://img.freepik.com/vetores-premium/garrafa-de-locao-ou-tonik-isolada-em-fundo-branco-desenhe-a-mao-produto-de-cuidados-com-a-pele-facial-de-beleza-ilustracao-vetorial-plana-cosmetica-organica_693602-262.jpg?w=2000",
    },
    {
        id: 2,
        nome: "Produto 2",
        descricao: "Descrição do Produto 2.",
        preco: "R$ 29,99",
        imagem: "https://img.freepik.com/premium-vector/olive-oil-body-lotion-flat-design_505573-271.jpg",
    },
    {
        id: 3,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3.",
        preco: "R$ 39,99",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7XdBeTC4Jy6EQJLvRJqz4nunVXc_0_Ilevbemvze6Mp10ZZdzpy8CHuFxue9cXLEq04&usqp=CAU",
    },
];
const ProdutoCard = ({ produto }) => (
    <div className="produto-card">
        <img src={produto.imagem} alt={produto.nome} />
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <p className="preco">{produto.preco}</p>
        <Link to={`/produto/${produto.id}`}>
            Ver Detalhes
        </Link>
    </div>
);

const Produtos = () => {
    return (
        <div>
            <h2 className="titulo">Produtos capilares</h2>

            <p className="paragrafo1">
                Descubra o segredo para cabelos deslumbrantes e saudáveis ​​com a nossa
                linha exclusiva de produtos capilares no nosso Salão de Beleza.
                Deixe-se envolver por fórmulas suaves e ingredientes de alta qualidade
                que proporcionam cuidado profundo aos seus fios. Transforme sua rotina
                de cuidados capilares com produtos especialmente selecionados para
                atender às necessidades únicas do seu cabelo. Experimente a beleza em
                cada fio e revele o seu melhor eu com a nossa coleção de produtos
                capilares premium. Abaixo descubra a diferença que a excelência em
                cuidados capilares pode fazer!
            </p>
            
            <div className="bloco-cadastro">
                <p className="paragrafo2">Nos temos descontos especiais para as nossas clientes que possuem cadastro em nosso site</p>
                <Link to='/register' className="link-cadastra">Faça seu cadastro</Link>
            </div>
            <div className="produtos-container">
                {produtosData().map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    );
};

export { produtosData, Produtos };

