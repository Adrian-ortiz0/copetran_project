import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import { EmpleadosList } from "./EmpleadosList";

export const EmpleadosMenu = ({ empleados, onEdit, onDelete }) => {
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

  const indexes = [
    "ID",
    "Nombre",
    "Apellido",
    "Documento",
    "Edad",
    "Rol",
    "Acciones",
  ];

  return (
    <>
      <main className="tableList_container">
        <EmpleadosList
          filteredData={filteredEmpleados}
          calculateAge={calculateAge}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          indexes={indexes}
        />
        <div className="tableList_button-container">
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
