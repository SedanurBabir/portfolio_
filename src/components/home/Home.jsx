import { motion } from "motion/react";
import "./home.css";
import { focusAreas, profile } from "../../data/content";

const Intro = ({ onContact }) => {
  return (
    <div className="intro">
      <motion.span
        className="intro__eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {profile.name} · {profile.title}
      </motion.span>

      <motion.h1
        className="intro__title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Etkileyici, performanslı ve yaşayan dijital deneyimler tasarlıyorum.
      </motion.h1>

      <motion.p
        className="intro__description"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {profile.description}
      </motion.p>

      <motion.div
        className="intro__actions"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button type="button" onClick={onContact}>
          İletişime geç
        </button>
        <a href={`mailto:${profile.email}?subject=CV%20Talebi`}>
          CV talep et
        </a>
      </motion.div>

      {/* <motion.div
        className="intro__focus"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {focusAreas.map((area) => (
          <div key={area.title} className="intro__focusItem">
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </div>
        ))}
      </motion.div> */}
    </div>
  );
};

export default Intro;
