import { VscGithubAlt, } from "react-icons/vsc";
import { TbBrandTelegram } from "react-icons/tb";
import { FaRegFileAlt,FaLinkedinIn } from "react-icons/fa";
import {useEffect} from "react";
import {gsap} from "gsap";


const Social = () => {
    useEffect(() => {
        gsap.from('.home__social-icon', {opacity: 0, duration: 1, stagger: 0.4, delay: 1, x: -10})
        // gsap.from('.s2', {opacity: 0, duration: 1, delay: 1.2, x: -11})
        // gsap.from('.s3', {opacity: 0, duration: 1, delay: 1.4, x: -12})
        // gsap.from('.s4', {opacity: 0, duration: 1, delay: 1.6, x: -13})
    }, [])
  return(
      <div className="home__social">
          <a href="https://github.com/bryan0175" rel="noreferrer" className="home__social-icon s1" target="_blank">
              <VscGithubAlt/>
          </a>
          <a href="https://www.linkedin.com/in/brayan-duarte-54434b1b0/" rel="noreferrer" className="home__social-icon s2" target="_blank">
              <FaLinkedinIn/>
          </a>
          <a href="#CV" className="home__social-icon s3" target="_blank">
              <FaRegFileAlt/>
          </a>
          <a href="https://web.telegram.org/k/#@BrayanDuarte01" rel="noreferrer" className="home__social-icon s4" target="_blank">
              <TbBrandTelegram/>
          </a>
      </div>
  );
}

export default Social;