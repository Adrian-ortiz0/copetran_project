import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import { EmpleadosList } from "./EmpleadosList";
import { AsideMenu } from "./AsideMenu";

export const GestionEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [editingEmpleado, setEditingEmpleado] = useState(null);
  const fetchEmpleados = () => {
    axiosInstance
      .get("empleados/")
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  };
  useEffect(() => {
    fetchEmpleados();
  }, []);
  const handleEdit = (empleado) => {
    setEditingEmpleado(empleado);
  };
  const handleDelete = (id) => {
    axiosInstance
      .delete(`empleados/${id}`)
      .then((response) => {
        fetchEmpleados();
      })
      .catch((error) => {
        console.error("Error deleting empleado", error);
      });
  };

  return (
    <>
      <div className="upperBarrGestionEmpleados">
        <div className="upperBarrGestionEmpleados_img">
          <img src="../public/copetran_logo.png" alt="" />
        </div>
        <div className="upperBarr_inputContainer">
          <img src="../public/lupa_icon.svg" alt="" />
          <input type="text" />
        </div>
        <div className="upperBarrButtonBuscarEmpleado">
          <button>Buscar Empleado</button>
        </div>
      </div>
      <main className="gestionEmpleados_menu-container">
        <AsideMenu />
        <EmpleadosList empleados={empleados} onDelete={handleDelete} />
      </main>
    </>
  );
};
