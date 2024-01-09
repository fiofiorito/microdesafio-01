import styles from './Navbar.module.css';

export function Navbar() {
    return <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Inicio</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Productos</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Quienes somos</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink} href="#">Contacto</a></li>
        </ul>
    </nav>
}