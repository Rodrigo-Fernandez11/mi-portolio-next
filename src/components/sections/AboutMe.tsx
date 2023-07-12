import { FaGraduationCap } from "react-icons/fa";
import { SiGoogle, SiFreecodecamp, SiPlatzi } from "react-icons/si";

interface EventProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Event: React.FC<EventProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 p-3 flex items-center justify-center rounded-full bg-blue-500 text-white">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const AboutMe: React.FC = () => {
  return (
    <section className="min-h-screen p-10 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 p-10">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">Hola asbhdfbs</h2>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum
          ad ullam pariatur, iure excepturi suscipit sed ratione, ea quas, neque
          odit praesentium velit. Facere blanditiis velit voluptatum odit
          corporis.
        </p>
      </div>

      <div className="w-full lg:w-1/2 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Event
            icon={<FaGraduationCap size={24} />}
            title="Licenciatura en Ingeniería de Software"
            description="Universidad XYZ"
          />

          <Event
            icon={<SiGoogle size={24} />}
            title="Certificado en Marketing Digital"
            description="Google Academy"
          />

          <Event
            icon={<SiFreecodecamp size={24} />}
            title="Curso Avanzado de Desarrollo Web"
            description="freeCodeCamp"
          />

          <Event
            icon={<SiPlatzi size={24} />}
            title="Diplomado en Marketing Digital"
            description="Platzi"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
