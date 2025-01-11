import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const RegistrarRutas = () => {
  const navigate = useNavigate();
  const [ciudades, setCiudades] = useState([]);
  const [formData, setFormData] = useState({
    precio: "",
    duracion_estimada: "",
    origen: "",
    destino: "",
  });
  const fetchCiudades = () => {
    axiosInstance
      .get("/ciudades")
      .then((response) => {
        setCiudades(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ciudades" + error);
      });
  };

  useEffect(() => {
    fetchCiudades();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("rutas/", formData)
      .then((response) => {
        window.alert("Ruta registrada con exito!");
        navigate("/gestion-viajes");
      })
      .catch((error) => {
        console.error("Error creating ruta " + error);
      });
  };

  return (
    <>
      <main className="registerEdit_interface">
        <aside className="registerEdit_aside">
          <div className="registerEdit_aside-container">
            <img src="../public/copetran_logo.png" alt="" />
            <h2>Registro de Rutas</h2>
            <button onClick={() => navigate("/gestion-viajes")}>Salir</button>
          </div>
        </aside>
        <section className="registerData_section">
          <form className="forms" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="destino">Origen:</label>
                <select
                  name="origen"
                  id="origen"
                  required
                  onChange={handleChange}
                  value={formData.origen}
                >
                  <option value="">Selecciona origen</option>
                  {ciudades.map((ciudad) => (
                    <option value={ciudad.id} key={ciudad.id}>
                      {ciudad.nombre} - {ciudad.departamento}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="destino">Destino:</label>
                <select
                  name="destino"
                  id="destino"
                  required
                  onChange={handleChange}
                  value={formData.destino}
                >
                  <option value="">Selecciona destino</option>
                  {ciudades.map((ciudad) => (
                    <option value={ciudad.id} key={ciudad.id}>
                      {ciudad.nombre} - {ciudad.departamento}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="Precio">Precio:</label>
                <input
                  type="number"
                  value={formData.precio}
                  name="precio"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duracion_estimada">Duracion (Horas):</label>
                <input
                  type="number"
                  value={formData.duracion_estimada}
                  name="duracion_estimada"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="submit-button" type="submit">
              Registrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
