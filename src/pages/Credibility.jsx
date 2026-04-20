import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiFlag, FiShield } from 'react-icons/fi';

const Credibility = () => {
  const items = [
    {
      icon: <FiShield />,
      title: 'Registered under CAMA',
      points: [
        'Formal NGO registration and governance structure.',
        'Clear accountability and organizational oversight.'
      ]
    },
    {
      icon: <FiCheckCircle />,
      title: 'SCUML Certified',
      points: [
        'Compliance-aligned operational standards.',
        'Commitment to transparent processes.'
      ]
    },
    {
      icon: <FiFlag />,
      title: 'Government affiliations',
      points: [
        'Engagement with relevant ministries and institutions.',
        'Coordination that supports safe, credible outreach.'
      ]
    }
  ];

  return (
    <div className="credibility-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Trust &amp; Compliance</span>
          <h1 className="hero-title">Credibility</h1>
          <p className="subtitle-text" style={{ maxWidth: '780px', margin: '0 auto', opacity: 0.9 }}>
            We operate with clear governance, compliance, and institutional alignment—so partners can support with confidence.
          </p>
        </div>
      </header>

      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Trusted and Compliant</h2>
            <p className="subtitle-text text-muted" style={{ maxWidth: '820px', margin: '0 auto' }}>
              A detailed view of how we stay accountable while delivering real community outcomes.
            </p>
          </div>

          <div className="grid-cols-cards" style={{ gap: '1.5rem' }}>
            {items.map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'var(--clr-surface)',
                  border: '1px solid var(--clr-bg-alt)',
                  borderRadius: '24px',
                  padding: '2.25rem',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'color-mix(in oklab, var(--clr-blue) 12%, transparent)',
                      color: 'var(--clr-blue)',
                      fontSize: '1.5rem'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="card-title" style={{ margin: 0 }}>{item.title}</h3>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.25rem' }}>
                  {item.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span aria-hidden="true" style={{ color: 'var(--clr-gold)', marginTop: '0.25rem' }}>✓</span>
                      <span style={{ color: 'var(--clr-text-muted)', lineHeight: 1.7 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary hover-lift">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Credibility;

