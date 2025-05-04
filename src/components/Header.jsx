import { useState } from 'preact/hooks';
import Matini from '../assets/matini2.png';
import Sun from '../assets/sun.svg';
// import Matini from './assets/matini-removedBG.png';
import Hamburger from '../assets/hamburger.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header-item">
      <nav className="nav">
        <a href="#home" className="logo-container">
          <img
            src="https://see.fontimg.com/api/rf5/8Ox1B/ZWMxNTNiYjgxYzJhNGNjM2I0NjdkNDRlOTU1NWIyZWIudHRm/bWF0aW5p/sacrifice-demo.png?r=fs&h=85&w=1303&fg=000000&bg=FFFFFF&tb=1&s=65"
            alt="Matini's Logo"
            className="matini-logo"
          />
        </a>
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experiences">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="rightnav-icons">
          <img src={Sun} className="sun" />
          <img src={Hamburger} className="hamburger" onClick={toggleMenu} />
        </div>
      </nav>
      <div className="intro">
        <div>
          <img src={Matini} className="matini" />
          <p className="intro-name">Lynn Achando</p>
          <h2 className="intro-title">Frontend Developer & Data Analyst</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
