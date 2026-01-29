import Matini from '../assets/matini2.png';

function Header() {
  return (
    <header className="intro-wrapper">
      <div className="intro">
        <div>
          <img width="230px" height="230px" src={Matini} className="matini" />
        </div>
        <div className="intro-text">
          <p className="intro-name">Lynn Matini Achando</p>
          <h2 className="intro-title">Fullstack Developer</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
