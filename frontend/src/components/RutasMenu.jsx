import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RutasList } from './RutasList';

export const RutasMenu = ({rutas, onDelete}) => {
    const navigate = useNavigate();
    const indexes = ["ID", "Origen", "Destino", "Precio","Duracion", "Acciones"];
    const handleEdit = (ruta) => {
        navigate(`editar-ruta/${ruta.id}/`, {state: {ruta}});
    };
    const handleDelete = (id) => {
        if(window.confirm("¿Estas seguro de que deseas eliminar esta ruta?")){
            onDelete(id);
        }
    };

  return (
    <>
        <main className='tableList_container'>
            <RutasList 
                filteredData = {rutas}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                indexes={indexes}
            />
            <div className='tableList_button-container'>
                <button onClick={() => navigate("/crear-rutas")}>
                    Nueva ruta
                </button>
                <button onClick={() => navigate("/gestion-viajes")}>
                    Volver
                </button>
            </div>
        </main>
    </>
  )
}
