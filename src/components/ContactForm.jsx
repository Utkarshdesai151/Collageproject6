import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  // Options for the "Chips" to match the reference design
  const services = [
    "MVP Development",
    "Website Design",
    "SaaS Design",
    "AI Integration",
    "UI/UX Design",
    "Management Systems"
  ];

  const budgets = [
    "Under $1,000",
    "$1,000–$2,500",
    "$2,500–$5,000",
    "$5,000+"
  ];

  const handleSelection = (category, value) => {
    setFormData({ ...formData, [category]: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        
        {/* LEFT COLUMN: Brand Info & Pitch */}
        <div className="contact-info">
          <h2 className="section-title">
            Have A Project Idea<br />
            <span className="highlight-text">In Mind?</span>
          </h2>
          <h3 className="sub-title">Let's Get Started.</h3>

          <ul className="checklist">
            <li>
              <span className="check-icon">✓</span> 
              Expect A Response Within 24 Hours
            </li>
            <li>
              <span className="check-icon">✓</span> 
              We Can Sign An NDA Before Discussion
            </li>
            <li>
              <span className="check-icon">✓</span> 
              Access To Dedicated Product Specialists
            </li>
          </ul>

          <div className="direct-contact">
             {/* You can replace this with an actual icon later */}
            <div className="icon-circle">📞</div>
            <div className="contact-text">
                <span>Book A Call Directly</span>
                <a href="mailto:info@satvarth.com" className="email-link">info@satvarth.com</a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="form-container">
          <form className="contact-form">
            
            {/* Name & Email Row */}
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter Your Name" 
                  onChange={handleChange} 
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter Your Email" 
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Services Selection */}
            <div className="selection-group">
              <label>What Do You Need?</label>
              <div className="chip-container">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    className={`chip ${formData.service === service ? "active" : ""}`}
                    onClick={() => handleSelection("service", service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selection */}
            <div className="selection-group">
              <label>Budget</label>
              <div className="chip-container">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    className={`chip ${formData.budget === budget ? "active" : ""}`}
                    onClick={() => handleSelection("budget", budget)}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="input-group">
              <label>Project Brief</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Describe your project here..."
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message ↗
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;