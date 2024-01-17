'use client'
import { useState } from 'react';
import './Navbar.css';

export function NavbarMenu() {
    // AGREGAR CAMBIO DE ACTIVE CLASS
    const [active, setActive] = useState("");

    return <nav>
        <ul className="navbar-list">
            <li className="navbar-item active"><a className="navbar-link" href="#">Inicio</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Productos</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Quienes somos</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Contacto</a></li>
        </ul>
    </nav>

}