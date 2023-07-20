import Carousel from '../common/Carousel';
import blogData from '../../../Data/blogData';

 export const Blog: React.FC = () => {

  return (
    <section className="p-10 flex flex-col lg:flex-row justify-center items-center" id='blog' >
      <div className="w-full lg:w-1/2 p-5">
        <h2 className="text-2xl lg:text-4xl font-bold my-6">Mi Blog</h2>
        <p>
        En mi blog, comparto mis experiencias y avances personales. Me apasiona participar en diversas comunidades, salir de mi zona de confort y asumir nuevos desafíos. Además, disfruto interactuar con la comunidad, ya que me brinda valiosos aprendizajes y la oportunidad de conocer a personas con intereses similares a los míos. ¡Te invito a descubrir algunas de mis experiencias en tecnologia!
        </p>
      </div>
      <div className="lg:w-1/2 ">
        <Carousel items={blogData} />
      </div>
    </section>
  );
};