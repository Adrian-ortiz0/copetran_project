import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AdminLogin } from "./components/AdminLogin";
import { AdminMenu } from "./components/AdminMenu";
import { TiqueteroLogin } from "./components/TiqueteroLogin";
import { GestionEmpleados } from "./components/GestionEmpleados";
import { ContratarEmpleado } from "./components/ContratarEmpleado";
import { EditarEmpleado } from "./components/EditarEmpleado";
import { GestionVehiculos } from "./components/GestionVehiculos";

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
      </Routes>
    </Router>
  );
}

export default App;
