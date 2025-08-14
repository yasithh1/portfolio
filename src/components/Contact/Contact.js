import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "./Contact.css";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/yasithh1" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/yourusername" },
  { name: "Email", icon: <FaEnvelope />, url: "" },
];

const Contact = () => {
  return (
    <Element name="contact">
      <section className="contact-section">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">Connect With Me</h2>
          <p className="contact-description">
            Let’s stay in touch! Find me on these platforms:
          </p>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;
