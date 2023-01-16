import Form from "./Form";
import Card from "./Card";
import "./contact.css";

const Contact = () => {
  return(
      <div className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>
            <Card/>
          </div>
          <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>
            <Form/>
          </div>
        </div>
      </div>
  );
}

export default Contact;

// <form className="contact_form">
//   <div className="contact__form-div">
//     <label className="contact__form-tag">Name</label>
//     <input
//         type="text"
//         name="name"
//         className="contact__form-input"
//         placeholder="Insert your name"
//     />
//   </div>
//   <div className="contact__form-div">
//     <label className="contact__form-tag">Mail</label>
//     <input
//         type="email"
//         name="mail"
//         className="contact__form-input"
//         placeholder="Insert your mail"
//     />
//   </div>
//   <div className="contact__form-div">
//     <label className="contact__form-tag">Project</label>
//     <textarea
//         name="project"
//         cols="30"
//         rows="10"
//         className="contact__form-input"
//         placeholder="Write your project"
//     >
//                 </textarea>
//   </div>
//   <button className="button button--flex">
//     Send Message<AiOutlineSend/>
//   </button>
// </form>