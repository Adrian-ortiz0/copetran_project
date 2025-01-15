import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const GenerarTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cliente, viaje, asiento } = location.state;

  const handleSubmit = () => {
    axiosInstance
      .post("/tiquetes")
      .then((response) => {
        window.alert("Ticket geenerado con exito!");
        navigate("/tiquetero-menu");
      })
      .catch((error) => {
        console.error("Error generating ticket" + error);
      });
  };

  return (
    <>
      <main className="registerEdit_interface">
        <aside className="registerEdit_aside">
          <div className="registerEdit_aside-container">
            <img src="../public/copetran_logo.png" alt="" />
            <h2>Confirmacion de venta de ticket</h2>
            <button
              onClick={() =>
                navigate("/seleccionar-asientos", { state: { cliente, viaje } })
              }
            >
              Salir
            </button>
          </div>
        </aside>
        <section className="registerData_section">
          <form className="forms" onSubmit={handleSubmit}>
            <h2>Generar Ticket</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cliente_nombre">Cliente Nombre:</label>
                <input
                  type="read"
                  name="cliente_nombre"
                  value={cliente.nombre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Cliente apellido:</label>
                <input
                  type="read"
                  name="cliente_apellido"
                  value={cliente.apellido}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <p>Precio: {viaje.precio_ruta}</p>
                <p>Vehiculo: {asiento.vehiculo_numero}</p>
                <p>
                  Viaje: {viaje.origen} - {viaje.destino}
                </p>
              </div>
            </div>

            <p>Asiento: {asiento.asiento_numero}</p>
          </form>
        </section>
      </main>
    </>
  );
};
