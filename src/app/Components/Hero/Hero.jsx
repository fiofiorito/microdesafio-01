import Button from '../Button/Button'
import './Hero.css'
import Image from 'next/image'

export function Hero({ title, text, img, alt }) {
    return <section className='container hero-section slide-up' >
        <div className='hero-div-text'>
            <h1 className='title'>{title}</h1>
            <p className='text'>{text}</p>
        </div>
        <div className='img-div'>
            <Image src={img} width={250} height={250} alt={alt} />
        </div>
    </section>
}