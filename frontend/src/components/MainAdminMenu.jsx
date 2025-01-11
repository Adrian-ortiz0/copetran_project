import { useNavigate } from "react-router-dom";

export const MainAdminMenu = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <section className="menu_button-container">
        <div className="div_button-container">
          <button
            onClick={() => navigateTo("/gestion-empleados")}
            className="gestion_empleados-button"
          >
            <img
              src="../public/empleados_icon.png"
              alt=""
              width={80}
              height={80}
            />
            <h3>Gestion de Empleados</h3>
          </button>
        </div>
        <div className="div_button-containerReverse">
          <button
            onClick={() => navigateTo("/gestion-vehiculos")}
            className="gestion_buses-button"
          >
            <h3>Gestion de Vehiculos</h3>

            <img src="../public/bus_icon.png" alt="" width={80} height={80} />
          </button>
        </div>
        <div className="div_button-container">
          <button
            onClick={() => navigateTo("/gestion-viajes")}
            className="gestion_viajes-button"
          >
            <img
              src="../public/ticket_icon.png"
              alt=""
              width={80}
              height={80}
            />
            <h3>Gestion de Viajes</h3>
          </button>
        </div>
      </section>
    </>
  );
};
