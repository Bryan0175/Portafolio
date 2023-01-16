import { TbBrandTelegram } from "react-icons/tb";

const Data = () => {
  return(
      <div className="home__data">
          <h1 className="home__title">
              Brayan Duarte
          </h1>
          <h3 className="home__subtitle">Fullstack Developer</h3>
          <p className="home__description">I’m creative developer based in Bogotá, i’m
          focused on react and node, self-taught and in continuous learning...</p>
          <a href="#contact" className="button button--flex">
              Say Hello<TbBrandTelegram size={25}/>
          </a>
      </div>
  );
}

export default Data;