import React from "react";
import "./login.scss";
import LoginForm from "../../components/loginForm/LoginForm";
const Logo = require("../../images/Group.png") as string;
const Loginpic = require("../../images/pablo-sign-in 1.png") as string;

// Usage in JSX:

function Login() {
  return (
    <div className="login">
      <div className="login__image">
        <img src={Logo} alt="Logo" className="login__image1" />
        <img src={Loginpic} alt="loginpic" className="login__image2" />
      </div>
      <div className="login__form">
        <div className="welcome__message">
          <h1 className="welcom__header">Welcome!</h1>
          <p className="welcome__text">Enter details to login. </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
