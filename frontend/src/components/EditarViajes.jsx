import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const EditarViajes = () => {
  const navigate = useNavigate();
  const [vehiculos, setVehiculos] = useState([]);
  const [rutas, setRutas] = useState([]);
  const [formData, setFormData] = useState({
    vehiculo: "",
    ruta: "",
    fecha_salida: "",
    hora_salida: "",
    estado: "",
  });

  const location = useLocation();
  const { viaje } = location.state;

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

{console.log(viaje)}

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put(`viajes/${viaje.id}/`, formData)
      .then((response) => {
        window.alert("Viaje editado con exito!");
        navigate("/gestion-viajes");
      })
      .catch((error) => {
        console.error("Error creating viaje: ", error.response ? error.response.data : error);
      });
      
  };

  useEffect(() => {
    fetchRutas();
    fetchVehiculos();
    if (viaje) {
      setFormData({
        vehiculo: viaje.vehiculo,
        ruta: viaje.ruta,
        fecha_salida: viaje.fecha_salida,
        hora_salida: viaje.hora_salida,
        estado: viaje.estado,
      });
    }
  }, [viaje]);

  return (
    <>
      <main className="registerEdit_interface">
        <aside className="registerEdit_aside">
          <div className="registerEdit_aside-container">
            <img src="/copetran_logo.png" alt="" />
            <h2>Editor de Viajes</h2>
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
                  value={formData.numero_vehiculo}
                  required
                >
                <option value={viaje.vehiculo} key={viaje.vehiculo}>{viaje.numero_vehiculo}</option>
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
                <option value={viaje.ruta}>{viaje.origen} - {viaje.destino}</option>
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
            
            <div className="form-group">
                <label htmlFor="estado">Nuevo Estado:</label>
                <select name="estado" id="estado" onChange={handleChange} required>
                  <option value={viaje.estado}>{viaje.estado}</option>
                  <option value="En curso">En Curso</option>
                  <option value="Completado">Completado</option>
                  <option value="Cancelado">Cancelado</option>
                  <option value="Programado">Programado</option>
                </select>
              </div>

            <button className="submit-button" type="submit">
              Editar Viaje
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
