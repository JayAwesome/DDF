import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiActivity, FiAward, FiBook, FiUsers } from 'react-icons/fi';

const Impact = () => {
  const stats = [
    { number: '200,000+', label: 'Beneficiaries Reached', icon: <FiUsers /> },
    { number: '30+', label: 'Students Sponsored', icon: <FiBook /> },
    { number: 'Multiple', label: 'States Covered', icon: <FiActivity /> },
    { number: 'Hundreds', label: 'Empowered Through Programs', icon: <FiAward /> }
  ];

  return (
    <div className="impact-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Evidence of Action</span>
          <h1 className="hero-title">Impact</h1>
          <p className="subtitle-text" style={{ maxWidth: '780px', margin: '0 auto', opacity: 0.9 }}>
            A clear view of what we’ve been able to achieve through trusted partnerships and community-led work.
          </p>
        </div>
      </header>

      <section className="section section-bg-blue">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="subtitle-text" style={{ maxWidth: '820px', margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>
              High-level metrics that summarize our reach and outcomes.
            </p>
          </div>

          <div className="grid-cols-cards">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="hover-lift"
                style={{
                  background: 'rgba(255,255,255,0.98)',
                  padding: '3.25rem 2.25rem',
                  textAlign: 'center',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    margin: '0 auto 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'color-mix(in oklab, var(--clr-gold) 22%, transparent)',
                    color: 'var(--clr-gold)',
                    fontSize: '2rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {stat.icon}
                </div>
                <div style={{ fontSize: 'clamp(3.25rem, 5vw, 4.25rem)', fontWeight: 900, color: 'var(--clr-blue)', marginBottom: '0.75rem', letterSpacing: '-2px', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--clr-text-main)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', lineHeight: 1.35 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex-responsive-row" style={{ alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ flex: '1 1 520px' }}>
              <h2 className="section-title">See the work</h2>
              <p className="subtitle-text text-muted" style={{ maxWidth: '760px' }}>
                Numbers tell part of the story. Photos and field moments show the human impact behind every program.
              </p>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              <Link to="/gallery" className="btn btn-primary hover-lift">View the Gallery</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

