import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigationBar">
      <ul className="nav nav-tabs">
        <li>
          <Link to="/" className="nav-item">About</Link>
        </li>
        {/* <li >
          <Link to="/About" className="nav-item">About Me</Link>
        </li> */}
        <li >
          <Link to="/Portfolio" className="nav-item">Portfolio</Link>
        </li>
        <li >
          <Link to="/Contact" className="nav-item">Contact</Link>
        </li>
        <li >
          <Link to="/Resume" className="nav-item">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
