import { DiJava } from "react-icons/di";
import { FaNodeJs, FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiOracle, SiExpress } from "react-icons/si";
import { IoLeafOutline } from "react-icons/io5";

const Backend = () => {
  return(
      <div className="skills__content">
          <h3 className="skills__title">Desarrollador Backend</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <a href="https://nodejs.org/es/" target="_blank"><div className="skills__data">
                      <FaNodeJs className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Node</h3>
                      </div>
                  </div></a>

                  <a href="https://laravel.com/" target="_blank"><div className="skills__data">
                      <FaLaravel className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Laravel</h3>
                      </div>
                  </div></a>

                  <a href="https://www.java.com/es/" target="_blank"><div className="skills__data">
                      <DiJava className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Java</h3>
                      </div>
                  </div></a>
              </div>
              <div className="skills__group">
                  <a href="https://expressjs.com/es/" target="_blank"><div className="skills__data">
                      <SiExpress className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">Express</h3>
                      </div>
                  </div></a>

                  <a href="https://www.mysql.com/" target="_blank"><div className="skills__data">
                      <SiOracle className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">MySql</h3>
                      </div>
                  </div></a>

                  <a href="https://www.mongodb.com/" target="_blank"><div className="skills__data">
                      <IoLeafOutline className="skills__icon"/>
                      <div>
                          <h3 className="skills__name">MongoDB</h3>
                      </div>
                  </div></a>
              </div>
          </div>
      </div>
  );
}

export default Backend;
