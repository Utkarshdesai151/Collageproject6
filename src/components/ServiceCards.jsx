import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Note: Replace these with your actual asset paths
import ServiceIcon1 from '../assets/ServiceIcon/services-icon-14-01.svg';
import ServiceBg1 from '../assets/ServiceIcon/service-bg-thumb-14-01.jpg';
// Example imports for new services - adjust paths as needed
// import ServiceIcon2 from '../assets/ServiceIcon/services-icon-14-02.svg';
// import ServiceBg2 from '../assets/ServiceIcon/service-bg-thumb-14-02.jpg';

const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description: "Get insights from real breaches in the cost secure data breach report. Proactively detect and resolve data quality issues.",
    icon: ServiceIcon1,
    bgImage: ServiceBg1,
    link: "/service-details"
  },
  {
    id: "02",
    title: "App Development",
    description: "Building high-performance mobile applications tailored to your business needs with seamless user experiences.",
    icon: ServiceIcon1, // Replace with ServiceIcon2 when ready
    bgImage: ServiceBg1, // Replace with ServiceBg2 when ready
    link: "/service-details"
  },
  {
    id: "03",
    title: "IT Consulting",
    description: "Expert strategic advice to help you navigate complex technology landscapes and optimize your digital infrastructure.",
    icon: ServiceIcon1,
    bgImage: ServiceBg1,
    link: "/service-details"
  },
  {
    id: "04",
    title: "Cyber Security",
    description: "Protecting your digital assets with advanced threat detection, encryption, and comprehensive security protocols.",
    icon: ServiceIcon1,
    bgImage: ServiceBg1,
    link: "/service-details"
  },
  {
    id: "05",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure management to ensure your business stays flexible, secure, and always accessible.",
    icon: ServiceIcon1,
    bgImage: ServiceBg1,
    link: "/service-details"
  },
  {
    id: "06",
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights to drive better business decisions and measurable growth.",
    icon: ServiceIcon1,
    bgImage: ServiceBg1,
    link: "/service-details"
  }
];

const ServiceGrid = () => {
  return (
    <div className="service-grid">
      <div className="container">
        {/* Added a standard grid wrapper to handle multiple cards */}
        <div className="row g-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-item-14">
                
                {/* Background Image Layer */}
                <div
                  className="service-item-bg-14"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                  }}
                ></div>

                {/* Animated Shape Layer */}
                <div className="service-item-bg-shape"></div>

                <div className="p-relative z-index-11">
                  {/* Service Info (Icon & Number) */}
                  <div className="service-info">
                    <div className="service-icon">
                      <img
                        src={service.icon}
                        alt={`${service.title} icon`}
                      />
                    </div>

                    <div className="service-number">
                      <span>{service.id}</span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="service-content">
                    <h3 className="service-title">
                      <a href={service.link}>{service.title}</a>
                    </h3>

                    <p>{service.description}</p>

                    <div className="service-btn">
                      <a href={service.link}>
                        Read More <FiArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;