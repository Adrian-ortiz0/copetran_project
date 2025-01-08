import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import axiosInstance from "../axiosConfig";

export const RegistrarVehiculos = () => {
  const navigate = useNavigate();
  const [tipoVehiculos, setTipoVehiculos] = useState([]);
  const [formData, setformData] = useState({
    placa: "",
    numero_vehiculo: "",
    estado: "",
    tipo_vehiculo: "",
  });

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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("vehiculos/", formData)
      .then((response) => {
        window.alert("Vehiculo registrado con exito!");
        navigate("/gestion-vehiculos");
      })
      .catch((error) => {
        console.error("Error creating vehicle", error);
      });
  };

  return (
    <>
      <main className="registerEdit_interface">
        <aside className="registerEdit_aside">
          <div className="registerEdit_aside-container">
            <img src="../public/copetran_logo.png" alt="" />
            <h2>Registro de Vehiculos</h2>
            <button onClick={() => navigate("/gestion-vehiculos")}>
              Salir
            </button>
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
                <option value="Mantenimiento">Mantenimiento</option>7
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
              Contratar
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
