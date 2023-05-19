import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginForm.scss";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic with email and password

    // Assuming successful login, navigate to the home page
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__div1">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Email"
        />
      </div>
      <div className="form__div2">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          placeholder="Password"
          className="password__input"
        />
        <p className="show">SHOW</p>
      </div>
      <p className="forgot__password">FORGOT PASSWORD?</p>

      <button type="submit" className="login__button">
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
