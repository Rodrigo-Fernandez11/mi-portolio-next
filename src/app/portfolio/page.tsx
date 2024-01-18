import ProjectCard from "@/components/common/ProjectCard";
import tesla from "../../../public/images/tesla.webp";
import alkemy from "../../../public/images/alkemy.webp";
import calculadora from "../../../public/images/calculadora.webp";
import clima from "../../../public/images/clima.webp";
import tictac from "../../../public/images/tictac.webp";
import preguntas from "../../../public/images/preguntas.webp";
import mercadoPago from "../../../public/images/mercadoPago.webp";
import crudRedux from "../../../public/images/crudRedux.webp";

export default function Portfolio() {
  return (
    <section className="py-4 w-full mx-auto sm:px-6 lg:px-8">
      <h2 className="text-3xl text-indigo-700 font-bold flex justify-center">
        Portfolio
      </h2>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard
          title="Landing Tesla"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "Tailwind CSS"]}
          imageProject={tesla}
          demoLink="https://landing-tesla-ruby-five.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/landing-tesla"
          altProject="Landing de Tesla"
        />
        <ProjectCard
          title="Alkemy challenge"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={[
            "React",
            "React-route",
            "Vite js",
            "Axios",
            "React-Bootstrap",
          ]}
          imageProject={alkemy}
          demoLink="https://alkemy-challenge-blue.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/alkemy"
          altProject="Proyecto Alkemy Challenge"
        />
        <ProjectCard
          title="CRUD Redux"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "TypeScript", "Redux", "CSS"]}
          imageProject={crudRedux}
          demoLink="https://crud-redux-lovat.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/crud-redux"
          altProject="CRUD con Redux"
        />
        <ProjectCard
          title="Mercado Pago"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "Node JS"]}
          imageProject={mercadoPago}
          demoLink="https://mercado-pago.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/mercado-pago"
          altProject="Pago con Mercado Pago"
        />
        <ProjectCard
          title="Preguntas Anonimas"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["Next JS", "TypeScript", "Supabase", "Tailwind CSS"]}
          imageProject={preguntas}
          demoLink="https://preguntas-anonimas-akgrow4zg-rodrigo-fernandez11.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Preguntas-Anonimas"
          altProject="Preguntas anonimas"
        />
        <ProjectCard
          title="Widtget clima"
          description="juego de tic tac toe utlizando React y vite js para practicar los hooks y la logica de progrmacion"
          techStack={["React", "Vite js", "CSS"]}
          imageProject={clima}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Widget clima"
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
          techStack={["React", "CSS"]}
          imageProject={calculadora}
          demoLink="https://meek-dango-d621f4.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/calculadora-react"
          altProject="Calculadora con React"
        />
      </div>
    </section>
  );
}
