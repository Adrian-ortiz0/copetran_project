import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export const GenerarTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cliente, viaje, asiento } = location.state;

  function generarNumeroFactura() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  const today = new Date();
  const fechaActual = today.getFullYear() + '-' + 
    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
    String(today.getDate()).padStart(2, '0');


  const [formData, setformData] = useState({
    numero_factura: generarNumeroFactura(),
    tipo_pago: "",
    descuento: 0,
    total_con_descuento: viaje.precio_ruta,
    fecha_venta: fechaActual,
    viaje_asiento: asiento.id, 
    cliente: cliente.id, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      if (name === "descuento") {
        newFormData.total_con_descuento =
          viaje.precio_ruta - parseFloat(value || 0);
      }
      return newFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("tiquetes/", formData)
      .then((response) => {
        window.alert("¡Ticket generado con éxito!");
        navigate("/tiquetero-menu");
      })
      .catch((error) => {
        console.error(
          "Error generando el ticket: ",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <main className="registerEdit_interface">
      <aside className="registerEdit_aside">
        <div className="registerEdit_aside-container">
          <img src="../public/copetran_logo.png" alt="Copetran Logo" />
          <h2>Confirmación de venta de ticket</h2>
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
                type="text"
                name="cliente_nombre"
                value={cliente.nombre}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="cliente_apellido">Cliente Apellido:</label>
              <input
                type="text"
                name="cliente_apellido"
                value={cliente.apellido}
                readOnly
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="precio_ruta">Precio:</label>
              <input
                type="text"
                name="precio_ruta"
                value={viaje.precio_ruta}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehiculo_numero">Vehículo Número:</label>
              <input
                type="text"
                value={asiento.vehiculo_numero}
                name="vehiculo_numero"
                readOnly
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="viaje_origen">Origen:</label>
              <input
                type="text"
                value={viaje.origen}
                name="viaje_origen"
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="viaje_destino">Destino:</label>
              <input
                type="text"
                value={viaje.destino}
                name="viaje_destino"
                readOnly
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="asiento_numero">Asiento:</label>
              <input
                type="text"
                value={asiento.asiento_numero}
                name="asiento_numero"
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="medio_pago">Método de Pago:</label>
              <select
                name="tipo_pago"
                id="medio_pago"
                required
                onChange={handleChange}
              >
                <option value="">Elige el método de pago</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Efectivo">Efectivo</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="descuento">Descuento:</label>
              <input
                type="number"
                name="descuento"
                value={formData.descuento}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="total_con_descuento">Total:</label>
              <input
                type="number"
                name="total_con_descuento"
                value={formData.total_con_descuento}
                readOnly
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Comprar
          </button>
        </form>
      </section>
    </main>
  );
};
