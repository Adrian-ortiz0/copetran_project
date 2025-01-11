import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import "../styles.css";

export const EditarVehiculos = () => {
  const [tipoVehiculos, setTipoVehiculos] = useState([]);
  const [formData, setFormData] = useState({
    placa: "",
    numero_vehiculo: "",
    estado: "",
    tipo_vehiculo: "",
  });
  const location = useLocation();
  const { vehiculo } = location.state;

  const fetchTipoVehiculos = () => {
    axiosInstance
      .get("/tipo_vehiculos")
      .then((response) => {
        setTipoVehiculos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tipo vehiculos" + error);
      });
  };
  useEffect(() => {
    fetchTipoVehiculos();
    if (vehiculo) {
      setFormData({
        placa: vehiculo.placa,
        numero_vehiculo: vehiculo.numero_vehiculo,
        estado: vehiculo.estado,
        tipo_vehiculo: vehiculo.tipo_vehiculo,
      });
    }
  }, [vehiculo]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put(`vehiculos/${vehiculo.id}/`, formData)
      .then((response) => {
        window.alert("Vehiculo editado con exito!");
        navigate("/gestion-vehiculos");
      })
      .catch((error) => {
        console.error("Error creating vehicle", error);
      });
  };
  return (
    <main className="registerEdit_interface">
      <aside className="registerEdit_aside">
        <div className="registerEdit_aside-container">
          <img src="/copetran_logo.png" alt="" />
          <h2>Editar Vehiculos</h2>
          <button onClick={() => navigate("/gestion-vehiculos")}>Salir</button>
        </div>
      </aside>
      <section className="registerData_section">
        <form className="forms" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="placa">Placa:</label>
              <input
                type="text"
                id="placa"
                name="placa"
                value={formData.placa}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numero_vehiculo">Numero Vehiculo:</label>
              <input
                type="text"
                id="numero_vehiculo"
                name="numero_vehiculo"
                value={formData.numero_vehiculo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <select
              name="estado"
              id="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="">Estado </option>
              <option value="Activo">Activo</option>
              <option value="Mantenimiento">Mantenimiento</option>
              <option value="Fuera de servicio">Fuera de servicio</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tipo_vehiculo">Tipo Vehiculo:</label>
            <select
              name="tipo_vehiculo"
              id="tipo_vehiculo"
              value={formData.tipo_vehiculo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un tipo de vehiculo</option>
              {tipoVehiculos.map((tipoVehiculo) => (
                <option key={tipoVehiculo.id} value={tipoVehiculo.id}>
                  {tipoVehiculo.nombre}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Editar
          </button>
        </form>
      </section>
    </main>
  );
};
