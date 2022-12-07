import { Link } from "react-router-dom";
import ShapeLoginSVG from '../assets/svgs/shape-curve-login-screen.svg';
import CuteCatSVG from '../assets/svgs/cute-cats.svg';
import './css/login.css';

function Login(): JSX.Element {
  return(
    <section className="login-section">
      <header className="header-login">
        <h1>Nichan</h1>
        <img src={ CuteCatSVG } alt="" />
      </header>
      <div className="shape-svg-login">
        <img src={ ShapeLoginSVG } alt="" />
      </div>
      <form className="form-login">
        <label htmlFor="">
          <span></span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span></span>
          <input type="text" />
        </label>
        <button type="button"></button>
        <Link to="register">
          <div></div>
        </Link>
      </form>
    </section>
  )
}

export default Login;
