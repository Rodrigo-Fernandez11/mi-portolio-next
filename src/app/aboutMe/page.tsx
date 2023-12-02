import { Event } from "@/components/common/Event";
import { FaGraduationCap, FaUserGraduate, FaHiking } from "react-icons/fa";

import {
  SiGoogle,
  SiFreecodecamp,
  SiPlatzi,
  SiEthereum,
  SiReact,
  SiGoogleanalytics,
} from "react-icons/si";

const AboutMe: React.FC = () => {
  const events = [
    {
      icon: <SiFreecodecamp size={30} />,
      title: "Certificado Front-end developer",
      organization: "FreeCodeCamp",
      description: "Aprendí a programar de manera práctica con los recursos de la página",
    },
    {
      icon: <SiPlatzi size={30} />,
      title: "Full Stack y Blockchain developer",
      organization: "Platzi",
      description: "Continúo actualizando mis conocimientos tanto en el Front-end, Back-end y Blockchain",
    },
    {
      icon: <FaGraduationCap size={30} />,
      title: "Full stack Junior",
      organization: "Argentina Programa",
      description: "Realicé ejercicios y aprobé el examen de la etapa 'Yo Programo' para acceder a la beca y continuar mis estudios con la etapa 'Se Programar'",
    },
    {
      icon: <SiGoogle size={30} />,
      title: "Marketing Digital",
      organization: "Google y Junior Archievement",
      description: "Participé en clases virtuales grupales con profesionales de Google y Junior Archievement sobre marketing digital y habilidades blandas",
    },
    {
      icon: <SiEthereum size={30} />,
      title: "Hackathon King of devs",
      organization: "Solow x Ripio",
      description: "Participé como front-end developer en mi equipo para nuestro proyecto en web 3",
    },
    {
      icon: <SiReact size={30} />,
      title: "Comunidad React Buenos Aires",
      organization: "React Buenos Aires",
      description: "Participo en los meetups presenciales de la comunidad React sobre distintos temas en oficinas de diversas empresas para aprender y conocer personas",
    },
    {
      icon: <SiGoogleanalytics size={30} />,
      title: "Carrera de Marketing Digital",
      organization: "Coder House",
      description: "Complete con éxito las tres etapas de la carrera de marketing digital de Coder House (Community Manager, Publicidad en Redes Avanzadas, Growth Marketing) para aplicarlos en proyectos personales",
    },
    {
      icon: <FaUserGraduate size={30} />,
      title: "Objetivos",
      organization: "Educación",
      description: "Seguir consiguiendo mi primer trabajo como desarrollador, mejorar mi nivel de inglés y comenzar la carrera de ingeniería informática",
    },
    {
      icon: <FaHiking size={30} />,
      title: "Intereses y pasatiempos",
      organization: "Hobbies",
      description: "Me gusta viajar, el fútbol, las películas y series en general, los emprendimientos y la tecnología tanto en web2 y web3",
    },
  ];

  return (
    <section className="min-h-screen p-10 flex flex-col justify-center items-center bg-neutral-900 text-neutral-100" id="aboutme">
      <div className="w-full">
        <h2 className="text-2xl lg:text-4xl font-bold m-4 flex justify-center my-5">
          Sobre mi..
        </h2>
        <p className="px-5">
           🎓 Mi camino en el mundo de la tecnología comenzó con la beca Crece con Google de
          Junior Achievement y Google en Marketing Digital. Durante ese período,
          tuve la oportunidad de interactuar con profesionales de Google y JA,
          quienes compartieron valiosos conocimientos y experiencias en el campo
          de la tecnología.
          <br/><br/>
           💻 Al mismo tiempo, comencé a estudiar programación
          de forma autodidacta, enfocándome en un conjunto específico de
          tecnologías, ya que deseo especializarme en esa área.
          <br/><br/>
          🛒 Una vez concluido el programa de Crece con Google, decidí profundizar
          formación en el campo del Marketing Digital.Estas experiencias me han brindado una perspectiva diferente y las
          herramientas necesarias para llevar a cabo proyectos personales.
          <br/><br/>
           🤝Mientras aprendía, también me involucré en diversas comunidades,
          asistí a meetups, hackathons y eventos, donde puse a prueba mis
          habilidades, recibí valiosos consejos y apoyo, y tuve el placer de
          conocer a personas increíbles.
          <br/><br/>
          🌍📚 Me considero una persona inquieta
          y siempre estoy dispuesto a seguir aprendiendo, participar en eventos
          y continuar creciendo tanto a nivel personal como profesional. En este
          momento, mi objetivo principal es desarrollarme en un entorno
          profesional y colaborativo, donde pueda trabajar en equipo y aprender
          de personas con más experiencia.
        </p>
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
