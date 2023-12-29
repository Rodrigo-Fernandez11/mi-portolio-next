import ProjectCard from "@/components/common/ProjectCard";
import tesla from "../../../public/images/tesla.webp";
import alkemy from "../../../public/images/alkemy.webp";
import calculadora from "../../../public/images/calculadora.webp";
import clima from "../../../public/images/clima.webp";
import tictac from "../../../public/images/tictac.webp";

export default function Portfolio() {
  return (
    <section className="py-4 w-full mx-auto sm:px-6 lg:px-8">
      <h2 className="text-3xl text-indigo-700 font-bold flex justify-center">
        Portfolio
      </h2>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard
          title="Brujula financiera"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={tictac}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Landing Tesla"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={tesla}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Alkemy challenge"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={alkemy}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="CRUD Redux"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={tictac}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Mercado Pago"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={tictac}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Next AI"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={tictac}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Widt clima"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={clima}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Tic tac toe"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={tictac}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
        <ProjectCard
          title="Calculadora"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={calculadora}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe crado con React"
        />
      </div>
    </section>
  );
}
