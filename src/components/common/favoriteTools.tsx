'use client';

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiJest,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiFigma,
  SiGithub,
  SiPlaywright,
  SiPrisma,
  SiNestjs,
  SiGithubactions,
  SiAmazonaws,
} from "react-icons/si";

export const FavoriteTools: React.FC = () => {
  const iconClass = "cursor-pointer transition duration-300 hover:scale-110";

  return (
    <div className="space-y-4 py-1">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Tecnologias de Frontend
        </p>
        <div className="flex flex-wrap items-center gap-3 text-3xl">
          <FaHtml5 className={`${iconClass} text-orange-500 hover:text-orange-600`} title="HTML5" />
          <FaCss3Alt className={`${iconClass} text-blue-500 hover:text-blue-600`} title="CSS3" />
          <SiJavascript className={`${iconClass} text-yellow-400 hover:text-yellow-500`} title="JavaScript" />
          <SiTypescript className={`${iconClass} text-blue-600 hover:text-blue-700`} title="TypeScript" />
          <FaReact className={`${iconClass} text-cyan-400 hover:text-cyan-500`} title="React.js" />
          <SiNextdotjs className={`${iconClass} text-gray-300 hover:text-white`} title="Next.js" />
          <SiTailwindcss className={`${iconClass} text-cyan-500 hover:text-cyan-600`} title="Tailwind CSS" />
          <SiFigma className={`${iconClass} text-pink-500 hover:text-pink-600`} title="Figma" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Tecnologias de Backend
        </p>
        <div className="flex flex-wrap items-center gap-3 text-3xl">
          <FaNodeJs className={`${iconClass} text-green-500 hover:text-green-600`} title="Node.js" />
          <SiExpress className={`${iconClass} text-gray-300 hover:text-white`} title="Express" />
          <SiPython className={`${iconClass} text-yellow-500 hover:text-yellow-600`} title="Python" />
          <SiPostgresql className={`${iconClass} text-blue-500 hover:text-blue-600`} title="PostgreSQL" />
          <SiMongodb className={`${iconClass} text-green-600 hover:text-green-700`} title="MongoDB" />
          <SiJest className={`${iconClass} text-red-500 hover:text-red-600`} title="Jest" />
          <SiPlaywright className={`${iconClass} text-lime-500 hover:text-lime-600`} title="Playwright" />
          <FaGitAlt className={`${iconClass} text-orange-600 hover:text-orange-700`} title="Git" />
          <SiGithub className={`${iconClass} text-gray-300 hover:text-white`} title="GitHub" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Tecnologias que estoy aprendiendo
        </p>
        <div className="flex flex-wrap items-center gap-3 text-3xl">
          <FaDocker className={`${iconClass} text-sky-500 hover:text-sky-600`} title="Docker" />
          <SiPrisma className={`${iconClass} text-indigo-300 hover:text-indigo-200`} title="Prisma" />
          <SiNestjs className={`${iconClass} text-rose-500 hover:text-rose-600`} title="NestJS" />
          <SiGithubactions className={`${iconClass} text-blue-400 hover:text-blue-500`} title="GitHub Actions" />
          <SiAmazonaws className={`${iconClass} text-amber-400 hover:text-amber-500`} title="AWS" />
        </div>
      </div>
    </div>
  );
};
