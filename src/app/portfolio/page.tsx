import type { Metadata } from "next";
import { CtaPanel, ProjectCard, SectionBadge, SectionTitle, TagList } from "@/components";
import { FaRocket, FaCode, FaLaptopCode } from "react-icons/fa";
import tesla from "../../../public/images/tesla.webp";
import alkemy from "../../../public/images/alkemy.webp";
import clima from "../../../public/images/clima.webp";
import preguntas from "../../../public/images/preguntas.webp";
import mercadoPago from "../../../public/images/mercadoPago.webp";
import crudRedux from "../../../public/images/crudRedux.webp";
import myRestaurant from "../../../public/images/myRestaurant.webp";

export const metadata: Metadata = {
  title: "Portfolio - Rodrigo Peña",
  description:
    "Explora mis proyectos destacados como desarrollador Full Stack. Proyectos en React, Next.js, Node.js y más tecnologías modernas.",
  openGraph: {
    title: "Portfolio - Rodrigo Peña",
    description: "Proyectos profesionales de desarrollo web y aplicaciones full stack.",
    url: "https://mi-portolio-next.vercel.app/portfolio",
    type: "website",
    images: [
      {
        url: "https://mi-portolio-next.vercel.app/images/desarrollador.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Portfolio() {
  const portfolioTags = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Integración de APIs",
    "Supabase",
    "IA & Agentes",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <section className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Hero Section */}
        <header className="mb-10 sm:mb-12 text-center">
          <div className="mb-4 inline-block">
            <SectionBadge
              text="Mis proyectos"
              className="animate-pulse bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>
          
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Portfolio de{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              proyectos reales
            </span>
          </h1>
          
          <p className="mx-auto mb-6 sm:mb-8 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300 lg:text-xl">
            Cada proyecto es una oportunidad para aprender, experimentar y crear soluciones 
            que resuelvan problemas reales. Desde integraciones complejas hasta interfaces 
            intuitivas.
          </p>

          {/* Stats */}
          <div className="mx-auto mb-10 flex max-w-2xl flex-wrap items-center justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <FaCode className="text-xl sm:text-2xl text-blue-400" />
                <p className="text-2xl sm:text-3xl font-bold text-white">7</p>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">Proyectos publicados</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <FaLaptopCode className="text-xl sm:text-2xl text-purple-400" />
                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">Código en GitHub</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <FaRocket className="text-xl sm:text-2xl text-pink-400" />
                <p className="text-2xl sm:text-3xl font-bold text-white">7</p>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">Apps en producción</p>
            </div>
          </div>

          {/* Technologies badges */}
          <TagList tags={portfolioTags} className="justify-center" />
        </header>

        {/* Projects Grid */}
        <div className="mb-12 sm:mb-16">
          <SectionTitle
            title="Proyectos destacados"
            className="mb-6 sm:mb-8"
            titleClassName="mb-0 text-xl sm:text-2xl md:text-3xl"
          />
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              title="Preguntas Anónimas"
              description="Desarrollé un sistema robusto de preguntas anónimas, destacando un formulario en la parte superior para que los usuarios envíen preguntas. Las preguntas nuevas deberían persistir al refrescar la página. Además, deberíamos ver las preguntas de otros usuarios además de las nuestras."
              techStack={[
                "Next JS",
                "React",
                "TypeScript",
                "Supabase",
                "Tailwind CSS",
              ]}
              imageProject={preguntas}
              demoLink="https://preguntas-anonimas-xi.vercel.app/"
              githubLink="https://github.com/Rodrigo-Fernandez11/Preguntas-anonimas"
              altProject="Preguntas anónimas"
            />

            <ProjectCard
              title="Mercado Pago Integration"
              description="Integré el servicio de pago de Mercado Pago utilizando su SDK, basándome en la documentación oficial, demostrando habilidades en integración de pagos y desarrollo full-stack."
              techStack={["React", "CSS", "Vite", "Node JS", "Express JS"]}
              imageProject={mercadoPago}
              demoLink="https://mercado-pago.vercel.app/"
              githubLink="https://github.com/Rodrigo-Fernandez11/mercado-pago"
              altProject="Pago con Mercado Pago"
            />

            <ProjectCard
              title="Alkemy Challenge"
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
              title="CRUD con Redux"
              description="Desarrollé un eficiente CRUD destacando la gestión avanzada de estados con Redux y la construcción de interfaces interactivas."
              techStack={["React", "TypeScript", "Redux", "CSS"]}
              imageProject={crudRedux}
              demoLink="https://crud-redux-lovat.vercel.app/"
              githubLink="https://github.com/Rodrigo-Fernandez11/crud-redux"
              altProject="CRUD con Redux"
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
              title="Widget Clima"
              description="Construí un widget de clima utilizando React, Vite y CSS, para demostrar mis habilidades con el uso de Hooks y CSS vanilla, destacando el correcto consumo de una API."
              techStack={["React", "Vite", "CSS"]}
              imageProject={clima}
              demoLink="https://widget-clima-nine.vercel.app/"
              githubLink="https://github.com/Rodrigo-Fernandez11/Widget-clima"
              altProject="Widget clima"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-4xl">
          <CtaPanel
            icon={<FaRocket className="mx-auto mb-4 text-4xl text-purple-400 sm:mb-6 sm:text-5xl" />}
            title="¿Te gustó lo que viste?"
            description="Estos proyectos representan mi pasión por crear soluciones reales. Si tenés una idea o proyecto en mente, charlemos."
            containerClassName="bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-gray-950"
            backgroundLayer={<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />}
            actionsClassName="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            actions={
              <>
                <a
                  href="/aboutMe"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 sm:px-8 sm:py-3 sm:text-base"
                >
                  Conocé más sobre mí
                </a>
                <a
                  href="https://github.com/Rodrigo-Fernandez11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-700 bg-gray-900/50 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gray-600 hover:bg-gray-900 sm:px-8 sm:py-3 sm:text-base"
                >
                  Ver más en GitHub
                </a>
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}
