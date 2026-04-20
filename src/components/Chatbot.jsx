import React, { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your foundation assistant. How can I help you today?", isBot: true }
  ]);
  const messagesEndRef = useRef(null);

  const SITE_FACTS = {
    orgName: 'Dumelo Development Foundation',
    addressShort: 'Plot 31, Atta A. A. Street, Kado Estate, Abuja',
    email: 'info@dumelofoundation.org',
    pages: [
      { path: '/', label: 'Home', keywords: ['home', 'start', 'overview', 'summary'] },
      { path: '/about', label: 'About', keywords: ['about', 'mission', 'vision', 'who', 'purpose', 'story'] },
      { path: '/programs', label: 'Programs', keywords: ['programs', 'initiatives', 'education', 'health', 'empowerment', 'humanitarian'] },
      { path: '/impact', label: 'Impact', keywords: ['impact', 'numbers', 'stats', 'results', 'reach', 'beneficiaries'] },
      { path: '/credibility', label: 'Credibility', keywords: ['credibility', 'trust', 'compliance', 'cama', 'scuml', 'certified', 'affiliations'] },
      { path: '/leadership', label: 'Leadership', keywords: ['leadership', 'founder', 'loretta', 'board', 'trustees', 'governance'] },
      { path: '/gallery', label: 'Gallery', keywords: ['gallery', 'photos', 'media', 'events', 'images'] },
      { path: '/get-involved', label: 'Get Involved', keywords: ['donate', 'donation', 'volunteer', 'partner', 'sponsor', 'support', 'get involved'] },
      { path: '/contact', label: 'Contact', keywords: ['contact', 'email', 'phone', 'address', 'reach', 'message'] },
    ],
    impactStats: [
      { number: '200,000+', label: 'Beneficiaries Reached' },
      { number: '30+', label: 'Students Sponsored' },
      { number: 'Multiple', label: 'States Covered' },
      { number: 'Hundreds', label: 'Empowered Through Programs' },
    ],
    programsSummary: [
      'Empowerment Programs',
      'Humanitarian Services',
      'Education Support',
      'Healthcare Interventions',
      'Community Development',
    ],
    credibilitySummary: [
      'Registered under CAMA',
      'SCUML Certified',
      'Government affiliations',
    ],
  };

  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const tokenize = (text) => {
    const stop = new Set([
      'the','a','an','and','or','to','of','in','on','for','with','at','by','from','is','are','was','were','be','been','it','this','that','these','those',
      'i','we','you','they','he','she','them','us','our','your','me','my','what','which','who','whom','where','when','why','how','can','could','would','should',
      'please','tell','explain','about','need','want','looking'
    ]);
    return normalize(text)
      .split(' ')
      .map((t) => t.replace(/(ing|ed|es|s)$/i, ''))
      .filter((t) => t && !stop.has(t));
  };

  const jaccard = (aTokens, bTokens) => {
    const a = new Set(aTokens);
    const b = new Set(bTokens);
    if (a.size === 0 || b.size === 0) return 0;
    let inter = 0;
    for (const t of a) if (b.has(t)) inter += 1;
    return inter / (a.size + b.size - inter);
  };

  const buildKnowledgeBase = () => {
    const kb = [
      {
        id: 'address',
        patterns: [/(address|location|where.*(located|office)|hq|headquarter)/i],
        keywords: ['address', 'location', 'hq', 'office', 'located', 'abuja', 'kado', 'atta'],
        answer: `Our address is ${SITE_FACTS.addressShort}.`,
        links: [{ to: '/contact', label: 'Contact Us' }],
      },
      {
        id: 'contact',
        patterns: [/(contact|email|phone|reach|message)/i],
        keywords: ['contact', 'email', 'phone', 'reach', 'message'],
        answer: `You can contact ${SITE_FACTS.orgName} via our Contact page. Email: ${SITE_FACTS.email}.`,
        links: [{ to: '/contact', label: 'Contact Us' }],
      },
      {
        id: 'get-involved',
        patterns: [/(donat|volunteer|partner|fund|money|support|sponsor|contribut)/i],
        keywords: ['donate', 'donation', 'volunteer', 'partner', 'sponsor', 'support', 'give', 'contribute'],
        answer: 'To donate, volunteer, or partner with us, use the Get Involved page. It includes the inquiry form and donation guidance.',
        links: [{ to: '/get-involved', label: 'Get Involved' }, { to: '/contact', label: 'Contact Us' }],
      },
      {
        id: 'programs',
        patterns: [/(program|initiative|what.*do|services|education|health|empower|humanitarian|widow|youth)/i],
        keywords: ['program', 'initiative', 'service', 'education', 'health', 'empower', 'humanitarian', 'widow', 'youth', 'community'],
        answer: `Our core program areas include: ${SITE_FACTS.programsSummary.join(', ')}.`,
        links: [{ to: '/programs', label: 'Programs' }, { to: '/impact', label: 'Impact' }],
      },
      {
        id: 'impact',
        patterns: [/(impact|result|numbers|stats|reach|beneficiar|how many)/i],
        keywords: ['impact', 'result', 'number', 'stats', 'reach', 'beneficiary', 'measure'],
        answer: `Here are a few headline impact metrics: ${SITE_FACTS.impactStats.map(s => `${s.number} ${s.label}`).join(' • ')}.`,
        links: [{ to: '/impact', label: 'Impact' }, { to: '/gallery', label: 'Gallery' }],
      },
      {
        id: 'credibility',
        patterns: [/(trust|compliance|credible|legit|legal|cama|scuml|certif|government)/i],
        keywords: ['trust', 'compliance', 'credible', 'legal', 'cama', 'scuml', 'certified', 'government', 'affiliation'],
        answer: `Our trust & compliance highlights: ${SITE_FACTS.credibilitySummary.join(' • ')}.`,
        links: [{ to: '/credibility', label: 'Credibility' }],
      },
      {
        id: 'leadership',
        patterns: [/(leader|found|loretta|exec|team|president|trustee|board|govern)/i],
        keywords: ['leadership', 'founder', 'loretta', 'president', 'trustee', 'board', 'governance'],
        answer: 'You can learn about our founder and leadership structure on the Leadership page.',
        links: [{ to: '/leadership', label: 'Leadership' }, { to: '/credibility', label: 'Credibility' }],
      },
      {
        id: 'gallery',
        patterns: [/(picture|photo|event|gallery|media|video|image)/i],
        keywords: ['photo', 'gallery', 'media', 'event', 'images', 'pictures'],
        answer: 'You can view photos from outreach moments and community events in our Media Gallery.',
        links: [{ to: '/gallery', label: 'Gallery' }],
      },
      {
        id: 'about',
        patterns: [/(about|mission|vision|who are|what is|purpose|story)/i],
        keywords: ['about', 'mission', 'vision', 'who', 'purpose', 'story'],
        answer: `Learn who we are, what we do, and what we stand for on the About page.`,
        links: [{ to: '/about', label: 'About' }, { to: '/programs', label: 'Programs' }],
      },
      {
        id: 'site-map',
        patterns: [/(site|website|menu|pages|navigation|where can i find|help me find)/i],
        keywords: ['site', 'website', 'menu', 'pages', 'navigation', 'find', 'where'],
        answer: 'Here are the main sections of the site. Tell me what you’re looking for and I’ll point you to the right page.',
        links: SITE_FACTS.pages
          .filter((p) => p.path !== '/')
          .slice(0, 6)
          .map((p) => ({ to: p.path, label: p.label })),
      },
    ];

    return kb;
  };

  const answerFromKnowledgeBase = (userText) => {
    const kb = buildKnowledgeBase();
    const clean = normalize(userText);
    const tokens = tokenize(userText);

    const scored = kb.map((entry) => {
      const patternHit = entry.patterns?.some((re) => re.test(clean)) ? 1 : 0;
      const kwScore = jaccard(tokens, entry.keywords || []);
      return { entry, score: patternHit * 1.0 + kwScore * 0.9 };
    }).sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.score < 0.35) {
      // High-quality fallback: always provide a useful route + options.
      const pageGuess = SITE_FACTS.pages
        .map((p) => ({ p, s: jaccard(tokens, p.keywords) }))
        .sort((a, b) => b.s - a.s)[0];

      const suggestions = [
        pageGuess?.s ? { to: pageGuess.p.path, label: pageGuess.p.label } : null,
        { to: '/programs', label: 'Programs' },
        { to: '/impact', label: 'Impact' },
        { to: '/credibility', label: 'Credibility' },
        { to: '/contact', label: 'Contact' },
      ].filter(Boolean);

      return {
        text:
          "I can help with programs, impact, credibility/compliance, leadership, gallery, donations/partnerships, or contact details. " +
          "If you rephrase your question with one key detail (e.g., “donate”, “address”, “CAMA”, “impact numbers”), I’ll be precise. Meanwhile, here are the best places to look:",
        links: suggestions.slice(0, 4),
      };
    }

    return {
      text: best.entry.answer,
      links: best.entry.links || [],
    };
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');

    // Site-aware answer logic (knowledge base + scoring)
    setTimeout(() => {
      const lower = normalize(userMessage);
      if (/(hi|hello|hey|greetings)\b/i.test(lower)) {
        setMessages(prev => [...prev, {
          text: `Hi! Ask me about programs, impact numbers, credibility/compliance (CAMA/SCUML), leadership, the gallery, donating/partnering, or contact details.`,
          isBot: true,
          links: [
            { to: '/programs', label: 'Programs' },
            { to: '/impact', label: 'Impact' },
            { to: '/credibility', label: 'Credibility' },
            { to: '/get-involved', label: 'Get Involved' },
          ]
        }]);
        return;
      }

      const reply = answerFromKnowledgeBase(userMessage);
      setMessages(prev => [...prev, { text: reply.text, isBot: true, links: reply.links }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'var(--clr-gold)',
          color: 'var(--clr-heading)',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.75rem',
          boxShadow: 'var(--shadow-lg)',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              width: '320px',
              height: '450px',
              backgroundColor: 'var(--clr-bg-light)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 9998,
              border: '1px solid rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ backgroundColor: 'var(--clr-blue)', padding: '1rem', color: 'white' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'white' }}>Foundation Assistant</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>Online</p>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ alignSelf: msg.isBot ? 'flex-start' : 'flex-end', maxWidth: '85%' }}>
                  <div style={{
                    backgroundColor: msg.isBot ? 'var(--clr-bg-alt)' : 'var(--clr-blue)',
                    color: msg.isBot ? 'var(--clr-text-main)' : 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: msg.isBot ? '12px 12px 12px 0' : '12px 12px 0 12px',
                    fontSize: '0.95rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {msg.text}
                  </div>
                  {Array.isArray(msg.links) && msg.links.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.6rem' }}>
                      {msg.links.slice(0, 4).map((l) => (
                        <Link
                          key={`${l.to}-${l.label}`}
                          to={l.to}
                          onClick={() => setIsOpen(false)}
                          style={{
                            display: 'inline-block',
                            fontSize: '0.85rem',
                            color: 'var(--clr-gold)',
                            fontWeight: 800
                          }}
                        >
                          → {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{ flex: 1, border: 'none', padding: '1rem', outline: 'none', backgroundColor: 'transparent', color: 'var(--clr-text-main)' }}
              />
              <button type="submit" style={{ backgroundColor: 'transparent', border: 'none', padding: '1rem', color: 'var(--clr-heading)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <FiSend size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
