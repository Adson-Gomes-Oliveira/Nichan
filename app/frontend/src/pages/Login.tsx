import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShapeLoginSVG from '../assets/svgs/shape-curve-login-screen.svg';
import CuteCatSVG from '../assets/svgs/cute-cats.svg';
import AnimeGirl from '../assets/images/Anime-Girl-PNG-Pic.png';

import './css/login.css';

function Login(): JSX.Element {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setLoginInput({
      ...loginInput,
      [id]: value,
    });
  }

  return(
    <section className="login-section">
      <header className="header-login">
        <h1>Nichan</h1>
        <img src={ CuteCatSVG } alt="" />
      </header>

      <img className="shape-login-svg" src={ ShapeLoginSVG } alt="" />
      <img className="bg-login-img" src={ AnimeGirl } alt="anime-girl" />

      <form className="form-login">
        <label htmlFor="email">
          <span>Digite seu email</span>
          <div>
            <span className="material-icons-outlined">email</span>
            <input
              id="email"
              type="email"
              onChange={handleInput}
              value={loginInput.email}
            />
          </div>
        </label>
        <label htmlFor="password">
          <span>Digite sua senha</span>
          <div>
            <span className="material-icons-outlined">lock</span>
            <input
              id="password"
              type="password"
              onChange={handleInput}
              value={loginInput.password}
            />
          </div>
        </label>
        <button type="button">LOGIN</button>
      </form>

      <Link to="register">
        <div className="register">
          <span>Não tem uma conta? Cadastre-se aqui</span>
        </div>
      </Link>
    </section>
  )
}

export default Login;
