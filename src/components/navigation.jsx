// src/components/Navigation.js
import { Link } from "react-router-dom";
import './HomePage.css'; // Assuming this is where the nav styles are

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">Home</Link>
        </li>
        <li className="navigation-item">
          <Link to="/leadership" className="navigation-link">Leadership</Link>
        </li>
        <li className="navigation-item">
          <Link to="/tracks" className="navigation-link">Tracks</Link>
        </li>
        <li className="navigation-item">
          <Link to="/events" className="navigation-link">Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
