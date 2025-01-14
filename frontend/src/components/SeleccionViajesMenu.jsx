import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ViajesList } from './ViajesList';
import { ViajesListVisualizer } from './ViajesListVisualizer';

export const SeleccionViajesMenu = ({viajes, onSeleccionarViaje}) => {
    const navigate = useNavigate();
    const indexes = ["ID", "Fecha Salida", "Hora Salida", "Vehiculo", "Ruta", "Precio", "Seleccion"];


  return (
    <>
        <main className='tableList_container'>
            <ViajesListVisualizer filteredData={viajes} indexes={indexes} onSeleccionarViaje={onSeleccionarViaje}/>
        </main>
    </>
  )
}
