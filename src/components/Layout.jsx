import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CredibilityPreview from './CredibilityPreview';
import Footer from './Footer';
import Chatbot from './Chatbot';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const showCredibilityPreview = location.pathname === '/';

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      {showCredibilityPreview && <CredibilityPreview />}
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
