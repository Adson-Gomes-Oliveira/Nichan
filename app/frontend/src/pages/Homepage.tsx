import Header from '../components/Header';
import InstagramSVG from '../assets/svgs/instagram.svg';
import GithubSVG from '../assets/svgs/github.svg';
import LinkedinSVG from '../assets/svgs/linkedin.svg';
import MediumSVG from '../assets/svgs/medium.svg';
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
      <div className="footer-homepage">
        <div className="social-footer">
          <a
            href="https://www.instagram.com/adson.go/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstagramSVG} alt="icone-instagram" />
          </a>
          <a
            href="https://github.com/Adson-Gomes-Oliveira"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubSVG} alt="icone-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/adson-gomes-oliveira/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinSVG} alt="icone-linkedin" />
          </a>
          <a
            href="https://medium.com/@adson_4490"
            target="_blank"
            rel="noreferrer"
          >
            <img src={MediumSVG} alt="icone-medium" />
          </a>
        </div>
        <span>Todos os direitos Reservados © 2022</span>
        <span>Adson Gomes Oliveira</span>
        <a
          href="https://forms.gle/tBdLxrVTsbbDVJDWA"
          target="_blank"
          rel="noreferrer"
          className="footer-form-link"
        >
          Clique aqui e responda um breve formulário sobre sua experiência no site
        </a>
      </div>
    </section>
  );
}

export default Homepage;
