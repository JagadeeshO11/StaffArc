import logo from '../assets/logo.png';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (idx) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  const menuItems = [
    { 
      name: 'Home', 
      sub: [
        { name: 'Welcome', path: '/welcome' },
        { name: 'Features', path: '/features' },
        { name: 'Testimonials', path: '/' }
      ] 
    },
    { 
      name: 'Services', 
      sub: [
        { name: 'Network Installation', path: '/network-installation' },
        { name: 'Fiber Optics', path: '/fiber-optics' },
        { name: 'Wireless Solutions', path: '/wireless-solutions' },
        { name: 'Security Systems', path: '/security-systems' },
        { name: 'Maintenance & Support', path: '/maintenance' },
        { name: 'Consulting', path: '/consulting' }
      ] 
    },
    { 
      name: 'About', 
      sub: [
        { name: 'Company Profile', path: '/company-profile' },
        { name: 'Our Leaders', path: '/our-leaders' },
        { name: 'Service Locations', path: '/service-locations' },
        { name: 'Certifications', path: '/certifications' }
      ] 
    },
    { 
      name: 'Resources', 
      sub: [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/documentation' }
      ] 
    }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="NxtVision Logo" />
        </Link>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, idx) => (
            <div key={idx} className="nav-item" onMouseEnter={() => !isMobile && setActiveDropdown(idx)} onMouseLeave={() => !isMobile && setActiveDropdown(null)}>
              <span className="nav-link" onClick={() => isMobile && toggleDropdown(idx)}>{item.name}</span>
              {activeDropdown === idx && (
                <div className="dropdown">
                  {item.sub.map((sub, i) => (
                    <Link key={i} to={sub.path} onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>{sub.name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="nav-cta">Contact Us</Link>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
