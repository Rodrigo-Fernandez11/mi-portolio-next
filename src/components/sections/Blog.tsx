import Carousel from "../common/Carousel";


const Blog: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Blog
        </h2>
        <Carousel />
      </div>
    </section>
  );
};

export default Blog;
