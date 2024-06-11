import "./header.css";
import brand from "../../assets/svg/brand.svg";
import {
  FaHome,
  FaUserAlt,
  FaFileAlt,
  FaBriefcase,
  FaTelegramPlane,
  FaTimes,
  FaTh
} from 'react-icons/fa';
import {useState,useEffect} from "react";
import {gsap} from "gsap";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  useEffect(() => {
    gsap.from('.nav__item', {opacity: 0, duration: 1, stagger: 0.3, delay: .7, y: 10})
  }, [])
  return(
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo"><img src={brand} width={40}/></a>
          <div className={`nav__menu ${Toggle ? 'show-menu' : ''}`}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <FaHome className="nav__icon"/> Inicio
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <FaUserAlt className="nav__icon"/> Acerca
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <FaBriefcase className="nav__icon"/> Proyectos
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <FaFileAlt className="nav__icon"/> Habilidades
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <FaTelegramPlane className="nav__icon"/> Contacto
                </a>
              </li>
            </ul>
            <FaTimes className="nav__close" onClick={() => showMenu(!Toggle)}/>
          </div>
          {/*<div>
            Toggle
          </div> */}
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <FaTh/>
          </div>
        </nav>
      </header>
  )
}

export default Header;
