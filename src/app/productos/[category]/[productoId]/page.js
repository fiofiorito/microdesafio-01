import { Counter } from '@/app/Components/Counter/Counter';
import './ProductoId.css';
import { MockProducts } from "@/data/products";
import Image from "next/image";
import { API_FAKE_STORE } from '@/contants';

const ProductoId = async ({ params }) => {
    const { id } = params;
    const response = await fetch(API_FAKE_STORE + id)
    const data = response.json()

    return <section>
        {
            data.map(item => {
                return <div className='product-container'>
                    <div className='image'>
                        <Image src={item.image} width={300} height={300} />
                    </div>
                    <div className='prod-text'>
                        <h2 className='prod-text-h2'>{item.title}</h2>
                        <p className='prod-text-p'>{item.description}</p>
                        <div className='prod-flex'>
                            <p className='prod-text-p--p'>${item.price}</p>
                            <Counter />
                        </div>
                    </div>
                </div>
            })
        }

    </section>
}

export default ProductoId