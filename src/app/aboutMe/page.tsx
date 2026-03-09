import type { Metadata } from "next";
import { FaGraduationCap, FaCode, FaRocket, FaUsers, FaLightbulb, FaHeart } from "react-icons/fa";
import {
  SiGoogle,
  SiFreecodecamp,
  SiEthereum,
  SiReact,
  SiGoogleanalytics,
} from "react-icons/si";
import Image from "next/image";
import mindset from "../../../public/mindset.svg";

export const metadata: Metadata = {
  title: "Sobre Mí - Rodrigo Peña",
  description:
    "Conoce más sobre Rodrigo Peña, desarrollador Full Stack con pasión por crear aplicaciones web modernas y eficientes.",
  openGraph: {
    title: "Sobre Mí - Rodrigo Peña",
    description:
      "Desarrollador Full Stack con experiencia en React, Next.js, Node.js y más.",
    url: "https://mi-portolio-next.vercel.app/aboutMe",
    type: "website",
    images: [
      {
        url: "https://mi-portolio-next.vercel.app/images/desarrollador.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutMe() {
  const values = [
    {
      icon: <FaLightbulb className="text-yellow-400" size={32} />,
      title: "Aprendizaje continuo",
      description:
        "La tecnología evoluciona constantemente y yo con ella. Cada proyecto es una oportunidad para aprender algo nuevo.",
    },
    {
      icon: <FaUsers className="text-blue-400" size={32} />,
      title: "Colaboración",
      description:
        "Creo en el poder de los equipos. Las mejores soluciones nacen cuando compartimos conocimiento y experiencias.",
    },
    {
      icon: <FaRocket className="text-purple-400" size={32} />,
      title: "Innovación práctica",
      description:
        "Me apasiona explorar nuevas tecnologías, pero siempre enfocado en crear soluciones reales que generen valor.",
    },
    {
      icon: <FaHeart className="text-red-400" size={32} />,
      title: "Pasión por el código",
      description:
        "No es solo mi profesión, es lo que me motiva cada día. Disfruto el proceso de transformar ideas en realidad.",
    },
  ];

  const timeline = [
    {
      year: "Inicio",
      icon: <SiFreecodecamp size={24} />,
      title: "Dando los primeros pasos",
      org: "FreeCodeCamp",
      description:
        "Descubrí mi pasión por la programación con desafíos prácticos que me engancharon desde el primer día.",
      color: "from-green-500 to-emerald-600",
    },
    {
      year: "2021",
      icon: <FaGraduationCap size={24} />,
      title: "Argentina Programa",
      org: "Full Stack Junior",
      description:
        "Completé exitosamente las etapas 'Yo Programo' y 'Sé Programar', consolidando mis bases en desarrollo full stack.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      year: "2022",
      icon: <SiGoogle size={24} />,
      title: "Marketing Digital",
      org: "Google & Junior Achievement",
      description:
        "Amplié mi visión del desarrollo web integrando conocimientos de marketing digital y habilidades blandas.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      year: "2023",
      icon: <SiGoogleanalytics size={24} />,
      title: "Especialización en Marketing",
      org: "Coder House",
      description:
        "Completé la carrera completa: Community Manager, Publicidad en Redes y Growth Marketing.",
      color: "from-pink-500 to-rose-600",
    },
    {
      year: "2023-24",
      icon: <SiEthereum size={24} />,
      title: "Explorando Web3",
      org: "Solow x Ripio Hackathons",
      description:
        "Participé en dos hackathons 'King of Devs', alternando roles de front-end y back-end en proyectos blockchain.",
      color: "from-purple-500 to-violet-600",
    },
    {
      year: "2024",
      icon: <SiReact size={24} />,
      title: "Comunidad & Networking",
      org: "React Buenos Aires",
      description:
        "Activo en meetups presenciales de React Buenos Aires, conectando con profesionales y aprendiendo de charlas técnicas en diversas empresas.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      year: "Actualidad",
      icon: <FaGraduationCap size={24} />,
      title: "Ingeniería Informática",
      org: "Universidad - En curso",
      description:
        "Estudiante universitario de Ingeniería Informática, complementando mi experiencia práctica con formación académica sólida mientras continúo especializándome.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <span className="animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-sm font-semibold text-white">
                  Sobre mí
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
                Más que líneas de código,{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  construyo experiencias
                </span>
              </h1>
              
              <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Soy una persona{" "}
                <span className="font-semibold text-white">curiosa e inquieta</span>, me
                intriga saber cómo funcionan las cosas y disfruto formando parte de
                comunidades donde conecto con personas que comparten mi pasión por la
                tecnología y la innovación.
              </p>
              
              <p className="text-base leading-relaxed text-gray-400 lg:text-lg">
                Mi camino en el desarrollo web ha sido autodidacta y constante. Desde mis
                primeros pasos con FreeCodeCamp hasta participar en hackathons de Web3,
                cada experiencia me ha moldeado como desarrollador y profesional.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">3+</p>
                  <p className="text-sm text-gray-400">Años de experiencia</p>
                </div>
                <div className="h-12 w-px bg-gray-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">15+</p>
                  <p className="text-sm text-gray-400">Proyectos completados</p>
                </div>
                <div className="h-12 w-px bg-gray-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">2</p>
                  <p className="text-sm text-gray-400">Hackathons</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-96">
              <div className="relative">
                <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
                <Image
                  src={mindset}
                  alt="Ilustración de mentalidad de desarrollo"
                  className="relative drop-shadow-2xl"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Mi filosofía de trabajo
            </h2>
            <p className="text-lg text-gray-400">
              Los valores que guían mi desarrollo profesional
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl transition-all duration-300 group-hover:scale-150" />
                
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl bg-gray-800/50 p-3 transition-all duration-300 group-hover:bg-gray-800">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Mi trayectoria
            </h2>
            <p className="text-lg text-gray-400">
              El camino que me trajo hasta aquí
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 lg:left-1/2" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-6 z-10 h-5 w-5 rounded-full border-4 border-gray-950 bg-gradient-to-br from-blue-500 to-purple-500 lg:left-1/2 lg:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-20 flex-1 lg:ml-0 ${
                    index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}
                >
                  <div
                    className={`group inline-block w-full rounded-2xl border border-gray-800 bg-gradient-to-br ${item.color} p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 lg:max-w-md`}
                  >
                    <div className="h-full rounded-2xl bg-gray-950 p-6">
                      <div
                        className={`mb-3 flex items-center gap-3 ${
                          index % 2 === 0 ? "lg:flex-row-reverse lg:justify-end" : ""
                        }`}
                      >
                        <div className="rounded-lg bg-gray-900 p-2">
                          {item.icon}
                        </div>
                        <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-gray-300">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="mb-1 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mb-3 text-sm font-semibold text-blue-400">
                        {item.org}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-blue-950/50 to-purple-950/50 p-8 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            
            <div className="relative text-center">
              <FaCode className="mx-auto mb-6 text-5xl text-blue-400" />
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                ¿Trabajemos juntos?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Siempre estoy abierto a nuevos proyectos, colaboraciones o simplemente
                charlar sobre tecnología. ¡Conectemos!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:rodrigopena.dev@gmail.com"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Enviar mensaje
                </a>
                <a
                  href="/portfolio"
                  className="rounded-full border border-gray-700 bg-gray-900/50 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-gray-600 hover:bg-gray-900"
                >
                  Ver proyectos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
