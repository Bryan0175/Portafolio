import Form from "./Form";
import Card from "./Card";
import "./contact.css";

const Contact = () => {
  return(
      <div className="contact section" id="contact">
        <h2 className="section__title">Ponerse en contacto</h2>
        <span className="section__subtitle">Contactame</span>
        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Háblame</h3>
            <Card/>
          </div>
          <div className="contact__content">
            <h3 className="contact__title">Escríbeme tu proyecto</h3>
            <Form/>
          </div>
        </div>
      </div>
  );
}

export default Contact;