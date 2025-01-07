import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const EmpleadosList = ({ empleados, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const handleEdit = (empleado) => {
    navigate(`/editar-empleado/${empleado.id}`, { state: { empleado } });
  };

  const handleDelete = (id) => {
    if (window.confirm("Estas seguro de que deseas eliminar este empleado?")) {
      onDelete(id);
    }
  };

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
            {empleados.map((empleado) => (
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
                  <p>{empleado.rol}</p>
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
          <button>Contratar</button>
          <select name="" id=""></select>
          <button>Filtrar</button>
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
