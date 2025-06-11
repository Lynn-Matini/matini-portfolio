import { useState } from 'preact/hooks';
// import { useTheme } from '../hooks/ThemeContext';

import Matini from '../assets/matini2.png';
import Sun from '../assets/sun.svg';
import Hamburger from '../assets/hamburger.svg';
import MatiniLogo from '../assets/matini-font2.png';

function Header({ handleScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header-item">
      <nav className="nav">
        <div className="matini-logo">
          <img
            width="90px"
            height="25px"
            src={MatiniLogo}
            alt="Matini's Logo"
            onClick={() => handleScroll('home')}
          />
        </div>
        <ul className="nav-list">
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('education')}>Education</li>
          <li onClick={() => handleScroll('skills')}>Skills</li>
          <li onClick={() => handleScroll('experiences')}>Experience</li>
          <li onClick={() => handleScroll('projects')}>Projects</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
        <div className="rightnav-icons">
          <img
            src={Sun}
            width="40px"
            height="66px"
            className="sun"
            onClick={() => alert('Clicked!')}
          />
          <img
            src={Hamburger}
            width="25px"
            className="hamburger"
            onClick={toggleMenu}
          />
        </div>
      </nav>
      <div className="intro">
        <div>
          <img width="230px" height="230px" src={Matini} className="matini" />
          <p className="intro-name">Lynn Achando</p>
          <h2 className="intro-title">Frontend Developer & Data Analyst</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
