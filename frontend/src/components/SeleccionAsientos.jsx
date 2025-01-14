import React from 'react'
import { AsideMenu } from './AsideMenu'
import { AsientosList } from './AsientosList'

export const SeleccionAsientos = () => {
  return (
    <>
    
    <div className="upperBarr">
        <div className="upperBarr_img">
          <img src="../public/copetran_logo.png" alt="" />
        </div>
        <h2>Asientos Disponibles</h2>
      </div>
    <main className='gestion_menu-container'>
        <AsideMenu />
        <main className='tableList_container'>
            <AsientosList />
        </main>
    </main>
    </>
  )
}
