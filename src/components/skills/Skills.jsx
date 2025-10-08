import { motion } from "motion/react";
import { skills } from "../../data/content";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <motion.div
        className="skills__intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Uzmanlık Alanları</span>
        <h2>Ürün geliştirme sürecinde aktif kullandığım teknolojiler.</h2>
      </motion.div>
      <div className="skills__grid">
        {Object.entries(skills).map(([category, items]) => (
          <motion.article
            key={category}
            className="skills__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>{category}</h3>
            <div className="skills__tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
