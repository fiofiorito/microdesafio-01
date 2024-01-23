import { MockProducts } from "@/data/products";
import { Navbar } from "../Components/NavBar/Navbar";
import './Productos.css';

export const metadata = {
    title: 'Productos',
    description: 'Conoce nuestros productos, los mejjor precios los tenes aca!',
}

const Productos = () => {
    const products = MockProducts;
    return <main className='main'>
        <section className="container">
            <h1>Esto es productos</h1>
            <div className="product-cont">
                {
                    products.map(product => {
                        return <div key={product.id} className="product-card">
                            <h3>{product.titulo}</h3>
                            <p>{product.descripcion}</p>
                            <h4>${product.precio} ARS</h4>
                        </div>
                    })
                }
            </div>
        </section>


    </main>
}

export default Productos;