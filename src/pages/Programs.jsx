import React from 'react';
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
          <span style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Our Initiatives</span>
          <h1 className="hero-title">Key Program Areas</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Explore the core strategic pillars where we channel our resources to effect meaningful, structured, and sustainable global change.
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
                    {prog.list.map((item, idxx) => (
                      <li key={idxx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                        <FiCheckCircle style={{ color: 'var(--clr-gold)', fontSize: '1.75rem', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span className="subtitle-text" style={{ color: 'var(--clr-text-main)', fontSize: '1.15rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
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
      
      {/* Membership Benefits Integration */}
      <section className="section section-bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <span style={{ color: 'var(--clr-blue)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Ecosystem Engagement</span>
              <h2 className="section-title">Membership & Benefits</h2>
              <p className="subtitle-text text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                Join our growing ecosystem to unlock a myriad of opportunities designed for institutional and individual growth.
              </p>
            </div>
            
            <div className="grid-cols-cards">
                {[
                  { title: 'Cooperative Access', desc: 'Secure access to cooperative loans and financial scaling opportunities.' },
                  { title: 'Skills Development', desc: 'Premium vocational training and modern skills acquisition schemes.' },
                  { title: 'Enterprise Support', desc: 'Targeted support for industrial, agricultural, and business ventures.' },
                  { title: 'Direct Aid', desc: 'Prioritized access to financial relief, medical support, and grants.' },
                  { title: 'Empowerment Schemes', desc: 'Participation in national-scale social welfare and development projects.' },
                  { title: 'Consultancy Pool', desc: 'Expert consultancy in housing, investment, and strategic growth.' }
                ].map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    className="hover-lift glass-panel"
                    style={{ 
                      padding: '3rem', 
                      background: 'var(--clr-surface)',
                      borderRadius: '24px'
                    }}
                  >
                    <h4 className="card-title" style={{ fontSize: '1.35rem' }}>{benefit.title}</h4>
                    <p style={{ color: 'var(--clr-text-muted)', margin: 0, lineHeight: 1.7, fontSize: '1.05rem' }}>{benefit.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
};

export default Programs;
