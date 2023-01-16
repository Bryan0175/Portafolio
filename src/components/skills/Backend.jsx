import { DiJava } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql,SiOracle } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";

const Backend = () => {
  return(
      <div className="skills__content">
          <h3 className="skills__title">Backend Developer</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <div className="skills__data">
                      <FaNodeJs className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Node</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <GrMysql className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">MySql</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <DiJava className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Java</h3>
                      </div>
                  </div>
              </div>
              <div className="skills__group">
                  <div className="skills__data">
                      <TbBrandFirebase className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Firebase</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <SiOracle className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Oracle</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <SiPostgresql className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Postgres</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Backend;