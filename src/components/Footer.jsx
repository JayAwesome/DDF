import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      background: 'var(--clr-blue)', 
      color: 'white', 
      padding: '5rem 0 2rem',
      borderTop: '4px solid var(--clr-gold)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Column 1: Organization */}
          <div className="footer-col">
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Dumelo Development Foundation</h3>
            <p style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--clr-gold)', marginBottom: '1rem' }}>
              Dumelo… Greater Heights for Our Tomorrow
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.7 }}>
              A credible, structured NGO mapping out pathways to international standards through workforce development and humanitarian excellence.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/about" style={{ color: '#d1e0ff', fontSize: '0.95rem' }}>About Our Mission</Link></li>
              <li><Link to="/programs" style={{ color: '#d1e0ff', fontSize: '0.95rem' }}>Core Programs</Link></li>
              <li><Link to="/leadership" style={{ color: '#d1e0ff', fontSize: '0.95rem' }}>Leadership Team</Link></li>
              <li><Link to="/gallery" style={{ color: '#d1e0ff', fontSize: '0.95rem' }}>Impact Gallery</Link></li>
              <li><Link to="/get-involved" style={{ color: '#d1e0ff', fontSize: '0.95rem' }}>Get Involved</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="footer-col">
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <FiMapPin style={{ color: 'var(--clr-gold)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                  Plot 31, Atta A. A. Street, Kado Estate,<br />
                  Abuja, Nigeria
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <FiMail style={{ color: 'var(--clr-gold)', flexShrink: 0 }} />
                <a href="mailto:info@dumelofoundation.org" style={{ fontSize: '0.95rem', color: '#d1e0ff' }}>info@dumelofoundation.org</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <FiPhone style={{ color: 'var(--clr-gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>+234 (0) XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Trust */}
          <div className="footer-col">
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Connect With Us</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: <FiLinkedin />, link: '#' },
                { icon: <FiTwitter />, link: '#' },
                { icon: <FiFacebook />, link: '#' },
                { icon: <FiInstagram />, link: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: 'rgba(255,255,255,0.1)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--clr-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div style={{ 
              padding: '1rem', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '8px',
              fontSize: '0.8rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <p style={{ fontWeight: 600, color: 'var(--clr-gold)', marginBottom: '0.25rem' }}>Legal & Compliance</p>
              <p style={{ opacity: 0.7, marginBottom: '0.25rem' }}>Registered under CAMA 2004</p>
              <p style={{ opacity: 0.7 }}>SCUML (EFCC) Certified</p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          textAlign: 'center',
          fontSize: '0.85rem',
          opacity: 0.7
        }}>
          <p>&copy; {new Date().getFullYear()} Dumelo Development Foundation. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
             <Link to="/login" style={{ fontSize: '0.75rem' }}>Internal Portal</Link>
             <span style={{ opacity: 0.3 }}>|</span>
             <Link to="/get-involved" style={{ fontSize: '0.75rem' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
