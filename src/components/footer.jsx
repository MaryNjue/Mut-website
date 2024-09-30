import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MUTC</h2>
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/tracks">Tracks</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <p>Email: info@mutc.com</p>
          <p>Phone: +254 712 345 678</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MUTC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
