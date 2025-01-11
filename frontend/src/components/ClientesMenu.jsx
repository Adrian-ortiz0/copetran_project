import React from "react";
import { useNavigate } from "react-router-dom";
import { ClientesList } from "./ClientesList";

export const ClientesMenu = ({ clientes, onDelete }) => {
  const navigate = useNavigate();
  const indexes = [
    "ID",
    "Nombre",
    "Apellido",
    "Tipo Documento",
    "Documento",
    "Acciones",
  ];
  const handleEdit = (cliente) => {
    navigate(`editar-cliente/${cliente.id}/`, { state: { cliente } });
  };
  const handleDelete = (id) => {
    if (window.confirm("¿Estas seguro de que deseas eliminar este cliente?")) {
      onDelete(id);
    }
  };
  return (
    <>
      <main className="tableList_container">
        <ClientesList
          filteredData={clientes}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          indexes={indexes}
        />
        <div className="tableList_button-container">
            <button onClick={() => navigate("/registrar-usuarios")}>
                Nuevo Usuario
            </button>
        </div>
      </main>
    </>
  );
};
