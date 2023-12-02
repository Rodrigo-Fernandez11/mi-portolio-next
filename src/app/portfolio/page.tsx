import ProjectCard from "@/components/common/ProjectCard";
import projects from "@/Data/portfolioData";

const Portfolio = () => {

  return (
    <section className="py-4 w-full mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold flex justify-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
    </section>
  );
};
export default Portfolio;