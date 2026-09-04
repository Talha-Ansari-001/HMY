import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isAlertActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Identify pages with dark backgrounds vs light backgrounds
  const darkPages = ['/academics', '/facilities'];
  const isDarkPage = darkPages.includes(location.pathname);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dynamic styles based on page context (Dark page vs Light page)
  const navBg = !isDarkPage 
    ? 'bg-white/90 border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
    : 'bg-brand-navy/10 border-white/10 sha1dow-[0_20px_50px_rgba(201,166,70,0.15)]';
  
  const textColor = !isDarkPage ? 'text-brand-navy' : 'text-white';
  const inactiveTextColor = !isDarkPage ? 'text-brand-navy/60' : 'text-white/70';
  const logoColor = !isDarkPage ? 'text-brand-navy' : 'text-white';

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        opacity: 1, 
        y: 0,
        top: isAlertActive ? '92px' : '20px'
      }}
      className="fixed left-0 right-0 mx-auto z-50 w-[95%] max-w-7xl transition-[top] duration-500"
    >
      <div className={`transition-all duration-500 rounded-full border backdrop-blur-md px-6 py-3 md:px-10 ${navBg}`}>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="bg-brand-navy p-1.5 rounded-full text-brand-gold shadow-ambient"
            >
              <GraduationCap size={20} strokeWidth={1.5} />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`font-serif text-lg md:text-xl font-black tracking-tight leading-none transition-colors duration-300 ${logoColor}`}
              >
                Vidyamandir <span className="text-[#C9A646] italic font-medium">English School</span>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`font-mono text-[8px] uppercase tracking-[0.3em] transition-colors duration-300 ${!isDarkPage ? 'text-brand-navy/40' : 'text-white/40'}`}
              >
                Est. 1998 · Bhiwandi
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`relative group px-2 py-1 font-mono text-[13px] uppercase tracking-widest transition-all duration-300 ${
                    location.pathname === link.path 
                      ? `${textColor} font-semibold` 
                      : `${inactiveTextColor} hover:text-[#C9A646]`
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {link.name}
                  </motion.span>
                  {/* Expanding Underline */}
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-gold origin-center"
                    initial={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  />
                </Link>
              ))}
            </div>
            
            <Link 
              to="/admissions" 
              className="px-6 py-2.5 bg-brand-gold text-brand-navy font-mono text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-brand-gold transition-all duration-500 rounded-full shadow-ambient flex items-center gap-2 group border border-brand-gold"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2"
              >
                Enroll <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-1 lg:hidden transition-colors duration-300 ${textColor}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 left-0 right-0 mx-4 border border-brand-gold/20 rounded-[2rem] shadow-ambient lg:hidden overflow-hidden backdrop-blur-xl ${!isDarkPage ? 'bg-white/95' : 'bg-brand-navy/95'}`}
          >
            <div className="p-8 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-4 font-mono text-[11px] uppercase tracking-widest rounded-full transition-all duration-300 ${
                      location.pathname === link.path 
                        ? 'bg-brand-gold text-brand-navy font-bold' 
                        : `${!isDarkPage ? 'text-brand-navy/70 hover:bg-brand-navy/5' : 'text-white/70 hover:bg-white/5'} hover:text-brand-gold`
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
