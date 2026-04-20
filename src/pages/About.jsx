import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Who We Are</span>
          <h1 className="hero-title">About Us</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            We are a community-centered foundation focused on dignity, opportunity, and practical support for those who need it most.
          </p>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-cards">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hover-lift"
              style={{ background: 'var(--clr-surface)', padding: '3rem', borderRadius: '24px', borderTop: '6px solid var(--clr-gold)', boxShadow: 'var(--shadow-md)' }}
            >
              <h2 className="card-title">Our Mission</h2>
              <p className="subtitle-text">
                To serve humanity through empowerment, charity, and compassionate service rooted in love and unity.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hover-lift"
              style={{ background: 'var(--clr-surface)', padding: '3rem', borderRadius: '24px', borderTop: '6px solid var(--clr-blue)', boxShadow: 'var(--shadow-md)' }}
            >
              <h2 className="card-title">Our Vision</h2>
              <p className="subtitle-text">
                To build a transformed society driven by empowered individuals and sustainable entrepreneurship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story / About */}
      <section className="section section-bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-5">
            <h2 className="section-title">What we stand for</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Strategic Positioning */}
            <div>
              <h3 className="card-title">Clear, people-first delivery</h3>
              <p className="subtitle-text">
                We keep our work simple: listen, respond, empower, and follow through—so support turns into stability for families and communities.
              </p>
            </div>

            {/* Humanitarian Focus */}
            <div>
              <h3 className="card-title">What we do</h3>
              <ul style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '0.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Empowerment programs and skills support</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Education support for students and youth</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Humanitarian services for vulnerable households</li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', borderLeft: '8px solid var(--clr-gold)', background: 'var(--clr-surface)', marginTop: '1rem' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--clr-blue)', fontWeight: 600, margin: 0, fontSize: '1.25rem', lineHeight: 1.5 }}>
                "We believe true impact is achieved when individuals are not just supported, but empowered to become self-sufficient, productive pillars of society."
              </p>
            </div>

            <div className="flex-responsive-row" style={{ gap: '1rem', justifyContent: 'center' }}>
              <Link to="/programs" className="btn btn-primary hover-lift">Explore Programs</Link>
              <Link to="/impact" className="btn btn-outline hover-lift">View Impact</Link>
              <Link to="/credibility" className="btn btn-outline hover-lift">Trust &amp; Compliance</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
