import React from "react";
import { AsideMenuTiquets } from "./AsideMenuTiquets";
import { MainMenuTiquets } from "./MainMenuTiquets";

export const TiqueteroMenu = () => {
  return (
    <>
      <div className="upperBarr">
        <div className="upperBarr_img">
          <img src="../public/copetran_logo.png" alt="" />
        </div>
        <h2>Bienvenido al pánel de tickets</h2>
      </div>
      <main className="main_menu-container">
        <AsideMenuTiquets />
        <MainMenuTiquets />
      </main>
    </>
  );
};
