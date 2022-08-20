import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Popup from "./Popup";
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7q2t6bc",
        "template_n3sfwsn",
        form.current,
        "eY5QPZWKEYe-n68rB"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setSent(true);
          closeNote();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const closeNote = () => {
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>areezali68@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=areezali68@gmail.com&tf=1"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Areez Ali</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>+923013359053</h5>
            <a
              href="https://wa.me/+923013359053"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
        <div>
          {sent && <Popup />}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
