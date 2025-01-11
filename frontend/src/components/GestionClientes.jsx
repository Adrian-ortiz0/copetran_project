import React, { useEffect, useState } from "react";
import { UpperBarr } from "./UpperBarr";
import { AsideMenuTiquets } from "./AsideMenuTiquets";
import { ClientesMenu } from "./ClientesMenu";
import axiosInstance from "../axiosConfig";

export const GestionClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClientes = searchTerm
    ? clientes.filter((cliente) =>
        cliente.documento.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : clientes;

  const fetchClientes = () => {
    axiosInstance
      .get("/clientes")
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching clientes" + error);
      });
  };

  const handleDelete = (id) => {
    if(window.confirm("¿Estas seguro de que deseas eliminar este cliente?")){
      axiosInstance.delete(`clientes/${id}/`).then((response) => {
        console.log("Empleado eliminado correctamente" + response);
        fetchClientes();
    }).catch((error) => {
      console.error("Error deleting cliente" + error);
    })

    }
  }

  useEffect(() => {
    fetchClientes();
  }, []);

  {console.log(filteredClientes)}

  return (
    <>
      <UpperBarr searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={"Buscar clientes por numero de cedula"}/>
      <main className="gestion_menu-container">
        <AsideMenuTiquets />
        <ClientesMenu clientes={filteredClientes} onDelete={handleDelete}/>
      </main>
    </>
  );
};
