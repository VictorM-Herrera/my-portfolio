'use client'
import React from "react";
import "./portfolio.css";
import { useLanguage } from "@/app/context/LanguageContex";
import Image from "next/image";
export default function Portfolio() {
  const { lang } = useLanguage();
  return (
    <section className="normal-page">
      <div className="normal-layout">
        <aside className="normal-sidebar">
          <div className="normal-avatar">
            <Image src={"/hero_image.png"} alt="Hero image" width={140} height={140} priority/>
          </div>
          <h1 className="normal-name">Victor M. Herrera</h1>
          <p className="normal-role">{lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</p>

          <p className="normal-summary">
            {lang === "en"
              ? "Software developer with hands-on experience in front-end and back-end development, including JavaScript (React, Node), HTML, CSS and SQL. I enjoy creating useful tools and polished UI experiences."
              : "Desarrollador de software con experiencia práctica en desarrollo front-end y back-end, incluyendo JavaScript (React, Node), HTML, CSS y SQL. Disfruto crear herramientas útiles y experiencias de interfaz pulidas."}
          </p>

          <div className="normal-links">
            <a href="https://github.com/VictorM-Herrera" target="_blank" rel="noreferrer" className="social-btn github">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/victor-maximiliano-herrera/"
              target="_blank"
              rel="noreferrer"
              className="social-btn linkedin"
            >
              LinkedIn
            </a>
            <a href="mailto:victormherrerac14@gmail.com" className="social-btn email">
              Email
            </a>
          </div>
        </aside>

        <main className="normal-main">
          {/* EXPERIENCE */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Experience" : "Experiencia"}</h2>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>Backend Developer</h3>
                <span className="timeline-date">{lang === "en" ? "jan 2025 – jul 2026" : "ene 2025 – jul 2026"}</span>
              </div>
              <p className="timeline-company">Rubicom Soluciones en Gestión</p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Maintained a production point-of-sale system used by client businesses, with responsibility for continuity, bug fixes and incremental improvements."
                    : "Mantuve un sistema de punto de venta en producción utilizado por clientes, con responsabilidad sobre su continuidad, corrección de errores y mejoras incrementales."}
                </li>
                <li>
                  {lang === "en"
                    ? "Used PHP and JavaScript to diagnose issues and implement backend changes in a live environment."
                    : "Utilicé PHP y JavaScript para diagnosticar incidencias e implementar cambios de backend sobre un entorno activo."}
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>{lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</h3>
                <span className="timeline-date">{lang === "en" ? "dec 2024 – Present" : "dic 2024 – Actualidad"}</span>
              </div>
              <p className="timeline-company">
                {lang === "en" ? "Freelance / Independent professional" : "Freelance / Profesional independiente"}
              </p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Designed and deployed single-page applications for clients using React, Next.js, Node.js and JavaScript/TypeScript."
                    : "Diseñé y desplegué aplicaciones para clientes utilizando React, Next.js, Node.js y JavaScript/TypeScript."}
                </li>
                <li>
                  {lang === "en"
                    ? "Designed REST APIs, backend logic, SQL integrations, authentication and connections with third-party services."
                    : "Diseñé APIs REST, lógica de backend, integraciones SQL, autenticación y conexiones con servicios de terceros."}
                </li>
                <li>
                  {lang === "en"
                    ? "Designed the MVP of an electronic invoicing system integrated with ARCA services, including invoice generation, CAE retrieval and PDF documentation."
                    : "Diseñé el MVP de un sistema de facturación electrónica integrado con servicios de ARCA, incluyendo generación de comprobantes, obtención de CAE y documentación en PDF."}
                </li>
                <li>
                  {lang === "en"
                    ? "Managed production deployments and worked directly with clients to turn business requirements into maintainable features."
                    : "Gestioné despliegues a producción y trabajé directamente con clientes para convertir requisitos de negocio en funcionalidades mantenibles."}
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>{lang === "en" ? "Frontend Developer" : "Desarrollador Frontend"}</h3>
                <span className="timeline-date">{lang === "en" ? "feb 2023 – dec 2024" : "feb 2023 – dic 2024"}</span>
              </div>
              <p className="timeline-company">Universidad FASTA</p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Developed internal web applications for university staff, streamlining administrative processes and improving usability across devices."
                    : "Desarrollé aplicaciones web internas para personal universitario, optimizando procesos administrativos y la experiencia de uso en distintos dispositivos."}
                </li>
                <li>
                  {lang === "en"
                    ? "Worked with React, Angular, Node.js and PHP, integrating REST services and deploying responsive applications and PWAs."
                    : "Trabajé con React, Angular, Node.js y PHP, integrando servicios REST y desplegando aplicaciones responsivas y PWAs."}
                </li>
              </ul>
            </div>
          </section>
          {/* CURRENT FOCUS */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Current focus" : "Enfoque actual"}</h2>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>{lang === "en" ? "Applied AI and automation" : "IA aplicada y automatización"}</h3>
              </div>
              <p className="timeline-company">{lang === "en" ? "Learning path and portfolio development" : "Formación y desarrollo de portfolio"}</p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Building a practical foundation in LLM applications, multi-agent systems, reusable agent skills and workflow automation."
                    : "Estoy construyendo una base práctica en aplicaciones con LLMs, sistemas multiagente, skills reutilizables para agentes y automatización de flujos."}
                </li>
                <li>
                  {lang === "en"
                    ? "The goal is to turn this knowledge into AI automation services for repetitive business processes, supported by concrete portfolio projects."
                    : "El objetivo es convertir este conocimiento en servicios de automatización con IA para procesos repetitivos de negocio, respaldados por proyectos concretos de portfolio."}
                </li>
              </ul>
            </div>
          </section>
          {/* EDUCATION */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Education" : "Educación"}</h2>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>
                  {lang === "en"
                    ? "Programming / Computer Science studies"
                    : "Estudios en Programación / Tecnicatura Universitaria en Programación"}
                </h3>
                <span className="timeline-date">{lang === "en" ? "mar 2023 – Present" : "mar 2023 – Actualidad"}</span>
              </div>
              <p className="timeline-company">UTN · Udemy · Bootcamps</p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Focus on algorithms, OOP, databases and web development with JavaScript and Java."
                    : "Enfoque en algoritmos, programación orientada a objetos, bases de datos y desarrollo web con JavaScript y Java."}
                </li>
                <li>Java, Spring, PHP, MySQL, JavaScript, Angular, React, NodeJS, Express.</li>
              </ul>
            </div>
          </section>

          {/* SKILLS */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Skills" : "Habilidades"}</h2>

            <div className="skills-groups">
              <div>
                <h3 className="skills-group-title">Frontend</h3>
                <ul className="skills-list">
                  <li className="skill-pill">React</li>
                  <li className="skill-pill">Next.js</li>
                  <li className="skill-pill">TypeScript</li>
                  <li className="skill-pill">HTML</li>
                  <li className="skill-pill">CSS / Tailwind</li>
                  <li className="skill-pill">Angular</li>
                  <li className="skill-pill">JavaFX</li>
                </ul>
              </div>

              <div>
                <h3 className="skills-group-title">Backend</h3>
                <ul className="skills-list">
                  <li className="skill-pill">Node.js</li>
                  <li className="skill-pill">Express</li>
                  <li className="skill-pill">Java</li>
                  <li className="skill-pill">Spring Boot</li>
                  <li className="skill-pill">PHP</li>
                  <li className="skill-pill">REST APIs</li>
                </ul>
              </div>

              <div>
                <h3 className="skills-group-title">
                  {lang === "en" ? "Databases & Tools" : "Bases de datos y herramientas"}
                </h3>
                <ul className="skills-list">
                  <li className="skill-pill">MySQL</li>
                  <li className="skill-pill">PostgreSQL</li>
                  <li className="skill-pill">SQL Server</li>
                  <li className="skill-pill">MongoDB</li>
                  <li className="skill-pill">Git / GitHub</li>
                </ul>
              </div>

              <div>
                <h3 className="skills-group-title">
                  {lang === "en" ? "AI and automation in training" : "IA y automatización en formación"}
                </h3>
                <ul className="skills-list">
                  <li className="skill-pill">LLM applications</li>
                  <li className="skill-pill">Multi-agent systems</li>
                  <li className="skill-pill">Agent skills</li>
                  <li className="skill-pill">Workflow automation</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
