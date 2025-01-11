import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import { EmpleadosMenu } from "./EmpleadosMenu";
import { AsideMenu } from "./AsideMenu";
import { UpperBarr } from "./UpperBarr";

export const GestionEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredEmpleados = searchTerm
    ? empleados.filter((empleado) =>
        empleado.documento.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : empleados;

  return (
    <>
      <UpperBarr
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder={"Buscar por numero de cedula"}
      />
      <main className="gestion_menu-container">
        <AsideMenu />
        <EmpleadosMenu empleados={filteredEmpleados} onDelete={handleDelete} />
      </main>
    </>
  );
};
