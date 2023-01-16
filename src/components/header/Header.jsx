import "./header.css";
import {
  FaHome,
  FaRegUser,
  FaFileAlt,
  FaBriefcase,
  FaTelegramPlane,
  FaTimes,
  FaTh
} from 'react-icons/fa';
import {useState} from "react";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return(
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">LOGO</a>
          <div className={`nav__menu ${Toggle ? 'show-menu' : ''}`}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <FaHome className="nav__icon"/> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <FaRegUser className="nav__icon"/> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <FaFileAlt className="nav__icon"/> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <FaBriefcase className="nav__icon"/> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <FaTelegramPlane className="nav__icon"/> Contact
                </a>
              </li>
            </ul>
            <FaTimes className="nav__close" onClick={() => showMenu(!Toggle)}/>
          </div>
          <div>
            Toggle
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <FaTh/>
          </div>
        </nav>
      </header>
  )
}

export default Header;