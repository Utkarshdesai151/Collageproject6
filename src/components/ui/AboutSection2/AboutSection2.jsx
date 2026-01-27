import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const stats = [
  { label: "Business Security", value: 65 },
  { label: "Career Development", value: 82 },
  { label: "Business Innovation", value: 90 },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Column: Content */}
        <div className="about-content">
          <div className="subtitle-wrapper">
            <div className="blue-dash" />
            <span className="subtitle">ABOUT OUR COMPANY</span>
          </div>
          
          <h2 className="about-title">
            Building a Smarter Future <br /> 
            <span>with IT Solutions</span>
          </h2>
          
          <p className="about-desc">
            In today's fast-evolving digital landscape, leveraging the right IT solutions 
            is no longer an option but a necessity for business growth. IT plays a pivotal 
            role in streamlining operations and enabling businesses to reach their full potential.
          </p>

          <div className="stats-list">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-header">
                  <span>{stat.label}</span>
                  <span>{stat.value}%</span>
                </div>
                <div className="bar-bg">
                  <motion.div 
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="bar-dot" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <button className="cta-button">Get A Service Now</button>
        </div>

        {/* Right Column: Creative Image Grid */}
        <div className="about-images">
          <div className="image-grid">
            <div className="img-box top-left">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Team 1" />
            </div>
            <div className="img-box top-right">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Team 2" />
            </div>
            <div className="img-box bottom-left">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" alt="Team 3" />
            </div>
            <div className="img-box bottom-right">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80" alt="Team 4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;