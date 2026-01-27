import React from "react";
import "./Footer.css";
import LogoOnly from '../../assets/Logo/logoonly (1).svg'; // Ensure this path is correct in your folder
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUMN 1: Brand & Socials */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={LogoOnly} className="logo-icon" alt="Satvarth Logo" />
            <span>Satvarth<span className="logo-suffix">solutions</span></span>
          </div>
          <p className="footer-tagline">
            Crafting digital experiences that merge creativity with technology. 
            Let's build the future together.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
        </div>

        {/* COLUMN 2: Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">MVP Development</a></li>
            <li><a href="#">SaaS Design</a></li>
            <li><a href="#">AI Integration</a></li>
            <li><a href="#">UI/UX Strategy</a></li>
          </ul>
        </div>

        {/* COLUMN 3: Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Process</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h4>Stay Updated</h4>
          <p>Get the latest design trends and tech news delivered to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Satvarth Solutions. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}