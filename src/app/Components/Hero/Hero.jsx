import styles from './Hero.module.css'
import Image from 'next/image'
export function Hero() {
    return <section className={styles.heroSection} >
        <div className={styles.heroDivText}>
            <h1 className={styles.title}>Electrodomesticos Capellari</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lacus gravida, tristique ex sit amet, suscipit dolor.</p>
            <button className={styles.btn}>Lorem Ipsum</button>
        </div>
        <div>
            <Image src={"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/estas-son-marcas-electrodomesticos-fiables-ocu-2872363.jpg"} width={500} height={300} />
        </div>
    </section>
}