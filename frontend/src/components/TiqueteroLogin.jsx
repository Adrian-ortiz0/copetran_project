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
      navigate("/admin-menu");
    } else {
      setError("Credenciales Incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Tiquetero</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
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
  );
};
