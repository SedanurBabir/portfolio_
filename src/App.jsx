import { useCallback, useEffect, useRef, useState } from "react";
import Sidebar, { NAV_ITEMS } from "./components/layout/Sidebar";
import Intro from "./components/home/Home";
import Experience from "./components/services/Experience";
import Projects from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

const sectionIds = ["intro", "experience", "projects", "skills", "contact"];

const App = () => {
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionIds.forEach((id) => {
      const element = sectionRefs.current[id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id) => {
    setActiveSection(id);
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="app_shell">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      <nav className="mobileNav" aria-label="Bölümler">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={isActive ? "is-active" : ""}
              onClick={() => scrollToSection(item.id)}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
      <main className="app_main">
        <section id="intro" ref={(el) => (sectionRefs.current.intro = el)}>
          <Intro onContact={() => scrollToSection("contact")} />
        </section>

        <section
          id="experience"
          ref={(el) => (sectionRefs.current.experience = el)}
        >
          <Experience />
        </section>

        <section id="projects" ref={(el) => (sectionRefs.current.projects = el)}>
          <Projects onContact={() => scrollToSection("contact")} />
        </section>

        <section id="skills" ref={(el) => (sectionRefs.current.skills = el)}>
          <Skills />
        </section>

        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
