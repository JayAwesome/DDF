import React from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard animate-fade-in" style={{ paddingBottom: '6rem' }}>
      <div className="section-bg-blue" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
          <p style={{ color: '#d1e0ff' }}>Manage site content, events, and foundation data.</p>
        </div>
      </div>

      <div className="container mt-5" style={{ marginTop: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'var(--clr-surface)', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}
        >
          <span style={{ fontSize: '4rem' }}>🛠️</span>
          <h2 className="mt-3 mb-2">Content Editing Gateway (Coming Soon)</h2>
          <p style={{ color: 'var(--clr-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            This is the foundational shell for the future CMS integration. Once scaled out in Phase 2, authorized administrators will be able to edit About Us content, modify the Leadership grid, and manage Gallery images directly without developer intervention.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
