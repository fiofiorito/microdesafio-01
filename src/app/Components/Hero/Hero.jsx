import { Button } from '../Button/Button'
import './Hero.css'
import Image from 'next/image'
export function Hero() {
    return <section className='container hero-section slide-up' >
        <div className='hero-div-text'>
            <h1 className='title'>Electrodomesticos Capellari</h1>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lacus gravida, tristique ex sit amet, suscipit dolor.</p>
            <Button btnText="Lorem Ipsum" />
        </div>
        <div>
            <Image src='/electric-appliance.png' width={200} height={200} />
        </div>
    </section>
}