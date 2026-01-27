import React, { useState } from "react";
import "./ContactFrom.css";

const ContactForm = () => {

  return (
    <section className="contact dark">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Let’s build something amazing together 🚀</p>

          
        </div>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
