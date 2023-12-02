import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "@/components/common/SocialLinks";
import ButtonCv from "@/components/common/ButtonCv";
import FavoriteTools from "@/components/common/FavoriteTools";
import FotoPerfil from "../../public/images/foto-perfil.jpg";
import Statics from "@/components/common/Statistics";

const Home = () => {
  return (
    <section className="min-h-screen px-10 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center m-2">
        <Image
          src={FotoPerfil}
          alt="foto perfil rodrigo peña"
          className="rounded-full"
          width={200}
          height={200}
        />
        <Statics />
        <div className="flex mt-8">
          <SocialLink
            href="https://github.com/Rodrigo-Fernandez11"
            icon={<FaGithub size={30} />}
            label="GitHub"
          />
          <SocialLink
            href="https://twitter.com/RodrigoPeaFern1"
            icon={<FaTwitter size={30} />}
            label="Twitter"
          />
          <SocialLink
            href="https://www.linkedin.com/in/rodrigo-frontend-developer/"
            icon={<FaLinkedin size={30} />}
            label="LinkedIn"
          />
        </div>
        <ButtonCv />
      </div>
      <div className="w-full lg:w-1/2 m-2">
        <h2 className="text-4xl md:text-5xl font-bold">
          HOLA, SOY RODRIGO PEÑA FERNANDEZ 👋
        </h2>
        <div className="mt-8 space-y-4 text-lg md:text-lg">
          <span>Full stack Developer</span>
          <p>
            Soy un apasionado de la tecnología y el emprendimiento,
            especializado en el Front end. Disfruto participar en comunidades de
            programación, web3 y marketing digital, donde he conocido personas
            inspiradoras y colaborado en proyectos desafiantes. Estoy emocionado
            por seguir aprendiendo, creciendo y aportando mi entusiasmo en
            entornos innovadores y colaborativos. ¡Te invito a revisar mi
            portafolio para descubrir más sobre mis proyectos y habilidades!
          </p>
          <FavoriteTools />
        </div>
      </div>
    </section>
  );
};
export default Home;
