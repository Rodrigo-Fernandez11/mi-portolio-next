import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNodeJs, FaJsSquare, FaDocker, FaFigma, FaTasks } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiExpress, SiPostgresql, SiJest, SiSolidity, SiMysql } from "react-icons/si";
import { BsGit } from "react-icons/Bs"

const FavoriteTools: React.FC = () => {
  return (
    <section className="">
      <h4 className="text-xl my-2">Herramientas y tecnológicas con las que trabajo actualmente:</h4>
      <div className="flex justify-center space-x-4">
        <FaHtml5 className="text-2xl text-red-500 hover:text-red-700 transition duration-300" />
        <FaCss3Alt className="text-2xl text-blue-500 hover:text-blue-700 transition duration-300" />
        <FaBootstrap className="text-2xl text-purple-500 hover:text-purple-700 transition duration-300" />
        <FaSass className="text-2xl text-pink-500 hover:text-pink-700 transition duration-300" />
        <SiTailwindcss className="text-2xl text-cyan-500 hover:text-cyan-700 transition duration-300" />
        <SiJavascript className="text-2xl text-yellow-500 hover:text-yellow-700 transition duration-300" />
        <SiTypescript className="text-2xl text-blue-600 hover:text-blue-800 transition duration-300" />
        <FaNodeJs className="text-2xl text-green-500 hover:text-green-700 transition duration-300" />
        <SiExpress className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300" />
        <FaReact className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300" />
        <BsGit className="text-2xl text-red-500 hover:text-red-700 transition duration-300" />
        <SiMysql className="text-2xl text-blue-500 hover:text-blue-700 transition duration-300" />
        <SiSolidity className="text-2xl ext-blue-500 hover:text-blue-700 transition duration-300"/>
      </div>

      <h4 className="text-xl my-2">tecnologías que  estoy aprendiendo o interesado en aprender:</h4>
      <div className="flex justify-center space-x-4">
        <SiPostgresql className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300" />
        <FaDocker className="text-2xl text-cyan-400 hover:text-cyan-600 transition duration-300" />
        <FaFigma className="text-2xl text-purple-500 hover:text-purple-700 transition duration-300" />
        <SiJest className="text-2xl text-red-500 hover:text-red-700 transition duration-300" />
      </div>
    </section>
  );
};

export default FavoriteTools;
