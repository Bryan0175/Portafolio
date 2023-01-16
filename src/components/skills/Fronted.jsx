import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";



const Fronted = () => {
  return(
      <div className="skills__content">
          <h3 className="skills__title">Frontend Developer</h3>
          <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <DiJavascript1 className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <FaReact className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">React</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <TbBrandNextjs className="skills__icon"/>
                    <div>
                        <h3 className="skills__name">Next</h3>
                    </div>
                </div>
            </div>
              <div className="skills__group">
                  <div className="skills__data">
                      <AiOutlineHtml5 className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Html</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <TbBrandCss3 className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Css</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Fronted;