// components
import { Counter } from './Components/Counter/Counter'
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
