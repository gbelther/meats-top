import "./styles.scss";

const Header = () => {
  return (
    <header id="header">
      <nav className="header__navigation">
        <a className="header__navigation--item" href="#">
          Home
        </a>
        <a className="header__navigation--item" href="#">
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
