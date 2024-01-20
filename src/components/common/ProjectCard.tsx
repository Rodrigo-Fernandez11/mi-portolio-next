import { FiGithub, FiFolder } from "react-icons/fi";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageProject: StaticImageData;
  demoLink: string;
  githubLink: string;
  altProject: string;
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  techStack,
  imageProject,
  demoLink,
  githubLink,
  altProject,
}) => {
  return (
    <div className="overflow-hidden rounded-md p-4 m-4 shadow-md transition duration-300 hover:border-neutral-700 border-2 border-transparent">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="py-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 items-center">
        {techStack.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="m-4">
        <Image src={imageProject} alt={altProject} width={400} height={400} />
      </div>
      <div className="flex space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-purple-700 flex items-center"
        >
          <FiFolder className="mx-2" /> View Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-700 flex items-center"
        >
          <FiGithub className="mx-2" /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
