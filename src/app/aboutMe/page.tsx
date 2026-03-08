import type { Metadata } from "next";
import { Event } from "@/app/blog/components";
import { FaGraduationCap, FaUserGraduate, FaHiking } from "react-icons/fa";
import mindset from "../../../public/mindset.svg";

import {
  SiGoogle,
  SiFreecodecamp,
  SiPlatzi,
  SiEthereum,
  SiReact,
  SiGoogleanalytics,
} from "react-icons/si";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mi - Rodrigo Pena",
  description:
    "Conoce mas sobre Rodrigo Pena, desarrollador Full Stack con pasion por crear aplicaciones web modernas y eficientes.",
  openGraph: {
    title: "Sobre Mi - Rodrigo Pena",
    description:
      "Desarrollador Full Stack con experiencia en React, Next.js, Node.js y mas.",
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
  const events = [
    {
      icon: <FaUserGraduate size={30} />,
      title: "Objetivos personales",
      organization: "Desarrollo personal",
      description:
        "Empezar mi carrera profesional como desarrollador, mejorar mi nivel de inglés y comenzar la carrera de ingeniería informática",
    },
    {
      icon: <FaHiking size={30} />,
      title: "Intereses y pasatiempos",
      organization: "Hobbies",
      description:
        "Me gusta viajar, el fútbol, las películas y series en general, entusiastan de emprendimientos, startups y la tecnología tanto web2 y web3",
    },
    {
      icon: <SiFreecodecamp size={30} />,
      title: "Aprendiendo a programar",
      organization: "FreeCodeCamp",
      description:
        "Mis primeros pasos en programación fueron en esta página porque ofrece diferentes desafíos prácticos a medida que avanzas con ruta de aprendizaje",
    },
    {
      icon: <SiPlatzi size={30} />,
      title: "Full Stack y Blockchain developer",
      organization: "Platzi",
      description:
        "Continúo actualizando mis conocimientos tanto en el Front-end, Back-end y Blockchain",
    },
    {
      icon: <FaGraduationCap size={30} />,
      title: "Full stack Junior",
      organization: "Argentina Programa",
      description:
        "Realicé ejercicios y aprobé el examen de la etapa 'Yo Programo' para acceder a la beca y continuar mis estudios con la etapa 'Se Programar'",
    },
    {
      icon: <SiGoogle size={30} />,
      title: "Beca Marketing Digital",
      organization: "Crece con Google y Junior Archievement",
      description:
        "Participé en clases virtuales grupales con profesionales de Google y Junior Archievement sobre marketing digital y habilidades blandas",
    },
    {
      icon: <SiEthereum size={30} />,
      title: "Hackathon King of devs",
      organization: "Solow x Ripio",
      description:
        "Participé en 2 ocaciones como front-end developer y Back-end en mi equipo para nuestro proyecto en web3",
    },
    {
      icon: <SiReact size={30} />,
      title: "Comunidad React Buenos Aires",
      organization: "React Buenos Aires",
      description:
        "Participo en los meetups presenciales de la comunidad React sobre distintos charlas de temas tecnicos en oficinas de diversas empresas para aprender y hacer networking",
    },
    {
      icon: <SiGoogleanalytics size={30} />,
      title: "Carrera de Marketing Digital",
      organization: "Coder House",
      description:
        "Complete con éxito las tres etapas de la carrera de marketing digital de Coder House (Community Manager, Publicidad en Redes Avanzadas, Growth Marketing) para aplicarlos en proyectos personales y profundizar en las bases que tenia de Marketing digital",
    },
  ];

  return (
    <section className="min-h-screen p-5 flex flex-col justify-center items-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600">
        Un pocos mas sobre mi..
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center my-5">
        <div className="lg:w-1/3 lg:order-2 flex justify-end m-4">
          <Image
            src={mindset}
            height={400}
            width={400}
            alt="svg mindset"
            priority
          />
        </div>
        <div className="lg:w-2/3 lg:order-1 p-5">
          <p>
            Soy una persona curiosa e inquieta, me intriga saber cómo funcionan
            las cosas y disfruto formando parte de comunidades donde conecto y
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-screen-lg">
        {events.map((event, index) => (
          <Event
            key={index}
            icon={event.icon}
            title={event.title}
            organization={event.organization}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
}
