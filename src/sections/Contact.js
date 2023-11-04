import { useState } from "react";
import "./contact.scss";
import { BiMailSend } from "react-icons/bi";
import { VscSend } from "react-icons/vsc";
const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    text: "",
  });

  return (
    <section id="contact">
      <h5 className="contact-title">
        CONTACT US <BiMailSend />
      </h5>
      <form className="contact-form">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name .."
          autoComplete="off"
        />
        <label>e-mail</label>
        <input
          type="email"
          id="name"
          name="name"
          placeholder="Your email .."
          autoComplete="off"
        />
        <label>how can we help you?</label>
        <textarea placeholder="Wrtite something .." />
        <button className="submit">
          SEND <VscSend className="arrow" />
        </button>
      </form>
    </section>
  );
};
export default Contact;
