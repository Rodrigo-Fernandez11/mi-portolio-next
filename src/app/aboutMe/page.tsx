import { Event } from "@/app/aboutMe/components/Event";
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
            aprendo de personas con la misma pasión.
            <br />
            <br />
            En 2022, decidí emprender y capacitarme en el campo que siempre me
            atrajo: la tecnología. Busqué información y recursos que me llevaron
            a ser aceptado en la beca de Google en marketing digital. Durante
            mis estudios, comprendí la importancia de los sitios web, así que
            comencé a explorar la programación gradualmente, ya que considero
            que estas dos habilidades se complementan.
            <br />
            <br />
            Posteriormente, me especialicé en lo que más me gustaba, desarrollo
            web. Investigando una ruta de aprendizaje, simultáneamente culminé
            mis estudios de marketing digital con la carrera de Coder House para
            profundizar mis conocimientos.
            <br />
            <br />
            En 2023, me formé como full-stack developer. Aunque continúo
            aprendiendo, participo activamente en diversas comunidades,
            hackathones de desarrollo y Blockchain, donde aprendí Solidity para
            crear aplicaciones descentralizadas. Trabajé en equipo con personas
            más experimentadas o de otros sectores y comencé a trabajar como
            freelance para adquirir experiencia.
          </p>
        </div>
      </div>

      <div className="w-full my-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {events.map(({ icon, title, organization, description }, index) => (
            <Event
              key={index}
              icon={icon}
              title={title}
              organization={organization}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
