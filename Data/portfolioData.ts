interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageProject: string;
  demoLink: string;
  githubLink: string;
  altProject: string;
}

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

export default projects;