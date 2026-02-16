import { render } from 'preact';
import './style.css';

import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Header from './components/Header';
import FadeInSection from './hooks/FadeInSection';
import TopNav from './components/TopNav';

import {
  certifications,
  education,
  experience,
  languages,
  projects,
  skills,:root {
  --primary-color: #aeadf0;
  --primary-color-pale: #f3e2f3;
  --primary-color-light: #d8dcff;
  --primary-color-lighter: #edeffd;
  --primary-color-dark: #a0a4ff;
  --primary-color-darker: #7a7eff;
  --primary-color-darkest: #5458ff;
  --secondary-color: #f0f0f0;
  --text-color: #222222;
  --font-family: 'Cascadia Code', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--primary-color-lighter);
  overflow-x: hidden;
  line-height: 1.6;
  font-size: 0.8rem;
  color: var(--text-color);
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}

main {
  box-sizing: border-box;
  margin: 0;
  text-align: center;
  font-family: var(--font-family);
}

.dark {
  background-color: #222222;
}

.light {
  background-color: white;
}

/* MULTIPLE ELEMENTS AT ONCE */
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  visibility: hidden;
}
.fade-in-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

#about,
#education,
#projects,
#skills,
#experiences,
#certifications,
#languages,
#contact {
  scroll-margin-top: 100px;
  margin-top: 6rem;
  margin-bottom: 2rem;
}

.about,
.contact {
  margin: 1rem 0 120px;
}

/* NAVIGATION */
.nav {
  display: flex;
  justify-content: space-between;
  background: var(--primary-color-pale);
  position: sticky;
  z-index: 1;
  top: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.nav ul {
  display: flex;
  padding: 20px 0;
  gap: 20px;
  align-items: center;
}

.nav-list {
  list-style: none;
  font-size: 16px;
}

.nav-list a {
  text-decoration: none;
  color: inherit;
}

.nav > ul > li:hover {
  color: var(--primary-color-darkest);
}

.nav-list li a.active {
  color: var(--primary-color-darkest);
  font-weight: bold;
  border-bottom: 2px solid var(--primary-color-darkest);
  transition: all 0.1s ease-in-out;
}

/* MATINI LOGO & LIGHT-MODE SVG */
.rightnav-icons {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}

.sun {
  cursor: pointer;
}

.hamburger {
  display: none;
}

.logo-container {
  display: flex;
  align-items: center;
}

.matini-logo {
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* HEADER ELEMENTS */
.header {
  min-height: 90svh;
  display: flex;
  flex-direction: column;
}

.matini {
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 50%;
}

.intro-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.intro-name {
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 10px;
  line-height: 5rem;
}

.intro-title {
  font-weight: 400;
}

/* ABOUT */
.about {
  padding: 0 5rem;
}

/* HOVERABLE - All purple tiles */
.hoverable {
  border: 0.5px solid transparent;
  border-radius: 5px;
  background: var(--primary-color-light);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px;
  text-align: left;
}
.hoverable:hover {
  border-color: var(--primary-color-darkest);
}

.hoverable > h2,
.hoverable > h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: 500;
}
.hoverable > h4 {
  font-size: 0.85rem;
  margin-bottom: 5px;
  font-weight: 100;
}
.hoverable > p,
.hoverable > ul > li,
.project > p {
  font-size: 0.9rem;
  margin: 15px 0;
  font-weight: 300;
  flex-grow: 1;
}

/* GRID SECTIONS - Experiences, Projects, Certifications, Languages */
.with-grid {
  display: grid;
  width: 80%;
  max-width: 1100px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
}

/* SKILLS */
.skills {
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  padding: 15px 0;
  width: 100%;
}

.carousel-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  animation: scroll-left 10s linear infinite;
  width: fit-content;
}

.carousel-track > * {
  margin-right: 70px;
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.carousel-track:hover {
  /* animation-play-state: paused; */
}

.skill {
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* EXPERIENCES */
.education-item,
.experience {
  padding: 1.5rem 2rem;
}

/* PROJECTS */
.project {
  padding: 0 1.5rem;
}

.preview-container {
  height: 200px;
}

.project-links {
  display: flex;
  padding: 0.5rem 0 2rem;
  justify-content: space-between;
}

.link-btn {
  border: 1px solid var(--primary-color-dark);
  text-decoration: none;
  background-color: var(--secondary-color);
  padding: 10px 20px;
  border-radius: 10px;
  color: inherit;
}

.link-btn:hover {
  background-color: var(--primary-color-dark);
  color: var(--secondary-color);
}

/* CERTIFICATIONS */
.certifications {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.certification {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.certification > img {
  margin-bottom: 1rem;
}

.certifications > .certification:nth-of-type(1) > img {
  object-fit: cover;
}

/* LANGUAGES */
.languages {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.language {
  padding: 1rem 3rem;
  text-align: center;
}

/* Contact */
.contact {
  display: flex;
  justify-content: center;
  margin-bottom: 3.5rem;
}

.contact-item {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.contact-item > input,
textarea {
  padding: 20px;
  border-radius: 10px;
  background: none;
  border: 1px solid var(--primary-color-darkest);
}

.submit-btn {
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid var(--primary-color-darkest);
  background: var(--primary-color-pale);
  font-weight: 600;
  color: var(--text-color);
}

.submit-btn:hover {
  background: var(--primary-color-dark);
  font-weight: bold;
  color: var(--secondary-color);
}

/* Footer */
footer {
  background: var(--primary-color-dark);
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* MEDIA QUERIES FOR RESPONSIVENESS */
@media (max-width: 610px) {
  .with-grid {
    width: 85%;
  }

  .contact {
    padding: 0 2rem;
  }

  .hamburger {
    display: block;
    margin-left: 20px;
    padding: 20px 0;
    cursor: pointer;
  }
  .nav ul {
    display: none;
  }
}

@media (min-width: 611px) and (max-width: 800px) {
  .nav ul {
    font-size: 0.7rem;
  }
  #experiences,
  #projects,
  #certifications,
  #languages,
  #contact {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .education,
  .experiences,
  .projects,
  .certifications,
  .languages {
  }
}

@media (min-width: 801px) and (max-width: 900px) {
  .about {
    padding: 0 2rem;
  }
  .nav ul {
    font-size: 0.8rem;
  }
}

} from './data.js';
import ThemeProvider from './hooks/ThemeContext';

export function App() {
  function handleScroll(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <main>
      <TopNav handleScroll={handleScroll} />
      <section className="header" id="home">
        <Header handleScroll={handleScroll} />
      </section>
      <FadeInSection>
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
        <section className="education with-grid fade-in-on-scroll">
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
                {...exp}
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
        <h1 id="certifications" className="with-grid fade-in-on-scroll">
          Certifications
        </h1>
        <section className="certifications with-grid fade-in-on-scroll">
          {certifications.map((c) => {
            return <Certifications key={c.id} {...c} />;
          })}
        </section>
        <h1 id="languages" className="with-grid fade-in-on-scroll">
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
      </FadeInSection>
      <footer>
        <p>Made by Matini with ❤️</p>
      </footer>
    </main>
  );
}

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
);
