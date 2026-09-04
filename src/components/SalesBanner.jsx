import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Star, Zap, Globe, Shield, Smartphone, 
  Code2, Palette, X, ArrowRight, PhoneCall, Mail,
  MessageCircle, Award, LayoutTemplate, Clock
} from 'lucide-react';

const SalesBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const features = [
    { icon: LayoutTemplate, text: "Multi-Page Architecture (7+ Pages)" },
    { icon: Smartphone, text: "Fully Mobile Responsive Design" },
    { icon: Zap, text: "Cinematic Framer Motion Animations" },
    { icon: Globe, text: "SSC & CBSE Board Ready Content" },
    { icon: Shield, text: "Digital Admission Inquiry Form" },
    { icon: Code2, text: "Built with React + Vite + Tailwind CSS" },
    { icon: Palette, text: "Oxford-Style Premium UI / UX" },
    { icon: Clock, text: "Fast Delivery — 1 Week Setup" },
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "one-time",
      desc: "Perfect for small schools needing a digital presence.",
      color: "border-slate-200",
      badge: null,
      items: [
        "7 Page Website (as shown)",
        "School Branding & Name",
        "Admission Inquiry Form",
        "Mobile Responsive",
        "1 Month Free Support",
      ]
    },
    {
      name: "Premium",
      price: "₹17,999",
      period: "one-time",
      desc: "Full premium package with Google Maps & WhatsApp.",
      color: "border-brand-gold",
      badge: "Most Popular",
      items: [
        "Everything in Starter",
        "Google Maps Integration",
        "WhatsApp Chat Button",
        "Photo Gallery Page",
        "Notice Board Management",
        "3 Months Free Support",
      ]
    },
    {
      name: "Elite",
      price: "₹29,999",
      period: "one-time",
      desc: "Complete digital ecosystem for prestigious institutions.",
      color: "border-brand-navy",
      badge: "Best Value",
      items: [
        "Everything in Premium",
        "Custom Domain Setup",
        "Hosting for 1 Year",
        "Parent Login Portal",
        "Online Fee Collection",
        "Priority 6-Month Support",
      ]
    }
  ];

  return (
    <>
      {/* Sales CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0B1D3A] via-[#0f2549] to-[#0B1D3A] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full -mr-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-8"
            >
              <Star size={14} className="fill-brand-gold text-brand-gold" />
              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">Premium Website for Schools</span>
              <Star size={14} className="fill-brand-gold text-brand-gold" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tight leading-tight mb-8">
              Want This <span className="text-brand-gold italic font-medium">Website</span>
              <br />For Your School?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#C9A646] via-[#F1D28C] to-[#A38235] mx-auto mb-10 rounded-full" />
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              This is a live demo. We build premium school websites exactly like this one — 
              customized with <span className="text-white font-bold">your school name, photos, and details</span> — 
              for schools across Maharashtra (SSC & CBSE).
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-gold/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl flex-shrink-0">
                  <f.icon size={20} />
                </div>
                <span className="text-sm font-medium text-slate-300 leading-tight">{f.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white/5 border-2 ${plan.color} rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:bg-white/10`}
              >
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">{plan.name} Plan</p>
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-5xl font-serif font-black text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm font-medium mb-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-4 flex-grow mb-10">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowModal(true)}
                  className={`w-full py-5 font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl transition-all duration-500 active:scale-95 ${
                    plan.badge === 'Most Popular'
                      ? 'bg-brand-gold text-brand-navy hover:bg-white'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold'
                  }`}
                >
                  Get This Plan
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm font-medium mb-8">
              🚀 This exact website can be ready with your school's branding in <span className="text-white font-bold">5–7 working days.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="group px-12 py-6 bg-brand-gold text-brand-navy font-black uppercase tracking-[0.25em] text-[11px] hover:bg-white transition-all duration-500 rounded-full shadow-[0_20px_50px_-10px_rgba(201,166,70,0.4)] flex items-center gap-4"
              >
                Order Your School Website <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20saw%20your%20school%20website%20demo%20and%20want%20to%20enquire%20about%20getting%20one%20for%20my%20school."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-[0.25em] text-[11px] hover:bg-white/10 hover:border-brand-gold transition-all duration-500 rounded-full backdrop-blur-sm flex items-center gap-4"
              >
                <MessageCircle size={18} className="text-green-400" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0B1D3A] border border-brand-gold/20 rounded-[3rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 text-white/30 hover:text-brand-gold transition-colors"
              >
                <X size={24} />
              </button>

              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 border border-brand-gold/20">
                  <Award size={40} strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-serif font-black text-white mb-3 tracking-tight">
                  Get Your <span className="text-brand-gold italic">School Website</span>
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">
                  Contact us now and we'll set up your premium school website in 5–7 working days.
                </p>

                <div className="space-y-4 mb-10">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20a%20school%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-green-500 text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-green-400 transition-all duration-500 rounded-2xl flex items-center justify-center gap-4 shadow-2xl shadow-green-500/20"
                  >
                    <MessageCircle size={20} /> WhatsApp: +91 98765 43210
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="w-full py-5 bg-white/10 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-500 rounded-2xl flex items-center justify-center gap-4"
                  >
                    <PhoneCall size={20} /> Call: +91 98765 43210
                  </a>
                  <a
                    href="mailto:sales@webcraft.in"
                    className="w-full py-5 bg-white/5 border border-white/10 text-slate-400 font-bold text-[11px] hover:text-brand-gold transition-all duration-300 rounded-2xl flex items-center justify-center gap-4"
                  >
                    <Mail size={18} /> sales@webcraft.in
                  </a>
                </div>

                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  Designed & Delivered by <span className="text-brand-gold">WebCraft Studios</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SalesBanner;
