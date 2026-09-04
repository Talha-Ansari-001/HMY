import React from 'react';
import { motion } from 'framer-motion';
import { Computer, PlayCircle, Tv, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const facilities = [
    {
      title: "Computer Labs",
      label: "Technical Excellence",
      description: "High-performance systems and a dedicated network designed to foster digital proficiency and technical excellence in the modern era.",
      icon: Computer,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    },
    {
      title: "AV Room",
      label: "Modern Learning",
      description: "A multi-media assisted learning environment equipped with advanced projection systems for an immersive educational experience.",
      icon: Tv,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
    },
    {
      title: "Playground",
      label: "Physical Education",
      description: "A dedicated space for physical education, sports, and athletic development, ensuring a balanced approach to student growth.",
      icon: PlayCircle,
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen selection:bg-brand-gold/20 selection:text-brand-navy">
      
      {/* Header Section */}
      <div className="bg-[#0B1D3A] pt-48 pb-60 text-center relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full -mr-64 -mt-64" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-8 block"
          >
            Infrastructure of Excellence
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
            Elite <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Facilities.</span>
          </h1>
        </motion.div>
      </div>

      {/* Facilities Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20 pb-40">
        <div className="bg-white p-12 lg:p-20 rounded-[3rem] border border-slate-100 shadow-[0_30px_100px_-15px_rgba(11,29,58,0.1)] space-y-24">
          {facilities.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={"flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24"}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[3rem] shadow-[0_30px_100px_-15px_rgba(11,29,58,0.1)] border border-slate-100">
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-gray-50 text-[#0B1D3A] p-4 rounded-full shadow-md border border-slate-200">
                    <f.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.4em]">{f.label}</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-serif font-black text-[#0B1D3A] tracking-tight leading-tight">{f.title}</h2>
                <div className="w-20 h-0.5 bg-brand-gold"></div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-2 border-brand-gold/40 pl-8">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-brand-gray-50 border-t border-slate-100 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Calendar size={64} className="text-brand-gold mx-auto mb-10 drop-shadow-[0_0_15px_rgba(201,166,70,0.4)]" />
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0B1D3A] mb-10 tracking-tight">Connect With Our <span className="text-brand-gold italic">Campus.</span></h2>
          <p className="font-mono text-slate-500 text-xs uppercase tracking-widest mb-16 max-w-2xl mx-auto">
            Experience the standard of education provided for the next generation.
          </p>
          
          <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-[#0B1D3A] text-brand-gold font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-[#0B1D3A] transition-all duration-500 rounded-2xl shadow-xl group">
            Visit Campus <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Facilities;