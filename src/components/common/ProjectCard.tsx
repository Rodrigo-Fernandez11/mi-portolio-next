import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoLink: string;
  githubLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, techStack, demoLink, githubLink } = project;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-200 py-1 px-2 text-sm rounded-lg text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <AiOutlineLink className="inline-block mr-1" /> View Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <FiGithub className="inline-block mr-1" /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
