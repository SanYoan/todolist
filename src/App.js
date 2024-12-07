import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/appRoutes.jsx";
import Header from "./components/Header/Header.jsx";
import "./assets/styles/style.css";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;
