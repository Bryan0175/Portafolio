import {AiOutlineSend} from "react-icons/ai";
import React, {useRef, useState} from 'react';
import email from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        email.sendForm('service_ugt78rr', 'template_fbfk4cn', form.current, 'lotprhtb9yiaxuaf4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setMessage("MESSAGE SENT")
        setTimeout(() => {
            setMessage("")
        }, 2000)
    };

  return(
      <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Escribe tu nombre"
                  required={true}
              />
          </div>
          <div className="contact__form-div">
              <label className="contact__form-tag">Correo</label>
              <input
                  type="email"
                  name="mail"
                  className="contact__form-input"
                  placeholder="Escribe tu correo"
              />
          </div>
          <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Proyecto</label>
              <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Escribe tu proyecto"
              >
                </textarea>
          </div>
          {/*<div className="content__btn">*/}
          {/*  <button className="mail-btn">Send Message<AiOutlineSend className="contact__form-iconSend"/></button>*/}
          {/*</div>*/}
          <button type="submit" value="Send" className="button button--flex">
              Enviar Mensaje<AiOutlineSend className="contact__form-iconSend"/>
          </button>
             <h1>{message}</h1>
      </form>
  );
}

export default Form;