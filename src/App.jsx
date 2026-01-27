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

/* ---------------- VARIANTS ---------------- */

const loaderContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const charVariants = {
  initial: { y: "110%" },
  animate: {
    y: "0%",
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const navbarVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

/* ---------------- COMPONENTS ---------------- */

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const text = "Satwarth";

  // Loader only on FIRST load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader-container"
            variants={loaderContainer}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="split-text-wrapper">
              {text.split("").map((char, i) => (
                <span key={i} className="char-mask">
                  <motion.span
                    variants={charVariants}
                    initial="initial"
                    animate="animate"
                    className="split-char"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div
            variants={navbarVariants}
            initial="initial"
            animate="animate"
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
      )}
    </>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
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
