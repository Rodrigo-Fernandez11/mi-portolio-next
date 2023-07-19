import React from 'react';
import ProjectCard from '../common/ProjectCard';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageProject: string;
  demoLink: string;
  githubLink: string;
  altProject: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Tic tac toe",
      description: "juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion",
      techStack: ["React", "Vite js", "CSS"],
      imageProject: "/images/tictac1.png",
      demoLink: "demo-link",
      githubLink: "github-link",
      altProject: "alt-text"
    },
    {
      title: "Calculadora",
      description: "Calculadora creada con create react app",
      techStack: ["React", "Create-react-app", "CSS"],
      imageProject: "/images/calculadora1.png",
      demoLink: "demo-link",
      githubLink: "github-link",
      altProject: "alt-text"
    },
    {
      title: "Calculadora",
      description: "Calculadora creada con create react app",
      techStack: ["React", "Create-react-app", "CSS"],
      imageProject: "/images/calculadora1.png",
      demoLink: "demo-link",
      githubLink: "github-link",
      altProject: "alt-text"
    },
    
  ];

  return (
    <section className="py-10" id='portfolio'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold my-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
