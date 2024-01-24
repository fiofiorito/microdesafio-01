import Button from '../Button/Button'
import './Hero.css'
import Image from 'next/image'

export function Hero({ id }) {
    // FIND A WAY TO MAKE IT SCROLL !!
    // const handleScroll = () => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    return <section className='container hero-section slide-up' >
        <div className='hero-div-text'>
            <h1 className='title'>Electrodomesticos Capellari</h1>
            <p className='text'>Innovación en cada rincón del hogar, una tradición que perdura en el tiempo.</p>
            <Button cName='hero-btn' btnText="Conocé nuestra historia" />
        </div>
        <div className='img-div'>
            <Image src='/electric-appliance.png' width={250} height={250} />
        </div>
    </section>
}