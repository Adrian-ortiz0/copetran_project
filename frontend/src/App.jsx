import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AdminLogin } from "./components/AdminLogin";
import { AdminMenu } from "./components/AdminMenu";
import { TiqueteroLogin } from "./components/TiqueteroLogin";
import { GestionEmpleados } from "./components/GestionEmpleados";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/tiquetero-login" element={<TiqueteroLogin />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/gestion-empleados" element={<GestionEmpleados />} />
      </Routes>
    </Router>
  );
}

export default App;
