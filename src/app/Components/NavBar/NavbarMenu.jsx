'use client'
import { useState } from 'react';
import './Navbar.css';

export function NavbarMenu() {
    // AGREGAR CAMBIO DE ACTIVE CLASS
    // CREO Q ES UN ACERCAMIENTO PERO COMO TODAVIA NO ESTAN LAS RUTAS ME CONFUNDE UN POCO, ACTUALIZAREMOS
    // CAMBIO DE OPINION SE VA A ABRIR Y CERRAR EN TODOS DISPOSITIVOS COMO SI FUESE MOBILE
    const [active, setActive] = useState("navbar-item");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenu = () => {
        if (!isMenuClicked) {
            setActive("navbar-item active")
        } else {
            setActive("navbar-item")
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return <nav>
        <ul className="navbar-list">
            {/* NO FUNCIONA TODAVIA */}
            <li onClick={handleMenu} className={active}><a className="navbar-link" href="#">Inicio</a></li>
            <li onClick={handleMenu} className={active}><a className="navbar-link" href="#">Productos</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Quienes somos</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Contacto</a></li>
        </ul>
    </nav>

}