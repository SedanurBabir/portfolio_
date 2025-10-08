import { motion } from "motion/react";
import { education, experiences } from "../../data/content";
import "./services.css";

const Experience = () => {
  return (
    <div className="experience">
      <motion.div
        className="experience__intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Deneyim</span>
        <h2>Ekiplerle birlikte büyüyen ürünler ve öğrenme yolculuğum.</h2>
      </motion.div>

      <div className="experience__timeline">
        {experiences.map((item, index) => (
          <motion.article
            key={item.company}
            className="experience__item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="experience__meta">
              <span className="experience__period">{item.period}</span>
              <h3>{item.company}</h3>
              <p className="experience__role">{item.role}</p>
            </div>
            <p className="experience__description">{item.description}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="experience__education"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3>Eğitim</h3>
        <ul>
          {education.map((item) => (
            <li key={item.title}>
              <span>{item.title}</span>
              <p>{item.school}</p>
              <time>{item.period}</time>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
