import { Link } from "react-router-dom";

import "./styles.scss";

const Header = () => {
  return (
    <header id="header">
      <nav className="header__navigation">
        <Link to="/" className="header__navigation--item" href="#">
          Home
        </Link>
        <Link to="/contato" className="header__navigation--item" href="#">
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;
