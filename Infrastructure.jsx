import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Computer, Tv, PlayCircle, Wifi, Eye, Cloud, MapPin, Building2, School, GraduationCap } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Infrastructure = () => {
  return (
    <div className="bg-brand-white min-h-screen selection:bg-brand-gold/20 selection:text-brand-navy">
      
      {/* Premium Header */}
      <div className="bg-[#0B1D3A] pt-40 pb-56 text-center relative overflow-hidden">
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
            className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
          >
            The HMY English Infrastructure
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
            Elite <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Facilities.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A sanctuary of learning that marries academic rigor with modern, verified technical infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Grid Gallery Section - Updated to 3 Clean Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Computer Labs */}
          <motion.div 
            {...fadeInUp}
            className="relative group overflow-hidden bg-[#0B1D3A] rounded-[3rem] p-2 shadow-2xl h-[500px]"
          >
            <div className="absolute inset-0 bg-[#0B1D3A]/40 z-10 group-hover:bg-transparent transition-all duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 rounded-[2.5rem]" 
              alt="Computer Labs"
            />
            <div className="absolute bottom-12 left-12 z-20">
              <div className="w-12 h-12 bg-brand-gold text-brand-navy flex items-center justify-center mb-6 shadow-xl rounded-2xl">
                <Computer size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-serif font-black text-white mb-3 italic">Computer <span className="not-italic text-brand-gold">Labs</span></h3>
              <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">High-Performance Systems</p>
            </div>
          </motion.div>

          {/* AV Room */}
          <motion.div 
            {...fadeInUp}
            className="relative group overflow-hidden bg-white rounded-[3rem] p-2 border border-slate-100 shadow-xl h-[500px]"
          >
            <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale rounded-[2.5rem]" 
              alt="AV Room"
            />
            <div className="absolute bottom-12 left-12 z-20">
              <div className="w-12 h-12 bg-[#0B1D3A] text-brand-gold flex items-center justify-center mb-6 shadow-xl rounded-2xl">
                <Tv size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-serif font-black text-[#0B1D3A] italic">AV <span className="not-italic">Room</span></h3>
              <p className="text-[#0B1D3A]/40 text-[10px] font-black uppercase tracking-widest mt-2">Multimedia Assisted Learning</p>
            </div>
          </motion.div>

          {/* Playground */}
          <motion.div 
            {...fadeInUp}
            className="relative group overflow-hidden bg-[#0B1D3A] rounded-[3rem] p-2 shadow-2xl h-[500px]"
          >
            <div className="absolute inset-0 bg-[#0B1D3A]/40 z-10 group-hover:bg-transparent transition-all duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 rounded-[2.5rem]" 
              alt="Playground"
            />
            <div className="absolute bottom-12 left-12 z-20">
              <div className="w-12 h-12 bg-brand-gold text-brand-navy flex items-center justify-center mb-6 shadow-xl rounded-2xl">
                <PlayCircle size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-serif font-black text-white mb-3 italic">Play <span className="not-italic text-brand-gold">Ground</span></h3>
              <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">Physical Education & Sports</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Security & Sanctuary Section */}
      <section className="py-40 bg-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div {...fadeInUp}>
            <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Safety & Protocol</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0B1D3A] mb-10 leading-[1] tracking-tight">Your Child's <br /> <span className="italic text-brand-gold font-medium">Safe Haven.</span></h2>
            <p className="text-slate-600 font-medium text-lg mb-16 leading-relaxed italic border-l-4 border-brand-gold/20 pl-8">
              "A child's security is the cornerstone of their academic potential." We maintain a sophisticated safety infrastructure that ensures peace of mind for every family in Bhiwandi.
            </p>
            
            <div className="grid grid-cols-1 gap-10">
              {[
                { icon: Eye, title: "Surveillance", text: "24/7 AI-Enhanced CCTV across all campus zones." },
                { icon: Shield, title: "Access Control", text: "Gated entry for all personnel and students." },
                { icon: Cloud, title: "Real-time Tracking", text: "Cloud-based attendance and digital monitoring." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-white text-brand-gold flex items-center justify-center rounded-2xl shadow-xl border border-slate-50 group-hover:bg-[#0B1D3A] group-hover:text-brand-gold transition-all duration-500">
                    <item.icon size={28} strokeWidth={1.2} />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-[#0B1D3A] text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-medium tracking-tight uppercase tracking-widest text-[10px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-white p-6 rounded-[4rem] shadow-2xl border border-slate-50 relative z-10 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale opacity-60 rounded-[3rem] group-hover:scale-105 transition-transform duration-[2s]" 
                alt="Security Protocol"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#0B1D3A]/20 group">
                <Shield size={160} strokeWidth={0.5} className="text-white/20 group-hover:text-brand-gold/40 transition-all duration-1000 group-hover:scale-110" />
              </div>
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-brand-gold/10 rounded-[4rem] z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Global Campus Accreditation */}
      <div className="py-32 bg-[#0B1D3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <GraduationCap size={48} className="text-brand-gold mx-auto mb-10 opacity-40" />
          <p className="text-[11px] font-black tracking-[0.5em] uppercase text-white/40 mb-16">Institutional Safety & Quality Benchmarks</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
             <div className="flex flex-col items-center group">
                <span className="text-4xl font-serif font-black text-white group-hover:text-brand-gold transition-colors">ISO 9001</span>
                <span className="text-[10px] font-black uppercase tracking-widest mt-3 text-white/40">Quality Management</span>
             </div>
             <div className="flex flex-col items-center group">
                <span className="text-4xl font-serif font-black text-white group-hover:text-brand-gold transition-colors">SSC Board</span>
                <span className="text-[10px] font-black uppercase tracking-widest mt-3 text-white/40">Academic Compliance</span>
             </div>
             <div className="flex flex-col items-center group">
                <span className="text-4xl font-serif font-black text-white group-hover:text-brand-gold transition-colors">Digital First</span>
                <span className="text-[10px] font-black uppercase tracking-widest mt-3 text-white/40">Pedagogy Benchmark</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
