import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { Element } from "react-scroll";
import { motion, useInView } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaInstagram,
  FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaClock,
} from "react-icons/fa";
import "./Contact.css";

const socialLinks = [
  { name: "GitHub",    icon: <FaGithub />,    url: "https://github.com/yasithh1",               hoverColor: "#f0f6ff" },
  { name: "LinkedIn",  icon: <FaLinkedin />,   url: "https://linkedin.com/in/yourusername",      hoverColor: "#0a66c2" },
  { name: "Instagram", icon: <FaInstagram />,  url: "https://instagram.com/yourusername",        hoverColor: "#e1306c" },
  { name: "Email",     icon: <FaEnvelope />,   url: "mailto:yasithpasindu7@gmail.com",           hoverColor: "#38bdf8" },
];

const infoItems = [
  { icon: <FaEnvelope />,     label: "Email",     value: "yasithpasindu7@gmail.com", href: "mailto:yasithpasindu7@gmail.com" },
  { icon: <FaMapMarkerAlt />, label: "Location",  value: "Sri Lanka",                href: null },
  { icon: <FaClock />,        label: "Available", value: "Mon – Fri, 9am – 6pm IST", href: null },
];

const INITIAL = { name: "", email: "", subject: "", message: "" };

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemV = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  const [form,   setForm]   = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.email.trim())   e.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (form.message.trim().length < 20) e.message = "At least 20 characters please.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");

    try {
      const result = await emailjs.send(
        "service_9zzucc9",
        "template_h5y5nec",
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        "-O3ryflpsj3LZTIj7"
      );
      console.log("EmailJS success:", result);
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error("EmailJS error status:", err?.status);
      console.error("EmailJS error text:", err?.text);
      setStatus("error");
    }
  };

  return (
    <Element name="contact">
      <section className="contact-section" id="contact" ref={sectionRef}>

        {/* bg grid */}
        <div className="contact-grid-bg" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grid-line" style={{ left: `${i * 20}%` }} />
          ))}
        </div>

        <div className="contact-inner">

          {/* ── LEFT ── */}
          <motion.div
            className="contact-left"
            variants={containerV}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.p variants={itemV} className="section-eyebrow">Get in touch</motion.p>
            <motion.h2 variants={itemV} className="contact-title">
              Let's build<br />
              <span className="c-highlight">something great</span>
            </motion.h2>
            <motion.p variants={itemV} className="contact-description">
              Open to freelance projects, full-time roles, and interesting collaborations.
              Drop me a message and I'll reply within 24 hours.
            </motion.p>

            <motion.div variants={itemV} className="contact-info-list">
              {infoItems.map(({ icon, label, value, href }) => (
                <div className="info-row" key={label}>
                  <span className="info-icon">{icon}</span>
                  <div>
                    <p className="info-label">{label}</p>
                    {href
                      ? <a href={href} className="info-value link">{value}</a>
                      : <p className="info-value">{value}</p>}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemV} className="social-icons">
              {socialLinks.map(s => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={s.name}
                  title={s.name}
                  whileHover={{ y: -4, color: s.hoverColor }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "success" ? (
              <motion.div
                className="success-state"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "backOut" }}
              >
                <div className="success-ring"><span>✓</span></div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out — I'll reply soon.</p>
                <button className="btn-primary" onClick={() => setStatus("idle")}>
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-heading">
                  <FaPaperPlane className="form-heading-icon" />
                  <span>Send a message</span>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Yasith Perera"
                      value={form.name} onChange={handleChange}
                      className={errors.name ? "err" : ""} autoComplete="name" />
                    {errors.name && <span className="field-err">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com"
                      value={form.email} onChange={handleChange}
                      className={errors.email ? "err" : ""} autoComplete="email" />
                    {errors.email && <span className="field-err">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text"
                    placeholder="Project enquiry / Freelance / Just saying hi"
                    value={form.subject} onChange={handleChange}
                    className={errors.subject ? "err" : ""} />
                  {errors.subject && <span className="field-err">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5}
                    placeholder="Tell me about your project…"
                    value={form.message} onChange={handleChange}
                    className={errors.message ? "err" : ""} maxLength={500} />
                  {errors.message && <span className="field-err">{errors.message}</span>}
                  <span className="char-count">{form.message.length} / 500</span>
                </div>

                {status === "error" && (
                  <p className="banner-error">Something went wrong. Please try again.</p>
                )}

                <motion.button type="submit" className="btn-primary"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  {status === "sending"
                    ? <><span className="spinner" /> Sending…</>
                    : <><FaPaperPlane style={{ fontSize: "0.82rem" }} /> Send Message</>}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </Element>
  );
};

export default Contact;