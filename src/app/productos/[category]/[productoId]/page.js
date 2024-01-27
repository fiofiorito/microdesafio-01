import ProductCard from "@/app/Components/ProductCard/ProductCard";
import { MockProducts } from "@/data/products";
import Image from "next/image";

const ProductoId = ({ params }) => {
    const prod = params.productoId;
    const products = MockProducts;


    return <section>
        {
            products.map(product => {
                if (product.id === prod) {
                    return <div>
                        <Image src={product.image} width={300} height={300} />
                        <h2>{product.titulo}</h2>
                        <p>{product.descripcion}</p>
                        <h4>${product.precio}</h4>
                    </div>
                }
            })
        }

    </section>
}

export default ProductoId;