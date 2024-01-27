import Link from "next/link";
import { MockProducts } from "@/data/products";
import ProductCard from "@/app/Components/ProductCard/ProductCard";
import './categoryPage.css';

const Category = ({ params }) => {
    const products = MockProducts;

    return <section className="container">
        <div className="section-title">
            <h2 className="title-h2">Categoria: {params.category}</h2>
            <Link className="title-link" href='/productos'>Volver para atrás</Link>
        </div>
        <div className="card-container">
            {
                products.map(product => {
                    if (product.category === params.category) {
                        return <div>
                            <Link href={`/productos/${product.category}/${encodeURIComponent(product.id)}`}>
                                <ProductCard
                                    id={product.id}
                                    img={product.image}
                                    name={product.titulo}
                                    desc={product.descripcion}
                                    price={`$ ${product.precio} ARS`}
                                />
                            </Link>
                        </div>
                    }
                })
            }
        </div>
    </section>
}

export default Category;