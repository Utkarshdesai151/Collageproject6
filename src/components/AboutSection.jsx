import { motion } from "framer-motion";
import "../index.css";

const AboutSection = () => {
  const description =
    "Satvarth Solutions is a premier digital agency dedicated to transforming brands through innovative web development, bespoke software engineering, and strategic IT consulting. We specialize in building high-performance, accessible digital products that drive growth and enhance user engagement. From conceptual design to seamless execution, our expert team delivers excellence in every line of code.";

  const languages = [
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "UI/UX Design",
    "Cloud Solutions",
    "Mobile Apps",
  ];

  return (
    <section className="About-section-Paragraph">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Satvarth Digital Agency
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>

      {/* Language Slider */}
      <div className="language-slider-wrapper">
        <motion.div
          className="language-slider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...languages, ...languages].map((lang, index) => (
            <span key={index} className="slider-item">
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
