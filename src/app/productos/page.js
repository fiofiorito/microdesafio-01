import './Productos.css';
import { Hero } from "../Components/Hero/Hero";
import ProductCard from "../Components/ProductCard/ProductCard";
import { API_FAKE_STORE } from "@/contants";

export const metadata = {
    title: 'Productos',
    description: 'Conoce nuestros productos, los mejjor precios los tenes aca!',
}

const Productos = async () => {
    const response = await fetch(API_FAKE_STORE, {
        cache: 'no-store',
        next: {
            revalidate: 7200
        }
    });
    const data = await response.json();

    const heroData = {
        title: 'Los mejores electrodomésticos del mercado',
        text: 'La misma calidad de siempre, ahora también en el mundo digital',
        img: '/electric-appliance.png',
        alt: 'lavarropas, radio, heladera y microhondas'
    }

    return <main className='main'>
        <section className="container">
            <Hero title={heroData.title} text={heroData.text} img={heroData.img} alt={heroData.alt} />

            <div className='section-line container' />

            <div className="product-cont">
                {
                    data.map(product => {
                        return <ProductCard
                            key={product.id}
                            id={product.id}
                            img={product.image}
                            name={product.title}
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