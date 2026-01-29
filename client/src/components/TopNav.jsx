import Sun from '../assets/sun.svg';
import Hamburger from '../assets/hamburger.svg';
import MatiniLogo from '../assets/matini-font2.png';

import { useState } from 'preact/hooks';

function TopNav({ handleScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
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
  );
}

export default TopNav;
