import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Programs = () => {
  const programs = [
    {
      title: 'Empowerment Programs',
      list: [
        'Advanced skills acquisition and vocational training',
        'Strategic entrepreneurial development workshops',
        'Sustainable micro-finance and start-up initiatives',
      ],
      img: '/assets/humanitarian-support-4.jpeg'
    },
    {
      title: 'Humanitarian Services',
      list: [
        'Dedicated support for widows and vulnerable women',
        'Holistic assistance for abandoned families',
        'Targeted aid and relief for rural communities',
      ],
      img: '/assets/humanitarian-support-5.jpeg'
    },
    {
      title: 'Education Support',
      list: [
        'Tertiary education scholarships and sponsorships',
        'Provision of modern learning materials and tools',
        'Educational infrastructure development projects',
      ],
      img: '/assets/humanitarian-support-6.jpeg'
    },
    {
      title: 'Healthcare Interventions',
      list: [
        'Strategic payment of critical medical bills',
        'Structured hospital visits and community healthcare',
        'High-impact medical support for emergency cases',
      ],
      img: '/assets/humanitarian-support-7.jpeg'
    },
    {
      title: 'Community Development',
      list: [
        'State-level job creation and workforce initiatives',
        'Sustainable industrial and agricultural modeling',
        'Comprehensive rural outreach and social works',
      ],
      img: '/assets/humanitarian-support-8.jpeg'
    }
  ];

  return (
    <div className="programs-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Our Initiatives</span>
          <h1 className="hero-title">Key Program Areas</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Explore the focused program areas where we deliver practical support and long-term empowerment.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {programs.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="flex-responsive-row"
                style={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', gap: '5rem' }}
              >
                <div style={{ flex: '1 1 450px', position: 'relative' }}>
                  <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--clr-bg-alt)' }}>
                    <img src={prog.img} alt={prog.title} style={{ width: '100%', height: '450px', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '-25px', 
                    [idx % 2 === 0 ? 'right' : 'left']: '30px',
                    background: 'var(--clr-gold)',
                    color: 'white',
                    padding: '1.25rem 2rem',
                    borderRadius: '20px',
                    fontWeight: 900,
                    boxShadow: 'var(--shadow-lg)',
                    fontSize: '1.5rem'
                  }}>
                    0{idx + 1}
                  </div>
                </div>
                <div style={{ flex: '1 1 500px', textAlign: 'left' }}>
                  <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>{prog.title}</h2>
                  
                  <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {prog.list.slice(0, 2).map((item, idxx) => (
                      <li key={idxx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                        <FiCheckCircle style={{ color: 'var(--clr-gold)', fontSize: '1.75rem', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span className="subtitle-text" style={{ color: 'var(--clr-text-main)', fontSize: '1.15rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="subtitle-text text-muted" style={{ marginTop: '1.5rem', marginBottom: 0, maxWidth: '680px' }}>
                    Want deeper context and outcomes? Explore our <Link to="/impact">Impact</Link> and <Link to="/gallery">Gallery</Link>.
                  </p>
                  
                  <div style={{ marginTop: '3.5rem' }}>
                    <Link to="/contact" className="btn btn-primary hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: 'fit-content' }}>
                      Partner on this Program <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Partner with us</h2>
            <p className="subtitle-text text-muted" style={{ maxWidth: '820px', margin: '0 auto' }}>
              If you’re an institution, donor, or volunteer, we’ll align you to a program area where your support creates clear outcomes.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/get-involved" className="btn btn-gold hover-lift">Get Involved</Link>
            <Link to="/contact" className="btn btn-outline hover-lift">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
