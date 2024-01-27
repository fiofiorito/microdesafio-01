import Image from 'next/image'
import { Hero } from './Components/Hero/Hero'
import './homePage.css'

export default function MyApp() {
  const heroData = {
    title: 'Electrodomesticos Capellari',
    text: 'Innovación en cada rincón del hogar, una tradición que perdura en el tiempo.',
    img: '/electric-appliance.png',
    alt: 'lavarropas, radio, heladera y microhondas'
  }

  return (
    <main className='main'>
      <Hero title={heroData.title} text={heroData.text} img={heroData.img} alt={heroData.alt} />

      <div className='section-line container' />

      <section className='container'>
        <h2 className='home-title' id='historia'>Nuestra historia</h2>
        <div className='paragraph'>
          <p className='home-text'>Bienvenidos a Electrodomésticos Capellari, una empresa arraigada en la rica tradición familiar de ofrecer electrodomésticos de calidad desde 1923. Fundada en el corazón de la pintoresca ciudad de Puerto Montt, Chile, por la primera generación de la familia Capellari, nuestra pequeña tienda comenzó como un rincón acogedor donde la pasión por los electrodomésticos se unía a un servicio excepcional. A lo largo de los años, hemos mantenido nuestro compromiso con la excelencia y la satisfacción del cliente, valores que nos han guiado a lo largo de cuatro generaciones.</p>
          <div className='img-div'>
            <Image src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQgvL5wjIAeHe89BW0LEuvu2lSkhJZaVWjOjTJiI1K8ruv4te5Dk_2gE_nKFVGVTTIhNyVjpe9GyNDlyawxuFFlUQPoMkiE2eevUAYFFQ' width={300} height={200} />
          </div>
        </div>
        <div className='paragraph reverse'>
          <p className='home-text'>A medida que avanzamos en el tiempo, enfrentamos desafíos financieros y la creciente competencia en línea. Es en este momento crucial que Marcos Capellari, el miembro más joven de nuestra familia, tomó la decisión audaz de llevar nuestra tradición al mundo digital. Contratando a un equipo apasionado y experto, lanzamos esta plataforma de comercio electrónico moderna y efectiva. Aquí, fusionamos la experiencia acumulada durante décadas con la conveniencia del mundo digital, asegurando que la herencia de Electrodomésticos Capellari prospere en la era digital actual.</p>
          <Image src='https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80' width={300} height={200} />
        </div>
      </section>
    </main>
  )
}


/* TO DO
- q el footer sea mas lindo e incluya redes sociales
*/