import type { Metadata } from "next";
import { ActionLink, SectionBadge, TagList } from "@/components";
import { BlogCard } from "./components";
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
import freelancer from "../../../public/images/freelancer (1).webp";
import reactBuenosAires from "../../../public/images/react_buenos_aires.webp";
import nerdearla from "../../../public/images/evento_nerdearla.webp";
import ingenieriaInformatica from "../../../public/images/ingenieria_informatica.webp";

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
    img: freelancer,
    title: "Freelancer: mis primeros clientes y mi primera experiencia internacional",
    alt: "Freelancer primeros clientes nacionales e internacionales",
    date: "agosto 2025 - presente",
    desc: "Arranqué el freelancing trabajando con clientes locales y a los pocos meses sumé una empresa de España. Lo que aprendí en este tiempo no tiene nada que ver con el código. Aprendí que el cliente no sabe lo que quiere hasta que ve lo que no quiere — y que tu trabajo es anticiparte a eso. Que comunicar un avance a tiempo vale más que entregar perfecto tarde. Que gestionar expectativas es una habilidad técnica disfrazada de conversación. Aprendí a decir que no cuando algo está fuera del alcance, y a defender mis decisiones con argumentos, no con inseguridad. Aprendí que la confianza no se pide, se construye entrega tras entrega. Ser freelancer te saca del modo 'empleado que ejecuta' y te pone en el modo 'profesional que resuelve'. Ese cambio de mentalidad fue el salto más grande de mi carrera hasta ahora.",
  },
  {
    img: reactBuenosAires,
    title: "IA en el desarrollo de software: lo que aprendí en React Buenos Aires 2025",
    alt: "React Buenos Aires inteligencia artificial desarrollo de software 2025",
    date: "2025",
    desc: "Las meetups de React Buenos Aires de 2025 tuvieron un denominador común que no se podía ignorar: la inteligencia artificial dejó de ser un tema de ciencia ficción para convertirse en una conversación concreta sobre cómo trabajamos. Charla tras charla, el debate no era si la IA iba a cambiar el desarrollo de software — eso ya era un hecho — sino cómo adaptarse sin perder lo que nos hace valiosos como desarrolladores. Lo que más me quedó es esto: la IA no reemplaza al que piensa, reemplaza al que ejecuta sin pensar. Los que saben formular el problema correcto, evaluar la solución y tomar decisiones de arquitectura siguen siendo irremplazables. Esas meetups me empujaron a incorporar herramientas de IA en mi flujo de trabajo, pero sobre todo a reforzar los fundamentos que ningún modelo puede suplir.",
  },
  {
    img: nerdearla,
    title: "Nerdearla Argentina 2024",
    alt: "Nerdearla Argentina 2024 evento tecnología",
    date: "octubre 2024",
    desc: "Nerdearla es uno de esos eventos que te recuerdan por qué elegiste este camino. Dos días rodeado de personas apasionadas por la tecnología, con charlas que van desde arquitectura de sistemas hasta cultura de equipo, pasando por seguridad, IA, diseño y mucho más. Lo que más valoré no fue el contenido en sí — aunque fue excelente — sino la densidad de conversaciones en los pasillos. En Nerdearla te cruzás con devs seniors que comparten su experiencia sin filtros, con personas que están construyendo cosas increíbles desde Argentina para el mundo. Salí con nuevas perspectivas sobre cómo escalar sistemas, sobre cómo los equipos técnicos toman decisiones en empresas grandes, y con la confirmación de algo que creo firmemente: el talento en Argentina es enorme, y la comunidad tech lo sabe.",
  },
  {
    img: ingenieriaInformatica,
    title: "Por qué decidí estudiar Ingeniería Informática siendo desarrollador",
    alt: "Inicio carrera ingeniería informática 2024",
    date: "febrero 2024",
    desc: "En febrero de 2024 empecé la carrera de Ingeniería Informática. En ese momento estaba buscando mi primer trabajo en IT, construyendo proyectos personales y tratando de crecer lo más rápido posible. Arrancar la carrera en ese contexto no fue una contradicción, fue una apuesta a largo plazo. Entendí que el autodidactismo me había dado velocidad, pero la carrera me iba a dar profundidad. Hay una diferencia entre saber usar una herramienta y entender por qué funciona. La carrera me empezó a dar eso: estructura para pensar, bases matemáticas para razonar sobre algoritmos, y un marco conceptual que convierte los problemas difusos en problemas concretos. No es un camino rápido — combinarlo con proyectos personales y la búsqueda laboral requiere disciplina real — pero cada materia consolida algo que el aprendizaje informal deja en el aire. Fue una de las mejores decisiones que tomé para mi carrera.",
  },
  {
    img: talento,
    title: "Activa tu talento J.P Morgan x Junior Achievement",
    alt: "Activa tu talento JP Morgan Junior Achievement",
    date: "noviembre 1 2023",
    desc: "Hay un momento en la carrera donde te das cuenta de que el código solo no alcanza. Participar en 'Activa tu Talento' junto a JP Morgan y Junior Achievement fue ese momento para mí. Durante el programa, profesionales voluntarios de la industria nos guiaron en algo que ningún tutorial enseña: cómo comunicar quién sos, cómo trabajar bajo presión con personas que no conocés, y cómo construir una visión real de tu carrera. Aprendí que una entrevista no es un examen técnico, es una conversación entre personas. Que un buen LinkedIn no es una lista de tecnologías, es una historia. Me fui con herramientas concretas, pero sobre todo con una certeza: las habilidades blandas no son un extra, son el diferencial que separa a dos candidatos con el mismo stack.",
  },
  {
    img: basements,
    title: "BSMNT 101 Toolkit",
    alt: "Basement Studio React Buenos Aires",
    date: "octubre 31 2023",
    desc: "Lo que más me impactó de la charla de Basement Studio en React Buenos Aires no fue lo que construyeron, sino cómo lo pensaron. Cuando enfrentaron un problema que las librerías existentes no resolvían bien, no buscaron un workaround: crearon sus propias herramientas. Esa mentalidad — la de no conformarse con lo que existe si podés hacerlo mejor — es algo que me quedó grabado. En la industria es fácil caer en el loop de consumir frameworks y soluciones de otros. Basement me recordó que los mejores equipos no solo usan el ecosistema, lo expanden. Esa reunión cambió un poco cómo pienso antes de instalar una librería nueva.",
  },
  {
    img: rocket,
    title: "Performance con Lazy Load en React Native",
    alt: "React Native performance Rocketbase meetup",
    date: "octubre 6 2023",
    desc: "Hay una diferencia enorme entre aprender performance en un tutorial y escucharla de un equipo que tuvo que resolver ese problema en producción, con usuarios reales esperando. Rocketbase nos contó cómo el lazy load transformó la experiencia de sus apps React Native, pero lo más valioso fue entender el contexto: startups con recursos limitados que necesitan equipos pequeños y decisiones inteligentes. Me llevé dos aprendizajes clave: primero, que optimizar no es un lujo sino una responsabilidad; segundo, que elegir bien con qué equipo trabajás y bajo qué modelo puede definir tu crecimiento profesional tanto como las tecnologías que usás.",
  },
  {
    img: modoSignals,
    title: "Signals y troubleshooting con Node.js",
    alt: "React Buenos Aires signals Segie Code",
    date: "septiembre 25 2023",
    desc: "Conocía a Segie Code por sus videos antes de verlo en persona, y esa meetup me enseñó algo que no esperaba: hay una diferencia real entre seguir a alguien en pantalla y escucharlo en vivo. La energía del contexto presencial hace que el aprendizaje sea más profundo. Su charla sobre Signals me mostró hacia dónde está evolucionando el manejo de estado en el frontend. Pero la parte de troubleshooting en Node.js con Alan Marcello fue lo que más me movilizó: ver cómo un desarrollador experimentado diagnostica un problema en tiempo real, con calma y método, me dio más herramientas que horas de documentación. La actitud ante el error importa tanto como saber resolverlo.",
  },
  {
    img: kingDevs,
    title: "Hackathon King of Devs",
    alt: "Hackathon King of Devs web3",
    date: "julio 2023",
    desc: "Participé dos veces en King of Devs y cada vez salí siendo una persona diferente. Tres días para construir algo desde cero con un equipo que acabás de conocer, bajo presión, con tecnologías que a veces estás aprendiendo en el momento. La primera vez aprendí que la comunicación dentro del equipo vale más que cualquier skill técnico individual. La segunda vez aprendí a liderar decisiones cuando el tiempo apremia y no hay consenso fácil. Perder no es fracasar: es saber exactamente dónde mejorar. Conocer a mentores, referentes de la comunidad y otros desarrolladores con hambre de aprender fue un bonus que ningún curso podría replicar. Las hackathons son las mejores simulaciones del trabajo real que existen.",
  },
  {
    img: simulacro,
    title: "Mega simulacro de entrevista - Stream Gonzy",
    alt: "Simulacro de entrevista Gonzy stream",
    date: "julio 12 2023",
    desc: "Antes de este simulacro, las entrevistas técnicas me generaban un miedo que no tenía nombre. Gonzy creó un espacio donde podías exponerte, equivocarte y aprender en público, sin el costo de perder una oportunidad real. Participar fue incómodo. Y eso fue exactamente lo que necesitaba. Entendí que el nerviosismo no desaparece con más conocimiento, desaparece con más repetición. Que está bien decir 'no sé, pero lo resolvería así'. Que los entrevistadores son personas buscando a alguien con quien trabajar, no jueces buscando un error. Me fui con algo que vale más que cualquier respuesta correcta: la confianza de saber que podía sentarme frente a alguien y mostrar lo que soy, aunque no sepa todo.",
  },
  {
    img: telecom,
    title: "Animaciones performantes en React Native",
    alt: "React Buenos Aires Telecom animaciones",
    date: "julio 13 2023",
    desc: "La charla de Alexis Quiñonez en las oficinas de Telecom me enseñó algo que los tutoriales raramente muestran: el camino entre el problema y la solución. No solo vimos cómo lograr animaciones performantes en React Native, sino los errores que cometieron en el camino, las decisiones que tuvieron que revertir, y cómo un equipo dentro de una empresa grande navega las limitaciones técnicas sin perder velocidad. Esa honestidad sobre el proceso fue más educativa que cualquier demo perfecta. En la industria real los problemas no vienen con título y solución adjunta. Vienen caóticos, con contexto incompleto. Ver cómo un equipo los resuelve desde adentro me preparó mejor que cualquier ejercicio de algoritmos.",
  },
  {
    img: expoJoven,
    title: "Expo Joven",
    alt: "Expo Joven oportunidades IT",
    date: "junio 2023",
    desc: "Buscar trabajo por primera vez en IT puede sentirse como hablar un idioma que todavía estás aprendiendo. Expo Joven fue el lugar donde empecé a entender las reglas del juego. No solo estaban las empresas y universidades con sus stands: estaban las personas dispuestas a contarte cómo realmente funciona el mercado laboral, sin filtros. Me fui con contactos, con claridad sobre qué perfil construir, y con algo más valioso: la certeza de que el sector IT tiene espacio para quien se prepara y se mueve. La clave que aprendí ese día es simple y la repito seguido: nadie te va a buscar si no te mostrás. La visibilidad es una habilidad que hay que entrenar igual que el código.",
  },
  {
    img: modoReact,
    title: "Microfrontends Full Stack con Next.js",
    alt: "React Buenos Aires microfrontends MODO",
    date: "abril 27 2023",
    desc: "Mi primera meetup de React Buenos Aires, en las oficinas de MODO. Entré sin saber muy bien qué esperar y salí con la cabeza llena de preguntas nuevas — que es exactamente lo mejor que te puede pasar. La charla de Aris Markogiannakis sobre microfrontends con Next.js me mostró por primera vez que la arquitectura de una aplicación es tan importante como el código que la compone. Que las decisiones de estructura tienen consecuencias reales en los equipos y en la escalabilidad. Pero lo que más me impactó no fue la charla en sí, sino el ambiente: gente apasionada, con ganas de compartir lo que sabe. Ese día entendí el valor real de la comunidad tech y no paré de ir a cada meetup que pude.",
  },
  {
    img: itJoven,
    title: "IT Joven",
    alt: "Feria IT Joven tecnología",
    date: "abril 23 2023",
    desc: "IT Joven fue una de las primeras veces que me encontré rodeado de personas que hablaban el mismo idioma que yo estaba aprendiendo. Ver en vivo la diversidad de roles dentro de la tecnología — no solo developers, sino diseñadores, product managers, data analysts, fundadores — me abrió la cabeza a un ecosistema más amplio del que imaginaba. Entendí que elegir una carrera en IT no es solo elegir un lenguaje de programación: es elegir en qué tipo de problemas querés trabajar y con quién. Salí de esa feria con becas, contactos y, sobre todo, con la confirmación de que este era mi camino. A veces lo que necesitás no es más información, sino el contexto correcto para tomar la decisión.",
  },
];

export default function Blog() {
  const blogTags = [
    "14 publicaciones",
    "React Buenos Aires",
    "Hackathons & Networking",
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-120px] top-[-140px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-8 lg:pb-16 lg:pt-14">
        <header className="mb-10 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-950 to-blue-950/30 p-4 sm:p-6 lg:p-10">
          <SectionBadge
            text="Bitacora de aprendizaje"
            className="mb-3 inline-flex border border-cyan-400/40 bg-cyan-500/10 uppercase tracking-wider text-cyan-300"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-6xl">
            Blog de comunidad, eventos y crecimiento profesional
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-300 lg:text-lg">
            Un recorrido por meetups, hackathons y experiencias reales que
            potenciaron mi camino como desarrollador Full Stack.
          </p>
          <TagList tags={blogTags} className="mt-6 gap-2 sm:gap-3" />
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
            <ActionLink
              href="/aboutMe"
              variant="primary"
              className="border-cyan-500/50 bg-cyan-500/10 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/20"
            >
              Conocé mi historia
            </ActionLink>
            <ActionLink href="/portfolio" variant="secondary">
              Ver proyectos
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
