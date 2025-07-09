// src/components/Contact/Contact.js
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="contact-section">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contact Me</h2>
          <p className="contact-description">
            Have a project in mind, or just want to say hi? Reach out and let’s create something amazing.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;
