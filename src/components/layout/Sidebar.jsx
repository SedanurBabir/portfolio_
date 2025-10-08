import { motion } from "motion/react";
import "./sidebar.css";
import { profile } from "../../data/content";

export const NAV_ITEMS = [
  { id: "intro", label: "Hakkımda" },
  { id: "experience", label: "Deneyim" },
  { id: "projects", label: "Projeler" },
  { id: "skills", label: "Yetenekler" },
  { id: "contact", label: "İletişim" },
];

const Sidebar = ({ activeSection, onNavigate, items = NAV_ITEMS }) => {
  return (
      <aside className="sidebar">
        <motion.div
          className="sidebar__inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="sidebar__header">
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            {/* <p>{profile.description}</p> */}
            <div className="sidebar__contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}>{profile.phone}</a>
              <span>{profile.location}</span>
            </div>
          </header>

          <nav className="sidebar__nav" aria-label="Primary">
            <ul>
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`sidebar__link${isActive ? " is-active" : ""}`}
                      onClick={() => onNavigate?.(item.id)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="sidebar__linkLabel">{item.label}</span>
                      {isActive && (
                        <motion.span
                          className="sidebar__linkIndicator"
                          layoutId="sidebar-link"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="sidebar__social">
            {profile.socials.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <img src={link.img} alt={link.label} className="sidebar__img" />
              </a>
            ))}
          </div>
        </motion.div>
      </aside>
    );
};

export default Sidebar;
