import { FiGithub } from "react-icons/fi";
import { TbBrandDocker } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { SiJest, SiPostman } from "react-icons/si";


const Tools = () => {
  return(
      <div className="skills__content">
          <h3 className="skills__title">Tools Developer</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <div className="skills__data">
                      <FiGithub className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Github</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <TbBrandDocker className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Docker</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <BiGitBranch className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Git</h3>
                      </div>
                  </div>
              </div>
              <div className="skills__group">
                  <div className="skills__data">
                      <SiJest className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Jest</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <SiPostman className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Postman</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Tools;