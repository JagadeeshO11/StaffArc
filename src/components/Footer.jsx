import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="NxtVision Logo" className="footer-logo" />
          <p>Leading technology solutions provider</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@nxtvision.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NxtVision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
