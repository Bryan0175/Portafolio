import Social from "./Social";
import Data from "./Data";
import "./home.css";
import { FaArrowDown } from "react-icons/fa";


const Home = () => {
  return(
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social/>
          <div className="home__img">

          </div>
          <Data/>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-cont">
            <div className="home__scroll-button">
              <span className="home__scroll-wheel"></span>
            </div>
            <span className="home__scroll-name">Scroll Down</span>
            <FaArrowDown color="black"/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;