import { useMemo, useState } from "react";

type SkillCategory = "all" | "frontend" | "backend" | "cloud" | "embedded";

type Skill = {
  name: string;
  category: Exclude<SkillCategory, "all">;
};

const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "SASS", category: "frontend" },
  { name: "Electron", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "Azure", category: "cloud" },
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Git", category: "cloud" },
  { name: "GitHub", category: "cloud" },
  { name: "Agile", category: "cloud" },
  { name: "System Design", category: "cloud" },
  { name: "Arduino", category: "embedded" },
  { name: "Raspberry Pi", category: "embedded" },
  { name: "Sensors/Actuators", category: "embedded" },
  { name: "Circuit Design", category: "embedded" },
  { name: "MATLAB", category: "embedded" },
  { name: "HDL", category: "embedded" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>("frontend");

  const visibleSkills = useMemo(() => {
    if (selectedCategory === "all") {
      return skills;
    }

    return skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <nav className="container nav">
          <a className="brand" href="#home">
            Preethi G
          </a>
          <button
            id="menuButton"
            className="menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="navLinks"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            Menu
          </button>
          <div
            id="navLinks"
            className={`nav-links${isMenuOpen ? " open" : ""}`}
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>
              Experience
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero container">
          <p className="eyebrow">Frontend Developer</p>
          <h1>
            Crafting clean, interactive, and user-focused web experiences.
          </h1>
          <p className="hero-text">
            I’m a frontend-focused developer with 1+ year of experience building
            production-ready interfaces using React, JavaScript, TypeScript,
            HTML, and CSS.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Contact Me
            </a>
            <a
              className="button ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </section>

        <section id="about" className="container section">
          <h2>About</h2>
          <p>
            I currently work at Deloitte Touche Tohmatsu India LLP, where I
            build and deliver production features with a strong focus on
            frontend quality and user experience. I enjoy turning requirements
            into intuitive UI, collaborating with designers and engineers, and
            shipping reliable interfaces under tight timelines.
          </p>
          <div className="quick-facts">
            <article>
              <h3>Experience</h3>
              <p>1+ years (Frontend-focused)</p>
            </article>
            <article>
              <h3>Education</h3>
              <p>B.E. Electronics & Instrumentation (GPA 9.29/10)</p>
            </article>
          </div>
        </section>

        <section id="experience" className="container section">
          <div className="section-head solo-head">
            <h2>Experience</h2>
          </div>

          <div className="experience-grid">
            <article className="experience-item">
              <h3>Executive – Full-Stack Developer · Deloitte</h3>
              <p>Jul 2024 – Present</p>
            </article>

            <article className="experience-item">
              <h3>Product Engineer Intern – Full-Stack Developer · Deloitte</h3>
              <p>Jan 2024 – Jun 2024</p>
            </article>

            <article className="experience-item">
              <h3>Summer Intern – Frontend Developer · Deloitte</h3>
              <p>May 2023 – Jul 2023</p>
            </article>
          </div>
        </section>

        <section id="skills" className="container section">
          <h2>Skills</h2>
          <div
            className="skill-filters"
            role="tablist"
            aria-label="Skill categories"
          >
            {[
              { value: "all", label: "All" },
              { value: "frontend", label: "Frontend" },
              { value: "backend", label: "Backend" },
              { value: "cloud", label: "Cloud & DevOps" },
              { value: "embedded", label: "Embedded" },
            ].map((item) => {
              const value = item.value as SkillCategory;
              const isActive = selectedCategory === value;
              return (
                <button
                  key={item.value}
                  className={`chip${isActive ? " active" : ""}`}
                  data-filter={item.value}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(value)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div id="skillGrid" className="skill-grid">
            {visibleSkills.map((skill) => (
              <span
                key={skill.name}
                className="skill-tag"
                data-cat={skill.category}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <h2>Projects</h2>
          <p className="subtle">
            You can add personal and freelance projects here later. I pre-filled
            your academic highlights for now.
          </p>
          <div className="project-grid">
            <article className="card">
              <h3>Camouflage Surveillance Robot</h3>
              <p>
                Built with Raspberry Pi + Arduino to adapt color based on
                surroundings, with image processing for threat detection and
                automated alerts.
              </p>
            </article>
            <article className="card">
              <h3>Automated Fertilizer Distributor</h3>
              <p>
                Designed an Arduino-based mechanism using stepper, servo, and DC
                motors for precise fertilizer distribution in cotton
                plantations.
              </p>
            </article>
            <article className="card">
              <h3>Arduino Pedometer</h3>
              <p>
                Created a wearable pedometer with accelerometer sensors for
                real-time step counting and distance tracking.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="container section contact">
          <h2>Let’s connect</h2>
          <p>If you’re hiring for frontend roles, I’d love to talk.</p>
          <div className="contact-links">
            <a href="mailto:preethiiyengar5@gmail.com">
              preethiiyengar5@gmail.com
            </a>
            <a
              href="https://github.com/PreethiHassan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/gopipreethi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {year} Preethi G. Built with React and TypeScript.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
