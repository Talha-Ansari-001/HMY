import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from './MainLayout.jsx';
import Home from './Home.jsx';
import Academics from './Academics.jsx';
import Admissions from './Admissions.jsx';
import Facilities from './Facilities.jsx';
import Infrastructure from './Infrastructure.jsx';
import NoticeBoard from './NoticeBoard.jsx';
import Contact from './Contact.jsx';

// Scroll to top on route change - Forced instant reset
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.99 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.01 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/academics" element={<PageWrapper><Academics /></PageWrapper>} />
            <Route path="/admissions" element={<PageWrapper><Admissions /></PageWrapper>} />
            <Route path="/facilities" element={<PageWrapper><Facilities /></PageWrapper>} />
            <Route path="/infrastructure" element={<PageWrapper><Infrastructure /></PageWrapper>} />
            <Route path="/notice-board" element={<PageWrapper><NoticeBoard /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
};

export default App;
