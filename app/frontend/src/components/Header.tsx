import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CuteCatSVG from '../assets/svgs/cute-cats.svg';
import { Link } from 'react-router-dom';
import './css/header.css';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [focus, setFocus] = useState<string>('');
  const [userIsLogged, setUserIsLoggeed] = useState<boolean>(false);

  useEffect(() => {
    setFocus(location.pathname);

    const userLogged = localStorage.getItem('user');
    if (userLogged) setUserIsLoggeed(true);
    if (!userLogged) setUserIsLoggeed(false);
  }, [location.pathname]);

  const handleLoggout = (): void => {
    localStorage.clear();
    if (location.pathname === '/') navigate(0);
    if (location.pathname !== '/') navigate('/');
  }

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
          {userIsLogged ? (
            <button
              className="loggout-button"
              onClick={handleLoggout}
            >
              <li>Sair</li>
            </button>
          ) : (
            <Link to="/login"><li>Login</li></Link>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
