import Link from "next/link";
import Button from "./Components/Button/Button";
import './not-found.css';
import Image from "next/image";

const NotFound = () => {
    return <main className="container">
        <Image src='/no-results.png' width={220} height={200} />
        <h1>Ups! Hubo un error</h1>
        <p>La pagina que estas buscando no existe.</p>
        <Link href='/'><Button btnText='Volver a inicio' /></Link>
    </main>
}

export default NotFound;