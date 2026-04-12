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

    // Simple keyword matching AI logic
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let replyText = "I'm not quite sure. Try exploring our menus!";
      let replyLink = null;
      let replyLinkLabel = "";

      if (lowerInput.match(/(donat|volunteer|partner|fund|money|support|give)/)) {
        replyText = "You can directly support our mission by visiting our Get Involved page where you'll find donation details and partnership forms.";
        replyLink = "/get-involved";
        replyLinkLabel = "Get Involved";
      } else if (lowerInput.match(/(leader|found|loretta|exec|team|president)/)) {
        replyText = "Amb. Dr. Loretta Emetam Enwezor is our visionary founder. Read all about her and our esteemed executive team here.";
        replyLink = "/leadership";
        replyLinkLabel = "Leadership Team";
      } else if (lowerInput.match(/(program|health|education|empower|widow|youth|assistance|help)/)) {
        replyText = "We offer robust initiatives targeting healthcare, education, widow support, and community empowerment.";
        replyLink = "/programs";
        replyLinkLabel = "Our Programs";
      } else if (lowerInput.match(/(contact|phone|email|reach|message)/)) {
        replyText = "Need to reach out? We'd love to hear from you. Drop us a direct message.";
        replyLink = "/contact";
        replyLinkLabel = "Contact Us";
      } else if (lowerInput.match(/(picture|photo|event|gallery|media|video)/)) {
        replyText = "We have documented our humanitarian travels and outreach events. Take a look at our media gallery.";
        replyLink = "/gallery";
        replyLinkLabel = "View Gallery";
      } else if (lowerInput.match(/(about|mission|vision|who are|what is)/)) {
        replyText = "We are driven by love and unity. Learn all about our core mission and thematic pillars here.";
        replyLink = "/about";
        replyLinkLabel = "About Us";
      } else if (lowerInput.match(/(hi|hello|hey|greetings)/)) {
        replyText = "Hello there! I can help you find donation links, read about our programs, or learn about our founder. What do you need?";
      } else {
        replyText = "I'm not quite sure. You can ask me about donating, our programs, or our founder, or simply explore the top menu!";
      }

      setMessages(prev => [...prev, { text: replyText, isBot: true, link: replyLink, linkLabel: replyLinkLabel }]);
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
                  {msg.link && (
                    <Link to={msg.link} onClick={() => setIsOpen(false)} style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--clr-gold)', fontWeight: 'bold' }}>
                      → {msg.linkLabel}
                    </Link>
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
