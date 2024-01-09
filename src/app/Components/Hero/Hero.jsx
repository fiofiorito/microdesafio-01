import styles from './Hero.module.css'

export function Hero() {
    return <div className={styles.heroDiv} >
        <h1 className={styles.title}>Electrodomesticos Capellari</h1>
        <img className={styles.img} src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/estas-son-marcas-electrodomesticos-fiables-ocu-2872363.jpg" />
    </div>
}