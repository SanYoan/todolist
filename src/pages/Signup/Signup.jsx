import { Link } from "react-router";
import "../Signup/Signup.css";

function Signup() {
  document.title = "Todolist - Accueil";

  return (
    <main className="signup-page">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              {/* Champ pseudo */}
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Pseudo *"
                />
              </div>
              {/* Champ email */}
              <div className="login__field">
                <i className="login__icon fas fa-envelope"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email *"
                />
              </div>
              {/* Champ mot de passe */}
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Mot de passe *"
                />
              </div>
              {/* Bouton s'inscrire */}
              <button className="button login__submit signup_btn">
                <Link to="/login" className="button__text">
                  S'inscrire
                </Link>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            {/* Options de connexion via réseaux sociaux */}
            <div className="social-login">
              <h3>S'inscrire avec</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          {/* Arrière-plan décoratif */}
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
