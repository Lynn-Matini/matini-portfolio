import { render } from 'preact';
// import { lazy, Suspense } from 'preact/compat';
// const About = lazy(() => import('./components/About'));

import './style.css';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import {
  certifications,
  education,
  experience,
  languages,
  projects,
  skills,
} from './data.js';
import Header from './components/Header';

export function App() {
  return (
    <main>
      <section className="header" id="home">
        <Header />
      </section>
      <h1 id="about">About Matini</h1>
      <section className="about">
        <About />
      </section>

      <h1 id="education">Education</h1>
      <section className="education">
        {education.map((ed) => {
          return (
            <Education
              key={ed.id}
              degree={ed.degree}
              school={ed.school}
              graduation={ed.graduation}
              description={ed.description}
            />
          );
        })}
      </section>

      <h2 id="skills">Technical Skills</h2>
      <section className="skills">
        <div className="skills-carousel-track">
          {[...skills, ...skills].map((s) => {
            return (
              <Skills
                key={s.id}
                src={s.src}
                skill={s.skill}
                proficiency={s.proficiency}
              />
            );
          })}
        </div>
      </section>

      <h1 id="experiences">Experience</h1>
      <section className="experiences with-grid">
        {experience.map((exp) => {
          return (
            <Experience
              key={exp.id}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              descriptions={exp.description}
            />
          );
        })}
      </section>

      <h1 id="projects">Featured Projects</h1>
      <section className="projects with-grid">
        {projects.map((p) => {
          return (
            <Projects
              key={p.id}
              title={p.title}
              description={p.description}
              webLink={p.webLink}
              gitHubLink={p.gitHubLink}
            />
          );
        })}
      </section>

      <h1 id="certifications">Certifications</h1>
      <section className="certifications with-grid">
        {certifications.map((c) => {
          return (
            <Certifications
              key={c.id}
              logo={c.logo}
              issuer={c.issuer}
              issueDate={c.issueDate}
              title={c.title}
            />
          );
        })}
      </section>

      <h1 id="languages">Languages</h1>
      <section className="languages with-grid">
        {languages.map((l) => {
          return (
            <Languages
              key={l.id}
              language={l.language}
              proficiency={l.proficiency}
            />
          );
        })}
      </section>

      <h1 id="contact">Contact</h1>
      <section className="contact">
        <Contact />
      </section>

      <footer>
        <p>Made by Matini with ❤️</p>
      </footer>
    </main>
  );
}

render(<App />, document.getElementById('app'));
