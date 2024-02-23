import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <nav className="headerCOntainer">
      <h1 className="toastifyTitle">Toastify</h1>
      <div className="componentLinks">
        <Link to="/comp1" className="links">
          <span className="toasts">Toast1</span>
        </Link>
        <Link to="/comp2" className="links">
          <span className="toasts">Toast2</span>
        </Link>
        <Link to="/comp3" className="links">
          <span className="toasts">Toast3</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
