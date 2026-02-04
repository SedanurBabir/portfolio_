import { motion } from "motion/react";
import { projects } from "../../data/content";
import "./portfolio.css";

const Projects = ({ onContact }) => {
  return (
    <div className="projects">
      <motion.div
        className="projects__intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Öne çıkan işler</span>
        <h2>El işçiliği, hareket ve mühendisliği birleştiren seçili projeler.</h2>
      </motion.div>

      <div className="projects__list">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="projectCard"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="projectCard__header">
              <span className="projectCard__index">
                {project.id.toString().padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
            <p className="projectCard__description">{project.desc}</p>
            <ul className="projectCard__highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="projectCard__meta">
              <div className="projectCard__stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
