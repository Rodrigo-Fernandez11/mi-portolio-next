import { Event } from "@/components/common/Event";
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

const AboutMe: React.FC = () => {
  const events = [
    {
      icon: <SiFreecodecamp size={30} />,
      title: "Certificado Front-end developer",
      organization: "FreeCodeCamp",
      description:
        "Aprendí a programar de manera práctica con los recursos de la página",
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
      title: "Marketing Digital",
      organization: "Google y Junior Archievement",
      description:
        "Participé en clases virtuales grupales con profesionales de Google y Junior Archievement sobre marketing digital y habilidades blandas",
    },
    {
      icon: <SiEthereum size={30} />,
      title: "Hackathon King of devs",
      organization: "Solow x Ripio",
      description:
        "Participé como front-end developer en mi equipo para nuestro proyecto en web 3",
    },
    {
      icon: <SiReact size={30} />,
      title: "Comunidad React Buenos Aires",
      organization: "React Buenos Aires",
      description:
        "Participo en los meetups presenciales de la comunidad React sobre distintos temas en oficinas de diversas empresas para aprender y conocer personas",
    },
    {
      icon: <SiGoogleanalytics size={30} />,
      title: "Carrera de Marketing Digital",
      organization: "Coder House",
      description:
        "Complete con éxito las tres etapas de la carrera de marketing digital de Coder House (Community Manager, Publicidad en Redes Avanzadas, Growth Marketing) para aplicarlos en proyectos personales",
    },
    {
      icon: <FaUserGraduate size={30} />,
      title: "Objetivos",
      organization: "Educación",
      description:
        "Seguir consiguiendo mi primer trabajo como desarrollador, mejorar mi nivel de inglés y comenzar la carrera de ingeniería informática",
    },
    {
      icon: <FaHiking size={30} />,
      title: "Intereses y pasatiempos",
      organization: "Hobbies",
      description:
        "Me gusta viajar, el fútbol, las películas y series en general, los emprendimientos y la tecnología tanto en web2 y web3",
    },
  ];

  return (
    <section className="min-h-screen p-10 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-2 flex justify-end">
          <Image src={mindset} height={400} width={400} alt="svg mindset" />
        </div>
        <div className="lg:w-1/2 lg:order-1 px-5">
          <h2 className="text-2xl lg:text-4xl font-bold m-4 flex justify-center my-5">
            Mi Historia en la Intersección de Tecnología y Conexiones Humanas
          </h2>
          <div className="px-5">
            <p>
              🎓 Comencé mi viaje en tecnología con la beca Crece con Google de
              Junior Achievement y Google en Marketing Digital. Durante esta
              etapa, no solo adquirí conocimientos, sino que tuve la oportunidad
              de sumergirme en un mundo donde las ideas se fusionan con la
              innovación.
            </p>
            <p className="mt-4">
              💻 Paralelamente, mi autodidactismo en programación se convirtió
              en una pasión en constante evolución. Enfoqué mi aprendizaje en
              tecnologías específicas, buscando una especialización que ahora me
              impulsa a crecer más en ese campo.
            </p>
            <p className="mt-4">
              🛒 Tras concluir el programa de Crece con Google, mi curiosidad me
              llevó a profundizar en el campo del Marketing Digital. Estas
              experiencias han proporcionado una perspectiva rica y las
              herramientas necesarias para emprender proyectos personales
              desafiantes.
            </p>
            <p className="mt-4">
              🤝 Durante mi viaje de aprendizaje, me sumergí en diversas
              comunidades, participando activamente en meetups, hackathones y
              eventos. Aquí no solo probé mis habilidades, sino que también
              encontré mentores valiosos y hice conexiones significativas.
            </p>
            <p className="mt-4">
              🌍📚 Mi hambre de conocimiento es insaciable. Siempre estoy ávido
              por aprender más, participar en eventos y continuar mi
              crecimiento, tanto personal como profesional. Actualmente, busco
              un entorno colaborativo donde pueda contribuir, aprender de
              expertos y aportar con mi pasión por la tecnología y el diseño
              centrado en el usuario.
            </p>
          </div>
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
};

export default AboutMe;
