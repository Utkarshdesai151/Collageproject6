import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight, Users, CheckCircle } from 'lucide-react';
import About1 from '../assets/Homepage/about-img-6.png';
import About2 from '../assets/Homepage/about-img-7.png';
import About3 from '../assets/Homepage/about-img-11.png';
import LogoOnly from '../assets/Logo/logoonly (1).svg';
import About5 from '../assets/Homepage/about-5.jpg';
import ServiceAccordion from '../components/ServiceCards';
import '../index.css';
import '../pages/About.css';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeIn" } // Fixed "easein" to "easeIn"
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: { staggerChildren: 0.15 }
    }
};

const imageReveal = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.2, ease: "easeInOut" }
};

const ParallaxImage = ({ src, alt, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative' }}>
            <motion.img
                src={src}
                alt={alt}
                className="img-fluid"
                style={{
                    scale,
                    y,
                    transformOrigin: "center center",
                    width: '100%',
                    height: '120%', // Adjusted height for movement room
                    objectFit: 'cover'
                }}
            />
        </div>
    );
};

function Home() {
    return (
        <div className="mt-top">
            <section className="hero-container">
                <div className="container">
                    <motion.div
                        className="bg-typography"
                        initial="initial"
                        whileInView="whileInView"
                        variants={staggerContainer}
                        viewport={{ once: true }}  >
                        <motion.h1
                            className="main-title top"
                            variants={{
                                initial: { opacity: 0, x: -60 },
                                whileInView: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration:1, delay: 4, ease: "easeOut" }}
                        >
                            Creativity is
                        </motion.h1>
                        <motion.h1
                            className="main-title bottom"
                            variants={{
                                initial: { opacity: 0, x: 60 },
                                whileInView: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 1, delay: 4, ease: "easeOut" }}
                        >
                            Collective.
                        </motion.h1>
                    </motion.div>

                    <div className="hero-content">
                        <div className="left-col">
                            <motion.div
                                className="cta-section"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <div className="quote-circle">
                                    <span>Get A Quote</span>
                                    <motion.span
                                        className="arrow"
                                        animate={{ y: [1, 0, 5] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >↓</motion.span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about-section-4 about-section-14  pt-120">
                <div className="container">
                    <div className="row gy-lg-0 gy-5 align-items-center">
                        <motion.div
                            className="col-lg-6 col-md-12"
                            variants={imageReveal}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="about-img-wrap-4">
                                <ParallaxImage
                                    src={About1}
                                    alt="Main"
                                    className="about-img img-1"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-lg-6 col-md-12"
                            initial="initial"
                            whileInView="whileInView"
                            variants={staggerContainer}
                            viewport={{ once: true }}
                        >
                            <div className="about-content-4">
                                <motion.div className="section-heading heading-3 mb-0" variants={fadeInUp}>
                                    <h4 className="sub-heading active">About Our Company</h4>
                                    <h2 className="section-title t-up">We’re a Trusted and Secure Web Agency</h2>
                                    <p className="description-text">
                                        An IT business thrives on innovation, utilizing advanced technologies like AI, cloud
                                        computing, blockchain, and cybersecurity to deliver efficient solutions.
                                    </p>
                                </motion.div>

                                <div className="about-counter-wrap">
                                    <motion.div className="about-success" variants={staggerContainer}>
                                        <motion.div className="about-success-item" variants={fadeInUp}>
                                            <div className="icon">
                                                <svg width="43" height="42" viewBox="0 0 43 42" fill="none">
                                                    <path d="M42.9692 1.31155C42.942 0.680565 42.4474 0.168185 41.815 0.11586L41.7756 0.1126C37.4905 -0.239045 33.2407 0.233883 29.1442 1.51809C24.9574 2.83072 21.1323 4.92329 17.775 7.73779C17.1926 8.2261 16.6308 8.7333 16.0872 9.25621C14.7531 8.45747 13.1956 8.07807 11.6246 8.18297C9.77541 8.30643 8.0345 9.09339 6.72274 10.3989L0.368986 16.7226C-0.122995 17.2122 -0.122995 18.006 0.368986 18.4957L1.11586 19.239C3.16567 21.2791 5.85754 22.4203 8.69554 22.4955L8.22019 25.5862C8.15946 25.9806 8.29115 26.3803 8.57468 26.6624L15.4108 33.466C15.6488 33.7029 15.9699 33.8333 16.3014 33.8333C16.3647 33.8333 16.4286 33.8285 16.4921 33.8188L19.5984 33.3455C19.6742 36.1701 20.8202 38.8498 22.8694 40.8894L23.6164 41.6328C23.8624 41.8776 24.1848 42 24.5071 42C24.8295 42 25.152 41.8776 25.3979 41.6327L31.7515 35.3091C34.1967 32.8756 34.6838 29.1837 33.0462 26.2405C33.6866 25.6173 34.3047 24.968 34.8967 24.2901C37.6666 21.118 39.7752 17.4973 41.1641 13.5288C42.5418 9.59256 43.149 5.48206 42.9692 1.31155ZM40.4798 2.54152C40.4978 5.33044 40.1326 8.08417 39.3916 10.7631L31.9403 3.34728C34.736 2.67709 37.5964 2.40644 40.4798 2.54152ZM3.04288 17.6075L8.50422 12.1721C10.0392 10.6444 12.3674 10.2715 14.2789 11.1378C12.4311 13.2225 10.8581 15.5339 9.58115 18.0489L9.38228 18.4406C9.32231 18.5587 9.2815 18.6856 9.26142 18.8164L9.08086 19.9905C6.83478 20.0105 4.68772 19.1713 3.04288 17.6075ZM10.8072 25.3382L11.3363 21.898C11.3784 21.8406 11.4165 21.7803 11.4484 21.7164L20.3881 30.6137C20.3285 30.6426 20.2719 30.6767 20.2177 30.7144L16.7413 31.244L10.8072 25.3382ZM29.9701 33.5361L24.5089 38.9715C22.938 37.335 22.0945 35.1974 22.1145 32.9622L23.2942 32.7825C23.4257 32.7625 23.5531 32.7219 23.6717 32.6622L24.866 32.0617C27.1093 30.9335 29.1928 29.57 31.1005 27.989C31.8706 29.8594 31.4652 32.048 29.9701 33.5361ZM23.7297 29.8236L23.3494 30.0148L12.0468 18.7658C15.6527 11.9326 21.8449 6.65093 29.1799 4.14603L38.5169 13.4386C35.8148 20.5745 30.5891 26.3738 23.7297 29.8236Z" fill="#3F5AF3"></path>
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Client Success Team</h4>
                                                <p>Our digital marketing agency <br /> is dedicated</p>
                                            </div>
                                        </motion.div>

                                        <motion.div className="about-success-item" variants={fadeInUp}>
                                            <div className="icon">
                                                <svg width="43" height="42" viewBox="0 0 43 42" fill="none">
                                                    <path d="M22.3513 13.1856C20.3934 15.1342 20.3934 18.3049 22.3513 20.2537C23.3302 21.2279 24.6163 21.7151 25.9022 21.7151C27.1881 21.7151 28.4741 21.2279 29.453 20.2536C31.411 18.305 31.411 15.1342 29.453 13.1856C27.4951 11.2369 24.3092 11.2369 22.3513 13.1856Z" fill="#3F5AF3"></path>
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Expert Consultation</h4>
                                                <p>Professional support for <br /> your business growth</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div className="about-14-btn-wrap" variants={fadeInUp}>
                                        <motion.a
                                            href="/about"
                                            className="rr-primary-btn"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Get Started
                                        </motion.a>
                                        <div className="count-info">
                                            <h3 className="title">1500+</h3>
                                            <span className="dec">Active Reviews</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="row gy-lg-0 gy-5 pt-4 align-items-center">
                        <motion.div
                            className="col-lg-6 col-md-12"
                            initial="initial"
                            whileInView="whileInView"
                            variants={staggerContainer}
                            viewport={{ once: true }}
                        >
                            <div className="about-content-4">
                                <motion.div className="section-heading heading-3 mb-0" variants={fadeInUp}>
                                    <h2 className="section-title t-up active">We Provide Service In One Place</h2>
                                    <p>In addition to competition, factory companies also face challenges related to labor and the environment address these concerns efficiently.</p>
                                </motion.div>
                                <motion.div className="about-list-wrap" variants={fadeInUp}>
                                    <span>Development Special Services:</span>
                                    <ul className="about-list">
                                        <li><i className="fa-regular fa-circle-check"></i>Emergency Solutions Anytime</li>
                                        <li><i className="fa-regular fa-circle-check"></i>Affordable price upto 2 years</li>
                                        <li><i className="fa-regular fa-circle-check"></i>Reliable &amp; Experienced Team</li>
                                    </ul>
                                </motion.div>
                                <motion.div className="about-14-btn-wrap" variants={fadeInUp}>
                                    <motion.a
                                        href="/about"
                                        className="rr-primary-btn"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Get Started
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-lg-6 col-md-12"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="about-img-wrap-4">
                                <ParallaxImage
                                    src={About3}
                                    alt="Service"
                                    className="about-img-6"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="innovation-detail py-5 ">
                <div className="container">
                    <div className="row justify-content-between align-items-center mt-5 pt-2">
                        <motion.div
                            className="col-lg-5 mb-5 mb-lg-0"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img className="img-fluid rounded-4 shadow-lg" src={About5} alt="Digital Innovation" />
                        </motion.div>
                        <motion.div
                            className="col-lg-6 text-start"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                        >
                            <motion.h3 className="display-5 fw-bold mb-4" variants={fadeInUp}>
                                Excellence in Digital Innovation
                            </motion.h3>

                            <motion.p className="lead  mb-5" variants={fadeInUp}>
                                Our commitment to quality drives every project. We bridge the gap between complex
                                backend logic and intuitive frontend experiences to help your business scale.
                            </motion.p>
                            <motion.div className="row pt-4  border-2" variants={fadeInUp}>
                                <div className="col-6">
                                    <div className="d-flex align-items-center gap-2">
                                        <Users className="text-primary" size={28} />
                                        <h3 className="fw-bold mb-0">160+</h3>
                                    </div>
                                    <p className=" mt-1">Business Partners</p>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center gap-2">
                                        <CheckCircle className="text-primary" size={28} />
                                        <h3 className="fw-bold mb-0">100%</h3>
                                    </div>
                                    <p className=" mt-1">Satisfaction Rate</p>
                                </div>
                            </motion.div>

                            <motion.div className="mt-5" variants={fadeInUp}>
                                <button className="rr-primary-btn ">Launch Project</button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="Service-section ">
                <div className="container">
                    <div className="row show-grid">
                        <div className="col-md-8 col-sd-12  border-white">
                            <div className="section-title">
                                <h2 className="section-title t-up active">Built with passion. Delivered with precision.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ServiceAccordion />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;