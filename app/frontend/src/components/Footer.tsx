import InstagramSVG from '../assets/svgs/instagram.svg';
import GithubSVG from '../assets/svgs/github.svg';
import LinkedinSVG from '../assets/svgs/linkedin.svg';
import MediumSVG from '../assets/svgs/medium.svg';

import './css/footer.css';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
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
      </footer>
  );
}

export default Footer;
