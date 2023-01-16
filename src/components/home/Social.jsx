import { VscGithubAlt, } from "react-icons/vsc";
import { TbBrandTelegram } from "react-icons/tb";
import { FaRegFileAlt,FaLinkedinIn } from "react-icons/fa";


const Social = () => {
  return(
      <div className="home__social">
          <a href="https://github.com/bryan0175" rel="noreferrer" className="home__social-icon" target="_blank">
              <VscGithubAlt/>
          </a>
          <a href="https://www.linkedin.com/in/brayan-duarte-54434b1b0/" rel="noreferrer" className="home__social-icon" target="_blank">
              <FaLinkedinIn/>
          </a>
          <a href="#CV" className="home__social-icon" target="_blank">
              <FaRegFileAlt/>
          </a>
          <a href="https://web.telegram.org/k/#@BrayanDuarte01" rel="noreferrer" className="home__social-icon" target="_blank">
              <TbBrandTelegram/>
          </a>
      </div>
  );
}

export default Social;