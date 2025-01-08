import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import { UpperBarr } from "./UpperBarr";
import { AsideMenu } from "./AsideMenu";
import { VehiculosMenu } from "./VehiculosMenu";

export const GestionVehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchVehiculos = () => {
    axiosInstance
      .get("vehiculos/")
      .then((response) => {
        setVehiculos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehiculos", error);
      });
  };

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este vehiculo?")) {
      axiosInstance
        .delete(`vehiculos/${id}/`)
        .then((response) => {
          alert("Vehiculo eliminado correctamente");
          fetchVehiculos();
        })
        .catch((error) => {
          console.error("Error deleting vehiculo" + error);
        });
    }
  };
  const filteredVehiculos = searchTerm
    ? vehiculos.filter((vehiculo) =>
        vehiculo.numero_vehiculo
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : vehiculos;

  return (
    <>
      <UpperBarr
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder={"Buscar por numero de vehiculo"}
      />
      <main className="gestionEmpleados_menu-container">
        <AsideMenu />
        <VehiculosMenu vehiculos={filteredVehiculos} onDelete={handleDelete} />
      </main>
    </>
  );
};
