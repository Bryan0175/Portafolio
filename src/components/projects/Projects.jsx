import "./projects.css";
import Cards from "./Cards";
import projects from "./DataProjects";

const Projects = () => {
  return(
      <section className="projects section" id="projects">
        <h2 className="section__title">Proyectos</h2>
        <span className="section__subtitle">Trabajo mas reciente</span>
        <div className="project__container container grid">
            {projects.map(project => (
                <div key={project.id} className="project__content">
                    <Cards
                        title={project.title}
                        src={project.src}
                        description={project.description}
                        source={project.source}
                        deployment={project.deployment}
                    />
                </div>
            ))}
        </div>
      </section>
  );
}

export default Projects;