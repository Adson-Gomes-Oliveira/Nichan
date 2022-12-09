import CuteCatSVG from '../assets/svgs/cute-cats.svg';
import { Link } from 'react-router-dom';
import './css/header.css';

function Header(): JSX.Element {
  return(
    <header className="general-header">
      <div className="top-header">
        <div className="logo-header">
          <h1>Nichan</h1>
          <img src={CuteCatSVG} alt="" />
        </div>
        <span className="material-icons-outlined">account_circle</span>
      </div>
      <nav className="menu-header">
        <ul>
          <Link to="/"><li>Inicio</li></Link>
          <Link to="/animes"><li>Animes</li></Link>
          <Link to="/favorites"><li>Favoritos</li></Link>
          <Link to="/users"><li>Usuários</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
