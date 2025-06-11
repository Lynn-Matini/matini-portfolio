import { render } from 'preact';
// import { ThemeProvider } from './hooks/ThemeContext';
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
import FadeInSection from './components/FadeInSection';

export function App() {
  function handleScroll(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <main>
      <section className="header" id="home">
        <Header handleScroll={handleScroll} />
      </section>
      <h1 id="about" className="fade-in-on-scroll">
        About Matini
      </h1>
      <section className="about fade-in-on-scroll">
        <About />
      </section>
      {console.log(document.documentElement)}
      <h1 id="education" className="fade-in-on-scroll">
        Education
      </h1>
      <section className="education fade-in-on-scroll">
        {education.map((ed) => {
          return <Education key={ed.id} {...ed} />;
        })}
      </section>
      <h2 id="skills" className="fade-in-on-scroll">
        Technical Skills
      </h2>
      <section className="skills fade-in-on-scroll">
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...skills, ...skills].map((s) => {
              return <Skills key={s.id} {...s} />;
            })}
          </div>
        </div>
      </section>
      <h1 id="experiences" className="fade-in-on-scroll">
        Experience
      </h1>
      <section className="experiences with-grid fade-in-on-scroll">
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
      <h1 id="projects" className="fade-in-on-scroll">
        Featured Projects
      </h1>
      <section className="projects with-grid fade-in-on-scroll">
        {projects.map((p) => {
          return <Projects key={p.id} {...p} />;
        })}
      </section>
      <h1 id="certifications" className="fade-in-on-scroll">
        Certifications
      </h1>
      <section className="certifications with-grid fade-in-on-scroll">
        {certifications.map((c) => {
          return <Certifications key={c.id} {...c} />;
        })}
      </section>
      <h1 id="languages" className="fade-in-on-scroll">
        Languages
      </h1>
      <section className="languages with-grid fade-in-on-scroll">
        {languages.map((l) => {
          return <Languages key={l.id} {...l} />;
        })}
      </section>
      <h1 id="contact" className="fade-in-on-scroll">
        Contact
      </h1>
      <section className="contact fade-in-on-scroll">
        <Contact />
      </section>
      <footer>
        <p>Made by Matini with ❤️</p>
      </footer>
    </main>
  );
}

render(
  // <ThemeProvider>
  <FadeInSection>
    <App />
  </FadeInSection>,
  // </ThemeProvider>
  document.getElementById('app')
);
