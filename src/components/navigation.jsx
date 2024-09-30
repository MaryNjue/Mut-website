
import { Link } from "react-router-dom";
import './HomePage.css'; 

const Navigation = () => {
  return (
    <div className="header-navigation">
                <h1 className="logo">MUTC</h1>
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
    </div>
  );
}

export default Navigation;
