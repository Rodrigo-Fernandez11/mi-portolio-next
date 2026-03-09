import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ButtonCv, FavoriteTools, SocialLink, Statistics } from "@/components";
import FotoPerfil from "../../public/images/foto-perfil2.webp";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl flex-col gap-8 px-4 py-5 lg:flex-row lg:items-start lg:gap-10">
      <div className="animate-fade-up flex w-full flex-col items-center lg:w-[42%] lg:items-start">
        <Image
          src={FotoPerfil}
          alt="foto perfil rodrigo peña"
          priority
          className="h-36 w-36 rounded-full border border-gray-800 object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-44 sm:w-44"
          width={200}
          height={200}
        />
        <div className="mt-5 w-full">
          <Statistics />
        </div>
        <div className="my-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <SocialLink
            href="https://github.com/Rodrigo-Fernandez11"
            icon={<FaGithub size={30} />}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/rodrigo-frontend-developer/"
            icon={<FaLinkedin size={30} />}
            label="LinkedIn"
          />
          <ButtonCv />
        </div>
      </div>
      <div
        className="animate-fade-up w-full lg:w-[58%]"
        style={{ animationDelay: "0.1s" }}
      >
        <h1 className="text-4xl font-bold leading-tight transition-all duration-300 sm:text-5xl lg:text-[3rem] xl:text-[3.5rem]">
          Hola soy Rodrigo Peña Fernandez. 👋
        </h1>
        <div className="mt-5 space-y-4">
          <span className="inline-flex px-4 py-2 text-base font-semibold text-white border border-gray-700 rounded-full">
            Full Stack Developer
          </span>
          <p className="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            <span className="text-white font-medium">
              Curioso, colaborativo y apasionado por el emprendimiento y las
              comunidades IT
            </span>
            , especializado en desarrollo front-end React con sólidos
            conocimientos en backend Node.js y desarrollo blockchain con
            Solidity. Además, cuento con experiencia en marketing digital, estas
            habilidades las he aplicado y demostrado en proyectos personales,
            freelance y en mi participación en diversas comunidades y
            hackathons.
          </p>
        </div>
        <div className="mt-6">
          <FavoriteTools />
        </div>
      </div>
    </section>
  );
}
