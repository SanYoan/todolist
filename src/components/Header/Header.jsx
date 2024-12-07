import { Link, useLocation } from "react-router";
import "../Header/Header.css";

const Header = () => {
  const location = useLocation();

  // Fonction pour ajouter la classe "active" en fonction de la route actuelle
  const getLinkClass = (path) => {
    // Assurez-vous que la valeur retournée est une chaîne de caractères
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  // Ne pas afficher le header sur la route "/"
  if (location.pathname === "/") {
    return null;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
        <Link className="navbar-brand fs-1 fw-bold" to="/">
          To do List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className={getLinkClass("/task")} to="/task">
                Mes tâches
              </Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass("/login")} to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass("/signup")} to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass("/contact")} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
