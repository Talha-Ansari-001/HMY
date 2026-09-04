import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

const MainLayout = ({ children }) => {
  const [isDemoAlertActive, setIsDemoAlertActive] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-white flex flex-col font-sans selection:bg-brand-gold/20 selection:text-brand-navy relative">
      
      {/* Demo Website Indicator Bar */}
      {/* <div className="w-full bg-brand-gold text-brand-navy text-center py-2 text-[10px] font-black uppercase tracking-[0.35em] z-[110] relative flex items-center justify-center gap-4">
        <span>ðŸ«</span>
        <span>This is a Demo Website â€” Customized for Any School in Maharashtra (SSC / CBSE)</span>
        <span>â€¢</span>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-brand-navy/70 transition-colors"
        >
          Order Yours Now â†’
        </a>
        <span>ðŸ«</span>
      </div> */}

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
                âš ï¸ ADMINISTRATIVE ALERT: Heavy rainfall expected in Narpoli, Bhiwandi. Morning Secondary Shift (7:30 AM) will operate entirely online today. Afternoon shifts remain unchanged. &nbsp;&nbsp;&nbsp;&nbsp; âš ï¸ ADMINISTRATIVE ALERT: Heavy rainfall expected in Narpoli, Bhiwandi. Morning Secondary Shift (7:30 AM) will operate entirely online today. Afternoon shifts remain unchanged.
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

      {/* AI Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[110px] right-8 z-[90] w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#0B1D3A] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-gold text-[#0B1D3A] rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-sm">Aurevia Assistant</h4>
                  <span className="text-green-400 text-[10px] uppercase tracking-widest font-black block">Online</span>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="p-4 bg-brand-gray-50 h-64 overflow-y-auto space-y-4">
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-[#0B1D3A] text-brand-gold rounded-full flex items-center justify-center shrink-0">
                  <Bot size={12} />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-600 font-medium">
                  Hello! How can I help you with admissions or general inquiries today?
                </div>
              </div>
            </div>
            
            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input type="text" placeholder="Type your message..." className="flex-grow bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
              <button className="w-10 h-10 bg-brand-gold text-[#0B1D3A] rounded-full flex items-center justify-center shadow-md hover:bg-[#0B1D3A] hover:text-brand-gold transition-colors shrink-0">
                <Send size={16} className="-ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Chatbot Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-[110px] right-8 z-[80] w-14 h-14 bg-[#0B1D3A] hover:bg-[#142A52] text-brand-gold rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(11,29,58,0.3)] transition-colors duration-300 group border border-brand-gold/20"
        title="Chat with AI"
      >
        <Bot size={28} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#0B1D3A] animate-ping opacity-20" />
      </motion.button>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aurevia%20English%20School."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[80] w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-colors duration-300 group"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>
    </div>
  );
};

export default MainLayout;
