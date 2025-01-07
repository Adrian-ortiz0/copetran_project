import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig.js";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("clientes/")
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nombre} {cliente.apellido} - {cliente.documento}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
