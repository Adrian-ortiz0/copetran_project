import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AsientosList = ({ asientos, indexes, cliente, viaje }) => {

  const navigate = useNavigate();

  const handleSelectAsiento = (asiento) => {
    navigate("/generar-ticket", { state: { cliente, viaje, asiento } });
  }

  return (
    <div className='tableList'>
      <div className='tableList_index'>
        {indexes.map((index) => (
          <div key={index.id}>
              <p>{index}</p>
          </div>
        ))}
      </div>
      <div className='tableList_data-container'>
        {asientos.map((data) => (
          <div className='tableList_data' key={data.id}>
            <div>
              <p>{data.id}</p>
            </div>
            <div>
              {data.asiento_numero}
            </div>
            <div>
              {data.ocupado == false ? "Libre" : "Ocupado"}
            </div>
            <div className="tableList_accionesButtonsAsientos ">
              <button onClick={() => handleSelectAsiento(data)}>
                <img src="../public/buy_icon.png" alt="" width={20} height={20}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
