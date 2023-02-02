import { TbBrandTelegram } from "react-icons/tb";

const Data = () => {
  return(
      <div className="home__data">
          <h1 className="home__title">
              Brayan Duarte
          </h1>
          <h3 className="home__subtitle">Fullstack Developer</h3>
          <p className="home__description">Soy un desarrollador creativo viviendo en Bogotá,
              enfocado en el <strong style={{color:"#444"}}>MERN</strong> stack, siempre actualizado con las nuevas tecnologias.</p>
          <a href="#contact" className="button button--flex">
              Escribeme <TbBrandTelegram size={25} style={{marginLeft:"5px"}}/>
          </a>
      </div>
  );
}

export default Data;