import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosConfig';
import { SeleccionViajes } from './SeleccionViajes';

export const VentaTickets = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  }
  const [documento, setDocumento] = useState("");
  const [clienteExiste, setClienteExiste] = useState(false);
  const [cliente, setCliente] = useState(null);

  const fetchCliente = (documento) => {
    axiosInstance.get("/clientes").then((response) => {
      const foundCliente = response.data.find(cliente => cliente.documento === documento);
      if (foundCliente) {
        setClienteExiste(true);
        setCliente(foundCliente);
        alert("Cliente: " + cliente.nombre + " encontrado")
        navigate("/seleccion-viajes", {state: {cliente: foundCliente}})
      } else {
        setClienteExiste(false);
        alert("Cliente no existe en la base de datos, se pasará a registrar");
        navigate("/registrar-usuarios", {state: {documento}});
      }
    }).catch((error) => {
      console.error("Error fetching clientes:", error);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCliente(documento);
  }

  const handleChange = (e) => {
    setDocumento(e.target.value);
  }

  return (
    <section className='cedula_form-container'>
      <form onSubmit={handleSubmit} className='cedula_form'>
        <h2>Venta de tickets</h2>
        <img src="/public/copetran_logo.png" alt="" width={200} height={150}/>
        <div className='form-group'>
          <label htmlFor="cedula" className='labelCedula' id='labelCedula'>Ingrese la cédula:</label>
          <input type="text" name='documento' value={documento} onChange={handleChange} />
        </div>
        <div className='cedula_form-button'>
          <button type="button" onClick={() => navigate("/tiquetero-menu")}>Volver</button>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </section>
  );
}
