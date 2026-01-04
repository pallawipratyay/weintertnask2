import React, { useState } from "react";
import "./Login.css";
import bg from "../assets/netflix-bg.jpg";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - just check if fields are filled
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div
      className="login"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="login__overlay"></div>
      
      {/* Netflix Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="login__logo"
      />

      {/* Login Box */}
      <div className="login__body">
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <div className="login__options">
          <label>
            <input type="checkbox" /> Remember me
          </label>

          <button type="button" className="link-btn">
            Need help?
          </button>
        </div>

        <p className="signup">
          New to Netflix? <span>Sign up now.</span>
        </p>

        <small>
          This page is protected by Google reCAPTCHA to ensure
          you're not a bot.
        </small>
      </div>
    </div>
  );
}

export default Login;
