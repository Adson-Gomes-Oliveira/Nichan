import Footer from '../components/Footer';
import Header from '../components/Header';

import './css/homepage.css';

function Homepage(): JSX.Element {
  return(
    <section className="homepage-section">
      <Header />
      <div className="body-homepage">
        <div className="welcome-body">
          <h2>{`Bem vindo(a) ao Nichan`}</h2>
          <p>{`
            Nichan é um site de gerenciamento de animes e futuramente será 
            uma rede social para otakinhos e otakinhas, este projeto não tem 
            nenhum fim lucrativo e foi desenvolvido por mim ( Adson Gomes Oliveira ) 
            com a finalidade de práticar minhas skills como desenvolvedor e 
            organizar meus animes também ^^.
          `}</p>
          <p>{`
            Abaixo tem um passo-a-passo de como o site funciona, no final da página tem 
            um link pra contato e um link do google forms onde eu peço que se possível 
            deixe registrado o que achou do site, ou se tem algo que posso melhorar, 
            seu feedback é bem importante.
          `}</p>
          <span className="material-icons-outlined">keyboard_double_arrow_down</span>
        </div>
        <div className="howto-homepage">
          <h3>Como encontrar animes?</h3>
          <p>{`
            Vá até a aba animes e lá você vai encontrar uma barra de pesquisa, digite 
            o nome do anime e veja seus detalhes para adicionar aos favoritos.
          `}</p>
          <h3>Como criar minha lista de animes?</h3>
          <p>{`
            É bem fácil, encontra o anime de sua escolha e entre nos favoritos, clique 
            no anime que quiser e lá haverão opções para marcar um episódio, fazer uma 
            avaliação e etc.
          `}</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Homepage;
