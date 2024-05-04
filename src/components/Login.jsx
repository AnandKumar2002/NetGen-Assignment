import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import './styles/Login-style/Login.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Generate a random token
      const randomToken = (Math.random().toString(12));
      localStorage.setItem('token', randomToken);

      console.log(localStorage.getItem('token'));
      console.log(randomToken);

      auth.login(email);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          noValidate
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default Login;
