import Matini from '../assets/matini2.png';
import Sun from '../assets/sun.svg';
// import Matini from './assets/matini-removedBG.png';

function Header() {
  return (
    <header className="header-item">
      <nav className="nav">
        <img
          src="https://see.fontimg.com/api/rf5/8Ox1B/ZWMxNTNiYjgxYzJhNGNjM2I0NjdkNDRlOTU1NWIyZWIudHRm/bWF0aW5p/sacrifice-demo.png?r=fs&h=85&w=1303&fg=000000&bg=FFFFFF&tb=1&s=65"
          className="matini-logo"
        />
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Education</a>
          </li>
          <li>
            <a href="#experiences">Projects</a>
          </li>
          <li>
            <a href="#projects">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <img src={Sun} className="sun" />
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
