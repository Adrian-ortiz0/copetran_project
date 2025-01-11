import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles.css";

export const TiqueteroLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "copetran@gmail.com" && password == "copetran") {
      window.alert("Bienvenido")
      navigate("/tiquetero-menu");
    } else {
      setError("Credenciales Incorrectas");
    }
  };

  return (
    <div className="login">
    <div className="login-container">
      <img src="../public/copetran_logo.png" alt="" />
      <form onSubmit={handleSubmit} className="login_form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};
