import AboutMe from '@/components/sections/AboutMe'
import Blog from '@/components/sections/Blog'
import ContactSection from '@/components/sections/Contact'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/sections/Portfolio'
import HomeSection from '@/components/sections/HomeSection'




export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutMe />
      <Blog />
      <Portfolio />
      <ContactSection />
    </>
  )
}
