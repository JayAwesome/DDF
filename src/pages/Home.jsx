import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiBook, FiUsers, FiActivity, FiAward } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--clr-blue) 0%, var(--clr-blue-light) 100%)',
        color: 'white',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', fontWeight: 700 }}
          >
            Dumelo <span style={{ color: 'var(--clr-gold)' }}>Development</span> Foundation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.5rem', marginBottom: '3rem', fontWeight: 300, fontStyle: 'italic' }}
          >
            Dumelo… Greater Heights for Our Tomorrow
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-3"
          >
            <Link to="/get-involved" className="btn btn-gold">Partner With Us</Link>
            <Link to="/about" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Learn More</Link>
          </motion.div>
        </div>
        
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: '-20%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%'
        }}></div>
      </section>

      {/* Intro Video Section */}
      <section className="section" style={{ paddingBottom: '0' }}>
         <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/6mfFCtKNn50?si=DoL3IE0j2x5OWAZV" 
                title="Founder Introduction" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
         </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <h2 className="mb-3">Organization Overview</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--clr-text-muted)', lineHeight: 1.8 }}>
            Dumelo Development Foundation is a registered non-governmental organization committed to transforming lives through humanitarian services, empowerment programs, and community development initiatives. We operate globally with a strong presence in Nigeria, focusing on creating sustainable impact through education, entrepreneurship, and social support systems.
          </p>
        </div>
      </section>

      {/* Key Impact Items */}
      <section className="section section-bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {[
              { title: 'Global Reach', icon: <FiUsers />, desc: 'Large scale empowerment programs and interventions across multiple states in Nigeria and globally.' },
              { title: 'Education Support', icon: <FiBook />, desc: 'Educational support for students in Abuja and sponsorship of over 30 tertiary students.' },
              { title: 'Skills Empowerment', icon: <FiAward />, desc: 'Robust skills training for widows in Nasarawa State and empowerment of artisans nationwide.' },
              { title: 'Healthcare & Vulnerability', icon: <FiHeart />, desc: 'Support for disabled children in Ibadan and critical medical interventions.' }
            ].map((area, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                style={{ 
                  background: 'var(--clr-surface)', 
                  padding: '2rem', 
                  borderRadius: '8px', 
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center',
                  borderTop: '4px solid var(--clr-gold)'
                }}
              >
                <div style={{ fontSize: '2.5rem', color: 'var(--clr-gold)', marginBottom: '1rem' }}>{area.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{area.title}</h3>
                <p style={{ color: 'var(--clr-text-muted)' }}>{area.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/assets/founder-image.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#eee', minHeight: '400px', objectFit: 'cover' }} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/500x600?text=Founder+Image'; }} />
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Founder Spotlight</h4>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Amb. Dr. Loretta Emetam Enwezor</h2>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-text-muted)', marginBottom: '1.5rem', fontWeight: 400 }}>President & Founder</h3>
              
              <p style={{ color: 'var(--clr-text-main)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                A seasoned entrepreneur and humanitarian with extensive experience in corporate leadership, government service, and grassroots mobilization. She is recognized for her strong relationship management skills and commitment to impactful service.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--clr-heading)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Focus Areas</h4>
                  <ul style={{ listStyleType: 'disc', color: 'var(--clr-text-muted)', paddingLeft: '1.25rem' }}>
                    <li>Women empowerment</li>
                    <li>Entrepreneurship development</li>
                    <li>Social services</li>
                    <li>Conflict resolution</li>
                    <li>Capacity building</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: 'var(--clr-heading)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Global Recognition</h4>
                  <ul style={{ listStyleType: 'disc', color: 'var(--clr-text-muted)', paddingLeft: '1.25rem' }}>
                    <li>UN Peace Ambassador</li>
                    <li>Global Diplomat</li>
                    <li>Honorary Doctorate in Global Peace & Humanities</li>
                    <li>African Digital Ambassador</li>
                  </ul>
                </div>
              </div>
              
              <Link to="/leadership" className="btn btn-outline">Read Full Profile</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
