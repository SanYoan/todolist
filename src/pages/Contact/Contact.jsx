import "../Contact/Contact.css";

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Nom *"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email *"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Sujet *"
                />
              </div>
              <div className="login__field">
                <textarea
                  className="text_area"
                  placeholder="Votre Message"
                ></textarea>
              </div>
              <button className="button login__submit">
                <a href="login.html" className="button__text">
                  Envoyez
                </a>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login"></div>
          </div>
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
};

export default Contact;
