import CuteCatSVG from '../assets/svgs/cute-cats.svg';
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
          <li>Inicio</li>
          <li>Animes</li>
          <li>Favoritos</li>
          <li>Usuários</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
