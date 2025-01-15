import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const GenerarTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cliente, viaje, asiento } = location.state;

  function generarNumeroFactura() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  const today = new Date();
  const fechaActual =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

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

  const actualizarEstadoAsiento = (idAsiento) => {
    axiosInstance
      .put(`viaje_asientos/${idAsiento}/`, { ocupado: true })
      .then((response) => {
        console.log("Estado ocupado");
      })
      .catch((error) => {
        console.error("Error ocupando asiento" + error);
      });
  };

  const generarPDF = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(20);
    doc.text("Ticket de Viajes - Copetran", 20, 20);
  
    const imgURL = `${window.location.origin}/copetran_logo2.png`;
    const img = new Image();
    img.src = imgURL;
  
    img.onload = () => {
      doc.addImage(img, "PNG", 20, 15, 50, 50);
  
      doc.setFontSize(12);
      doc.text(`Nombre: ${cliente.nombre} ${cliente.apellido}`, 20, 60);
      doc.text(`Vehículo: ${asiento.vehiculo_numero}`, 20, 70);
      doc.text(`Origen: ${viaje.origen}`, 20, 80);
      doc.text(`Destino: ${viaje.destino}`, 20, 90);
      doc.text(`Asiento: ${asiento.asiento_numero}`, 20, 100);
      doc.text(`Método de Pago: ${formData.tipo_pago}`, 20, 110);
      doc.text(`Fecha: ${fechaActual}`, 20, 120);
  
      doc.autoTable({
        startY: 130,
        head: [["Descripción", "Precio"]],
        body: [
          ["Precio del Viaje", viaje.precio_ruta],
          ["Descuento", formData.descuento],
          ["Total con Descuento", formData.total_con_descuento],
        ],
      });
  
      doc.setFontSize(10);
      doc.text(
        "Gracias por viajar con Copetran",
        20,
        doc.internal.pageSize.height - 10
      );
  
      doc.save(`ticket_${formData.numero_factura}.pdf`);
    };
  
    img.onerror = () => {
      console.error("Error al cargar la imagen");
    };
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("tiquetes/", formData)
      .then((response) => {
        window.alert("¡Ticket generado con éxito!");
        actualizarEstadoAsiento(asiento.id);
        generarPDF();
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
