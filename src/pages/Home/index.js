import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-Vindo ao Nosso Salão de Beleza!</h1>
            
      <div className="para-intro">
        <p>No coração da beleza, nosso salão é mais do que um espaço dedicado ao cuidado capilar; é um santuário onde a sua autoestima e bem-estar são prioridades. Comprometemo-nos a proporcionar experiências únicas e resultados excepcionais para cada cliente.</p>
      </div>
      <div>
        <h2>Descubra o Segredo dos Cabelos Deslumbrantes:</h2>
        <p>Cuidados Profundos e Veganos: Nossos produtos são formulados com carinho, priorizando a natureza. Oferecemos uma linha completa de produtos capilares veganos, livres de crueldade animal e ricos em ingredientes naturais que nutrem e revitalizam seus fios.</p>
        <div>
        <h3>Cinco Dicas de Cuidado Especial:</h3>
        <p className="bold-text">Hidratação Regular:</p>
        <p>Mantenha seus cabelos hidratados com tratamentos semanais. A hidratação é a chave para a vitalidade dos fios.</p>
        <p className="bold-text">Proteção Térmica:</p>
        <p>Ao utilizar ferramentas de calor, como secadores e chapinhas, proteja seus cabelos com produtos termoativos para evitar danos.</p>
        <p className="bold-text">Corte Regular:</p>
        <p>Mantenha a forma e a saúde dos seus cabelos com cortes regulares. Isso elimina pontas duplas e promove o crescimento saudável.</p>
        <p className="bold-text">Alimentação Balanceada:</p>
        <p>Sua saúde reflete nos seus cabelos. Uma dieta rica em nutrientes contribui para cabelos fortes e brilhantes.</p>
        <p className="bold-text">Escolha Certa de Produtos:</p>
        <p>Use produtos adequados ao seu tipo de cabelo. Consulte nossos especialistas para encontrar a combinação perfeita para você.</p>      </div>
    </div>
    </div>
  );
}

export default Home;
