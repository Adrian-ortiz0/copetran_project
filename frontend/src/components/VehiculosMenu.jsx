import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VehiculosList } from "./VehiculosList";
import axiosInstance from "../axiosConfig";

export const VehiculosMenu = ({ vehiculos, onDelete }) => {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState();
  const [tipoVehiculo, setTipoVehiculo] = useState([]);

  const fetchTipoVehiculos = () => {
    axiosInstance
      .get("/tipo_vehiculos")
      .then((response) => {
        setTipoVehiculo(response.data);
      })
      .catch((error) => {
        console.error("Fetching type vehicles error" + error);
      });
  };

  useEffect(() => {
    fetchTipoVehiculos();
  }, []);

  const handleVehicleChange = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const filteresVehicles = selectedVehicle
    ? vehiculos.filter(
        (vehiculo) => vehiculo.tipo_vehiculo.toString() === selectedVehicle
      )
    : vehiculos;

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
          filteredData={filteresVehicles}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          indexes={indexes}
        />
        <div className="tableList_button-container">
          <button onClick={() => navigate("/registrar-vehiculo")}>
            Registrar
          </button>
          <select
            name="filtro_vehiculo"
            id="filtro_vehiculo"
            value={selectedVehicle}
            onChange={handleVehicleChange}
          >
            <option value="">Filtro por Tipo</option>
            {tipoVehiculo.map((vehiculo) => (
              <option key={vehiculo.id} value={vehiculo.id.toString()}>
                {vehiculo.nombre}
              </option>
            ))}
          </select>
        </div>
      </main>
    </>
  );
};