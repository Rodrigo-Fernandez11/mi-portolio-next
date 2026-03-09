import type { Project } from "@/types";
import { FiGithub, FiFolder } from "react-icons/fi";
import Image from "next/image";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  techStack,
  imageProject,
  demoLink,
  githubLink,
  altProject,
}) => {
  return (
    <div className="overflow-hidden rounded-lg p-4 sm:p-6 shadow-lg border-2 border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-gray-600 hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 items-center mb-4">
        {techStack.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-sm font-medium text-black duration-300 bg-white rounded-lg transition-all hover:bg-gray-200 hover:scale-105 active:bg-gray-300 cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="my-4">
        <Image src={imageProject} alt={altProject} width={400} height={400} />
      </div>
      <div className="flex gap-3 sm:gap-4 text-sm sm:text-base">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-1.5 sm:gap-2 group font-medium"
        >
          <FiFolder size={16} className="sm:w-[18px] sm:h-[18px]" /> Ver Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-1.5 sm:gap-2 group font-medium"
        >
          <FiGithub size={16} className="sm:w-[18px] sm:h-[18px]" /> GitHub
        </a>
      </div>
    </div>
  );
};
