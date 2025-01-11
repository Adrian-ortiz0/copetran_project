import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ViajesList } from './ViajesList';
import axiosInstance from '../axiosConfig';

export const ViajesMenu = ({viajes, onDelete}) => {
    const navigate = useNavigate();
    const [selectedEstado, setSelectedEstado] = useState();
    const indexes = ["ID", "Fecha Salida", "Hora Salida", "Estado", "Vehiculo", "Ruta", "Acciones"];
    
    const handleEdit = (viaje) => {
      navigate(`/editar-viaje/${viaje.id}/`, {state: {viaje}});
    };
    const handleDelete = (id) => {
      if(window.confirm("¿Estas seguro de que desees eliminar este viaje?")){
        onDelete(id);
      }
    };

    const handleEstadoChange = (e) => {
      setSelectedEstado(e.target.value);
    }

    const filteredViajes = viajes.filter((viaje) => {
      const estadoMatch = selectedEstado ? viaje.estado === selectedEstado : true;
      return estadoMatch
    });

  return (
    <>
      <main className='tableList_container'>
        <ViajesList 
          filteredData={filteredViajes} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit} 
          indexes={indexes}
        />
        <div className='tableList_button-container'>
          <button onClick={() => navigate("/registrar-viaje")}>
            Nuevo viaje
          </button>
          <button onClick={() => navigate("/rutas")}>
            Rutas
          </button>
          <select name="filtroEstado_viaje" id="filtroEstado_viaje" value={selectedEstado} onChange={handleEstadoChange}>
            <option value="">Filtro por estado</option>
            <option value="Programado">Programado</option>
            <option value="En curso">En curso</option>
            <option value="Completado">Completado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>
      </main>
    </>
  )
}
