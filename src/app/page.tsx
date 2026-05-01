import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ActionLink,
  FavoriteTools,
  SectionBadge,
  SocialLink,
  Statistics,
} from "@/components";
import { ButtonCv } from "./components";
import FotoPerfil from "../../public/images/foto-perfil-rodrigo-peña.webp";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-72px)] w-full overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute right-[-100px] top-[-80px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-100px] left-[-60px] h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:py-10 lg:flex-row lg:items-start lg:gap-12 lg:py-12">
        {/* Left Column - Profile & Stats */}
        <aside className="animate-fade-up flex w-full flex-col items-center lg:w-[40%] lg:items-start">
          {/* Profile Image */}
          <div className="mb-6">
            <Image
              src={FotoPerfil}
              alt="Rodrigo Peña - Full Stack Developer"
              priority
              className="h-40 w-40 rounded-full border-2 border-gray-800 object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 sm:h-48 sm:w-48"
              width={200}
              height={200}
            />
          </div>

          {/* Download CV - Main CTA */}
          <div className="mb-6 w-full">
            <ButtonCv />
          </div>

          {/* Social Links */}
          <div className="flex w-full flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Conectá conmigo
            </h3>
            <div className="flex flex-col gap-3">
              <SocialLink
                href="https://github.com/Rodrigo-Fernandez11"
                icon={<FaGithub size={24} />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/rodrip-dev/"
                icon={<FaLinkedin size={24} />}
                label="LinkedIn"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Statistics */}
          <div className="w-full">
            <Statistics />
          </div>
        </aside>

        {/* Right Column - Main Content */}
        <main
          className="animate-fade-up w-full lg:w-[60%]"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rodrigo Peña Fernandez
            </span>{" "}
            👋
          </h1>

          {/* Badge */}
          <div className="mb-6">
            <SectionBadge
              text="Full Stack Developer"
              className="inline-flex items-center border border-gray-700 bg-gray-900/50"
            />
          </div>

          {/* Description */}
          <div className="mb-8 space-y-4">
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              <span className="font-semibold text-white">
                Curioso, colaborativo y apasionado por el emprendimiento y las
                comunidades IT
              </span>
              , especializado en desarrollo front-end con React con sólidos
              conocimientos en backend Node.js y desarrollo blockchain con
              Solidity.
            </p>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              Además, cuento con experiencia en marketing digital. Estas
              habilidades las he aplicado y demostrado en proyectos personales,
              freelance y en mi participación en diversas comunidades y
              hackathons.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <FavoriteTools />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <ActionLink
              href="/portfolio"
              variant="primary"
              className="hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 sm:px-7 sm:text-base"
            >
              Ver mis proyectos
            </ActionLink>
            <ActionLink
              href="/aboutMe"
              variant="secondary"
              className="hover:scale-105 sm:px-7 sm:text-base"
            >
              Conocer más
            </ActionLink>
          </div>
        </main>
      </section>
    </div>
  );
}
