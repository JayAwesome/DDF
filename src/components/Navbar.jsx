import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { logout, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <h1>Dumelo <span>Foundation</span></h1>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--clr-text-main)', fontSize: '1.25rem', cursor: 'pointer', padding: '0.4rem', display: 'flex', alignItems: 'center' }}>
            {isDark ? <FiSun color="var(--clr-gold)" /> : <FiMoon />}
          </button>
          {isAuthenticated && (
            <button onClick={logout} className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>
              Logout
            </button>
          )}
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div style={{ backgroundColor: 'var(--clr-surface)', padding: '1rem', borderTop: '1px solid #eee' }}>
           {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              style={{ display: 'block', padding: '0.5rem 0', color: location.pathname === link.path ? 'var(--clr-gold)' : 'var(--clr-text-main)' }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} style={{ width: '100%', padding: '0.5rem 0', background: 'transparent', border: 'none', color: 'var(--clr-text-main)', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {isDark ? <FiSun color="var(--clr-gold)" /> : <FiMoon />} Theme
          </button>
          {isAuthenticated && (
            <button onClick={logout} className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
