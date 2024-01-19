import { Navbar } from "../Components/NavBar/Navbar";

export const metadata = {
    title: 'Productos',
    description: 'Conoce nuestros productos, los mejjor precios los tenes aca!',
}

const Productos = () => {
    return <main className='main'>
        <Navbar />
        <h1>Esto es productos</h1>
    </main>
}

export default Productos;