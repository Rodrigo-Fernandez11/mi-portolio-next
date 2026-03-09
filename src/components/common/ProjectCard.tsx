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
    <div className="overflow-hidden rounded-md p-4 m-4 shadow-md border-2 border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-gray-600 hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="py-4 text-sm text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 items-center">
        {techStack.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm text-black duration-300 bg-white rounded-lg transition-all hover:bg-gray-200 hover:scale-105 active:bg-gray-300 cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="my-4">
        <Image src={imageProject} alt={altProject} width={400} height={400} />
      </div>
      <div className="flex space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center group"
        >
          <FiFolder className="mx-2" /> View Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center group"
        >
          <FiGithub className="mx-2" /> View on GitHub
        </a>
      </div>
    </div>
  );
};
