import {RiArrowRightLine, RiMailSendLine} from "react-icons/ri";
import {TbBrandTelegram} from "react-icons/tb";
import {FiInstagram} from "react-icons/fi";

const Card = () => {
  return(
      <div className="contact__info">
          <div className="contact__card">
              <RiMailSendLine className="contact__card-icon"/>
              <h3 className="contact__card-title">Correo</h3>
              <span className="contact__card-data">Bryanskate0175@hotmail.com</span>
              <a href="mailto:Bryanskate0175@hotmail.com" className="contact__button">Escríbeme{" "}<RiArrowRightLine className="contact__button-icon"/></a>
          </div>
          <div className="contact__card">
              <TbBrandTelegram className="contact__card-icon"/>
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@BrayanDuarte01</span>
              <a href="https://web.telegram.org/k/#@BrayanDuarte01" target="_blank" className="contact__button">Escríbeme {" "}<RiArrowRightLine className="contact__button-icon"/></a>
          </div>
          <div className="contact__card">
              <FiInstagram className="contact__card-icon"/>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@esceptico_o</span>
              <a href="https://www.instagram.com/esceptico_o/" target="_blank" className="contact__button">Escríbeme {" "}<RiArrowRightLine className="contact__button-icon"/></a>
          </div>
      </div>
  );
}

export default Card;