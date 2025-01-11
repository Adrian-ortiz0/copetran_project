import React, { useEffect, useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const RegistrarViaje = () => {
  const navigate = useNavigate();
  const [vehiculos, setVehiculos] = useState([]);
  const [rutas, setRutas] = useState([]);
  const [formData, setFormData] = useState({
    vehiculo: "",
    ruta: "",
    fecha_salida: "",
    hora_salida: "",
    estado: "Programado",
  });

  const fetchVehiculos = () => {
    axiosInstance
      .get("/vehiculos")
      .then((response) => {
        setVehiculos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehiculos" + error);
      });
  };

  const fetchRutas = () => {
    axiosInstance
      .get("/rutas")
      .then((response) => {
        setRutas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rutas" + error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("viajes/", formData)
      .then((response) => {
        window.alert("Viaje registrado con exito!");
        navigate("/gestion-viajes");
      })
      .catch((error) => {
        console.error("Error creating viaje" + error);
      });
  };

  useEffect(() => {
    fetchRutas();
    fetchVehiculos();
  }, []);

  return (
    <>
      <main className="registerEdit_interface">
        <aside className="registerEdit_aside">
          <div className="registerEdit_aside-container">
            <img src="../public/copetran_logo.png" alt="" />
            <h2>Registro de Viajes</h2>
            <button onClick={() => navigate("/gestion-viajes")}>Salir</button>
          </div>
        </aside>
        <section className="registerData_section">
          <form className="forms" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehiculo">Vehiculo:</label>
                <select
                  name="vehiculo"
                  id="vehiculo"
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un vehiculo</option>
                  {vehiculos.map((vehiculo) => (
                    <option value={vehiculo.id} key={vehiculo.id}>
                      {vehiculo.numero_vehiculo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="ruta">Ruta:</label>
                <select name="ruta" id="ruta" onChange={handleChange} required>
                  <option value="">Selecciona una ruta</option>
                  {rutas.map((ruta) => (
                    <option value={ruta.id} key={ruta.id}>
                      {ruta.origen_nombre} - {ruta.destino_nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fecha_salida">Fecha Salida:</label>
                <input
                  type="date"
                  id="fecha_salida"
                  name="fecha_salida"
                  value={formData.fecha_salida}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="hora_salida">Hora Salida:</label>
                <input
                  type="time"
                  id="hora_salida"
                  name="hora_salida"
                  value={formData.hora_salida}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button className="submit-button" type="submit">
              Registrar Viaje
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
