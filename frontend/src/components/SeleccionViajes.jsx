import React, { useEffect, useState } from 'react'
import { AsideMenuTiquets } from './AsideMenuTiquets'
import { UpperBarr } from './UpperBarr'
import axiosInstance from '../axiosConfig';
import { ViajesMenu } from './ViajesMenu';
import { SeleccionViajesMenu } from './SeleccionViajesMenu';

export const SeleccionViajes = () => {

    const [viajes, setViajes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchViajes = () => {
        axiosInstance.get("/viajes").then((response) => {
            setViajes(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.error("Error fetching viajes" + error)
        })
    }

    const filteredViajes = searchTerm ? viajes.filter((viaje) => (viaje.destino.toLowerCase().includes(searchTerm.toLowerCase()))) : viajes;

    useEffect(() => {
      fetchViajes();
    }, [])
    

  return (
    <>
        <UpperBarr placeholder={"Buscar viaje por nombre de destino"} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <main className='gestion_menu-container'>
            <AsideMenuTiquets />
            <SeleccionViajesMenu viajes={filteredViajes} />
        </main>
    </>
  )
}
