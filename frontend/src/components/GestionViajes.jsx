import React, { useEffect, useState } from 'react'
import { UpperBarr } from './UpperBarr'
import "../styles.css";
import { AsideMenu } from './AsideMenu';
import axiosInstance from '../axiosConfig';
import { ViajesMenu } from './ViajesMenu';

export const GestionViajes = () => {
    const [viajes, setViajes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredViajes = searchTerm ? viajes.filter((viaje) => (
        viaje.numero_vehiculo.toLowerCase().includes(searchTerm.toLowerCase())
    )) : viajes;


    const fetchViajes = () => {
        axiosInstance.get("viajes/").then((response)=>{
            setViajes(response.data);
        }).catch((error) => {
            console.error("Error fetching viajes: " + error);
        });
    };
    useEffect(() => {
      fetchViajes();
    }, []);

    const handleDelete = (id) => {
        if(window.confirm("¿Estas seguro de que deseas eliminar este viaje?")){
            axiosInstance.delete(`viajes/${id}/`).then((response) => {
                console.log("Viaje eliminado correctamente", response.data);
                fetchViajes();
            }).catch((error) => {
                console.error("Error deleting viaje" + error);
            });
        }
    };
    
  return (
    <>
        <UpperBarr placeholder={"Buscar viaje por numero de vehiculo"} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <main className='gestion_menu-container'>
            <AsideMenu />
            <ViajesMenu viajes={filteredViajes} onDelete={handleDelete}/>
        </main>
    </>
  )
}
