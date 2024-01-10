// import styles from './page.module.css'
import { Counter } from './Components/Counter/Counter'
import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/NavBar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Counter />
    </main>
  )
}
