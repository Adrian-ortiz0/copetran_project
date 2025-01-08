import React from "react";
import { useNavigate } from "react-router-dom";
import { VehiculosList } from "./VehiculosList";

export const VehiculosMenu = ({ vehiculos, onDelete }) => {
  const navigate = useNavigate();
  const handleEdit = (vehiculo) => {
    navigate(`/editar-vehiculo/${vehiculo.id}/`, { state: { vehiculo } });
  };
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este vehiculo?")) {
      onDelete(id);
    }
  };
  const indexes = [
    "ID",
    "Placa",
    "Numero",
    "Estado",
    "Tipo Vehiculo",
    "Acciones",
  ];
  return (
    <>
      <main className="tableList_container">
        <VehiculosList
          filteredData={vehiculos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          indexes={indexes}
        />
      </main>
    </>
  );
};
