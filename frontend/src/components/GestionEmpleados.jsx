import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import { EmpleadosList } from "./EmpleadosList";
import { AsideMenu } from "./AsideMenu";

export const GestionEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el filtro por número de cédula

  const fetchEmpleados = () => {
    axiosInstance
      .get("empleados/")
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error("Error fetching empleados:", error);
      });
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
      console.log(`Sending DELETE request to empleados/${id}/`);
      axiosInstance
        .delete(`empleados/${id}/`)
        .then((response) => {
          console.log("Empleado eliminado correctamente:", response.data);
          fetchEmpleados();
        })
        .catch((error) => {
          console.error("Error deleting empleado", error);
        });
    }
  };

  // Filtrar empleados por número de cédula
  const filteredEmpleados = searchTerm
    ? empleados.filter((empleado) =>
        empleado.documento.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : empleados;

  return (
    <>
      <div className="upperBarrGestionEmpleados">
        <div className="upperBarrGestionEmpleados_img">
          <img src="../public/copetran_logo.png" alt="" />
        </div>
        <div className="upperBarr_inputContainer">
          <img src="../public/lupa_icon.svg" alt="" />
          <input
            type="text"
            placeholder="Buscar por número de cédula"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="upperBarrButtonBuscarEmpleado">
          <button onClick={() => setSearchTerm("")}>Reset</button>
        </div>
      </div>
      <main className="gestionEmpleados_menu-container">
        <AsideMenu />
        <EmpleadosList empleados={filteredEmpleados} onDelete={handleDelete} />
      </main>
    </>
  );
};
