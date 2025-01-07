import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  const handleTiqueterLogin = () => {
    navigate("/tiquetero-login");
  };

  return (
    <div className="home">
      <div className="home_container">
        <h1>Bienvenido</h1>
        <img src="../public/copetran_logo.png" alt="" />
        <div className="homecontainer_button-container">
          <button onClick={handleAdminLogin}>Admin</button>
          <button onClick={handleTiqueterLogin}>Tiquetero</button>
        </div>
      </div>
    </div>
  );
};
