import { Link, useLocation } from "react-router"; // Assurez-vous d'utiliser "react-router-dom" pour les imports
import "../Header/Header.css";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  // Fonction pour ajouter la classe "active" en fonction de la route actuelle
  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  const [isExpanded, setIsExpanded] = useState(false); // État initial à false (menu fermé)

  // Ne pas afficher le header sur la route "/"
  if (location.pathname === "/") {
    return null;
  }
  const handleMenuClick = () => {
    setIsExpanded(!isExpanded); // Toggle l'état de l'ouverture/fermeture du menu
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <Link className="navbar-brand fs-1 fw-bold" to="/">
          To do List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuClick} // Toggle le menu
          aria-controls="navbarSupportedContent"
          aria-expanded={isExpanded ? "true" : "false"} // Utilisation de l'état isExpanded
          aria-label="Toggle navigation"
        >
          {/* Ici on change l'icône en fonction de l'état */}
          <span
            className={`navbar-toggler-icon ${
              isExpanded ? "icon-open" : "icon-closed"
            }`}
          ></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                onClick={handleMenuClick} // Ferme le menu lors du clic sur un lien
                className={getLinkClass("/task")}
                to="/task"
              >
                Mes tâches
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleMenuClick}
                className={getLinkClass("/login")}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleMenuClick}
                className={getLinkClass("/signup")}
                to="/signup"
              >
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleMenuClick}
                className={getLinkClass("/contact")}
                to="/contact"
              >
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
