import logo from "../assets/reactjs-icon.svg";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="React logo" className="nav__icon" />
        <h3 className="nav__logo_text">ReactFacts</h3>
        <h4 className="nav__title">React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;
