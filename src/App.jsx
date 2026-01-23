import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import './styles/WaterLoader.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "-100%",
    transition: { 
      duration: 1.2, 
      ease: [0.76, 0, 0.24, 1] 
    }
  }
};

const charVariants = {
  initial: { y: "110%" },
  animate: { 
    y: "0%",
    transition: { 
      duration: 1.2, 
      ease: [0.6, 0.01, -0.05, 0.9] 
    } 
  },
};

const navbarVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: 4 , 
      duration: 0.8, 
      ease: "popin" 
    }
  }
};

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const text = "Satwarth";

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="loader-container"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="split-text-wrapper">
              {text.split("").map((char, index) => (
                <span key={index} className="char-mask">
                  <motion.span
                    className="split-char"
                    variants={charVariants}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        variants={navbarVariants} 
        initial="initial" 
        animate="animate"
        key={`nav-${location.pathname}`}
      >
        <Navbar />
      </motion.div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Service /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 3.2 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;