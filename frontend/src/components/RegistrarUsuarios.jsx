import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const RegistrarUsuarios = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipo_documento: "",
    documento: "",
    fecha_nacimiento: "",
    telefono: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post("clientes/", formData)
      .then((response) => {
        window.alert("Cliente registrado exitosamente");
        navigate();
      })
      .catch((error) => {
        console.error("Error creating cliente" + error);
      });
  };

  return (
    <>
      <main className="registerEdit_interface">
        <aside className="registerEdit_aside">
          <div className="registerEdit_aside-container">
            <img src="../public/copetran_logo.png" alt="" />
            <h2>Registro de clientes</h2>
            <button onClick={() => navigate("/gestion-usuarios")}>Salir</button>
          </div>
        </aside>
        <section className="registerData_section">
          <form onSubmit={handleSubmit} className="forms">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  name="nombre"
                  id="nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  value={formData.apellido}
                  onChange={handleChange}
                  name="apellido"
                  id="apellido"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tipo_documento">Tipo de documento:</label>
                <select
                  name="tipo_documento"
                  id="tipo_documento"
                  onChange={handleChange}
                  value={formData.tipo_documento}
                  required
                >
                  <option value="">Elegir Documento</option>
                  <option value="Cedula">Cedula</option>
                  <option value="Tarjeta de identidad">
                    Tarjeta de identidad
                  </option>
                  <option value="Cedula de extranjeria">
                    Cedula de extranjeria
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="documeto">Numero de documento:</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="documento"
                  value={formData.documento}
                  required
                  id="documento"
                />
              </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                    <input type="date" onChange={handleChange} name="fecha_nacimiento" id="fecha_nacimiento" value={formData.fecha_nacimiento} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="text" onChange={handleChange} name="telefono" id="telefono" value={formData.telefono} required />
                </div>
            </div>

            <button className="submit-button" type="submit">
              Registrar Cliente
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
