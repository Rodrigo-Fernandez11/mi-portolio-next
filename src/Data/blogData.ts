interface Post {
  title: string;
  desc: string;
  img: string;
  alt: string;
  date: string;
}

const posts: Post[] = [
  {
    title: "Activa tu talento J.P Morgan x Junior Achievement",
    desc: "Por experiencia personal, siempre recomiendo explorar oportunidades que permitan seguir aprendiendo, conocer personas y trabajar en equipo. En mi caso, participé en 'Activa tu Talento', donde junto a compañeros aprendimos de expertos de JP Morgan y Junior Achievement. Este programa se enfoca en fortalecer habilidades laborales con actividades prácticas. Profesionales voluntarios nos guiaron en la creación de CVs, perfiles de LinkedIn, preparación para entrevistas y desarrollo de habilidades de comunicación y trabajo en equipo. Además, nos ayudaron a reflexionar sobre nuestros objetivos personales y profesionales para trazar un plan de vida.",
    img: "/images/potencia-talento.webp",
    alt: "Lourin",
    date: "noviembre 1 2023",
  },
  {
    title: "BSMNT 101 Toolkit",
    desc: "En la reunión de noviembre de React Buenos Aires, tuvimos el placer de conocer a Basement Studio. Su charla fue sumamente interesante, ya que nos adentraron en sus proyectos, los desafíos que enfrentaron durante el desarrollo, sus soluciones y la lógica detrás de las herramientas que utilizaron. Fue una sesión en la que aprendí muchísimo sobre el proceso de desarrollo y resolución de problemas en el campo de React.",
    img: "/images/basements.webp",
    alt: "basement studio",
    date: "octubre 31 2023",
  },
  {
    title: "Performance con Lazy Load en React Native",
    desc: "En la meetup de octubre conocimos a the Rocket base que nos dio una charla de mejora de performance con lazy load en React Native y nos contó más sobre ellos y su trabajo, luego como es de costumbre compartimos un agradable momento de networking.",
    img: "/images/rocket-base.webp",
    alt: "react native the rocket base",
    date: "octubre 6 2023",
  },
  {
    title: "Uso de signals y tips de troubleshooting Node js",
    desc: "En la meetup de septiembre el invitado fue Segie code persona que conocía por los cursos de programación en su canal de YouTube que están muy bien explicados, en esta ocasión nos dio una charla de signals y después Alan Marcello nos dio tips de troubleshooting con Node.js.",
    img: "/images/modo-signals.webp",
    alt: "react buenos aires signals segie code",
    date: "septiembre 25 2023",
  },
  {
    title: "Hackathon King of devs",
    desc: "Como una persona inquieta y curiosa, una de las experiencias más impactantes en mi carrera fue participar dos veces en la Hackathon de King of Devs. Durante tres días, trabajamos en equipo en proyectos desafiantes e innovadores en web3, presentándolos ante un jurado. Conocí diversos perfiles, aprendí de mentores con gran experiencia y conoci a creadores de contenido en la comunidad de programación, quienes enriquecieron mis estudios con sus cursos y contenido gratuito.",
    img: "/images/kingofdevs.webp",
    alt: "hackathon",
    date: "julio 2023",
  },
  {
    title: "Mega simulacro de entrevista - Stream Gonzy",
    desc: "Disfruto participar en diversas comunidades IT, y una de mis favoritas son los canales de contenido de programadores como Goncy, quien constantemente aporta a la comunidad con actividades muy útiles para personas como yo que buscan aprender y encontrar su primer trabajo en IT. Recientemente, tuve la oportunidad de participar en un mega simulacro de entrevista de trabajo para ganar experiencia y confianza al enfrentarme a futuras entrevistas.",
    img: "/images/simulacro-entrevista.webp",
    alt: "Lourin",
    date: "Julio 12 2023",
  },
  {
    title: "Animaciones performantes en React Native",
    desc: "La meetup de julio nos vimos a encontrar en esta ocasión en las oficinas de Telecom para una charla de animaciones de alto rendimiento que nos dio Alexis Quiñonez y lo que más me gusto es también nos contaron los problemas que tuvieron en la empresa y como buscaron la solución",
    img: "/images/telecomreact-1.webp",
    alt: "comunidad react buenos aires telecom",
    date: "Julio 13 2023",
  },
  {
    title: "Expo joven",
    desc: "Si estás buscando tu primera oportunidad en IT u otros sectores, basándome en mi experiencia personal, te recomiendo visitar Expo Joven. Allí, obtuve herramientas fundamentales para mi carrera: desde oportunidades laborales y formación hasta consejos prácticos para destacarme en un mercado competitivo. Los talleres no solo mejoraron mi CV y habilidades de entrevista, sino que también me ayudaron a desenvolverme en un entorno laboral digitalizado. Con la participación de numerosas empresas, universidades y charlas inspiradoras.",
    img: "/images/expojovenes.webp",
    alt: "experiencia expo joven",
    date: "junio 2023",
  },
  {
    title: "Composing Fullstack microfrontends with Next JS",
    desc: "Mi primera participación en la comunidad de React buenos aires en las oficinas de MODO que tuvo como invitado a Aris Markogiannakis que nos dio una charla muy interesante sobre microfrontends con Next JS, pros y contras con ejemplos, luego compartimos un agradable momento entre todos para hablar y comer algo rico.",
    img: "/images/modoreact-1.webp",
    alt: "comunidad react buenos aires en oficonas de modo",
    date: "Abril 27 2023",
  },
  {
    title: "IT joven",
    desc: "La Feria IT Joven fue una inmersión emocionante en el mundo tecnológico, donde descubrí las últimas tendencias y oportunidades. Con talleres, conferencias y experiencias interactivas, exploré el futuro de la tecnología mientras instituciones y empresas presentaban sus innovaciones, tambien es lugar ideal para encontrar becas, puestos de trabajo.",
    img: "/images/itjoven.webp",
    alt: "experiencia it joven",
    date: "abril 23 2023",
  },
];
export default posts;
