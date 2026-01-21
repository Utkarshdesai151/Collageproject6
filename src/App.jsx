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

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const text = "Satwarth";

  useEffect(() => {
    setLoading(true);
    // 5.6s total time for water filling animation
    const timer = setTimeout(() => setLoading(false), 5600);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader-container"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="water-text">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  data-text={char}
                  style={{ "--delay": `${index * 0.3}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

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

// THE UPGRADED WRAPPER
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay: 0.8
    }}
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