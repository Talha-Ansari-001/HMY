import React from 'react';
import { motion } from 'framer-motion';
import { Baby, BookOpen, GraduationCap, ChevronRight, Award, Shield, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicPillars = () => {
  const pillars = [
    {
      title: "Early Years",
      icon: Baby,
      description: "A nurturing environment where curiosity meets discovery. Our play-based curriculum sets the foundation for lifelong learning.",
      focus: "Foundation Stage",
      link: "/academics",
      color: "brand-gold"
    },
    {
      title: "Primary Years",
      icon: BookOpen,
      description: "Developing critical thinking and core competencies through a balanced approach to academics, arts, and physical education.",
      focus: "Key Stage 1 & 2",
      link: "/academics",
      color: "brand-navy"
    },
    {
      title: "Secondary Years",
      icon: GraduationCap,
      description: "Rigorous academic preparation combined with leadership development, preparing students for higher education and beyond.",
      focus: "IGCSE & IB Standards",
      link: "/academics",
      color: "brand-gold"
    }
  ];

  return (
    <section className="py-32 bg-brand-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            Our Educational Framework
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#0B1D3A] font-black tracking-tight mb-8">Pillars of Pedagogy</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C9A646] via-[#F1D28C] to-[#A38235] mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed font-medium italic text-lg">
            "We do not merely teach, we inspire. Our curriculum is designed to ignite a lifelong passion for discovery and excellence."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out h-full flex flex-col items-start relative overflow-hidden">
                
                <div className="w-20 h-20 bg-[#C9A646]/10 text-brand-gold flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <pillar.icon size={36} strokeWidth={1.2} />
                </div>
                
                <h3 className="text-3xl font-serif text-[#0B1D3A] font-bold tracking-tight mb-4">{pillar.title}</h3>
                
                <p className="text-slate-500 mb-8 leading-relaxed text-base font-medium flex-grow">
                  {pillar.description}
                </p>
                
                <Link 
                  to={pillar.link}
                  className="flex items-center gap-2 text-[11px] font-black text-[#C9A646] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accreditations - Elevated */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 pt-16 border-t border-brand-gray-100 flex flex-wrap justify-center items-center gap-16 lg:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
        >
          <div className="flex items-center gap-4 font-serif font-black text-brand-navy text-lg">
            <Award size={32} className="text-brand-gold" /> MSBSHSE Accredited
          </div>
          <div className="flex items-center gap-4 font-serif font-black text-brand-navy text-lg">
            <Shield size={32} className="text-brand-gold" /> ISO 9001:2015
          </div>
          <div className="flex items-center gap-4 font-serif font-black text-brand-navy text-lg">
            <Globe size={32} className="text-brand-gold" /> Global Standards
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicPillars;
