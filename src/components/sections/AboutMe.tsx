import { Event } from "../common/Event";
import { FaGraduationCap } from "react-icons/fa";
import {
  SiGoogle,
  SiFreecodecamp,
  SiPlatzi,
  SiEthereum,
  SiReact,
} from "react-icons/si";

const AboutMe: React.FC = () => {
  return (
    <section className="min-h-screen p-10 flex flex-col justify-center items-center bg-neutral-900 text-neutral-100" id="aboutme">
      <div className="w-full px-8">
        <h2 className="text-2xl lg:text-4xl font-bold m-4 flex justify-center my-5">
          Un poco sobre mí .....
        </h2>
        <p className="px-5">
          🚀 Me apasiona la tecnología, el fútbol, el emprendimiento, las películas y los videojuegos.
          <br/><br/>
          🎓 Mi camino en la tecnología comenzó con la beca Crece con Google 🌱 de Junior Achievement y Google en Marketing Digital. Durante ese período, tuve la oportunidad de interactuar con profesionales de Google y JA, quienes compartieron conocimientos y experiencias en el campo de la tecnología.
          <br/><br/>
          💻 Al mismo tiempo, comencé a estudiar programación de forma autodidacta, enfocándome en un stack definido, ya que es el área en la que quiero especializarme.
          <br/><br/>
          🛒 Una vez concluido el programa de Crece con Google, continué con la carrera de Marketing Digital, donde completé las etapas de Community Manager, Publicidad en Redes Avanzado y Growth Marketing. Esto me brindó una visión diferente y las herramientas necesarias para llevar a cabo proyectos personales.
          <br/><br/>
          🤝 Mientras aprendía, participé en diversas comunidades, asistí a meetups, hackathons y eventos, donde puse a prueba mis habilidades, recibí consejos, apoyo y tuve el placer de conocer a personas increíbles.
          <br/><br/>
          🌍📚 Me considero una persona inquieta y siempre estoy dispuesto a seguir aprendiendo, participar en eventos y continuar creciendo tanto personal como profesionalmente. Mi objetivo actual es desarrollarme en un entorno profesional y colaborativo, donde pueda trabajar en equipo y aprender de personas con más experiencia.
        </p>
      </div>
      <div className="w-full my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Event
            icon={<SiFreecodecamp size={30} />}
            title="Certificado Front-end developer"
            organization="FreeCodeCamp"
            description="Aprendí a programar de manera práctica con los recursos de la página"
          />

          <Event
            icon={<SiPlatzi size={30} />}
            title="Full Stack developer"
            organization="Platzi"
            description="Continúo actualizando mis conocimientos tanto en el Front-end como en el Back-end"
          />
          <Event
            icon={<FaGraduationCap size={30} />}
            title="Full stack Junior"
            organization="Argentina Programa"
            description="Realicé ejercicios y aprobé el examen de la etapa 'Yo Programo' para acceder a la beca y continuar mis estudios con la etapa 'Se Programar'"
          />

          <Event
            icon={<SiGoogle size={30} />}
            title="Marketing Digital"
            organization="Google y Junior Archievement"
            description="Participé en clases virtuales grupales con profesionales de Google y Junior Archievement sobre marketing digital y habilidades blandas"
          />

          <Event
            icon={<SiEthereum size={30} />}
            title="Hackathon King of devs"
            organization="Solow x Ripio"
            description="Participé como front-end developer en mi equipo para nuestro proyecto en web 3"
          />

          <Event
            icon={<SiReact size={30} />}
            title="Comunidad React Buenos Aires"
            organization="React Buenos Aires"
            description="Participo en los meetups presenciales de la comunidad React sobre distintos temas en oficinas de diversas empresas para aprender y conocer personas"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
