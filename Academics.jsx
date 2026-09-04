import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Palette, Award, Globe, Shield, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('SECONDARY');

  const content = {
    'PRE-PRIMARY': {
      title: "Pre-Primary",
      levels: "Jr. KG & Sr. KG",
      desc: "Foundational learning focusing on sensory development, social skills, and early literacy through playful exploration in our boutique nursery environment.",
      icon: Palette,
      subjects: ["Creative Expression", "Early Numeracy", "Phonics & Language", "Sensory Play"],
      shift: { level: "Pre-Primary", range: "Jr/Sr KG", time: "12:30 PM - 03:00 PM" }
    },
    'PRIMARY': {
      title: "Primary",
      levels: "Grade 1 - 4",
      desc: "Developing core competencies in language, mathematics, and environmental awareness with a focus on conceptual clarity and character leadership.",
      icon: BookOpen,
      subjects: ["English Proficiency", "Conceptual Math", "EVS Discovery", "Marathi Culture"],
      shift: { level: "Primary", range: "Grade 1 - 4", time: "12:30 PM - 05:30 PM" }
    },
    'SECONDARY': {
      title: "Secondary",
      levels: "Grade 5 - 10",
      desc: "Rigorous academic preparation for SSC Board success, integrating advanced sciences, analytical reasoning, and global perspective.",
      icon: GraduationCap,
      subjects: ["Scientific Inquiry", "Advanced Math", "Social Dynamics", "IT Literacy"],
      shift: { level: "Secondary", range: "Grade 5 - 10", time: "07:30 AM - 12:00 PM" }
    }
  };

  const tabs = ['PRE-PRIMARY', 'PRIMARY', 'SECONDARY'];

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-xl rounded-full mb-12"
          >
            <Shield size={14} className="text-brand-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">[ EXCLUSIVE SINGLE-DIVISION LEARNING ]</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
            Legacy <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Curriculum.</span>
          </h1>
        </motion.div>
      </div>

      {/* Dynamic Class Filter - Tab Interface */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20 mb-24">
        <div className="flex flex-wrap justify-center gap-4 border-b border-slate-200 pb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] transition-all duration-500 rounded-full ${
                activeTab === tab 
                  ? 'bg-[#0B1D3A] text-brand-gold font-bold shadow-xl' 
                  : 'text-slate-500 hover:text-[#0B1D3A] hover:bg-slate-50'
              }`}
            >
              [ {tab} ]
              {activeTab === tab && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute -bottom-[33px] left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-gold rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections - Filtered Render */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-5 gap-16 items-start"
          >
            {/* Left: Detail Card */}
            <div className="lg:col-span-3">
              <div className="bg-white p-12 lg:p-20 border border-slate-100 relative group rounded-[3rem] shadow-[0_30px_100px_-15px_rgba(11,29,58,0.1)]">
                <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-12 group-hover:scale-105 transition-transform duration-500">
                  {React.createElement(content[activeTab].icon, { size: 40, strokeWidth: 1.2 })}
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-serif font-black text-[#0B1D3A] mb-4 tracking-tight">{content[activeTab].title}</h2>
                <div className="font-mono text-brand-gold text-[12px] uppercase tracking-[0.4em] mb-12">{content[activeTab].levels}</div>
                
                <p className="text-slate-600 mb-16 leading-relaxed font-medium text-xl italic border-l-4 border-brand-gold/40 pl-10 max-w-2xl">
                  {content[activeTab].desc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {content[activeTab].subjects.map(s => (
                    <span key={s} className="px-6 py-3 bg-brand-gray-50 text-[#0B1D3A] text-[10px] font-mono uppercase tracking-widest border border-slate-200 rounded-full font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Shift Schedule */}
            <div className="lg:col-span-2">
              <div className="bg-white p-12 border border-slate-100 rounded-[3rem] shadow-[0_30px_100px_-15px_rgba(11,29,58,0.1)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Clock size={120} strokeWidth={0.5} className="text-brand-gold" />
                </div>
                
                <span className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-8 block">Verified Shift Timing</span>
                <h4 className="font-serif text-3xl font-black text-[#0B1D3A] mb-12 tracking-tight">Institutional <br /> <span className="italic text-brand-gold">Rhythm.</span></h4>
                
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">{content[activeTab].shift.range}</span>
                    <div className="text-4xl font-mono font-black text-[#0B1D3A] tracking-tighter bg-brand-gray-50 px-8 py-6 border border-slate-100 rounded-2xl shadow-sm group-hover:border-brand-gold/30 transition-all duration-500">
                      {content[activeTab].shift.time}
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed italic">
                    * Shift timings are strictly maintained to ensure single-division focus and personalized academic attention.
                  </p>
                </div>
              </div>

              {/* Accreditations Link */}
              <div className="mt-8 p-10 bg-brand-gray-50 border border-slate-100 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:bg-brand-gold/10 transition-all">
                <div>
                  <h5 className="text-[#0B1D3A] font-serif font-bold text-lg">Board Compliance</h5>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1">MSBSHSE SSC Standard</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-gold group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Strip */}
      <div className="bg-brand-gray-50 border-y border-slate-100 py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
            <div className="text-center lg:text-left">
               <h3 className="text-4xl font-serif font-black text-[#0B1D3A] mb-4 tracking-tight">Admissions 2026-27.</h3>
               <p className="font-mono text-brand-gold text-[11px] uppercase tracking-widest italic font-bold">Premier SSC Instruction in Bhiwandi</p>
            </div>
            <Link to="/admissions" className="px-12 py-6 bg-[#0B1D3A] text-brand-gold font-mono uppercase tracking-[0.3em] text-[11px] hover:bg-brand-gold hover:text-[#0B1D3A] transition-all duration-500 rounded-2xl shadow-xl flex items-center gap-4 group">
               Start Registration <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </div>
    </div>
  );
};

export default Academics;
