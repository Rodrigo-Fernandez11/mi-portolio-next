import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { Portafolio } from '@/components/Portfolio'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portafolio />
      <Contact />
    </>
  )
}
