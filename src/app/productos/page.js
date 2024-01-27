import { MockProducts } from "@/data/products";
import './Productos.css';
import { Hero } from "../Components/Hero/Hero";
import ProductCard from "../Components/ProductCard/ProductCard";

export const metadata = {
    title: 'Productos',
    description: 'Conoce nuestros productos, los mejjor precios los tenes aca!',
}

const Productos = () => {
    const heroData = {
        title: 'Los mejores electrodomésticos del mercado',
        text: 'La misma calidad de siempre, ahora también en el mundo digital',
        img: '/electric-appliance.png',
        alt: 'lavarropas, radio, heladera y microhondas'
    }

    const products = MockProducts;

    return <main className='main'>
        <section className="container">
            <Hero title={heroData.title} text={heroData.text} img={heroData.img} alt={heroData.alt} />

            <div className='section-line container' />

            <div className="product-cont">
                {
                    products.map(product => {
                        return <ProductCard
                            id={product.id}
                            img={product.image}
                            name={product.titulo}
                            link={product.category}
                            linkTxt='Ver mas en esta categoria'
                        />
                    })
                }
            </div>
        </section>
    </main>
}

export default Productos;