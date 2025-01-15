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
                <label htmlFor="precio_ruta">Precio:</label>
                <input type="read" name="precio_ruta" value={viaje.precio_ruta}/>
              </div>

              <div className="form-group">
                  <label htmlFor="vehiculo_numero">Vehiculo Numero:</label>
                  <input type="read" value={asiento.vehiculo_numero} name="vehiculo_numero" />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group">
              <label htmlFor="viaje">Origen:</label>
              <input type="origen" value={viaje.origen}/>
            </div>
            <div className="form-group">
              <label htmlFor="viaje">Destino:</label>
              <input type="destino" value={viaje.destino} />
            </div>
            </div>
            <p>Asiento: {asiento.asiento_numero}</p>
          </form>
        </section>
      </main>
    </>
  );
};
