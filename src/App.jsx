import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

// Layout & Pages
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Impact from './pages/Impact';
import Credibility from './pages/Credibility';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/credibility" element={<Credibility />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Only Admin requires password */}
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
