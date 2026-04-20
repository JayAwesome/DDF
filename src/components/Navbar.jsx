import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { logout, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/logo.png" 
            alt="Dumelo Development Foundation Logo" 
            style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
            onError={(e) => {
              // Fallback text if logo image is not found yet
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          <h1 style={{ display: 'none', margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>Dumelo <span style={{ color: 'var(--clr-gold)' }}>Foundation</span></h1>
        </Link>
        
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="nav-underline" />
              )}
            </Link>
          ))}
          
          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle Theme"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            {isAuthenticated && (
              <button onClick={logout} className="btn-logout">
                Logout
              </button>
            )}
          </div>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile glass"
          >
            <div className="container py-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`nav-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="nav-mobile-footer">
                <button onClick={toggleTheme} className="theme-toggle-mobile">
                  {isDark ? <FiSun /> : <FiMoon />} {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
                {isAuthenticated && (
                  <button onClick={logout} className="btn btn-outline w-full">Logout</button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
