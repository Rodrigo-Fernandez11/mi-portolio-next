import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiJest,
  SiSolidity,
  SiMysql,
} from "react-icons/si";
import { BsGit } from "react-icons/Bs";

const FavoriteTools: React.FC = () => {
  return (
    <div className="py-4">
      <p className="my-2">Tools and technologies I currently work with:</p>
      <div className="flex justify-center space-x-4 text-3xl transition duration-300">
        <FaHtml5 className=" text-red-500 hover:text-red-700 " />
        <FaCss3Alt className=" text-blue-500 hover:text-blue-700 " />
        <FaBootstrap className=" text-purple-500 hover:text-purple-700 " />
        <FaSass className=" text-pink-500 hover:text-pink-700 " />
        <SiTailwindcss className=" text-cyan-500 hover:text-cyan-700 " />
        <SiJavascript className=" text-yellow-500 hover:text-yellow-700 " />
        <SiTypescript className=" text-blue-600 hover:text-blue-800 " />
        <SiNextdotjs className=" text-white hover:text-neutral-700 " />
        <FaNodeJs className=" text-green-500 hover:text-green-700 " />
        <SiExpress className=" text-blue-400 hover:text-blue-600 " />
        <FaReact className=" text-blue-400 hover:text-blue-600 " />
        <BsGit className=" text-red-500 hover:text-red-700 " />
        <SiMysql className=" text-blue-500 hover:text-blue-700 " />
        <SiSolidity className=" text-blue-500 hover:text-blue-700 " />
      </div>

      <p className="my-2">
        Technologies I m learning or interested in learning:
      </p>
      <div className="flex justify-center space-x-4 text-3xl transition duration-300">
        <SiPostgresql className=" text-blue-400 hover:text-blue-600 " />
        <FaDocker className=" text-cyan-400 hover:text-cyan-600 " />
        <FaFigma className=" text-purple-500 hover:text-purple-700 " />
        <SiJest className=" text-red-500 hover:text-red-700 " />
      </div>
    </div>
  );
};

export default FavoriteTools;
