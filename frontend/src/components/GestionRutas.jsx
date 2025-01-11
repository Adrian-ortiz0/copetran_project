import React, { useEffect, useState } from 'react'
import { UpperBarr } from './UpperBarr'
import { AsideMenu } from './AsideMenu'
import { RutasMenu } from './RutasMenu'
import axiosInstance from '../axiosConfig'

export const GestionRutas = () => {
    const [rutas, setRutas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // {rutas.map((ruta) => (
    //     console.log(ruta)
    // ))};

    const filteredRutas = searchTerm ? rutas.filter((ruta) =>(
        ruta.origen_nombre.toLowerCase().includes(searchTerm.toLowerCase())
    )) : rutas;

    const fetchRutas = () => {
        axiosInstance.get("rutas/").then((response) => (
            setRutas(response.data)
        )).catch((error) => {
            console.error("Error fetching rutas" + error);
        });
    };

    {filteredRutas.map((ruta) => (
        ruta
    ))}

    const handleDelete = (id) => {
        if(window.confirm("¿Estas seguro de que deseas eliminar esta ruta?")){
            axiosInstance.delete(`rutas/${id}/`).then((response) => (
                fetchRutas()
            )).catch((error) => {
                console.error("Error deleting ruta" + error);
            });
        }
        
    };

    useEffect(() => {
      fetchRutas();
    }, []);
    


  return (
    <>
        <UpperBarr placeholder={"Buscar rutas por origen"} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <main className='gestion_menu-container'>
            <AsideMenu />
            <RutasMenu rutas={filteredRutas} onDelete={handleDelete}/>
        </main>
    </>
  )
}
