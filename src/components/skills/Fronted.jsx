import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { TbBrandAngular } from "react-icons/tb";

const Fronted = () => {
  return(
      <div className="skills__content">
          <h3 className="skills__title">Desarrollador Frontend</h3>
          <div className="skills__box">
            <div className="skills__group">
                <a href="https://www.javascript.com/" target="_blank"><div className="skills__data">
                    <DiJavascript1 className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                    </div>
                </div></a>

                <a href="https://es.reactjs.org/" target="_blank"><div className="skills__data">
                    <FaReact className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">React</h3>
                    </div>
                </div></a>

                <a href="https://angularjs.org/" target="_blank"><div className="skills__data">
                    <TbBrandAngular className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">Angular</h3>
                    </div>
                </div></a>
            </div>
              <div className="skills__group">
                  <a href="https://www.typescriptlang.org/" target="_blank"><div className="skills__data">
                      <SiTypescript className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">TypeScript</h3>
                      </div>
                  </div></a>
                
                  <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank"><div className="skills__data">
                      <AiOutlineHtml5 className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Html</h3>
                      </div>
                  </div></a>

                  <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"><div className="skills__data">
                      <TbBrandCss3 className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Css</h3>
                      </div>
                  </div></a>
              </div>
          </div>
      </div>
  );
}

export default Fronted;
