import "./skills.css";
import Fronted from "./Fronted";
import Backend from "./Backend";
import Tools from "./Tools";

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Mi nivel tecnico</span>
            <div className="skills__container container grid">
                <Fronted/>
                <Backend/>
                <Tools/>
            </div>
        </section>
    );
}

export default Skills;