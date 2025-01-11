import React from 'react'

export const RutasList = ({filteredData, handleDelete, handleEdit, indexes}) => {

  return (
    <div className='tableList'>
        <div className='tableList_index'>
            {indexes.map((index)=>(
                <div key={index.id}>
                    <p>{index}</p>
                </div>
            ))}
        </div>
        <div className='tableList_data-container'>
            {filteredData.map((data) => (
                <div className='tableList_data' key={data.id}>
                    <div>
                        <p>{data.id}</p>
                    </div>
                    <div>
                        <p>{data.origen_nombre}</p>
                    </div>
                    <div>
                        <p>{data.destino_nombre}</p>
                    </div>
                    <div>
                        <p>{data.precio}</p>
                    </div>
                    <div>
                        <p>{data.duracion_estimada + " Horas"}</p>
                    </div>
                    <div className='tableList_accionesButtons'>
                        <button onClick={() => handleEdit(data)}>
                        <img
                            src="../public/edit_icon.svg"
                            alt=""
                            width={18}
                            height={20}
                            />
                        </button>
                        <button onClick={() => handleDelete(data.id)}>
                        <img
                            src="../public/delete_icon.svg"
                            alt=""
                            width={20}
                            height={20}
                        />
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
