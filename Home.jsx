import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ArrowRight, GraduationCap, Quote, CheckCircle2, Play, Globe, Shield, Sparkles, BookOpen, Microscope, Computer, Tv, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import HMY_School from './src/assets/HMY_School.jpg';
import Principal from './src/assets/Principal.jpg';

// Sub-components
import NoticeBoard from './src/components/NoticeBoard.jsx';
import AcademicPillars from './src/components/AcademicPillars.jsx';
import Testimonials from './src/components/Testimonials.jsx';
import Toppers from './src/components/Toppers.jsx';
import SalesBanner from './src/components/SalesBanner.jsx';

const Home = () => {
  return (
    <div className="bg-brand-white selection:bg-brand-gold/20 selection:text-brand-navy overflow-hidden">

      {/* Hero Section - Elite Academic Prestige */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,70,0.05),transparent)]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-white to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-brand-navy text-brand-gold text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-2xl shadow-brand-navy/20 rounded-full"
              >
                <Sparkles size={12} className="animate-pulse" />
                25+ Years of Academic Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl font-serif text-brand-navy font-black tracking-tighter leading-[1.1] mb-10"
              >
                Inspiring <br />
                <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Global Minds.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-brand-gray-600 mb-12 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium"
              >
                Where heritage meets innovation. We provide a transformative educational experience designed to cultivate the leaders of tomorrow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6"
              >
                <Link to="/admissions" className="group px-10 py-5 bg-brand-navy text-brand-gold font-black uppercase tracking-[0.25em] text-[11px] hover:bg-brand-gold hover:text-brand-navy hover:shadow-[0_0_20px_rgba(201,166,70,0.4)] transition-all duration-500 rounded-full shadow-2xl shadow-brand-navy/20 flex items-center gap-4">
                  Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/infrastructure" className="group px-10 py-5 border-2 border-[#0B1D3A]/20 text-[#0B1D3A] font-black uppercase tracking-[0.25em] text-[11px] hover:bg-[#0B1D3A] hover:text-white transition-all duration-500 rounded-full flex items-center gap-4">
                  Take a Tour <Play size={16} className="fill-brand-navy group-hover:fill-white transition-colors" />
                </Link>
              </motion.div>

              {/* Stats - Refined & Bold */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-20 pt-12 border-t border-brand-gray-200 flex items-center gap-12 justify-center lg:justify-start"
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-black text-brand-navy">100%</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600/60 mt-1">Board Merit</span>
                </div>
                <div className="h-8 w-[1px] bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-black text-brand-navy">Focused</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600/60 mt-1">Urban Academy</span>
                </div>
                <div className="h-8 w-[1px] bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-black text-brand-navy">Exclusive</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600/60 mt-1">Single-Division Sessions</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 group"
              >
                {/* Main Hero Image with Premium Frame and Mask */}
                <div
                  className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(11,29,58,0.25)] border-[12px] border-white group-hover:border-brand-gold/20 transition-all duration-700"
                  style={{
                    maskImage: 'linear-gradient(to top, transparent, black 15%), linear-gradient(to right, transparent, black 15%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent, black 15%), linear-gradient(to right, transparent, black 15%)',
                    WebkitMaskComposite: 'source-in',
                    maskComposite: 'intersect'
                  }}
                >
                  <img
                    src={HMY_School}
                    alt="BPS Students"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Trust Badge - Glassmorphic Widget */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute -bottom-12 -left-12 backdrop-blur-md bg-white/10 p-10 z-20 rounded-2xl border border-white/20 hidden md:flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                >
                  <div className="w-20 h-20 bg-brand-gold text-brand-navy flex items-center justify-center rounded-xl shadow-lg shadow-brand-gold/30">
                    <Award size={40} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-black text-brand-navy leading-none">Global</div>
                    <div className="text-[10px] text-brand-gray-600 font-black tracking-[0.3em] uppercase mt-3">A++ Accreditation</div>
                  </div>
                </motion.div>

                {/* Second Floating Element - Glassmorphic Widget */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  className="absolute -top-10 -right-10 backdrop-blur-md bg-white/10 p-6 z-20 rounded-2xl border border-white/20 hidden md:flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                >
                  <Users className="text-brand-gold" size={24} />
                  <div className="text-brand-navy text-xs font-bold tracking-widest uppercase">Elite Community</div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-gold/5 blur-[120px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-navy/5 blur-[120px] rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Value Proposition - Verified Facilities */}
      <section className="py-24 bg-brand-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Computer, title: "Computer Labs", desc: "High-performance systems for technical excellence and digital proficiency." },
              { icon: Tv, title: "AV Room", desc: "Multi-media assisted modern learning environment for immersive education." },
              { icon: PlayCircle, title: "Playground", desc: "Dedicated space for physical education, sports, and holistic development." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-3xl bg-brand-white border border-brand-gray-100 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500"
              >
                <div className="bg-brand-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-navy group-hover:text-brand-gold transition-all duration-500 shadow-sm">
                  <feature.icon size={30} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-navy mb-4">{feature.title}</h4>
                <p className="text-brand-gray-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AcademicPillars />

      <Toppers />

      {/* Dark Contrast Section for Notice Board */}
      <div className="bg-brand-gray-50">
        <NoticeBoard />
      </div>

      <Testimonials />

      {/* Sales / Demo Banner for Potential School Buyers */}
      {/* <SalesBanner /> */}

      {/* Final Conversion CTA - Ultra High End */}
      <section className="py-32 bg-brand-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-2/5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="aspect-[4/5] bg-white p-6 rounded-[2rem] shadow-2xl border border-brand-gray-100 overflow-hidden group">
                  <img
                    src={Principal}
                    alt="Principal"
                    className="w-full h-full object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Premium Seal */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center p-8 text-center border-4 border-brand-gold shadow-2xl z-20">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Authentic Leadership Excellence</span>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[11px] mb-8 block">From the Principal's Desk</span>
                <h2 className="text-5xl lg:text-6xl font-serif text-brand-navy font-black mb-12 leading-[1.1]">
                  "We cultivate not just the intellect, but the <span className="text-brand-gold italic font-medium">noble spirit</span> of every child."
                </h2>
                <div className="relative mb-12">
                  <Quote className="absolute -top-10 -left-10 text-brand-gold/10" size={120} />
                  <p className="text-xl text-brand-gray-600 leading-relaxed font-medium italic relative z-10 border-l-4 border-brand-gold pl-10">
                    At Vidyamandir English School, our vision is to create a sanctuary of learning where academic rigor meets character development. We believe in the unique potential of every student to become a global changemaker.
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-20 h-px bg-brand-gold"></div>
                  <div>
                    <div className="font-serif font-black text-brand-navy text-3xl">Dr. Priya Sharma</div>
                    <div className="text-brand-gold font-black tracking-[0.25em] text-[11px] uppercase mt-2">Principal • M.Ed, Ph.D — University of Mumbai</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA - Ultra High End */}
      <section className="py-40 bg-brand-navy text-brand-white text-center relative overflow-hidden">
        {/* Abstract Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-navy" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <GraduationCap size={80} className="text-brand-gold mx-auto drop-shadow-[0_0_20px_rgba(201,166,70,0.4)]" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif font-black mb-12 tracking-tight leading-tight"><span className="text-brand-gold">Your Legacy</span> <span className="text-brand-gold italic">Starts</span> Here.</h2>
          <p className="text-xl text-brand-white/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Applications for the academic year 2026-27 are now being reviewed. Join an institution where excellence is not just a goal — it's a tradition.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/admissions" className="px-12 py-6 bg-brand-gold text-brand-navy font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-white transition-all duration-500 rounded-full shadow-[0_20px_50px_-10px_rgba(201,166,70,0.3)] hover:scale-105 active:scale-95">
              Start Your Application
            </Link>
            <Link to="/contact" className="px-12 py-6 border-2 border-white/20 text-brand-white font-black uppercase tracking-[0.3em] text-xs hover:bg-white/10 transition-all duration-500 rounded-full backdrop-blur-sm hover:border-brand-gold active:scale-95">
              Schedule a Campus Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
