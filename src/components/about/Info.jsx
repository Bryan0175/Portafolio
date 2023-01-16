import { AiFillHome } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const Info = () => {
  return(
      <div className="about__info">
        <div className="about__box">
          <p className="about__description">
            Hi, I'm Brayan Eduardo Duarte, a junior full stack developer,
            I'm living in the city of Bogotá, I'm 25 years old, right now
            I'm in a relationship with a fullstack developer focused on the
            frontend, I put her portfolio here.</p>
          <AiFillHome className="about__icon"/>
        </div>
        <div className="about__box">
          <IoGameController className="about__icon"/>
          <p className="about__description">I like video games like valorant,
            league of legends, pubg, cod WZ, fall guy, among many others...
            Which I play with my friends, my brother and my girlfriend.</p>
        </div>
        <div className="about__box">
          <p className="about__description">Hi, I'm Brayan Eduardo Duarte, a junior full stack developer,
            I'm living in the city of Bogotá, I'm 25 years old, right now
            I'm in a relationship with a fullstack developer focused on the
            frontend, I put her portfolio here.</p>
          <GiWhiteBook className="about__icon"/>
        </div>
      </div>
  );
}

export default Info;