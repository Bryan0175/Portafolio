import { FiGithub } from "react-icons/fi";
import { TbBrandBitbucket } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { SiJest, SiPostman, SiVisualstudiocode } from "react-icons/si";

const Tools = () => {
  return(
      <div className="skills__content">
          <h3 className="skills__title">Herramientas de desarrollador</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <a href="https://github.com/" target="_blank"><div className="skills__data">
                      <FiGithub className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Github</h3>
                      </div>
                  </div></a>

                  <a href="https://bitbucket.org/" target="_blank"><div className="skills__data">
                      <TbBrandBitbucket className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Bitbucket</h3>
                      </div>
                  </div></a>

                  <a href="https://git-scm.com/" target="_blank"><div className="skills__data">
                      <BiGitBranch className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Git</h3>
                      </div>
                  </div></a>
              </div>
              <div className="skills__group">
                  <a href="https://jestjs.io" target="_blank"><div className="skills__data">
                      <SiJest className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Jest</h3>
                      </div>
                  </div></a>

                  <a href="https://code.visualstudio.com/" target="_blank"><div className="skills__data">
                      <SiVisualstudiocode className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Visual Studio</h3>
                      </div>
                  </div></a>

                  <a href="https://www.postman.com" target="_blank"><div className="skills__data">
                      <SiPostman className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Postman</h3>
                      </div>
                  </div></a>
              </div>
          </div>
      </div>
  );
}

export default Tools;
