import React from 'react';
import About1 from '../assets/Homepage/about-img-6.png'
import About2 from '../assets/Homepage/about-img-7.png'
import '../index.css';
import '../pages/About.css';
import { motion } from 'framer-motion';

// Animation Variants for reusability
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
};

function Home() {
    return (
        <div className="">
            <section className="hero-container">
                <div className="container">
                    <motion.div 
                        className="bg-typography"
                        initial="initial"
                        whileInView="whileInView"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                    >
                        <motion.h1 
                            className="main-title top"
                            variants={{
                                initial: { opacity: 0, x: -100 },
                                whileInView: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 2.5 }}
                        >
                            Creativity is
                        </motion.h1>
                        <motion.h1 
                            className="main-title bottom"
                            variants={{
                                initial: { opacity: 0, x: 100 },
                                whileInView: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 3 }}
                        >
                            Collective.
                        </motion.h1>
                    </motion.div>

                    <div className="hero-content">
                        <div className="left-col">
                            <motion.div 
                                className="cta-section"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="quote-circle">
                                    <span>Get A Quote</span>
                                    <span className="arrow">↓</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Scroll-Driven Animations */}
            <section id="about" className="about-section-4 about-section-14 pb-120 pt-120">
                <div className="container">
                    <div className="row gy-lg-0 gy-5 align-items-center">
                        
                        {/* Left Image Side - Reveal from Left */}
                        <motion.div 
                            className="col-lg-6 col-md-12"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{delay:1 , duration: 5 }}
                        >
                            <div className="about-img-wrap-4">
                                <div className="about-img img-1 reveal">
                                    <img src={About1} alt="Main About" className="img-fluid" />
                                </div>
                                <motion.div 
                                    className="about-img img-2 reveal"
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <img src={About2} alt="Sub About" className="img-fluid" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Content Side - Staggered Children Reveal */}
                        <motion.div 
                            className="col-lg-6 col-md-12"
                            initial="initial"
                            whileInView="whileInView"
                            variants={staggerContainer}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="about-content-4">
                                <motion.div className="section-heading heading-3 mb-0" variants={fadeInUp}>
                                    <h4 className="sub-heading active">About Our Company</h4>
                                    <h2 className="section-title t-up">We’re a Trusted and Secure Web Agency</h2>
                                    <p className="description-text">
                                        An IT business thrives on innovation, utilizing advanced technologies like AI, cloud
                                        computing, blockchain, and cybersecurity to deliver efficient and solutions.
                                        Keeping up with the latest tech trends ensures businesses...
                                    </p>
                                </motion.div>

                                <div className="about-counter-wrap">
                                    <motion.div className="about-success" variants={staggerContainer}>
                                        
                                        {/* Success Item 1 */}
                                        <motion.div className="about-success-item" variants={fadeInUp}>
                                            <div className="icon">
                                                {/* SVG content kept same */}
                                                <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M42.9692 1.31155C42.942 0.680565 42.4474 0.168185 41.815 0.11586L41.7756 0.1126C37.4905 -0.239045 33.2407 0.233883 29.1442 1.51809C24.9574 2.83072 21.1323 4.92329 17.775 7.73779C17.1926 8.2261 16.6308 8.7333 16.0872 9.25621C14.7531 8.45747 13.1956 8.07807 11.6246 8.18297C9.77541 8.30643 8.0345 9.09339 6.72274 10.3989L0.368986 16.7226C-0.122995 17.2122 -0.122995 18.006 0.368986 18.4957L1.11586 19.239C3.16567 21.2791 5.85754 22.4203 8.69554 22.4955L8.22019 25.5862C8.15946 25.9806 8.29115 26.3803 8.57468 26.6624L15.4108 33.466C15.6488 33.7029 15.9699 33.8333 16.3014 33.8333C16.3647 33.8333 16.4286 33.8285 16.4921 33.8188L19.5984 33.3455C19.6742 36.1701 20.8202 38.8498 22.8694 40.8894L23.6164 41.6328C23.8624 41.8776 24.1848 42 24.5071 42C24.8295 42 25.152 41.8776 25.3979 41.6327L31.7515 35.3091C34.1967 32.8756 34.6838 29.1837 33.0462 26.2405C33.6866 25.6173 34.3047 24.968 34.8967 24.2901C37.6666 21.118 39.7752 17.4973 41.1641 13.5288C42.5418 9.59256 43.149 5.48206 42.9692 1.31155ZM40.4798 2.54152C40.4978 5.33044 40.1326 8.08417 39.3916 10.7631L31.9403 3.34728C34.736 2.67709 37.5964 2.40644 40.4798 2.54152ZM3.04288 17.6075L8.50422 12.1721C10.0392 10.6444 12.3674 10.2715 14.2789 11.1378C12.4311 13.2225 10.8581 15.5339 9.58115 18.0489L9.38228 18.4406C9.32231 18.5587 9.2815 18.6856 9.26142 18.8164L9.08086 19.9905C6.83478 20.0105 4.68772 19.1713 3.04288 17.6075ZM10.8072 25.3382L11.3363 21.898C11.3784 21.8406 11.4165 21.7803 11.4484 21.7164L20.3881 30.6137C20.3285 30.6426 20.2719 30.6767 20.2177 30.7144L16.7413 31.244L10.8072 25.3382ZM29.9701 33.5361L24.5089 38.9715C22.938 37.335 22.0945 35.1974 22.1145 32.9622L23.2942 32.7825C23.4257 32.7625 23.5531 32.7219 23.6717 32.6622L24.866 32.0617C27.1093 30.9335 29.1928 29.57 31.1005 27.989C31.8706 29.8594 31.4652 32.048 29.9701 33.5361ZM23.7297 29.8236L23.3494 30.0148L12.0468 18.7658C15.6527 11.9326 21.8449 6.65093 29.1799 4.14603L38.5169 13.4386C35.8148 20.5745 30.5891 26.3738 23.7297 29.8236Z" fill="#3F5AF3"></path>
                                                    <path d="M22.3513 13.1856C20.3934 15.1342 20.3934 18.3049 22.3513 20.2537C23.3302 21.2279 24.6163 21.7151 25.9022 21.7151C27.1881 21.7151 28.4741 21.2279 29.453 20.2536C31.411 18.305 31.411 15.1342 29.453 13.1856C27.4951 11.2369 24.3092 11.2369 22.3513 13.1856ZM27.6715 18.4805C26.6959 19.4514 25.1084 19.4514 24.1329 18.4805C23.1573 17.5095 23.1573 15.9296 24.1329 14.9586C24.6207 14.4731 25.2614 14.2304 25.9022 14.2304C26.543 14.2304 27.1837 14.4731 27.6715 14.9586C28.647 15.9297 28.647 17.5095 27.6715 18.4805Z" fill="#3F5AF3"></path>
                                                    <path d="M10.3398 32.0555C9.84789 31.5659 9.0502 31.5658 8.55822 32.0555L4.50471 36.0898C4.01273 36.5795 4.01273 37.3733 4.50471 37.8629C4.75071 38.1077 5.07312 38.2301 5.39545 38.2301C5.71779 38.2301 6.04029 38.1077 6.28619 37.8628L10.3397 33.8285C10.8319 33.339 10.8318 32.5451 10.3398 32.0555Z" fill="#3F5AF3"></path>
                                                    <path d="M6.73148 28.4643C6.23958 27.9746 5.4419 27.9746 4.94992 28.4643L0.896324 32.4986C0.404343 32.9883 0.404343 33.7821 0.896324 34.2717C1.14231 34.5166 1.46473 34.6389 1.78706 34.6389C2.10939 34.6389 2.4319 34.5166 2.6778 34.2717L6.73139 30.2374C7.22346 29.7478 7.22346 28.9539 6.73148 28.4643Z" fill="#3F5AF3"></path>
                                                    <path d="M12.1667 35.6468L8.1131 39.6812C7.62112 40.1708 7.62112 40.9646 8.1131 41.4543C8.3591 41.6991 8.68151 41.8215 9.00384 41.8215C9.32618 41.8215 9.64868 41.6992 9.89458 41.4543L13.9482 37.4199C14.4402 36.9303 14.4402 36.1365 13.9482 35.6468C13.4563 35.1571 12.6587 35.1571 12.1667 35.6468Z" fill="#3F5AF3"></path>
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Client Success Team</h4>
                                                <p>Our digital marketing agency <br /> is dedicated</p>
                                            </div>
                                        </motion.div>

                                        {/* Success Item 2 */}
                                        <motion.div className="about-success-item" variants={fadeInUp}>
                                            <div className="icon">
                                                {/* SVG content kept same */}
                                                <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M42.9692 1.31155C42.942 0.680565 42.4474 0.168185 41.815 0.11586L41.7756 0.1126C37.4905 -0.239045 33.2407 0.233883 29.1442 1.51809C24.9574 2.83072 21.1323 4.92329 17.775 7.73779C17.1926 8.2261 16.6308 8.7333 16.0872 9.25621C14.7531 8.45747 13.1956 8.07807 11.6246 8.18297C9.77541 8.30643 8.0345 9.09339 6.72274 10.3989L0.368986 16.7226C-0.122995 17.2122 -0.122995 18.006 0.368986 18.4957L1.11586 19.239C3.16567 21.2791 5.85754 22.4203 8.69554 22.4955L8.22019 25.5862C8.15946 25.9806 8.29115 26.3803 8.57468 26.6624L15.4108 33.466C15.6488 33.7029 15.9699 33.8333 16.3014 33.8333C16.3647 33.8333 16.4286 33.8285 16.4921 33.8188L19.5984 33.3455C19.6742 36.1701 20.8202 38.8498 22.8694 40.8894L23.6164 41.6328C23.8624 41.8776 24.1848 42 24.5071 42C24.8295 42 25.152 41.8776 25.3979 41.6327L31.7515 35.3091C34.1967 32.8756 34.6838 29.1837 33.0462 26.2405C33.6866 25.6173 34.3047 24.968 34.8967 24.2901C37.6666 21.118 39.7752 17.4973 41.1641 13.5288C42.5418 9.59256 43.149 5.48206 42.9692 1.31155ZM40.4798 2.54152C40.4978 5.33044 40.1326 8.08417 39.3916 10.7631L31.9403 3.34728C34.736 2.67709 37.5964 2.40644 40.4798 2.54152ZM3.04288 17.6075L8.50422 12.1721C10.0392 10.6444 12.3674 10.2715 14.2789 11.1378C12.4311 13.2225 10.8581 15.5339 9.58115 18.0489L9.38228 18.4406C9.32231 18.5587 9.2815 18.6856 9.26142 18.8164L9.08086 19.9905C6.83478 20.0105 4.68772 19.1713 3.04288 17.6075ZM10.8072 25.3382L11.3363 21.898C11.3784 21.8406 11.4165 21.7803 11.4484 21.7164L20.3881 30.6137C20.3285 30.6426 20.2719 30.6767 20.2177 30.7144L16.7413 31.244L10.8072 25.3382ZM29.9701 33.5361L24.5089 38.9715C22.938 37.335 22.0945 35.1974 22.1145 32.9622L23.2942 32.7825C23.4257 32.7625 23.5531 32.7219 23.6717 32.6622L24.866 32.0617C27.1093 30.9335 29.1928 29.57 31.1005 27.989C31.8706 29.8594 31.4652 32.048 29.9701 33.5361ZM23.7297 29.8236L23.3494 30.0148L12.0468 18.7658C15.6527 11.9326 21.8449 6.65093 29.1799 4.14603L38.5169 13.4386C35.8148 20.5745 30.5891 26.3738 23.7297 29.8236Z" fill="#3F5AF3"></path>
                                                    <path d="M22.3513 13.1856C20.3934 15.1342 20.3934 18.3049 22.3513 20.2537C23.3302 21.2279 24.6163 21.7151 25.9022 21.7151C27.1881 21.7151 28.4741 21.2279 29.453 20.2536C31.411 18.305 31.411 15.1342 29.453 13.1856C27.4951 11.2369 24.3092 11.2369 22.3513 13.1856ZM27.6715 18.4805C26.6959 19.4514 25.1084 19.4514 24.1329 18.4805C23.1573 17.5095 23.1573 15.9296 24.1329 14.9586C24.6207 14.4731 25.2614 14.2304 25.9022 14.2304C26.543 14.2304 27.1837 14.4731 27.6715 14.9586C28.647 15.9297 28.647 17.5095 27.6715 18.4805Z" fill="#3F5AF3"></path>
                                                    <path d="M10.3398 32.0555C9.84789 31.5659 9.0502 31.5658 8.55822 32.0555L4.50471 36.0898C4.01273 36.5795 4.01273 37.3733 4.50471 37.8629C4.75071 38.1077 5.07312 38.2301 5.39545 38.2301C5.71779 38.2301 6.04029 38.1077 6.28619 37.8628L10.3397 33.8285C10.8319 33.339 10.8318 32.5451 10.3398 32.0555Z" fill="#3F5AF3"></path>
                                                    <path d="M6.73148 28.4643C6.23958 27.9746 5.4419 27.9746 4.94992 28.4643L0.896324 32.4986C0.404343 32.9883 0.404343 33.7821 0.896324 34.2717C1.14231 34.5166 1.46473 34.6389 1.78706 34.6389C2.10939 34.6389 2.4319 34.5166 2.6778 34.2717L6.73139 30.2374C7.22346 29.7478 7.22346 28.9539 6.73148 28.4643Z" fill="#3F5AF3"></path>
                                                    <path d="M12.1667 35.6468L8.1131 39.6812C7.62112 40.1708 7.62112 40.9646 8.1131 41.4543C8.3591 41.6991 8.68151 41.8215 9.00384 41.8215C9.32618 41.8215 9.64868 41.6992 9.89458 41.4543L13.9482 37.4199C14.4402 36.9303 14.4402 36.1365 13.9482 35.6468C13.4563 35.1571 12.6587 35.1571 12.1667 35.6468Z" fill="#3F5AF3"></path>
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Expert Consultation</h4>
                                                <p>Professional support for <br /> your business growth</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Bottom Action Area */}
                                    <motion.div className="about-14-btn-wrap" variants={fadeInUp}>
                                        <a href="/about" className="rr-primary-btn">Get Started</a>
                                        <div className="count-info">
                                            <h3 className="title">1500+</h3>
                                            <span className="dec">Active Reviews</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;