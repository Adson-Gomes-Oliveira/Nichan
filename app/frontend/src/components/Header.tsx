import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CuteCatSVG from '../assets/svgs/cute-cats.svg';
import { Link } from 'react-router-dom';
import './css/header.css';

function Header(): JSX.Element {
  const location = useLocation();
  const [focus, setFocus] = useState<string>('');

  useEffect(() => {
    setFocus(location.pathname);
  }, [location.pathname]);

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
          <Link to="/">
            <li className={focus === '/' ? "text-golden" : "text-white"}>
              Inicio
            </li>
          </Link>
          <Link to="/animes">
            <li className={focus.includes('animes') ? "text-golden" : "text-white"}>
              Animes
            </li>
          </Link>
          <Link to="/favorites">
            <li className={focus.includes('favorites') ? "text-golden" : "text-white"}>
              Favoritos
            </li>
          </Link>
          <Link to="/users">
            <li className={focus.includes('users') ? "text-golden" : "text-white"}>
              Usuários
            </li>
          </Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
