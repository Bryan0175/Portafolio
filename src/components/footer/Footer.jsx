import {BsLinkedin,BsFileEarmarkPersonFill,BsTelegram} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return(
      <footer className="footer">
          <div className="footer__container container">
              <h1 className="footer__title">Brayan Duarte</h1>
              <div className="footer__social">
                  <a href="https://github.com/bryan0175" rel="noreferrer" className="footer__social-link" target="_blank">
                      <FaGithub/>
                  </a>
                  <a href="https://www.linkedin.com/in/brayan-duarte-54434b1b0/" rel="noreferrer" className="footer__social-link" target="_blank">
                      <BsLinkedin/>
                  </a>
                  <a href="#CV" className="footer__social-link" target="_blank">
                      <BsFileEarmarkPersonFill/>
                  </a>
                  <a href="https://web.telegram.org/k/#@BrayanDuarte01" rel="noreferrer" className="footer__social-link" target="_blank">
                      <BsTelegram/>
                  </a>
              </div>
          </div>
      </footer>
  );
}

export default Footer;