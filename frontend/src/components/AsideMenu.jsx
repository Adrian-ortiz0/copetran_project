import React from "react";
import "../styles.css";
import { Navigate, useNavigate } from "react-router-dom";

export const AsideMenu = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <aside className="aside_menu">
      <div className="aside_menu-buttons">
        <button
          onClick={() => navigateTo("/admin-menu")}
          className="menu-button"
        >
          <img src="../public/home_icon.svg" alt="" width={60} height={60} />
        </button>
        <button
          onClick={() => navigateTo("/gestion-empleados")}
          className="gestion_empleados-button"
        >
          <img
            src="../public/empleados_icon.svg"
            alt=""
            width={60}
            height={60}
          />
        </button>
        <button
          onClick={() => navigateTo("/gestion-buses")}
          className="gestion_buses-button"
        >
          <img src="../public/bus_icon.svg" alt="" width={60} height={60} />
        </button>
        <button
          onClick={() => navigateTo("/gestion-viajes")}
          className="gestion_viajes-button"
        >
          <img src="../public/tickets_icon.svg" alt="" width={60} height={60} />
        </button>
        <button onClick={() => navigateTo("/")} className="exit-button">
          <img src="../public/exit_icon.svg" alt="" width={60} height={60} />
        </button>
      </div>
    </aside>
  );
};
