import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';

const MainLayout = ({ children }) => {
  const [isDemoAlertActive, setIsDemoAlertActive] = useState(false);

  return (
    <div className="min-h-screen bg-brand-white flex flex-col font-sans selection:bg-brand-gold/20 selection:text-brand-navy relative">
      
      {/* Global Emergency Alert Notice (Demo Mode) */}
      <AnimatePresence>
        {isDemoAlertActive && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] bg-brand-navy border-b-2 border-[#C9A646] overflow-hidden"
          >
            <div className="py-3 whitespace-nowrap overflow-hidden relative">
              <motion.div 
                animate={{ x: [1000, -2000] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="inline-block text-white font-mono text-[11px] uppercase tracking-[0.2em] font-bold"
              >
                ⚠️ ADMINISTRATIVE ALERT: Heavy rainfall expected in Narpoli, Bhiwandi. Morning Secondary Shift (7:30 AM) will operate entirely online today. Afternoon shifts remain unchanged. &nbsp;&nbsp;&nbsp;&nbsp; ⚠️ ADMINISTRATIVE ALERT: Heavy rainfall expected in Narpoli, Bhiwandi. Morning Secondary Shift (7:30 AM) will operate entirely online today. Afternoon shifts remain unchanged.
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`transition-all duration-500 ${isDemoAlertActive ? 'mt-12' : 'mt-0'}`}>
        <Navbar isAlertActive={isDemoAlertActive} />
      </div>

      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />

      {/* Hidden Development Toggle (Demo Mode Only) */}
      <div className="fixed bottom-8 left-8 z-[60]">
        <button 
          onClick={() => setIsDemoAlertActive(!isDemoAlertActive)}
          className="w-10 h-10 bg-brand-navy/10 hover:bg-brand-navy text-brand-navy/20 hover:text-brand-gold flex items-center justify-center rounded-full transition-all duration-500 backdrop-blur-sm group"
          title="Demo Mode: Toggle Alert Notice"
        >
          <Settings size={18} className="group-hover:rotate-90 transition-transform duration-700" />
        </button>
      </div>
    </div>
  );
};

export default MainLayout;
