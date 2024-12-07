import { Link } from "react-router";
import "../Home/Home.css";

function Home() {
  document.title = `Todolist - Accueil`;
  return (
    <main>
      <div className="container home">
        <h1 className="h1_title"> Bienvenue sur Todolist !</h1>
        <Link id="btn_go" to="/signup">
          Commencez !
        </Link>
        <div className="screen__backgroundT">
          <span className="screen__background__shape screen__background__shapeT4"></span>
          <span className="screen__background__shape screen__background__shapeT3"></span>
          <span className="screen__background__shape screen__background__shapeT2"></span>
          <span className="screen__background__shape screen__background__shapeT1"></span>
        </div>
      </div>
    </main>
  );
}

export default Home;
