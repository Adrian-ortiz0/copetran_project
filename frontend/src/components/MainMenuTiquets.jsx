import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles.css";

export const MainMenuTiquets = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

  return (
    <>
        <section className='menu_button-container'>
            <div className='div_button-container'>
                <button onClick={() => navigateTo("/venta-tickets")}>
                    <img src="../public/ticket_icon.png" alt="" width={80} height={80}/>
                    <h3>Venta de Tickets</h3>
                </button>
            </div>
            <div className='div_button-containerReverse'>
                <button onClick={() => navigateTo("/gestion-usuarios")}>
                    <h3>Gestion Usuarios</h3>
                    <img src="../public/users_icon.png" alt="" width={80} height={80}/>
                </button>
            </div>
        </section>
    </>
  )
}
