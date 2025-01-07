import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import "../styles.css";

export const EditarEmpleado = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tipo_documento: "",
    documento: "",
    fecha_nacimiento: "",
    rol: "",
  });

  const location = useLocation();
  const { empleado } = location.state;

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
    if (empleado) {
      setFormData({
        nombre: empleado.nombre,
        apellido: empleado.apellido,
        correo: empleado.correo,
        tipo_documento: empleado.tipo_documento,
        documento: empleado.documento,
        fecha_nacimiento: empleado.fecha_nacimiento,
        rol: empleado.rol.id,
      });
    }
  }, [empleado]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put(`empleados/${empleado.id}/`, formData)
      .then((response) => {
        window.alert("Empleado editado con éxito!");
        navigate("/gestion-empleados");
      })
      .catch((error) => {
        console.error("Error editando empleado", error);
      });
  };

  return (
    <main className="editarEmpleados_main">
      <aside className="editarEmpleados_aside">
        <div className="editarEmpleadosAside_container">
          <img src="/copetran_logo.png" alt="logo" />
          <h2>Edición de Empleados</h2>
          <button onClick={() => navigate("/gestion-empleados")}>Salir</button>
        </div>
      </aside>
      <section className="editarEmpleados_section">
        <form onSubmit={handleSubmit} className="editarEmpleados_form">
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
            Editar
          </button>
        </form>
      </section>
    </main>
  );
};
