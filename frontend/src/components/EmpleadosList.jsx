import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const EmpleadosList = ({ empleados, onEdit, onDelete }) => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const fetchRoles = () => {
    axiosInstance
      .get("/roles/")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Fetching error", error);
      });
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const navigate = useNavigate();

  const handleEdit = (empleado) => {
    navigate(`/editar-empleado/${empleado.id}/`, { state: { empleado } });
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
      onDelete(id);
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const filteredEmpleados = selectedRole
    ? empleados.filter((empleado) => empleado.rol.toString() === selectedRole)
    : empleados;

  return (
    <>
      <main className="empleadosList_container">
        <div className="empleadosList">
          <div className="empleadosList_index">
            <div>
              <p>ID</p>
            </div>
            <div>
              <p>Nombre</p>
            </div>
            <div>
              <p>Apellido</p>
            </div>
            <div>
              <p>Documento</p>
            </div>
            <div>
              <p>Edad</p>
            </div>
            <div>
              <p>Rol</p>
            </div>
            <div>
              <p>Acciones</p>
            </div>
          </div>
          <div className="empleadosList_empleados-container">
            {filteredEmpleados.map((empleado) => (
              <div className="empleadosList_empleado" key={empleado.id}>
                <div>
                  <p>{empleado.id}</p>
                </div>
                <div>
                  <p>{empleado.nombre}</p>
                </div>
                <div>
                  <p>{empleado.apellido}</p>
                </div>
                <div>
                  <p>{empleado.documento}</p>
                </div>
                <div>
                  <p>{calculateAge(empleado.fecha_nacimiento)}</p>
                </div>
                <div>
                  <p>{empleado.rol_nombre}</p>
                </div>
                <div className="empleadosList_accionesButtons">
                  <button onClick={() => handleEdit(empleado)}>
                    <img
                      src="../public/edit_icon.svg"
                      alt=""
                      width={18}
                      height={20}
                    />
                  </button>
                  <button onClick={() => handleDelete(empleado.id)}>
                    <img
                      src="../public/delete_icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="empleadosList_button-containers">
          <button onClick={() => navigate("/contratar-empleado")}>
            Contratar
          </button>
          <select
            name="filtro_rol"
            id="filtro_rol"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="">Filtro por rol</option>
            {roles.map((rol) => (
              <option key={rol.id} value={rol.id.toString()}>
                {rol.nombre}
              </option>
            ))}
          </select>
        </div>
      </main>
    </>
  );
};

const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const difference = Date.now() - birthDate.getTime();
  const age = new Date(difference).getUTCFullYear() - 1970;
  return age;
};
