import { AiFillHome } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const Info = () => {
  return(
      <div className="about__info">
        <div className="about__box">
          <p className="about__description">
              Hola, soy Brayan Eduardo Duarte desarrollador junior fullstack,
              vivo en la ciudad de bogota, tengo 25 años, tengo un hermano enfocado
              en la parte de backed y mi <a target="_blank" href="https://portafolio-angelus.vercel.app/home">novia </a>
              encofaca en la parte del fronted.</p>
          <AiFillHome className="about__icon"/>
        </div>
        <div className="about__box">
          <IoGameController className="about__icon"/>
          <p className="about__description">Me gustan los video juegos, el baloncesto,
          las peliculas de accion, pasar tiempo con mis amigos, personalmente
          me gusta estudiar y leer sobre la programación en general.</p>
        </div>
        <div className="about__box">
          <p className="about__description">Empecé estudiando programacion en el SENA y me
          gradue como uno de los mejores de mi clase, seguido a eso continue mis estudios en
          la univerdad Politecnico, he realizado varios cursos con certificación en Udemy y
          me gradue como fullstack de Programate Academy con buenos reconocimiento por parte
          de mis compañeros y formadores</p>
          <GiWhiteBook className="about__icon"/>
        </div>
      </div>
  );
}

export default Info;