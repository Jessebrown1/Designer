import React, { useRef, useEffect } from "react";
import "./Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        I’d love to hear from you! Whether you have a question, a project, or just want to connect.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form ref={formRef} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        {/* Contact Info */}
        <div ref={infoRef} className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Phone:</strong> +233 55 238 4351 / +233 50 945 7303</p>
          <p><strong>Email:</strong> youremail@example.com</p>
          <p><strong>Address:</strong> Tema, Accra, Ghana</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
