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

    const [hamburgerLine, setHamburgerLine] = useState("line unclicked");
    const [navbar, setNavbar] = useState("navbar hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenu = () => {
        if (!isMenuClicked) {
            setHamburgerLine("line clicked");
            setNavbar("navbar visible")
        } else {
            setHamburgerLine("line unclicked");
            setNavbar("navbar hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }


    return <div className='navbar-container'>
        <div className='hamburger' onClick={handleMenu}>
            <div className={hamburgerLine}></div>
            <div className={hamburgerLine}></div>
            <div className={hamburgerLine}></div>
        </div>
        <nav className={navbar}>
            <ul className="navbar-list">
                {
                    links.map(link => {
                        return <li onClick={handleMenu} className='navbar-item'><Link className='navbar-link' href={link.href}>{link.label}</Link></li>
                    })
                }
            </ul>
        </nav>
    </div>


}