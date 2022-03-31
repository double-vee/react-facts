import logo from "../assets/reactjs-icon.svg";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="React logo" className="nav__icon" />
        <h3 className="nav__logo_text">ReactFacts</h3>
        <div className="nav__toggler">
          <p className="toggler__text--light">Light</p>
          <div className="toggler__slider">
            <div className="toggler__slider__circle"></div>
          </div>
          <p className="toggler__text--dark">Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
