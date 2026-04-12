import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      title: 'Empowerment Programs',
      list: [
        'Skills acquisition',
        'Entrepreneurial training',
        'Financial support initiatives',
      ],
      img: '/assets/humanitarian-support-4.jpeg'
    },
    {
      title: 'Humanitarian Services',
      list: [
        'Support for widows and vulnerable women',
        'Assistance for abandoned families',
        'Aid for rural communities',
      ],
      img: '/assets/humanitarian-support-5.jpeg'
    },
    {
      title: 'Education Support',
      list: [
        'Scholarships and sponsorships',
        'Provision of learning materials',
      ],
      img: '/assets/humanitarian-support-6.jpeg'
    },
    {
      title: 'Healthcare Support',
      list: [
        'Payment of medical bills',
        'Hospital visits and interventions',
        'Support for critical cases',
      ],
      img: '/assets/humanitarian-support-7.jpeg'
    },
    {
      title: 'Community Development',
      list: [
        'Job creation initiatives',
        'Industrial and agricultural development',
        'Rural outreach programs',
      ],
      img: '/assets/humanitarian-support-8.jpeg'
    }
  ];

  return (
    <div className="programs-page animate-fade-in">
      <div className="section-bg-blue" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Key Program Areas</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '600px', margin: '0 auto' }}>
            Explore the core pillars where we channel our resources to effect meaningful and sustainable change.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {programs.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-50px' }}
                style={{ 
                  display: 'flex', 
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                  gap: '3rem',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <img src={prog.img} alt={prog.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 400px' }}>
                  <div style={{ padding: '0.5rem 1rem', display: 'inline-block', background: 'var(--clr-gold-light)', color: 'var(--clr-heading)', borderRadius: '20px', fontWeight: 'bold', marginBottom: '1rem' }}>Program Component {idx + 1}</div>
                  <h2 style={{ fontSize: '2rem', color: 'var(--clr-heading)', marginBottom: '1.5rem' }}>{prog.title}</h2>
                  
                  <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--clr-text-main)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {prog.list.map((item, idxx) => (
                      <li key={idxx}>{item}</li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Benefits Integration */}
      <section className="section section-bg-light">
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
             <h2 className="mb-4">Membership & Benefits</h2>
             <p className="mb-4 text-muted">Join our growing ecosystem to unlock a myriad of opportunities designed for your growth.</p>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                {[
                  'Access to cooperative loans',
                  'Skills acquisition and training',
                  'Agricultural and business support',
                  'Financial aid and grants',
                  'Participation in empowerment schemes',
                  'Access to housing and consultancy services'
                ].map(benefit => (
                  <div key={benefit} style={{ background: 'var(--clr-surface)', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', borderLeft: '4px solid var(--clr-gold)' }}>
                      <strong>{benefit}</strong>
                  </div>
                ))}
             </div>
          </div>
      </section>

    </div>
  );
};

export default Programs;
