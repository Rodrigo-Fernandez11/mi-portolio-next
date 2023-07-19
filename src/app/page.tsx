import Navbar from '@/components/Navbar';
import { ThemeProvider } from '../../context/ThemeContext';
import { HomeSection } from '@/components/sections/HomeSection';
import AboutMe from '@/components/sections/AboutMe';
import { Blog } from '@/components/sections/Blog';
import Portfolio from '@/components/sections/Portfolio';
import ContactSection from '@/components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
    <main className='bg-neutral-900 text-neutral-100 px-6'>
        <ThemeProvider>
        <Navbar />
        <HomeSection />
        <AboutMe />
        <Blog />
        <Portfolio />
        <ContactSection />
        </ThemeProvider>
    </main>
    </>
  );
};

export default Home;