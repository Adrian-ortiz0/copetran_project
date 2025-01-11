import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AsideMenuTiquets = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };
  return (
    <aside className='aside_menu'>
        <div className='aside_menu-buttons'>
            <button onClick={() => navigateTo("/tiquetero-menu")}>
                <img src="../public/home_icon.png" alt="" width={50} height={50}/>
            </button>
            <button onClick={() => navigateTo("/venta-tickets")}>
                <img src="../public/ticket_icon.png" alt="" width={50} height={50} />
            </button>
            <button onClick={() => navigateTo("/gestion-usuarios")}>
                <img src="../public/users_icon.png" alt="" width={50} height={50}/>
            </button>
            <button onClick={() => navigateTo("/")}>
                <img src="../public/exit_icon.png" alt="" width={50} height={50}/>
            </button>
        </div>
    </aside>
  )
}
