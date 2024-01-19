'use client'
import { useState } from 'react';
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavbarMenu() {
    const links = [
        {
            label: "Inicio",
            href: "/"
        },
        {
            label: "Nosotros",
            href: "nosotros"
        },
        {
            label: "Productos",
            href: "productos"
        },
        {
            label: "Contacto",
            href: "contacto"
        }
    ];

    const pathname = usePathname();

    // AGREGAR CAMBIO DE ACTIVE CLASS
    // CREO Q ES UN ACERCAMIENTO PERO COMO TODAVIA NO ESTAN LAS RUTAS ME CONFUNDE UN POCO, ACTUALIZAREMOS
    // CAMBIO DE OPINION SE VA A ABRIR Y CERRAR EN TODOS DISPOSITIVOS COMO SI FUESE MOBILE
    const [active, setActive] = useState("navbar-item active");
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
            {/* NO FUNCIONA EL ESTILO TODAVIA */}
            {
                links.map(link => {
                    return <li onClick={handleMenu} className={`${pathname === link.href ? active : ''} navbar-item`}><Link className='navbar-link' href={link.href}>{link.label}</Link></li>
                })
            }
        </ul>
    </nav>

}