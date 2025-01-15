import React, { useEffect, useState } from 'react';
import { AsideMenu } from './AsideMenu';
import { AsientosList } from './AsientosList';
import { useLocation } from 'react-router-dom';
import { AsideMenuTiquets } from "./AsideMenuTiquets";
import axiosInstance from '../axiosConfig';

export const SeleccionAsientos = () => {
  const [asientosViaje, setAsientosViaje] = useState([]);
  const location = useLocation();
  const { cliente, viaje } = location.state;

  useEffect(() => {
    axiosInstance.get(`/api/viajes/${viaje.id}/asientos/`)
      .then(response => {
        const asientosDisponibles = response.data.filter(asiento => !asiento.ocupado);
        setAsientosViaje(asientosDisponibles);
      })
      .catch(error => {
        console.error("Error fetching asientos:", error);
      });
  }, [viaje.id]);

  return (
    <>
      <div className="upperBarr">
        <div className="upperBarr_img">
          <img src="../public/copetran_logo.png" alt="" />
        </div>
        <h2>Asientos Disponibles</h2>
      </div>
      <main className='gestion_menu-container'>
        <AsideMenuTiquets />
        <main className='tableList_container'>
          <AsientosList asientos={asientosViaje} indexes={["ID", "Número de Asiento", "Estado"]} cliente={cliente} viaje={viaje} />
        </main>
      </main>
    </>
  );
};
