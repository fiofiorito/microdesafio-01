import { Counter } from '@/app/Components/Counter/Counter';
import './ProductoId.css';
import { MockProducts } from "@/data/products";
import Image from "next/image";

const ProductoId = ({ params }) => {
    const prod = params.productoId;
    const products = MockProducts;


    return <section>
        {
            products.map(product => {
                if (product.id === prod) {
                    return <div className='product-container'>
                        <div className='image'>
                            <Image src={product.image} width={300} height={300} />
                        </div>
                        <div className='prod-text'>
                            <h2 className='prod-text-h2'>{product.titulo}</h2>
                            <p className='prod-text-p'>{product.descripcion}</p>
                            <div className='prod-flex'>
                                <p className='prod-text-p--p'>${product.precio}</p>
                                <Counter />
                            </div>
                        </div>
                    </div>
                }
            })
        }

    </section>
}

export default ProductoId;