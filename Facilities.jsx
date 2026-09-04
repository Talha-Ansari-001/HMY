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
    <div className="bg-brand-navy min-h-screen selection:bg-brand-gold/20 selection:text-brand-gold">
      
      {/* Header Section */}
      <div className="pt-48 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,70,0.05),transparent)]" />
        
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
            <span className="text-brand-gold italic font-medium">Facilities.</span>
          </h1>
        </motion.div>
      </div>

      {/* Facilities Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 pb-24">
        {facilities.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-none shadow-ambient border border-white/5">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-brand-gold text-brand-navy p-4 rounded-full shadow-ambient">
                  <f.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.4em]">{f.label}</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-serif font-black text-white tracking-tight leading-tight">{f.title}</h2>
              <div className="w-20 h-0.5 bg-brand-gold"></div>
              <p className="text-lg text-slate-400 font-medium leading-relaxed italic border-l-2 border-brand-gold/20 pl-8">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-white/5 backdrop-blur-xl border-t border-white/5 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Calendar size={64} className="text-brand-gold mx-auto mb-10 drop-shadow-[0_0_15px_rgba(201,166,70,0.4)]" />
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-10 tracking-tight">Connect With Our <span className="text-brand-gold italic">Campus.</span></h2>
          <p className="font-mono text-slate-400 text-xs uppercase tracking-widest mb-16 max-w-2xl mx-auto">
            Experience the standard of education provided for the next generation.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-brand-gold text-brand-navy font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 rounded-none shadow-ambient group"
          >
            Visit Campus <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
