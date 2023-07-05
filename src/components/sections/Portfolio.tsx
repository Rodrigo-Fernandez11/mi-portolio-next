import React from "react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "project-1.jpg",
      demoLink: "https://example.com/project-1",
      githubLink: "https://github.com/user/project-1",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      techStack: ["React", "Express.js", "MySQL"],
      image: "project-2.jpg",
      demoLink: "https://example.com/project-2",
      githubLink: "https://github.com/user/project-2",
    },
    // ...more projects
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex space-x-2 mb-4">
          {project.techStack.map((tech) => (
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
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
