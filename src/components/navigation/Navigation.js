import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigationBar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
