// components
import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/NavBar/Navbar'

export default function MyApp() {
  return (
    <main className='main'>
      <Navbar />
      <Hero />
    </main>
  )
}


/* TO DO
- terminar de configurar la pagina NOT FOUND
- Armar slideFromLeft animation para la navbar
- chequear q todas los Link sean Link y no a
- armar lista de productos en carpeta data > products.js
- AGREGAR CONTAINER DE 90% WIDTH
*/