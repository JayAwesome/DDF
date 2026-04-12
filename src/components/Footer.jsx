import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Dumelo Development Foundation</h3>
            <p style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--clr-gold)' }}>Dumelo… Greater Heights for Our Tomorrow</p>
            <p>Empowering Communities, Transforming Lives.</p>
          </div>
          
          <div className="footer-col">
            <h3>Get Involved</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/get-involved" style={{ color: '#d1e0ff' }}>Partner with us</Link></li>
              <li><Link to="/programs" style={{ color: '#d1e0ff' }}>Support our mission</Link></li>
              <li><Link to="/get-involved" style={{ color: '#d1e0ff' }}>Join as a volunteer</Link></li>
              <li><Link to="/get-involved" style={{ color: '#d1e0ff' }}>Donate to empower lives</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Plot 31, Atta A. A. Street, Kado Estate</p>
            <p>Abuja, Nigeria</p>
            <p>Email: info@dumelofoundation.org</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dumelo Development Foundation. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>Internal Portal Access</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
