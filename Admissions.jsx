import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Download, FileText, Send, ArrowRight, ShieldCheck, HelpCircle, MapPin, PhoneCall, Loader2, X, GraduationCap, Calendar } from 'lucide-react';

const Admissions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    desiredStandard: '',
    contactNumber: ''
  });

  const generateTrackingId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `AIS-2026-${random}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API processing
    setTimeout(() => {
      const newId = generateTrackingId();
      setTrackingId(newId);
      
      // Save to localStorage
      const application = {
        ...formData,
        trackingId: newId,
        submittedAt: new Date().toISOString()
      };
      
      const existing = JSON.parse(localStorage.getItem('ves_inquiries') || '[]');
      localStorage.setItem('ves_inquiries', JSON.stringify([...existing, application]));
      
      setIsSubmitting(false);
      setShowSuccessModal(true);
      
      // Clear form
      setFormData({
        parentName: '',
        studentName: '',
        desiredStandard: '',
        contactNumber: ''
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const steps = [
    { 
      title: "Initial Inquiry & Campus Visit", 
      desc: "Begin your journey by visiting our campus. Parents can collect the physical prospectus and application form directly from our administrative office while experiencing our world-class facilities." 
    },
    { 
      title: "Student & Parent Interaction", 
      desc: "A friendly, informal session designed to understand the child's unique potential, interests, and academic readiness. We believe in building a partnership with parents from day one." 
    },
    { 
      title: "Document Submission", 
      desc: "To align with Maharashtra State Board (SSC) requirements, please submit the Birth Certificate, Leaving Certificate (LC), and the student's previous Year's Report Card for official verification." 
    },
    { 
      title: "Final Enrollment", 
      desc: "Securing the Seat is finalized through the completion of the admission protocol and fee settlement. Welcome to the tradition of academic dominance at Aurevia International School." 
    }
  ];

  const standards = [
    "Jr. KG", "Sr. KG", "1st Standard", "2nd Standard", "3rd Standard", 
    "4th Standard", "5th Standard", "6th Standard", "7th Standard", 
    "8th Standard", "9th Standard", "10th Standard"
  ];

  return (
    <div className="bg-brand-white min-h-screen selection:bg-brand-gold/20 selection:text-brand-navy">
      
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl backdrop-blur-xl bg-white/10 border border-[#C9A646]/20 rounded-[3rem] p-12 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <button onClick={() => setShowSuccessModal(false)} className="text-white/40 hover:text-brand-gold transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-gold/20">
                  <CheckCircle size={48} />
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-serif font-black text-white mb-6 tracking-tight">Application <br /> <span className="italic text-brand-gold">Confirmed.</span></h3>
                <p className="text-slate-300 font-medium mb-12 leading-relaxed">
                  Thank you for your interest in Aurevia International School. Your inquiry for the <span className="text-white font-bold">2026-27 Academic Session</span> has been successfully logged.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 block mb-3">Institutional Tracking ID</span>
                  <div className="text-3xl font-mono font-black text-brand-gold tracking-tighter">{trackingId}</div>
                </div>
                
                <p className="text-slate-400 text-xs font-medium italic mb-10 px-8">
                  Our admissions coordinator will contact you shortly to schedule an interaction session.
                </p>
                
                <button 
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-6 bg-brand-gold text-brand-navy font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white transition-all duration-500 rounded-2xl shadow-2xl shadow-brand-gold/20"
                >
                  Return to Portal
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header Section - Elite Style */}
      <div className="bg-[#0B1D3A] pt-40 pb-56 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full -mr-64 -mt-64" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Admissions 2026-27</span>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
            Admission <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Journey.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Join a premier academic institution. We follow a transparent and merit-based admission protocol for Jr. KG to 10th Standard (SSC / CBSE).
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20 grid lg:grid-cols-3 gap-16 pb-40">
        
        {/* Left: Journey Guide */}
        <div className="lg:col-span-2">
          <div className="bg-white p-12 lg:p-20 rounded-[3rem] border border-slate-100 shadow-[0_30px_100px_-15px_rgba(11,29,58,0.1)] relative">
            <h2 className="text-4xl lg:text-5xl font-serif font-black text-[#0B1D3A] mb-20 tracking-tight">The Path to Excellence</h2>
            
            <div className="space-y-20">
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex gap-12 relative"
                >
                  {i !== steps.length - 1 && (
                    <div className="absolute left-10 top-20 w-px h-24 bg-slate-100"></div>
                  )}
                  
                  {/* Gradient Number */}
                  <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-gradient-to-br from-[#C9A646] to-[#0B1D3A] p-[2px] shadow-2xl shadow-brand-navy/10 relative z-10 group">
                    <div className="w-full h-full bg-white rounded-[1.4rem] flex items-center justify-center">
                       <span className="text-3xl font-serif font-black bg-gradient-to-br from-[#C9A646] to-[#0B1D3A] bg-clip-text text-transparent">
                        0{i + 1}
                       </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-black text-[#0B1D3A] mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium text-lg italic border-l-4 border-brand-gold/10 pl-8">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 p-12 bg-brand-gray-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex gap-8 items-center">
                <div className="w-20 h-20 bg-[#0B1D3A] text-brand-gold flex items-center justify-center rounded-2xl shadow-xl">
                  <Download size={36} strokeWidth={1.5} className="animate-bounce" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-black text-[#0B1D3A] mb-2 tracking-tight">2026-27 School Prospectus</h3>
                  <p className="text-slate-500 text-base font-medium">Get detailed insights into our SSC curriculum, campus facilities, and fee structure.</p>
                </div>
              </div>
              <button className="px-10 py-5 bg-[#0B1D3A] text-brand-gold font-black uppercase tracking-[0.3em] text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 rounded-full shadow-2xl shadow-brand-navy/20">
                Download PDF
              </button>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-xl group hover:border-brand-gold/30 transition-all duration-500">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif font-black text-[#0B1D3A] mb-3">Policy of Merit</h4>
              <p className="text-slate-500 font-medium leading-relaxed italic">Admissions are granted based on availability and a transparent review process in line with Maharashtra Education Department guidelines.</p>
            </div>
            <div className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-xl group hover:border-brand-gold/30 transition-all duration-500">
               <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                <HelpCircle size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif font-black text-[#0B1D3A] mb-3">Office Hours & Help</h4>
              <p className="text-slate-500 font-medium leading-relaxed italic mb-4">Our office at Narpoli is open Mon-Sat, 8:00 AM to 3:00 PM.</p>
              <a href="tel:+912522280028" className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-[10px] hover:text-[#0B1D3A] transition-colors">
                <PhoneCall size={14} /> +91 2522 2800 28
              </a>
            </div>
          </div>
        </div>

        {/* Right: Digital Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-[#0B1D3A] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5 hover:border-brand-gold/30 transition-all duration-700"
            >
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />
              
              <h3 className="text-3xl font-serif font-black text-brand-gold mb-8 italic relative z-10">Digital <span className="not-italic text-white">Inquiry.</span></h3>
              <p className="text-slate-400 text-sm mb-12 font-medium leading-relaxed relative z-10">Submit the form below and our admissions coordinator will reach out to schedule your campus visit.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Parent Name</label>
                  <input required name="parentName" value={formData.parentName} onChange={handleChange} type="text" className="w-full px-8 py-5 bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl placeholder:text-white/10" placeholder="Guardian Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Student Name</label>
                  <input required name="studentName" value={formData.studentName} onChange={handleChange} type="text" className="w-full px-8 py-5 bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl placeholder:text-white/10" placeholder="Full Legal Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Desired Standard</label>
                  <select required name="desiredStandard" value={formData.desiredStandard} onChange={handleChange} className="w-full px-8 py-5 bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl appearance-none">
                    <option value="" className="bg-[#0B1D3A]">Select Standard</option>
                    {standards.map(std => (
                      <option key={std} value={std} className="bg-[#0B1D3A]">{std}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Contact Phone</label>
                  <input required name="contactNumber" value={formData.contactNumber} onChange={handleChange} type="tel" className="w-full px-8 py-5 bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-brand-gold transition-all rounded-2xl placeholder:text-white/10" placeholder="+91 00000 00000" />
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-brand-gold text-[#0B1D3A] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-white transition-all duration-500 shadow-2xl shadow-brand-gold/20 mt-12 rounded-2xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Processing <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Inquiry <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
              <p className="mt-8 text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Personal data is protected by our <br /> Strict Privacy Protocol
              </p>
            </motion.div>
            
            {/* Quick Contact */}
            <div className="mt-8 p-10 bg-white rounded-[2rem] border border-slate-100 text-center shadow-xl group hover:border-brand-gold/30 transition-all duration-500">
               <div className="w-12 h-12 bg-brand-navy text-brand-gold flex items-center justify-center rounded-xl mx-auto mb-6">
                <PhoneCall size={24} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/30 block mb-3">Admissions Desk</span>
              <div className="text-2xl font-serif font-black text-[#0B1D3A] tracking-tight">+91 2522 2800 28</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
