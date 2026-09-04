import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kulkarni",
      role: "Parent of 9th Standard Student",
      content: "The academic rigor combined with the focus on character development is what sets Vidyamandir apart. My son has not only excelled in sciences but has also developed a profound sense of leadership and empathy.",
      location: "Bhiwandi, Maharashtra"
    },
    {
      id: 2,
      name: "Dr. Anita Patel",
      role: "Education Consultant",
      content: "I have visited many schools across Maharashtra, but the commitment to SSC & CBSE academic excellence I've witnessed here is truly world-class. Their facilities and teaching quality are second to none in the region.",
      location: "Maharashtra Board Expert"
    },
    {
      id: 3,
      name: "Meera Joshi",
      role: "Parent of Jr. KG Student",
      content: "As a parent, you want an environment that is both safe and stimulating. The early years program provides exactly that — a perfect blend of nurturing care and intellectual curiosity for my daughter.",
      location: "Kalyan, Maharashtra"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-brand-white relative overflow-hidden">
      {/* Luxurious Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="w-24 h-24 bg-brand-navy text-brand-gold mx-auto mb-10 flex items-center justify-center rounded-[2rem] shadow-2xl shadow-brand-navy/20 relative">
            <Quote size={48} strokeWidth={1.5} />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy animate-pulse">
               <Sparkles size={14} />
            </div>
          </div>
          <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">The Voice of Our Community</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-navy font-black tracking-tight mb-8">Parental Perspectives</h2>
          <div className="w-32 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-16 md:p-24 rounded-[4rem] border border-brand-gray-100 shadow-[0_50px_100px_-20px_rgba(11,29,58,0.1)] text-center relative overflow-hidden group"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-2 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-brand-gold text-brand-gold drop-shadow-sm" />
                ))}
              </div>

              <blockquote className="text-3xl md:text-4xl lg:text-5xl text-brand-navy leading-tight font-serif italic mb-16 relative z-10">
                "{testimonials[activeIndex].content}"
              </blockquote>

              <div className="space-y-4 relative z-10">
                <div className="text-3xl font-serif font-black text-brand-navy">{testimonials[activeIndex].name}</div>
                <div className="text-brand-gold font-black tracking-[0.3em] text-[11px] uppercase bg-brand-gold/5 px-6 py-2 rounded-full inline-block">
                  {testimonials[activeIndex].role} <span className="mx-3 text-brand-navy/20">|</span> {testimonials[activeIndex].location}
                </div>
              </div>

              {/* Decorative side quotes */}
              <div className="absolute top-10 left-10 text-brand-gold/[0.05] font-serif text-[200px] leading-none pointer-events-none select-none">“</div>
              <div className="absolute bottom-10 right-10 text-brand-gold/[0.05] font-serif text-[200px] leading-none pointer-events-none select-none">”</div>
            </motion.div>
          </AnimatePresence>

          {/* Premium Navigation Controls */}
          <motion.button 
            whileHover={{ scale: 1.1, x: -10 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-20 h-20 bg-brand-navy rounded-[2rem] flex items-center justify-center text-brand-gold shadow-2xl absolute top-1/2 -translate-y-1/2 -left-6 z-[60] pointer-events-auto hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 ease-out group/nav"
          >
            <ChevronLeft size={40} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-20 h-20 bg-brand-navy rounded-[2rem] flex items-center justify-center text-brand-gold shadow-2xl absolute top-1/2 -translate-y-1/2 -right-6 z-[60] pointer-events-auto hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 ease-out group/nav"
          >
            <ChevronRight size={40} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          {/* Custom Luxury Pagination */}
          <div className="flex gap-6 justify-center mt-20">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`group relative h-2 transition-all duration-1000 overflow-hidden rounded-full ${i === activeIndex ? 'w-24 bg-brand-gold' : 'w-6 bg-brand-navy/10 hover:bg-brand-navy/30'}`}
              >
                 {i === activeIndex && (
                   <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-gold"
                   />
                 )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
