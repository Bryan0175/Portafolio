import "./projects.css";
import Cards from "./Cards";

const Projects = () => {
  return(
      <section className="projects section" id="projects">
        <h2 className="section__title">Proyectos</h2>
        <span className="section__subtitle">Trabajo mas reciente</span>
        <div className="project__container container grid">
            <div className="project__content">
                <Cards/>
            </div>
        </div>
      </section>
  );
}

export default Projects;