import React from 'react';
import { useLocation } from 'react-router-dom';

export const GenerarTicket = () => {
  const location = useLocation();
  const { cliente, viaje, asiento } = location.state;

  return (
    <div>
        <h2>Generar Ticket</h2>
        <p>Cliente: {cliente.nombre} {cliente.apellido}</p>
        <p>Viaje: {viaje.origen} - {viaje.destino}</p>
        <p>Precio: {viaje.precio_ruta}</p>
        <p>Vehiculo: {asiento.vehiculo_numero}</p>
        <p>Asiento: {asiento.asiento_numero}</p>
    </div>
  );
};
