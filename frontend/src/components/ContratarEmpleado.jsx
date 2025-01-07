import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const ContratarEmpleado = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    tipo_documento: "Cedula",
    documento: "",
    fecha_nacimiento: "",
    rol: "",
  });

  const fetchRoles = () => {
    axiosInstance
      .get("/roles/")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("empleados/", formData)
      .then((response) => {
        window.alert("Empleado contratado con exito!");
        navigate("/gestion-empleados");
      })
      .catch((error) => {
        console.error("Error creating empleado", error);
      });
  };

  return (
    <>
      <main className="contratarEmpleados_main">
        <aside className="contratarEmpleados_aside">
          <div className="empleadosAside_container">
            <img src="../public/copetran_logo.png" alt="" />
            <h2>Contratacion de Empleados</h2>
            <button onClick={() => navigate("/gestion-empleados")}>
              Salir
            </button>
          </div>
        </aside>
        <section className="contratarEmpleados_section">
          <form onSubmit={handleSubmit} className="contrarEmpleados_form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tipo_documento">Tipo Documento:</label>
                <select
                  name="tipo_documento"
                  id="tipo_documento"
                  value={formData.tipo_documento}
                  onChange={handleChange}
                  required
                >
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
                <label htmlFor="documento">Documento:</label>
                <input
                  type="text"
                  id="documento"
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fecha_nacimiento">Fecha Nacimiento:</label>
                <input
                  type="date"
                  id="fecha_nacimiento"
                  name="fecha_nacimiento"
                  value={formData.fecha_nacimiento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rol">Rol:</label>
                <select
                  name="rol"
                  id="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un rol</option>
                  {roles.map((rol) => (
                    <option key={rol.id} value={rol.id}>
                      {rol.nombre}
                    </option>
                  ))}
                </select>
              </div>
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
