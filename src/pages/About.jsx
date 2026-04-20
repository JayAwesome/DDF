import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <div className="section-bg-blue py-section-header text-center">
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>Who We Are</span>
          <h1 className="hero-title mt-2 mb-4 text-white">About Us</h1>
          <p className="subtitle-text text-white" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Dumelo Development Foundation is a structured, global-standard organization dedicated to transformational humanitarian excellence and sustainable development.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section py-section">
        <div className="container">
          <div className="grid-cols-cards">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hover-lift"
              style={{ background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '16px', borderTop: '4px solid var(--clr-gold)' }}
            >
              <h2 className="section-title mb-4" style={{ fontSize: '2rem' }}>Our Mission</h2>
              <p className="subtitle-text" style={{ color: 'var(--clr-text-main)' }}>
                To serve humanity through empowerment, charity, and compassionate service rooted in love and unity.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hover-lift"
              style={{ background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '16px', borderTop: '4px solid var(--clr-heading)' }}
            >
              <h2 className="section-title mb-4" style={{ fontSize: '2rem' }}>Our Vision</h2>
              <p className="subtitle-text" style={{ color: 'var(--clr-text-main)' }}>
                To build a transformed society driven by empowered individuals and sustainable entrepreneurship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story / About */}
      <section className="section py-section">
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title mb-5">Our Professional Identity</h2>
          <div style={{ color: 'var(--clr-text-main)', textAlign: 'left' }}>
            <p className="subtitle-text mb-4">
              Dumelo Development Foundation is a global-facing organization committed to establishing international benchmarks for governments and private sectors. We specialize in mapping out strategic pathways for growth through workforce development, brand sustainability, and global connectivity.
            </p>
            <p className="subtitle-text mb-4">
              Simultaneously, we lead high-impact humanitarian initiatives, charitable services, and targeted empowerment programs. Our focus extends to youths, widows, retirees, and single parents, ensuring they perform at their optimal capacity and capability in a modern economy.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--clr-bg-light)', borderRadius: '16px', borderLeft: '5px solid var(--clr-gold)', marginTop: '3rem' }}>
              <p className="subtitle-text" style={{ fontStyle: 'italic', color: 'var(--clr-blue)', fontWeight: 600, margin: 0 }}>
                "We believe true impact is achieved when individuals are not just supported, but empowered to become self-sufficient, productive pillars of society."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status & Compliance */}
      <section className="section py-section section-bg-light">
        <div className="container">
          <div className="flex-responsive-row">
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="section-title mb-4">Legal Status & Compliance</h2>
              <p className="subtitle-text mb-4 text-muted">
                Dumelo Development Foundation is a duly registered non-governmental organization under **Part C of the Companies and Allied Matters Act (CAMA), 2004**.
              </p>
              <p className="subtitle-text mb-5 text-muted">
                The organization is also registered with the **Special Control Unit Against Money Laundering (SCUML)** under the Economic and Financial Crimes Commission (EFCC), and profiled with the **Department of State Services (DSS), Abuja**.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['CAMA 2004', 'SCUML Certified', 'DSS Profiled'].map(tag => (
                   <span key={tag} style={{ background: 'var(--clr-blue)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="glass-panel hover-lift" style={{ flex: '1 1 350px', background: 'var(--clr-surface)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
              <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--clr-blue)' }}>Organizational Classification</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { title: 'Non-profit Organization', icon: '💎' },
                  { title: 'Non-political Organization', icon: '⚖️' },
                  { title: 'Constitutionally Governed Body', icon: '📜' },
                  { title: 'Board of Trustees Leadership', icon: '👥' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--clr-text-main)' }}>
                    <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Recognition */}
      <section className="section py-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title mb-3">Institutional Recognition</h2>
            <p className="subtitle-text text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We maintain active engagement and institutional recognition with key government bodies to ensure transparency and wide-reaching impact.
            </p>
          </div>
          <div className="grid-cols-cards">
             {[
               { title: 'Ministry of Humanitarian Affairs', subtitle: 'Disaster Management and Social Development' },
               { title: 'Ministry of Women Affairs', subtitle: 'Federal Republic of Nigeria' },
               { title: 'Nigeria Police Force', subtitle: 'Community & Security Collaboration' }
             ].map((gov, i) => (
               <div key={i} className="hover-lift" style={{ padding: '2.5rem', border: '1px solid var(--clr-bg-alt)', borderRadius: '16px', textAlign: 'center', background: 'var(--clr-surface)' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--clr-bg-light)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🏛️</div>
                  <h4 style={{ color: 'var(--clr-blue)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{gov.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>{gov.subtitle}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section premium-gradient-bg py-section">
        <div className="container">
          <h2 className="section-title text-center text-white mb-5">The Essence of D.U.M.E.L.O</h2>
          <div className="grid-cols-cards">
            {[
              { letter: 'D', word: 'Development', desc: '' },
              { letter: 'U', word: 'Unions', desc: '(Widows, Students, Retirees)' },
              { letter: 'M', word: 'Multi-Purpose', desc: '(Cooperative and income systems)' },
              { letter: 'E', word: 'Entrepreneurship', desc: '' },
              { letter: 'L', word: 'Labour', desc: '(Workforce and structure)' },
              { letter: 'O', word: 'Organization', desc: '' },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel hover-lift" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: 'var(--clr-gold)', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{item.letter}</div>
                <h3 className="mt-2 mb-2 text-white" style={{ fontSize: '1.5rem' }}>{item.word}</h3>
                <p style={{ color: '#d1e0ff', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
