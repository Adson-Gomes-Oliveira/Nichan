import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ShapeLoginSVG from '../assets/svgs/shape-curve-login-screen.svg';
import CuteCatSVG from '../assets/svgs/cute-cats.svg';
import AnimeGirl from '../assets/images/Anime-Girl-PNG-Pic.png';
import { ErrorLoginMessages } from '../helpers/errorMessages';
import loginUser from "../requests/userRequests";

import './css/login.css';

function Login(): JSX.Element {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [errorLogin, setErrorLogin] = useState({
    status: false,
    error: '',
  });
  const navigate = useNavigate();

  const verifyLogin = (): string => {
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if(loginInput.email.length < 1 || !emailRegex.test(loginInput.email)) {
      setErrorLogin({
        status: true,
        error: ErrorLoginMessages.errorEmail,
      });

      return errorLogin.error;
    }

    if(loginInput.password.length < 8) {
      setErrorLogin({
        status: true,
        error: ErrorLoginMessages.errorPassword,
      });

      return errorLogin.error;
    }

    return '';
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setErrorLogin({
      status: false,
      error: '',
    })

    setLoginInput({
      ...loginInput,
      [id]: value,
    });
  }

  const handleLogin = async (): Promise<void | null> => {
    const isLoginFormatOK = verifyLogin() === '';
    if (!isLoginFormatOK) {
      return null;
    }

    const requestLogin = await loginUser(loginInput.email, loginInput.password);
    localStorage.setItem('user', JSON.stringify(requestLogin));
    navigate('/home');
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
        { errorLogin.status && (
          <span className="error-message-login">{`* ${errorLogin.error}`}</span>
        )}
        <button
          type="button"
          onClick={handleLogin}
        >
          LOGIN
        </button>
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
