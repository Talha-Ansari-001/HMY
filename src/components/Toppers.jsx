import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Quote, ChevronRight } from 'lucide-react';

// Import local student images
import student1 from '../assets/Student_1.jpeg';
import student2 from '../assets/Student_2.jpeg';
import student3 from '../assets/Student_3.jpeg';
import student4 from '../assets/Student_4.jpeg';

const Toppers = () => {
  const toppers = [
    {
      name: "Siddharth Sheikh",
      percentage: "98.4%",
      year: "March 2025",
      aspiration: "Future Neurosurgeon",
      image: student1
    },
    {
      name: "Ayesha Ansari",
      percentage: "97.8%",
      year: "March 2025",
      aspiration: "Software Engineer @ Google",
      image: student2
    },
    {
      name: "Zaid Momin",
      percentage: "96.5%",
      year: "March 2025",
      aspiration: "Civil Services (IAS)",
      image: student3
    },
    {
      name: "Fatima Khan",
      percentage: "95.9%",
      year: "March 2025",
      aspiration: "Professional Architect",
      image: student4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-brand-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/french-stucco.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-navy/5 text-brand-gold rounded-full mb-6 border border-brand-gold/20"
          >
            <Star size={14} className="fill-brand-gold" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Hall of Fame</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif text-[#0B1D3A] font-black tracking-tight mb-8">
            Celebrating Excellence: <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Our SSC Board Toppers</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#C9A646] via-[#F1D28C] to-[#A38235] mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed font-medium text-lg">
            Honoring the hard work and dedication of our highest achievers who have set the gold standard for Vidyamandir English School.
          </p>
        </div>

        {/* Toppers Grid / Mobile Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex lg:grid lg:grid-cols-4 gap-8 overflow-x-auto lg:overflow-visible pb-12 lg:pb-0 snap-x snap-mandatory scrollbar-hide"
        >
          {toppers.map((topper, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="min-w-[300px] lg:min-w-0 snap-center group"
            >
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 relative flex flex-col items-center text-center h-full">

                {/* Image Container */}
                <div className="relative w-full aspect-square mb-10 group/img overflow-hidden rounded-[1.5rem] border-2 border-[#C9A646]">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />

                  {/* Score Badge */}
                  <div className="absolute bottom-0 right-0 bg-[#C9A646] text-[#0B1D3A] font-black text-xl px-5 py-4 rounded-full shadow-2xl z-20 border-4 border-white flex flex-col items-center justify-center leading-none">
                    <span className="text-[10px] uppercase tracking-tighter mb-1 opacity-60">Score</span>
                    {topper.percentage}
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">{topper.year}</div>
                  <h3 className="text-2xl font-serif font-black text-[#0B1D3A] tracking-tight">{topper.name}</h3>

                  <div className="flex justify-center py-4">
                    <div className="w-8 h-px bg-slate-200"></div>
                  </div>

                  <p className="text-slate-500 italic font-medium text-sm px-4">
                    <Quote size={12} className="inline-block text-brand-gold mr-2 -mt-2" />
                    {topper.aspiration}
                    <Quote size={12} className="inline-block text-brand-gold ml-2" />
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="mt-8 pt-6 border-t border-slate-50 w-full">
                  <div className="inline-flex items-center gap-2 text-[9px] font-black text-brand-navy/30 uppercase tracking-[0.2em]">
                    <Award size={14} className="text-brand-gold" /> Distinguished Merit
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Pagination Hint (Invisible on mobile) */}
        <div className="hidden lg:flex justify-center mt-20">
          <button className="flex items-center gap-3 px-8 py-4 bg-brand-navy text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] rounded-full shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 group">
            View All SSC Toppers <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Toppers;
