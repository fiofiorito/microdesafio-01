'use client'
import { useState } from 'react';
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartWidget from './CartWidget/CartWidget';

export default function NavbarMenu() {
    const links = [
        {
            key: 1,
            label: "Inicio",
            href: "/"
        },
        {
            key: 2,
            label: "Nosotros",
            href: "nosotros"
        },
        {
            key: 3,
            label: "Productos",
            href: "productos"
        },
        {
            key: 4,
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
            setNavbar("navbar visible slide-from-left")
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
                        return <li key={link.key} onClick={handleMenu} className='navbar-item'><Link className='navbar-link' href={link.href}>{link.label}</Link></li>
                    })
                }
                <Link href='cart'><CartWidget /></Link>
            </ul>
        </nav>
    </div>


}