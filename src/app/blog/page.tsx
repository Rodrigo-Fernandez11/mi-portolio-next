import type { Metadata } from "next";
import { BlogCard } from "@/components";
import type { StaticImageData } from "next/image";
import talento from "../../../public/images/potencia-talento.webp";
import basements from "../../../public/images/basements.webp";
import rocket from "../../../public/images/rocket-base.webp";
import modoSignals from "../../../public/images/modo-signals.webp";
import kingDevs from "../../../public/images/kingofdevs.webp";
import simulacro from "../../../public/images/simulacro-entrevista.webp";
import telecom from "../../../public/images/telecomreact-1.webp";
import expoJoven from "../../../public/images/expojovenes.webp";
import modoReact from "../../../public/images/modoreact-1.webp";
import itJoven from "../../../public/images/itjoven.webp";

export const metadata: Metadata = {
  title: "Blog - Rodrigo Pena",
  description:
    "Lee articulos sobre desarrollo web, React, Next.js, y otras tecnologias de la industria.",
  openGraph: {
    title: "Blog - Rodrigo Pena",
    description:
      "Articulos sobre desarrollo full stack y mejores practicas en programacion.",
    url: "https://mi-portolio-next.vercel.app/blog",
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

interface PostItem {
  img: StaticImageData;
  title: string;
  alt: string;
  date: string;
  desc: string;
}

const posts: PostItem[] = [
  {
    img: talento,
    title: "Activa tu talento J.P Morgan x Junior Achievement",
    alt: "Lourin",
    date: "noviembre 1 2023",
    desc: "Por experiencia personal, siempre recomiendo explorar oportunidades que permitan seguir aprendiendo, conocer personas y trabajar en equipo. En mi caso, participé en 'Activa tu Talento', donde junto a compañeros aprendimos de expertos de JP Morgan y Junior Achievement. Este programa se enfoca en fortalecer habilidades laborales con actividades prácticas. Profesionales voluntarios nos guiaron en la creación de CVs, perfiles de LinkedIn, preparación para entrevistas y desarrollo de habilidades de comunicación y trabajo en equipo. Además, nos ayudaron a reflexionar sobre nuestros objetivos personales y profesionales para trazar un plan de vida.",
  },
  {
    img: basements,
    title: "BSMNT 101 Toolkit",
    alt: "basement studio",
    date: "octubre 31 2023",
    desc: "En la reunión de noviembre de React Buenos Aires, tuvimos el placer de conocer a Basement Studio. Su charla fue sumamente interesante, ya que nos adentraron en sus proyectos, su alcance, los desafíos que enfrentaron durante el desarrollo, sus soluciones y la lógica detrás de las herramientas que utilizaron o ellos mismos crearon, por ejemplo, hooks propios. Fue una sesión en la que aprendí muchísimo sobre el proceso de desarrollo y resolución de problemas en el campo de React.",
  },
  {
    img: rocket,
    title: "Performance con Lazy Load en React Native",
    alt: "react native the rocket base",
    date: "octubre 6 2023",
    desc: "En la meetup de octubre conocimos a Rocketbase, que nos dio una charla sobre mejora de performance con lazy load en React Native. También nos contaron más sobre ellos, sus objetivos y cómo buscan trabajar para startups que están en sus inicios y desean construir los equipos en base a su presupuesto y necesidades. Por último, como es de costumbre, compartimos un agradable momento de networking.",
  },
  {
    img: modoSignals,
    title: "Uso de signals y tips de troubleshooting Node js",
    alt: "react buenos aires signals segie code",
    date: "septiembre 25 2023",
    desc: "En la meetup de septiembre el invitado fue Segie code persona que conocía por los cursos de programación en su canal de YouTube que están muy bien explicados, en esta ocasión nos dio una charla de signals y después Alan Marcello nos dio tips de troubleshooting con Node.js.",
  },
  {
    img: kingDevs,
    title: "Hackathon King of devs",
    alt: "hackathon",
    date: "julio 2023",
    desc: "Como una persona inquieta y curiosa, una de las experiencias más impactantes en mi carrera fue participar dos veces en la Hackathon de King of Devs. Durante tres días, trabajamos en equipo en proyectos desafiantes e innovadores en web3, presentándolos ante un jurado. Conocí diversos perfiles, aprendí de mentores con gran experiencia y conoci a creadores de contenido en la comunidad de programación, quienes enriquecieron mis estudios con sus cursos y contenido gratuito.",
  },
  {
    img: simulacro,
    title: "Mega simulacro de entrevista - Stream Gonzy",
    alt: "Lourin",
    date: "Julio 12 2023",
    desc: "Disfruto participar en diversas comunidades IT, y una de mis favoritas son los canales de contenido de programadores como Goncy, quien constantemente aporta a la comunidad con actividades muy útiles para personas como yo que buscan aprender y encontrar su primer trabajo en IT. Recientemente, tuve la oportunidad de participar en un mega simulacro de entrevista de trabajo para ganar experiencia y confianza al enfrentarme a futuras entrevistas.",
  },
  {
    img: telecom,
    title: "Animaciones performantes en React Native",
    alt: "comunidad react buenos aires telecom",
    date: "Julio 13 2023",
    desc: "La meetup de julio nos vimos a encontrar en esta ocasión en las oficinas de Telecom para una charla de animaciones de alto rendimiento que nos dio Alexis Quiñonez y lo que más me gusto es también nos contaron los problemas que tuvieron en la empresa y como buscaron la solución",
  },
  {
    img: expoJoven,
    title: "Expo joven",
    alt: "experiencia expo joven",
    date: "junio 2023",
    desc: "Si estás buscando tu primera oportunidad en IT u otros sectores, basándome en mi experiencia personal, te recomiendo visitar Expo Joven. Allí, obtuve herramientas fundamentales para mi carrera: desde oportunidades laborales y formación hasta consejos prácticos para destacarme en un mercado competitivo. Los talleres no solo mejoraron mi CV y habilidades de entrevista, sino que también me ayudaron a desenvolverme en un entorno laboral digitalizado. Con la participación de numerosas empresas, universidades y charlas inspiradoras.",
  },
  {
    img: modoReact,
    title: "Composing Fullstack microfrontends with Next JS",
    alt: "comunidad react buenos aires en oficonas de modo",
    date: "Abril 27 2023",
    desc: "Mi primera participación en la comunidad de React buenos aires en las oficinas de MODO que tuvo como invitado a Aris Markogiannakis que nos dio una charla muy interesante sobre microfrontends con Next JS, pros y contras con ejemplos, luego compartimos un agradable momento entre todos para hablar y comer algo rico.",
  },
  {
    img: itJoven,
    title: "IT joven",
    alt: "experiencia it joven",
    date: "abril 23 2023",
    desc: "La Feria IT Joven fue una inmersión emocionante en el mundo tecnológico, donde descubrí las últimas tendencias y oportunidades. Con talleres, conferencias y experiencias interactivas, exploré el futuro de la tecnología mientras instituciones y empresas presentaban sus innovaciones, tambien es lugar ideal para encontrar becas, puestos de trabajo.",
  },
];

export default function Blog() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-120px] top-[-140px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-8 lg:pb-16 lg:pt-14">
        <header className="mb-10 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-950 to-blue-950/30 p-4 sm:p-6 lg:p-10">
          <p className="mb-3 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            Bitacora de aprendizaje
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-6xl">
            Blog de comunidad, eventos y crecimiento profesional
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-300 lg:text-lg">
            Un recorrido por meetups, hackathons y experiencias reales que
            potenciaron mi camino como desarrollador Full Stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
            <span className="rounded-full border border-gray-700 bg-black/50 px-3 py-1.5">10 publicaciones</span>
            <span className="rounded-full border border-gray-700 bg-black/50 px-3 py-1.5">React Buenos Aires</span>
            <span className="rounded-full border border-gray-700 bg-black/50 px-3 py-1.5">Hackathons & Networking</span>
          </div>
        </header>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Entradas destacadas</h2>
          <p className="text-sm text-gray-400">Ordenadas por experiencia</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={post.title}
              img={post.img}
              title={post.title}
              alt={post.alt}
              date={post.date}
              desc={post.desc}
              featured={index === 0}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950/80 p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">Lo que vas a encontrar en este blog</h3>
          <p className="mt-3 text-gray-300">
            Experiencias reales en comunidad tech, aprendizajes accionables y
            reflexiones para crecer en tu carrera.
          </p>
          
          {/* Mini CTA */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="/aboutMe"
              className="rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/20"
            >
              Conocé mi historia
            </a>
            <a
              href="/portfolio"
              className="rounded-lg border border-gray-700 bg-gray-900/50 px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gray-600 hover:bg-gray-900 hover:text-white"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
