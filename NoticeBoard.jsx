import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Calendar, 
  Search, 
  FileDown, 
  FileText, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Filter,
  ArrowRight,
  Download,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const NoticeBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Admissions', 'Examinations', 'Events', 'General'];

  const notices = [
    { 
      id: 1, 
      title: "SSC Board Exam Hall Ticket Distribution - March 2026", 
      date: "March 05, 2026", 
      category: "Examinations", 
      urgent: true,
      description: "Students of 10th Standard are required to collect their hall tickets from the administrative block between 10:00 AM and 2:00 PM."
    },
    { 
      id: 2, 
      title: "Annual Sports Meet Guidelines for Parents", 
      date: "March 02, 2026", 
      category: "Events",
      urgent: false,
      description: "Comprehensive guidelines regarding venue access, parking, and student safety protocols for the upcoming Sports Day."
    },
    { 
      id: 3, 
      title: "Admissions Open for Academic Year 2026-27 (Jr. KG - 10th)", 
      date: "February 28, 2026", 
      category: "Admissions",
      urgent: true,
      description: "Applications are now being accepted for all standards. Digital inquiry forms must be submitted by the end of March."
    },
    { 
      id: 4, 
      title: "Revised Summer School Timings for April Session", 
      date: "February 25, 2026", 
      category: "General",
      urgent: false,
      description: "School hours will be adjusted from April 1st to accommodate rising temperatures. New timings: 7:30 AM to 12:30 PM."
    },
    { 
      id: 5, 
      title: "Science Exhibition Project Submission Deadline", 
      date: "February 20, 2026", 
      category: "Academic",
      urgent: false,
      description: "All models and charts for the Inter-School Science Exhibition must be submitted to the respective lab coordinators."
    }
  ];

  const events = [
    { day: "25", month: "APR", title: "Inter-School Science Exhibition", time: "10:00 AM", location: "Main Hall" },
    { day: "02", month: "MAY", title: "SSC Toppers Award Ceremony", time: "09:00 AM", location: "School Grounds" },
    { day: "10", month: "MAY", title: "Annual Sports Day Meet", time: "08:00 AM", location: "Sports Complex" },
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          notice.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || notice.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-brand-white min-h-screen  selection:bg-brand-gold/20 selection:text-brand-navy">
      
      {/* Header Section - Enhanced Padding to prevent Navbar overlap */}
      <div className="bg-[#0B1D3A] pt-48 pb-60 text-center relative overflow-hidden z-10">
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
            className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mt-10 mb-8 block"
          >
            Digital Gazette
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
            Information <br />
            <span className="bg-gradient-to-tr from-[#C9A646] via-[#F1D28C] to-[#A38235] bg-clip-text text-transparent italic font-medium">Hub.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Real-time updates, official circulars, and academic milestones for the HMY English School community.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20 pb-40">
        
        {/* Search & Filter Bar */}
        <div className="mb-28 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-gold transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search Notices..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl border border-slate-100 shadow-xl focus:outline-none focus:border-brand-gold transition-all font-medium text-[#0B1D3A]"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-brand-navy text-brand-gold shadow-lg shadow-brand-navy/20' 
                    : 'bg-white text-slate-400 hover:text-[#0B1D3A] border border-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Pane Layout */}
        <div className="grid lg:grid-cols-10 gap-12 items-start">
          
          {/* Left Side: Notice Stream (60%) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-serif font-black text-[#0B1D3A] tracking-tight flex items-center gap-4">
                 Official Circulars <Bell size={24} className="text-brand-gold" />
               </h2>
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{filteredNotices.length} Notices Found</span>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice) => (
                    <motion.div
                      layout
                      key={notice.id}
                      variants={itemVariants}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 border-l-4 border-l-[#C9A646] hover:shadow-[0_40px_80px_-20px_rgba(11,29,58,0.1)] transition-all duration-500"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <span className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                            {notice.category}
                          </span>
                          {notice.urgent && (
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-black text-slate-300 uppercase tracking-widest">
                          <Calendar size={14} /> {notice.date}
                        </div>
                      </div>

                      <h3 className="text-2xl font-serif font-black text-[#0B1D3A] mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                        {notice.title}
                      </h3>
                      
                      <p className="text-slate-500 font-medium leading-relaxed italic mb-8 border-l-2 border-slate-50 pl-6">
                        {notice.description}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#0B1D3A] hover:text-brand-gold transition-all group/btn">
                          View Circular <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-slate-50 text-slate-400 hover:bg-[#0B1D3A] hover:text-brand-gold transition-all rounded-xl text-[10px] font-black uppercase tracking-widest group/dl">
                           <FileDown size={16} className="group-hover/dl:-translate-y-0.5 transition-transform" />
                           Download PDF
                        </a>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200"
                  >
                    <AlertCircle size={48} className="mx-auto text-slate-200 mb-6" />
                    <p className="text-slate-400 font-serif text-xl italic">No circulars match your current selection.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Side: Events Sidebar (40%) */}
          <div className="lg:col-span-4 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#0B1D3A] rounded-[3rem] p-10 lg:p-14 text-brand-white relative overflow-hidden shadow-2xl"
            >
              {/* Glassmorphic Patterns */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10">
                <div className="border-b border-white/10 pb-10 mb-12">
                  <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[11px] block mb-4">On the Horizon</span>
                  <h3 className="text-4xl font-serif font-black text-brand-white tracking-tight flex items-center gap-6">
                    Events Tracker <Calendar size={28} className="text-brand-gold" />
                  </h3>
                </div>

                <div className="space-y-12">
                  {events.map((event, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 10 }}
                      className="flex gap-8 group cursor-pointer"
                    >
                      {/* Gold Date Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-brand-gold text-[#0B1D3A] flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-brand-gold/20 group-hover:bg-white transition-colors duration-500">
                          <span className="text-3xl font-serif font-black leading-none">{event.day}</span>
                          <span className="text-[10px] font-black tracking-[0.2em] uppercase mt-1">{event.month}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-serif text-xl font-bold text-brand-white group-hover:text-brand-gold transition-colors mb-3 leading-tight">
                          {event.title}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                            <Clock size={14} className="text-brand-gold" /> {event.time}
                          </div>
                          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                            <MapPin size={14} className="text-brand-gold" /> {event.location}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="w-full mt-16 py-6 bg-white/5 border border-white/10 text-brand-gold font-black uppercase tracking-[0.3em] text-[11px] hover:bg-brand-gold hover:text-[#0B1D3A] transition-all duration-500 rounded-2xl flex items-center justify-center gap-4 group">
                  Academic Calendar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
            
            {/* Quick Support Widget */}
            <div className="mt-8 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center gap-8 group hover:border-brand-gold/20 transition-all">
               <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                 <ShieldCheck size={28} strokeWidth={1.5} />
               </div>
               <div>
                  <h5 className="font-serif font-black text-[#0B1D3A] text-lg">Official Gazette</h5>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verified School Announcements</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
