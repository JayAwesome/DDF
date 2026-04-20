import React from 'react';
import { FiCheckCircle, FiFlag, FiShield } from 'react-icons/fi';

const CredibilityPreview = () => {
  const items = [
    {
      icon: <FiShield />,
      title: 'Registered under CAMA',
      subtitle: 'Recognized as a formal non-governmental organization.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'SCUML Certified',
      subtitle: 'Committed to compliance and accountability standards.'
    },
    {
      icon: <FiFlag />,
      title: 'Government affiliations',
      subtitle: 'Engagement with key institutions supporting our mission.'
    }
  ];

  return (
    <section className="section-compact section-bg-light" aria-label="Trust and compliance">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Trusted and Compliant</h2>
        </div>

        <div className="grid-cols-cards" style={{ gap: '1.5rem' }}>
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-bg-alt)',
                borderRadius: '20px',
                padding: '1.75rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'color-mix(in oklab, var(--clr-blue) 12%, transparent)',
                  color: 'var(--clr-blue)',
                  flexShrink: 0,
                  fontSize: '1.35rem'
                }}
              >
                {item.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontWeight: 800, color: 'var(--clr-heading)' }}>{item.title}</p>
                <p style={{ margin: '0.35rem 0 0', color: 'var(--clr-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityPreview;

