import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="NXTVISION NETWORKS Logo" className="footer-logo" />
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
          <p>Email: info@nxtvisionnetworks.com</p>
          <p>Phone: +1 512-575-3440</p>
          <p>Address: 5830 E 2nd St, Ste 7000 #32653, Casper, Wyoming - 82609 US</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NXTVISION NETWORKS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
