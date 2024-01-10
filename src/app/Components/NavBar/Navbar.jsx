import styles from './Navbar.module.css';
import Image from 'next/image';


export function Navbar() {
    return <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Inicio</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Productos</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Quienes somos</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Contacto</a></li>
        </ul>
        <Image src={"/house-storm-2-svgrepo-com.png"} width={40} height={40} />
    </nav>
}