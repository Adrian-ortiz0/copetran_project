import React from 'react';

export const ViajesListVisualizer = ({filteredData, indexes}) => {

  return (
    <div className="tableList">
      <div className="tableList_index">
        {indexes.map((index) => (
          <div key={index.id}>
            <p>{index}</p>
          </div>
        ))}
      </div>
      <div className="tableList_data-container">
        {filteredData.map((data) => (
          <div className="tableList_data" key={data.id}>
            <div>
              <p>{data.id}</p>
            </div>
            <div>
              <p>{data.fecha_salida}</p>
            </div>
            <div>
              <p>{data.hora_salida}</p>
            </div>
            <div>
              <p>{data.numero_vehiculo}</p>
            </div>
            <div>
                <p>{data.origen + " - " + data.destino}</p>
            </div>
            <div>
                <p>Precio</p>
            </div>
            <div>
                <input type="checkbox" name="viaje" id="viaje" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
