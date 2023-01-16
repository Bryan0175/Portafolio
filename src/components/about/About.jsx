import "./about.css";
import Info from "./Info";
import CV from "../../assets/imgs/BrayanDuarte - CV.pdf"

const About = () => {
  return(
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
          <div className="about__data">
            <Info/>
            <a download="CV - BRAYAN DUARTE" href={CV} className="button button--flex">
              Download CV
            </a>
          </div>
        </div>
      </section>
  );
}

export default About;