import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AdminLogin } from "./components/AdminLogin";
import { AdminMenu } from "./components/AdminMenu";
import { TiqueteroLogin } from "./components/TiqueteroLogin";
import { GestionEmpleados } from "./components/GestionEmpleados";
import { ContratarEmpleado } from "./components/ContratarEmpleado";
import { EditarEmpleado } from "./components/EditarEmpleado";
import { GestionVehiculos } from "./components/GestionVehiculos";
import { RegistrarVehiculos } from "./components/RegistrarVehiculos";
import { EditarVehiculos } from "./components/EditarVehiculos";
import { GestionViajes } from "./components/GestionViajes";
import { RegistrarViaje } from "./components/RegistrarViaje";
import { EditarViajes } from "./components/EditarViajes";
import { GestionRutas } from "./components/GestionRutas";
import { RegistrarRutas } from "./components/RegistrarRutas";
import { TiqueteroMenu } from "./components/TiqueteroMenu";
import { GestionClientes } from "./components/GestionClientes";
import { RegistrarUsuarios } from "./components/RegistrarUsuarios";
import { VentaTickets } from "./components/VentaTickets";
import { SeleccionViajes } from "./components/SeleccionViajes";
import { SeleccionAsientos } from "./components/SeleccionAsientos";
import { GenerarTicket } from "./components/GenerarTicket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/tiquetero-login" element={<TiqueteroLogin />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/gestion-empleados" element={<GestionEmpleados />} />
        <Route path="/contratar-empleado" element={<ContratarEmpleado />} />
        <Route path="/editar-empleado/:id" element={<EditarEmpleado />} />
        <Route path="/gestion-vehiculos" element={<GestionVehiculos />} />
        <Route path="/registrar-vehiculo" element={<RegistrarVehiculos />} />
        <Route path="/editar-vehiculo/:id" element={<EditarVehiculos />} />
        <Route path="/gestion-viajes" element={<GestionViajes />} />
        <Route path="/registrar-viaje" element={<RegistrarViaje />} />
        <Route path="/editar-viaje/:id" element={<EditarViajes />} />
        <Route path="/rutas" element={<GestionRutas />} />
        <Route path="/crear-rutas" element={<RegistrarRutas />} />
        <Route path="/tiquetero-menu" element={<TiqueteroMenu />} />
        <Route path="/gestion-usuarios" element={<GestionClientes />} />
        <Route path="/registrar-usuarios" element={<RegistrarUsuarios/>} />
        <Route path="/venta-tickets" element={<VentaTickets />}/>
        <Route path="/seleccion-viajes" element={<SeleccionViajes />} />
        <Route path="/seleccionar-asientos" element={<SeleccionAsientos />} />
        <Route path="/generar-ticket" element={<GenerarTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
