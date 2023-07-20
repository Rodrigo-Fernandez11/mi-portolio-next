import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaDocker, FaFigma, FaTasks } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiExpress, SiPostgresql, SiJest } from "react-icons/si";

const FavoriteTools: React.FC = () => {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-2">Herramientas tecnológicas favoritas actuales:</h2>
      <div className="flex justify-center space-x-4">
        <FaHtml5 className="text-xl text-red-500 hover:text-red-700 transition duration-300" />
        <FaCss3Alt className="text-xl text-blue-500 hover:text-blue-700 transition duration-300" />
        <FaBootstrap className="text-xl text-purple-500 hover:text-purple-700 transition duration-300" />
        <FaSass className="text-xl text-pink-500 hover:text-pink-700 transition duration-300" />
        <SiTailwindcss className="text-xl text-cyan-500 hover:text-cyan-700 transition duration-300" />
        <SiJavascript className="text-xl text-yellow-500 hover:text-yellow-700 transition duration-300" />
        <SiTypescript className="text-xl text-blue-600 hover:text-blue-800 transition duration-300" />
        <FaNodeJs className="text-xl text-green-500 hover:text-green-700 transition duration-300" />
        <FaReact className="text-xl text-blue-400 hover:text-blue-600 transition duration-300" />
        <FaTasks className="text-xl text-yellow-400 hover:text-yellow-600 transition duration-300" />
        <FaDatabase className="text-xl text-blue-500 hover:text-blue-700 transition duration-300" />
      </div>

      <h2 className="text-xl font-bold my-2">Actualmente estoy aprendiendo o interesado en aprender:</h2>
      <div className="flex justify-center space-x-4">
        <SiPostgresql className="text-xl text-blue-400 hover:text-blue-600 transition duration-300" />
        <FaDocker className="text-xl text-cyan-400 hover:text-cyan-600 transition duration-300" />
        <FaFigma className="text-xl text-purple-500 hover:text-purple-700 transition duration-300" />
        <SiJest className="text-xl text-red-500 hover:text-red-700 transition duration-300" />
      </div>
    </section>
  );
};

export default FavoriteTools;
