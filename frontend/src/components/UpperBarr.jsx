import "../styles.css";

export const UpperBarr = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="upperBarrGestionEmpleados">
      <div className="upperBarrGestionEmpleados_img">
        <img src="../public/copetran_logo.png" alt="" />
      </div>
      <div className="upperBarr_inputContainer">
        <img src="../public/lupa_icon.svg" alt="" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="upperBarrButtonBuscarEmpleado">
        <button onClick={() => setSearchTerm("")}>Reset</button>
      </div>
    </div>
  );
};
