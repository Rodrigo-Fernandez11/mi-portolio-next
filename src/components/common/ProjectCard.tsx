import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageProject: string;
  demoLink: string;
  githubLink: string;
  altProject: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, techStack, imageProject, demoLink, githubLink, altProject } = project;

  return (
    <div className="overflow-hidden rounded-md p-4 m-4 shadow-md transition duration-300 hover:border-neutral-100 border border-transparent">
      <h3 className="text-xl font-bold my-10">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-700 text-neutral-100 py-1 px-2 mr-2 mb-2 text-sm rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mb-4">
        <Image 
          src={imageProject}
          alt={altProject}
          width={400}
          height={400}
        />
      </div>
      <div className="flex space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline flex items-center"
        >
          <AiOutlineLink /> View Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 flex items-center"
        >
          <FiGithub /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
