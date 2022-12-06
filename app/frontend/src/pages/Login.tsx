import { Link } from "react-router-dom";

function Login(): JSX.Element {
  return(
    <section className="login-section">
      <header className="header-login">
        <h1>Nichan</h1>
        {/* <img src="" alt="" /> */}
      </header>
      <div className="shape-svg-login"></div>
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
