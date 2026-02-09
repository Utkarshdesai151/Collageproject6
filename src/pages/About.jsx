import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ShieldCheck, Users, Zap, Award } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import AboutSection2 from '../components/ui/AboutSection2/AboutSection2';
import AboutSection from '../components/AboutSection';

const About1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";
const About3 = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";

const variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    staggerContainer: {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.2
            }
        }
    },
    fadeInUp: {
        initial: { opacity: 0, y: 30 },
        whileInView: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5 }
        }
    },
    imageReveal: {
        initial: { scale: 0.9, opacity: 0 },
        whileInView: { 
            scale: 1, 
            opacity: 1, 
            transition: { duration: 0.8 } 
        }
    }
};

const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
};

const SectionHeader = ({ title, subTitle, description, center = false }) => (
    <div className={`mb-4 ${center ? 'text-center mx-auto' : ''}`} style={center ? {maxWidth: '700px'} : {}}>
        {subTitle && <span className="text-info fw-bold text-uppercase ls-1">{subTitle}</span>}
        <h2 className="display-6 fw-bold mt-2 mb-3 text-white">{title}</h2>
        <p className="lead fs-6" style={{ color: '#aaa' }}>{description}</p>
    </div>
);

const ParallaxImage = ({ src, alt, className }) => (
    <motion.div 
        className={`overflow-hidden rounded-4 ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
    >
        <img src={src} alt={alt} className="img-fluid w-100 object-fit-cover" style={{ minHeight: '400px', opacity: 0.9 }} />
    </motion.div>
);

const GlassCard = ({ icon: Icon, title, description }) => (
    console.log(Icon),
    <motion.div 
        className="h-100 p-4 rounded-4" 
        variants={variants.fadeInUp}
        whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.08)', transition: { duration: 0.3 } }}
        style={glassStyle}
    >
        <div className="mb-4 d-inline-block p-3 rounded-circle text-info" style={{ background: 'rgba(13, 202, 240, 0.15)' }}>
            <Icon size={32} />
        </div>
        <h4 className="fw-bold mb-3 text-white">{title}</h4>
        <p className="mb-0" style={{ color: '#bbb' }}>{description}</p>
    </motion.div>
);


function About() {
    return (
        <div style={{ backgroundColor: '#0b0c10', color: '#f8f9fa' }}> {/* Dark Background Wrapper */}
            
            <div className="bg-dark text-white">
                <AboutSection2 />
                <AboutSection />
            </div>

            <section id="about" className="pt-120 pb-120 overflow-hidden position-relative">
                <div style={{
                    position: 'absolute', top: '20%', left: '-10%', width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(13,202,240,0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0, pointerEvents: 'none'
                }}></div>
                 <div style={{
                    position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(118, 52, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0, pointerEvents: 'none'
                }}></div>

                <div className="container position-relative" style={{ zIndex: 1 }}>
                    
                    <div className="row gy-lg-0 gy-5 align-items-center mb-5 pb-5">
                        <motion.div
                            className="col-lg-6 col-md-12"
                            variants={variants.imageReveal}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                        >
                            <div className="about-img-wrap-4 pe-lg-5">
                                <ParallaxImage src={About1} alt="About Company" className="about-img img-1 shadow-lg" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-lg-6 col-md-12"
                            initial="initial"
                            whileInView="whileInView"
                            variants={variants.staggerContainer}
                            viewport={{ once: true }}
                        >
                            <div className="about-content-4 ps-lg-4">
                                <SectionHeader
                                    subTitle="About Our Company"
                                    title="We’re a Trusted and Secure Web Agency"
                                    description="An IT business thrives on innovation, utilizing advanced technologies like AI, cloud computing, blockchain, and cybersecurity to deliver efficient solutions."
                                />

                                <div className="mt-5">
                                    <motion.div className="d-flex flex-wrap align-items-center gap-4" variants={variants.fadeInUp}>
                                        <motion.a
                                            href="/about"
                                            className="btn btn-info rounded-pill px-5 py-3 fw-bold text-white d-flex align-items-center gap-2"
                                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(13, 202, 240, 0.5)" }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{ background: 'linear-gradient(45deg, #0dcaf0, #0d6efd)', border: 'none' }}
                                        >
                                            Get Started <ArrowRight size={18} />
                                        </motion.a>
                                        
                                        <div className=" d-flex flex-column" >
                                            <h3 className="fw-bold mb-0 text-white">1500+</h3>
                                            <span className="small ">Active Reviews</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Second Row: Content Left, Image Right */}
                    <div className="row gy-lg-0 gy-5 pt-5 pb-5 align-items-center">
                        <motion.div
                            className="col-lg-6 col-md-12"
                            initial="initial"
                            whileInView="whileInView"
                            variants={variants.staggerContainer}
                            viewport={{ once: true }}
                        >
                            <div className="about-content-4 pe-lg-5">
                                <SectionHeader
                                    title="We Provide Service In One Place"
                                    description="In addition to competition, factory companies also face challenges related to labor and the environment address these concerns efficiently."
                                />
                                <motion.div className="mt-4 p-4 rounded-4" variants={variants.fadeInUp} style={glassStyle}>
                                    <span className="fw-bold d-block mb-3 text-info">Development Special Services:</span>
                                    <ul className="list-unstyled mb-0">
                                        {[
                                            "Emergency Solutions Anytime",
                                            "Affordable price upto 2 years",
                                            "Reliable & Experienced Team"
                                        ].map((item, index) => (
                                            <li key={index} className="d-flex align-items-center mb-3 text-light">
                                                <CheckCircle size={20} className="text-info me-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-lg-6 col-md-12"
                            variants={variants.imageReveal}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                        >
                            <div className="about-img-wrap-4 ps-lg-4">
                                <ParallaxImage src={About3} alt="Our Services" className="about-img-6 shadow-lg" />
                            </div>
                        </motion.div>
                    </div>

                    {/* NEW SECTION: Why Choose Us (Glass Grid) */}
                    <div className="row pt-5 mt-5">
                        <div className="col-12">
                            <motion.div 
                                initial="initial" 
                                whileInView="whileInView" 
                                viewport={{ once: true }}
                                variants={variants.staggerContainer}
                            >
                                <SectionHeader 
                                    center 
                                    subTitle="Why Choose Us"
                                    title="Driving Digital Growth"
                                    description="We combine technical expertise with creative innovation to deliver results that matter."
                                />
                                
                                <div className="row g-4 mt-2">
                                    <div className="col-md-6 col-lg-3">
                                        <GlassCard 
                                            icon={ShieldCheck} 
                                            title="Secure Solutions" 
                                            description="Enterprise-grade security protocols protecting your data and your users."
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <GlassCard 
                                            icon={Users} 
                                            title="Dedicated Team" 
                                            description="A passionate team of experts working around the clock for you."
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <GlassCard 
                                            icon={Zap} 
                                            title="Fast Performance" 
                                            description="Optimized code and infrastructure for lightning-fast user experience."
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <GlassCard 
                                            icon={Award} 
                                            title="Award Winning" 
                                            description="Recognized by industry leaders for our innovative approach."
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;