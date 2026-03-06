'use client';

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiJest,
  SiSolidity,
  SiMysql,
  SiAstro,
  SiNestjs,
} from "react-icons/si";

const FavoriteTools: React.FC = () => {
  return (
    <div className="py-4">
      <p className="my-2">Tecnologías de Frontend:</p>
      <div className="flex flex-wrap items-center justify-center mb-4 space-x-4 text-3xl">
        {/* Íconos de Frontend */}
        <FaHtml5 className="text-red-500 transition duration-300 cursor-pointer hover:text-red-700 hover:scale-110" />
        <FaCss3Alt className="text-blue-500 transition duration-300 cursor-pointer hover:text-blue-700 hover:scale-110" />
        <FaBootstrap className="text-purple-500 transition duration-300 cursor-pointer hover:text-purple-700 hover:scale-110" />
        <FaSass className="text-pink-500 transition duration-300 cursor-pointer hover:text-pink-700 hover:scale-110" />
        <SiTailwindcss className="transition duration-300 cursor-pointer text-cyan-500 hover:text-cyan-700 hover:scale-110" />
        <SiJavascript className="text-yellow-500 transition duration-300 cursor-pointer hover:text-yellow-700 hover:scale-110" />
        <SiTypescript className="text-blue-600 transition duration-300 cursor-pointer hover:text-blue-800 hover:scale-110" />
        <SiNextdotjs className="text-gray-300 transition duration-300 cursor-pointer hover:text-white hover:scale-110" />
        <FaReact className="text-blue-400 transition duration-300 cursor-pointer hover:text-blue-600 hover:scale-110" />
      </div>

      <p className="my-2">Tecnologías de Backend:</p>
      <div className="flex flex-wrap items-center justify-center mb-4 space-x-4 text-3xl">
        {/* Íconos de Backend */}
        <FaNodeJs className="text-green-500 transition duration-300 cursor-pointer hover:text-green-700 hover:scale-110" />
        <SiExpress className="text-blue-400 transition duration-300 cursor-pointer hover:text-blue-600 hover:scale-110" />
        <FaGitAlt className="text-red-500 transition duration-300 cursor-pointer hover:text-red-700 hover:scale-110" />
        <SiMysql className="text-blue-500 transition duration-300 cursor-pointer hover:text-blue-700 hover:scale-110" />
        <SiSolidity className="text-yellow-400 transition duration-300 cursor-pointer hover:text-yellow-600 hover:scale-110" />
      </div>

      <p className="my-2">
        Tecnologías que estoy aprendiendo o me interesa aprender:
      </p>
      <div className="flex flex-wrap items-center justify-center space-x-4 text-3xl">
        {/* Otras tecnologías */}
        <FaDocker className="transition duration-300 cursor-pointer text-cyan-400 hover:text-cyan-600 hover:scale-110" />
        <SiAstro className="text-red-500 transition duration-300 cursor-pointer hover:text-red-700 hover:scale-110" />
        <SiNestjs className="text-red-500 transition duration-300 cursor-pointer hover:text-red-700 hover:scale-110" />
        <SiJest className="text-red-500 transition duration-300 cursor-pointer hover:text-red-700 hover:scale-110" />
      </div>
    </div>
  );
};

export default FavoriteTools;
