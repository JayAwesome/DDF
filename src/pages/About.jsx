import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Who We Are</span>
          <h1 className="hero-title">About Us</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Dumelo Development Foundation is a structured, global-standard organization dedicated to transformational humanitarian excellence and sustainable development.
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
              <h2 className="card-title" style={{ fontSize: '2rem' }}>Our Mission</h2>
              <p className="subtitle-text" style={{ fontSize: '1.2rem' }}>
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
              <h2 className="card-title" style={{ fontSize: '2rem' }}>Our Vision</h2>
              <p className="subtitle-text" style={{ fontSize: '1.2rem' }}>
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
            <h2 className="section-title">Our Professional Identity</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Strategic Positioning */}
            <div>
              <h3 className="card-title" style={{ fontSize: '1.75rem' }}>Strategic Global Positioning</h3>
              <p className="subtitle-text">
                Dumelo Development Foundation is a global-facing organization committed to establishing international benchmarks. Our mapped pathways for sustainable growth include:
              </p>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Workforce development initiatives</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Brand sustainability models</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Strategic global connectivity</li>
              </ul>
            </div>

            {/* Humanitarian Focus */}
            <div>
              <h3 className="card-title" style={{ fontSize: '1.75rem' }}>Impact & Humanitarian Focus</h3>
              <p className="subtitle-text">
                We lead high-impact humanitarian initiatives, charitable services, and targeted empowerment programs dedicated to ensuring optimal societal capacity. We prioritize:
              </p>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Education support for youths and students</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Empowerment provisions for widows and single parents</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Critical assistance and welfare for retirees</li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', borderLeft: '8px solid var(--clr-gold)', background: 'var(--clr-surface)', marginTop: '1rem' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--clr-blue)', fontWeight: 600, margin: 0, fontSize: '1.25rem', lineHeight: 1.5 }}>
                "We believe true impact is achieved when individuals are not just supported, but empowered to become self-sufficient, productive pillars of society."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status & Compliance */}
      <section className="section">
        <div className="container">
          <div className="flex-responsive-row">
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
              <h2 className="section-title">Legal Status & Compliance</h2>
              <p className="subtitle-text mb-4 text-muted">
                Dumelo Development Foundation is a fully accountable, transparent, and legally formalized non-governmental organization. We operate under stringent corporate guidelines:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <FiCheckCircle style={{ color: 'var(--clr-blue)', marginTop: '0.4rem', flexShrink: 0, fontSize: '1.5rem' }} />
                  <div className="subtitle-text"><strong>CAMA 2004 Setup:</strong> Duly registered under Part C of the Companies and Allied Matters Act.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <FiCheckCircle style={{ color: 'var(--clr-blue)', marginTop: '0.4rem', flexShrink: 0, fontSize: '1.5rem' }} />
                  <div className="subtitle-text"><strong>SCUML Certified:</strong> Monitored by the Special Control Unit Against Money Laundering under the EFCC protocol.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <FiCheckCircle style={{ color: 'var(--clr-blue)', marginTop: '0.4rem', flexShrink: 0, fontSize: '1.5rem' }} />
                  <div className="subtitle-text"><strong>DSS Profiled:</strong> Profiled for transparency with the Department of State Services, Abuja.</div>
                </li>
              </ul>
            </div>
            <div className="glass-panel" style={{ flex: '1 1 350px', background: 'var(--clr-surface)', padding: '3rem', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }}>
              <h3 className="card-title mb-4" style={{ fontSize: '1.75rem' }}>Organizational Classification</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                { [
                  { title: 'Non-profit Organization', icon: '💎' },
                  { title: 'Non-political Organization', icon: '⚖️' },
                  { title: 'Constitutionally Governed Body', icon: '📜' },
                  { title: 'Board of Trustees Leadership', icon: '👥' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>
                    <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* Institutional Recognition */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Institutional Recognition</h2>
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
               <div key={i} className="hover-lift" style={{ padding: '3rem 2rem', border: '1px solid var(--clr-bg-alt)', borderRadius: '24px', textAlign: 'center', background: 'var(--clr-surface)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '70px', height: '70px', background: 'var(--clr-bg-light)', borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🏛️</div>
                  <h4 className="card-title" style={{ marginBottom: '0.5rem' }}>{gov.title}</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--clr-text-muted)', margin: 0 }}>{gov.subtitle}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* D.U.M.E.L.O Section */}
      <section className="section premium-gradient-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">The Essence of D.U.M.E.L.O</h2>
            <p className="subtitle-text" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '750px', margin: '0 auto' }}>
              Our name defines our commitment to structural development and inclusive economic empowerment.
            </p>
          </div>
          <div className="grid-cols-cards">
            {[
              { letter: 'D', word: 'Development', desc: 'Holistic growth' },
              { letter: 'U', word: 'Unions', desc: 'Widows, Students, Retirees' },
              { letter: 'M', word: 'Multi-Purpose', desc: 'Cooperative income systems' },
              { letter: 'E', word: 'Entrepreneurship', desc: 'Small business growth' },
              { letter: 'L', word: 'Labour', desc: 'Workforce and structure' },
              { letter: 'O', word: 'Organization', desc: 'Professional management' },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', borderRadius: '24px' }}>
                <div style={{ fontSize: '3.5rem', color: 'var(--clr-gold)', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '1rem' }}>{item.letter}</div>
                <h3 className="card-title" style={{ color: 'white', marginBottom: '0.5rem' }}>{item.word}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
