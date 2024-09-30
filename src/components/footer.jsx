import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MUTC</h2>
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
          <p>Email: njuemarywanjiru@gmail.com</p>
          <p>Phone: +254 745 994 294</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; <a href="https://github.com/MaryNjue">Mary Njue</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
