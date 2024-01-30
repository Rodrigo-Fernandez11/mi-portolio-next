import ProjectCard from "@/app/portfolio/components/ProjectCard";
import tesla from "../../../public/images/tesla.webp";
import alkemy from "../../../public/images/alkemy.webp";
import calculadora from "../../../public/images/calculadora.webp";
import clima from "../../../public/images/clima.webp";
import tictac from "../../../public/images/tictac.webp";
import preguntas from "../../../public/images/preguntas.webp";
import mercadoPago from "../../../public/images/mercadoPago.webp";
import crudRedux from "../../../public/images/crudRedux.webp";
import myRestaurant from "@/../public/images/myRestaurant.webp";

export default function Portfolio() {
  return (
    <section className="py-4 w-full mx-auto sm:px-6 lg:px-8">
      <h2 className="text-3xl text-indigo-700 font-bold flex justify-center">
        Porfolio
      </h2>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard
          title="My Restaurant"
          description="Implementación Next JS y sus caracteristicas como: Metadata, manejo de errores, estado de carga, uso de base de datos, estrategias de renderizado, caching, server action, segmentación de rutas, manejo de los server components, lazy loading, uso del LocalStorage"
          techStack={["React", "Next JS", "Typescript", "Tailwind CSS"]}
          imageProject={myRestaurant}
          demoLink="https://my-restaurant-five-sigma.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/my-restaurant"
          altProject="Blog de restaurantes favoritos"
        />

        <ProjectCard
          title="Landing Tesla"
          description="Desarrollé un atractivo Landing Page con Vite, React y Tailwind CSS, destacando la experiencia del usuario y la eficiencia del desarrollo."
          techStack={["React", "Vite", "Tailwind CSS"]}
          imageProject={tesla}
          demoLink="https://landing-tesla-ruby-five.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/landing-tesla"
          altProject="Landing de Tesla"
        />

        <ProjectCard
          title="Alkemy challenge"
          description="Cree una página web implementando todo lo aprendido con manejo de rutas y rutas privadas, desarrollando el sistema de login. Además, consumí una API con éxito utilizando Axios y para los estilos utilicé React-Bootstrap basándome en la documentación oficial. Completé con éxito el desafío final del programa de Alkemy."
          techStack={[
            "React",
            "React-route",
            "Vite",
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
          description="Desarrollé un eficiente CRUD destacando la gestión avanzada de estados con Redux y la construcción de interfaces interactivas."
          techStack={["React", "TypeScript", "Redux", "CSS"]}
          imageProject={crudRedux}
          demoLink="https://crud-redux-lovat.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/crud-redux"
          altProject="CRUD con Redux"
        />

        <ProjectCard
          title="Mercado Pago"
          description="Integré el servicio de pago de Mercado Pago utilizando su SDK, basándome en la documentación oficial, demostrando habilidades en integración de pagos y desarrollo full-stack."
          techStack={["React", "CSS", "Vite", "Node JS", "Express JS"]}
          imageProject={mercadoPago}
          demoLink="https://mercado-pago.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/mercado-pago"
          altProject="Pago con Mercado Pago"
        />

        <ProjectCard
          title="Preguntas Anonimas"
          description="Desarrollé un sistema robusto de preguntas anónimas, destacando un formulario en la parte superior para que los usuarios envíen preguntas. Las preguntas nuevas deberían persistir al refrescar la página. Además, deberíamos ver las preguntas de otros usuarios además de las nuestras."
          techStack={[
            "Next JS",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
          ]}
          imageProject={preguntas}
          demoLink="https://github.com/Rodrigo-Fernandez11/Preguntas-anonimas"
          githubLink="preguntas-anonimas-xi.vercel.app"
          altProject="Preguntas anónimas"
        />

        <ProjectCard
          title="Widtget clima"
          description="Construí un widget de clima utilizando React, Vite y CSS, para demostrar mis habilidades con el uso de Hooks y CSS vanilla, destacando el correcto consumo de una API."
          techStack={["React", "Vite", "CSS"]}
          imageProject={clima}
          demoLink="https://widget-clima-nine.vercel.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Widget-clima"
          altProject="Widget clima"
        />

        <ProjectCard
          title="Tic tac toe"
          description="Desarrollé un juego interactivo de Tic Tac Toe poniendo en práctica mi lógica de programación y el uso de hooks de React."
          techStack={["React", "Vite", "CSS"]}
          imageProject={tictac}
          demoLink="https://quiet-croissant-5d324a.netlify.app/"
          githubLink="https://github.com/Rodrigo-Fernandez11/Tic-tac-toe"
          altProject="Juego tic tac toe creado con React"
        />

        <ProjectCard
          title="Calculadora"
          description="Implementé una calculadora funcional con React y CSS, destacando habilidades en desarrollo de aplicaciones simples y funcionales con uso de componentes y el uso de props."
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
