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
      <div className="section-bg-blue py-section-header text-center">
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>Our Initiatives</span>
          <h1 className="hero-title text-white mt-2 mb-4">Key Program Areas</h1>
          <p className="subtitle-text text-white" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Explore the core strategic pillars where we channel our resources to effect meaningful, structured, and sustainable global change.
          </p>
        </div>
      </div>

      <section className="section py-section">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {programs.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="flex-responsive-row"
                style={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                <div style={{ flex: '1 1 400px', position: 'relative', width: '100%' }}>
                  <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <img src={prog.img} alt={prog.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '-20px', 
                    [idx % 2 === 0 ? 'right' : 'left']: '20px',
                    background: 'var(--clr-gold)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '16px',
                    fontWeight: 800,
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    0{idx + 1}
                  </div>
                </div>
                <div style={{ flex: '1 1 400px', width: '100%' }}>
                  <h2 className="section-title mb-4" style={{ color: 'var(--clr-heading)' }}>{prog.title}</h2>
                  
                  <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {prog.list.map((item, idxx) => (
                      <li key={idxx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--clr-text-main)', fontSize: '1.1rem' }}>
                        <FiCheckCircle style={{ color: 'var(--clr-gold)', fontSize: '1.5rem', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ marginTop: '2.5rem' }}>
                    <button className="btn btn-outline hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      Partner on this Program <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Benefits Integration */}
      <section className="section py-section section-bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <span style={{ color: 'var(--clr-blue)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Ecosystem Engagement</span>
              <h2 className="section-title mt-2 mb-3">Membership & Benefits</h2>
              <p className="subtitle-text text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
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
                      padding: '2.5rem', 
                      background: 'var(--clr-surface)'
                    }}
                  >
                    <h4 style={{ color: 'var(--clr-blue)', marginBottom: '1rem', fontSize: '1.25rem' }}>{benefit.title}</h4>
                    <p style={{ color: 'var(--clr-text-muted)', margin: 0, lineHeight: 1.6 }}>{benefit.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
};

export default Programs;
