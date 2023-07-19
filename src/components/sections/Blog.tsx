import Carousel from '../common/Carousel';

 export const Blog: React.FC = () => {
  const blogData = [
    {
      title: 'Telecom x React Buenos Aires',
      date: 'Julio 13, 2023',
      description: 'En la meetup de Julio aprendimos Animaciones en React Native + E2E testing con Playwright',
      imageUrl: '/images/telecomreact-4.jpg',
      alt: 'react buenos aires en las oficinas telecom'
    },
    {
      title: 'King of Devs 2.0',
      date: 'Junio 1, 2023',
      description: 'King of Devs es una hackathon web3 donde participe 3 dias como front-end con mi equipo desarrollando un preoyecto blockchain en las oficinas de Ripio ',
      imageUrl: '/images/kingofdevs1.jpg',
      alt: 'King of Devs hackathon web3'
    },
    {
      title: 'MODO x React Buenos Aires',
      date: 'Abril 27, 2023',
      description: 'Aprendimos con Aris Markogiannakis un experto en frontend y líder de comunidad en Londres a cómo componer microfrontends con Next.js y sus pros y contras con dos ejemplos prácticos y demos',
      imageUrl: '/images/modoreact-1.jpg',
      alt: 'react buenos aires en las oficinas MODO'
    },
    {
      title: 'Goncy - mega simulacro de entrevistas',
      date: 'Julio 4, 2023',
      description: 'participe del mega simulacro en stream de goncy Pozzo donde pude practicar y despejar dudas',
      imageUrl: '/images/simulacro-entrevista.jpg',
      alt: 'react buenos aires en las oficinas telecom'
    }
  ];

  return (
    <section className="p-10 flex flex-col lg:flex-row justify-center items-center" id='blog' >
      <div className="lg:w-1/2 ">
        <Carousel items={blogData} />
      </div>

      <div className="w-full lg:w-1/2 p-5">
        <h2 className="text-2xl lg:text-4xl font-bold my-6">Mi Blog</h2>
        <p>
        En mi blog, comparto mis experiencias y avances de estudio, proyectos tecnológicos y personales. Me apasiona participar en diversas comunidades, salir de mi zona de confort y asumir nuevos desafíos. Además, disfruto interactuar con la comunidad, ya que me brinda valiosos aprendizajes y la oportunidad de conocer a personas con intereses similares a los míos. ¡Te invito a descubrir algunas de mis experiencias en tecnologia!
        </p>
      </div>
    </section>
  );
};