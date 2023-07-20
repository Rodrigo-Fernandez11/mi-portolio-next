import ProjectCard from '../common/ProjectCard';
import projects from '../../../Data/portfolioData';

const Portfolio: React.FC = () => {

  return (
    <section className="py-10" id='portfolio'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold flex justify-center  ">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;