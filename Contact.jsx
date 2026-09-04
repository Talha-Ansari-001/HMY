import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Globe, ShieldCheck, GraduationCap } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-brand-white min-h-screen pt-12 selection:bg-brand-gold/20 selection:text-brand-navy">
      
      {/* Premium Header - Enhanced Padding for consistency */}
      <div className="bg-[#0B1D3A] pt-48 pb-60 text-center relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full -mr-64 -mt-64" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mt-10 mb-8 block"
          >
            Communication Gateway
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
            Connect <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">With Us.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Our administrative board is available for formal inquiries, admission guidance, and campus tour scheduling.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20 pb-40">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Communication Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 lg:p-20 rounded-[3rem] border border-slate-100 shadow-[0_30px_100px_-15px_rgba(11,29,58,0.1)] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 -mr-16 -mt-16 rounded-full" />
            
            <h2 className="text-4xl font-serif font-black text-[#0B1D3A] mb-16 tracking-tight flex items-center gap-6">
              Official Channels <div className="w-10 h-1 bg-brand-gold rounded-full"></div>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-[#0B1D3A] group-hover:text-brand-gold transition-all duration-500 shadow-lg">
                  <MapPin size={32} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#0B1D3A] text-2xl mb-2">Campus Location</h4>
                  <p className="text-slate-600 font-medium leading-relaxed italic text-lg">
                    Vidyamandir English School, <br />
                    Bhiwandi, Maharashtra 421 305
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-[#0B1D3A] group-hover:text-brand-gold transition-all duration-500 shadow-lg">
                  <Phone size={32} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#0B1D3A] text-2xl mb-2">Direct Support</h4>
                  <p className="text-[#0B1D3A]/60 font-black tracking-[0.2em] text-[13px] uppercase">
                    +91 98765 43210 <br />
                    +91 02522 2800 28
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-[#0B1D3A] group-hover:text-brand-gold transition-all duration-500 shadow-lg">
                  <Mail size={32} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#0B1D3A] text-2xl mb-2">Electronic Liaison</h4>
                  <p className="text-slate-600 font-medium leading-relaxed italic text-lg">
                    info@vidyamandir.edu.in <br />
                    admissions@vidyamandir.edu.in
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-[#0B1D3A] group-hover:text-brand-gold transition-all duration-500 shadow-lg">
                  <Clock size={32} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#0B1D3A] text-2xl mb-2">Administrative Hours</h4>
                  <p className="text-[#0B1D3A]/60 font-black tracking-[0.2em] text-[13px] uppercase">
                    Monday — Saturday <br />
                    08:00 AM — 03:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Geographic Context & Form */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B1D3A] p-2 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="aspect-video bg-white/5 flex items-center justify-center relative overflow-hidden rounded-[2.5rem]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="text-center p-12 relative z-10">
                  <div className="w-24 h-24 bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-8 rounded-full border border-brand-gold/20 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                    <Globe size={48} strokeWidth={1} className="animate-pulse" />
                  </div>
                  <p className="text-brand-gold font-serif font-black text-3xl mb-3 italic">Geographic <span className="not-italic text-white">Context.</span></p>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-[0.4em]">Precision Location Mapping</p>
                </div>
                <div className="absolute bottom-6 right-8 text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">
                  Narpoli • Bhiwandi • MH
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 lg:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
              
              <h3 className="text-3xl font-serif font-black text-[#0B1D3A] mb-10 tracking-tight">Schedule a <span className="text-brand-gold italic font-medium">Campus Visit.</span></h3>
              <form className="space-y-6">
                <div className="space-y-6">
                  <div className="relative group">
                    <input type="text" placeholder="Your Full Name" className="w-full px-8 py-5 bg-brand-gray-50 border border-slate-100 text-[#0B1D3A] font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl shadow-sm" />
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="Electronic Mail" className="w-full px-8 py-5 bg-brand-gray-50 border border-slate-100 text-[#0B1D3A] font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl shadow-sm" />
                  </div>
                </div>
                <textarea rows="4" placeholder="Describe the purpose of your visit..." className="w-full px-8 py-5 bg-brand-gray-50 border border-slate-100 text-[#0B1D3A] font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl shadow-sm resize-none"></textarea>
                
                <button className="w-full py-6 bg-[#0B1D3A] text-brand-gold font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 rounded-2xl shadow-2xl shadow-brand-navy/20 active:scale-[0.98]">
                  Transmit Request <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trust Banner */}
      <div className="bg-brand-gray-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-40">
             <div className="flex items-center gap-4 text-[#0B1D3A] font-serif font-black text-xl italic">
                <ShieldCheck size={32} className="text-brand-gold" /> Secure Communication
             </div>
             <div className="h-px bg-slate-200 flex-grow hidden md:block" />
             <div className="flex items-center gap-4 text-[#0B1D3A] font-serif font-black text-xl italic">
                Verified Institution <GraduationCap size={32} className="text-brand-gold" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
