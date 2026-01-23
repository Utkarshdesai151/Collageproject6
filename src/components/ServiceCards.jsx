import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'UI/UX',
    description: 'We provide UI/UX services to make your website interaction feel good and feel international.',
    bgImage: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'WEBSITES',
    description: 'Custom, high-performance websites tailored to your brand needs using the latest modern stacks.',
    bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    title: 'SOFTWARE',
    description: 'Fluid designs that look perfect on everything from mobile phones to ultra-wide desktop monitors.',
    bgImage: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    title: 'ERP',
    description: 'Maintainable, scalable, and optimized code following industry best practices for long-term growth.',
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
  },
];

const ServiceAccordion = () => {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <div className="container py-5">
      <div className="row g-3">
        {services.map((service) => (
          <div key={service.id} className="col-12">
            <motion.div
              layout
              initial={false}
              className="position-relative overflow-hidden rounded-4 shadow-sm"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                minHeight: expandedId === service.id ? '250px' : '120px',
                transition: 'min-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <div className="d-flex justify-content-between align-items-center h-100 p-4 text-white">
                <div className="flex-grow-1">
                  <h2 className="display-5 fw-bold mb-0 text-uppercase ls-wide">{service.title}</h2>
                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        <p className="lead mb-0 opacity-75 text-white" style={{ maxWidth: '450px' }}>
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="ms-3">
                  <motion.div
                    animate={{ rotate: expandedId === service.id ? 0 : 45 }}
                    className="rounded-circle border border-white d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px' }}
                  >
                    {expandedId === service.id ? <FiArrowUp size={30} /> : <FiArrowUpRight size={30} />}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;