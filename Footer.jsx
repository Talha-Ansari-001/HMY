import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, GraduationCap, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0B1D3A] text-slate-300 overflow-hidden">
      
      {/* Newsletter Strip - Join Our Community */}
      <div className="relative border-b border-white/5 bg-gradient-to-r from-[#0B1D3A] via-[#0f2549] to-[#0B1D3A] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="font-serif text-3xl md:text-4xl text-white font-black mb-4 tracking-tight">Join Our Community</h3>
              <p className="text-slate-400 font-medium leading-relaxed italic">
                Stay updated with Vidyamandir English School’s latest news, academic announcements, and SSC board updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="backdrop-blur-md bg-white/5 border border-white/20 px-8 py-5 text-brand-white focus:outline-none focus:border-brand-gold transition-all duration-500 rounded-full w-full lg:w-96 text-sm font-medium"
              />
              <button className="bg-brand-gold text-[#0B1D3A] px-10 py-5 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 rounded-full shadow-2xl shadow-brand-gold/20 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements for strip */}
        <div className="absolute top-0 right-0 w-64 h-full bg-brand-gold/5 blur-3xl -skew-x-12 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          
          {/* Column 1: The Identity */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-brand-gold p-3 rounded-2xl text-[#0B1D3A] shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-black text-brand-gold leading-none tracking-tight">VIDYAMANDIR</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-1 font-black">English Medium School</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              A premium SSC/CBSE English Medium School website — built to inspire trust, drive admissions, and showcase excellence.
            </p>
            <div className="flex gap-5">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Youtube, link: "#" }
              ].map(({ Icon, link }, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={link} 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-500 shadow-xl"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-serif text-xl font-bold mb-10 relative inline-block">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-brand-gold rounded-full" />
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Admissions', path: '/admissions' },
                { name: 'Academic Calendar', path: '/notice-board' },
                { name: 'Toppers Gallery', path: '/' },
                { name: 'Notice Board', path: '/notice-board' },
                { name: 'Career Opportunities', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-brand-gold transition-all duration-300">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-serif text-xl font-bold mb-10 relative inline-block">
              Resources
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-brand-gold rounded-full" />
            </h4>
            <ul className="space-y-5">
              {[
                'SSC Board Framework',
                'Digital Learning Hub',
                'Student Welfare',
                'Parent Portal Access',
                'Campus Safety Protocols'
              ].map((item) => (
                <li key={item}>
                  <Link to="/facilities" className="group flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-brand-gold transition-all duration-300">
                    <ShieldCheck size={14} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-white font-serif text-xl font-bold mb-10 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-brand-gold rounded-full" />
            </h4>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/5">
                  <MapPin size={20} />
                </div>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">
                  Bhiwandi, <br />
                  Maharashtra, India 421305
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/5">
                  <Phone size={20} />
                </div>
                <p className="text-sm font-bold text-slate-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/5">
                  <Mail size={20} />
                </div>
                <p className="text-sm font-medium text-slate-400">info@vidyamandir.edu.in</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/5">
                  <Clock size={20} />
                </div>
                <p className="text-sm font-medium text-slate-400">Mon - Sat: 7:30 AM - 5:30 PM (Split Shifts)</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Compliance & Credit */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
              &copy; {new Date().getFullYear()} Vidyamandir English School. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">SSC Compliance</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-3">
             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Official Digital Partner</div>
             <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold shadow-2xl"
             >
                Designed by <span className="text-white">WebCraft Studios</span>
             </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
