import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "@/components/common/SocialLinks";
import ButtonCv from "@/components/common/ButtonCv";
import FavoriteTools from "@/components/common/FavoriteTools";
import FotoPerfil from "../../public/images/foto-perfil2.webp";
import Statistics from "@/components/common/Statistics";

export default function Home() {
  return (
    <section className="min-h-screen p-5 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-4">
        <Image
          src={FotoPerfil}
          alt="foto perfil rodrigo peña"
          priority
          className="rounded-full"
          width={200}
          height={200}
        />
        <Statistics />
        <div className="my-8 flex justify-center items-center gap-4">
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
          <ButtonCv />
        </div>
      </div>
      <div className="w-full lg:w-1/2 my-2">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hola soy Rodrigo Peña Fernandez. 👋
        </h2>
        <div className="mt-8 space-y-4 text-lg md:text-lg">
          <span className="text-sky-200">Full stack Developer</span>
          <p>
            <span className="text-yellow-200">
              Curioso, colaborativo y apasionado por el emprendimiento y las
              comunidades IT
            </span>
            , especializado en desarrollo front-end React con sólidos
            conocimientos en backend Node.js y desarrollo blockchain con
            Solidity. Además, cuento con experiencia en marketing digital, estas
            habilidades las he aplicado y demostrado en proyectos personales,
            freelance y en mi participación en diversas comunidades y
            hackathons.”
          </p>
          <FavoriteTools />
        </div>
      </div>
    </section>
  );
}
