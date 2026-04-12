import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'var(--clr-bg-alt)' 
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          backgroundColor: 'var(--clr-surface)', 
          padding: '3rem', 
          borderRadius: '8px', 
          boxShadow: 'var(--shadow-lg)',
          width: '100%',
          maxWidth: '450px',
          textAlign: 'center'
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: 'var(--clr-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>
            Dumelo <span style={{ color: 'var(--clr-gold)' }}>Foundation</span>
          </h1>
          <p style={{ color: 'var(--clr-text-muted)' }}>Private Portal Access</p>
        </div>

        {error && <div style={{ color: 'var(--clr-error)', marginBottom: '1rem', backgroundColor: '#fce8e8', padding: '0.75rem', borderRadius: '4px' }}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Access Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (hint: dumelo2026)"
              style={{ 
                width: '100%', 
                padding: '1rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Enter Site
          </button>
        </form>

        <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--clr-text-muted)' }}>
          <p>This is a private staging environment.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
