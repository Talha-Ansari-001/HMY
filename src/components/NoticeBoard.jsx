import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, ArrowRight, MapPin, ChevronRight, Sparkles, Clock } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, title: "Admissions Open for Jr. KG & Sr. KG (2026-27)", date: "April 15", year: "2026", category: "Admissions", urgent: true },
    { id: 2, title: "SSC Board Exam Schedule 2026 - Final Dates", date: "April 12", year: "2026", category: "Academic" },
    { id: 3, title: "Monthly Parent-Teacher Meeting (PTM)", date: "April 10", year: "2026", category: "Meeting" },
    { id: 4, title: "Ramadan & Eid-ul-Fitr Holidays Notice", date: "April 08", year: "2026", category: "Holiday" },
  ];

  const events = [
    { day: "25", month: "APR", title: "Inter-School Science Exhibition", time: "10:00 AM", location: "Main Hall" },
    { day: "02", month: "MAY", title: "SSC Toppers Award Ceremony", time: "09:00 AM", location: "School Grounds" },
    { day: "10", month: "MAY", title: "Annual Sports Day Meet", time: "08:00 AM", location: "Sports Complex" },
  ];

  return (
    <section className="bg-brand-gray-50 py-32 relative overflow-hidden">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .shimmer-btn {
            background: linear-gradient(90deg, #C9A646 0%, #F1D28C 50%, #C9A646 100%);
            background-size: 200% 100%;
            animation: shimmer 3s infinite linear;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* Left: News & Notices - Official Document Feel */}
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] block mb-4"
                  >
                    Official Announcements & Key Dates for the 2026-27 Academic Year
                  </motion.span>
                  <h3 className="text-4xl md:text-5xl font-serif text-[#0B1D3A] font-black tracking-tight flex items-center gap-6">
                    Information Hub <div className="w-12 h-12 rounded-2xl bg-[#0B1D3A] flex items-center justify-center"><Bell size={24} className="text-brand-gold animate-bounce" /></div>
                  </h3>
                </div>
                <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#0B1D3A] hover:text-brand-gold transition-colors group">
                  View Full Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="space-y-6 flex-grow">
                {notices.map((notice, idx) => (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-8 rounded-xl border border-brand-gray-100 border-l-4 border-l-[#C9A646] hover:bg-[#C9A646]/5 transition-all duration-500 flex items-start gap-8 relative overflow-hidden cursor-pointer shadow-sm shadow-brand-navy/5"
                  >
                    <div className="flex-shrink-0 text-center w-24">
                       <div className="text-[10px] font-black text-brand-gray-600/40 uppercase tracking-[0.2em] mb-1">{notice.year}</div>
                       <div className="text-xl font-serif font-black text-[#0B1D3A] group-hover:text-brand-gold transition-colors">{notice.date}</div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-4 py-1.5 rounded-full">
                          {notice.category}
                        </span>
                        {notice.urgent && (
                          <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                             <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" /> Urgent
                          </span>
                        )}
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-[#0B1D3A] group-hover:translate-x-1 transition-all duration-300 leading-tight">
                        {notice.title}
                      </h4>
                    </div>

                    <div className="bg-brand-gray-50 p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <ChevronRight size={20} className="text-brand-gold" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Upcoming Events - Agency Navy */}
          <div className="lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B1D3A] rounded-[3rem] p-12 lg:p-16 text-brand-white relative overflow-hidden shadow-2xl h-full flex flex-col"
            >
              {/* Subtle Pattern Background */}
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="border-b border-white/10 pb-10 mb-12">
                  <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[11px] block mb-4">On the Horizon</span>
                  <h3 className="text-4xl font-serif font-bold text-brand-white tracking-tight flex items-center gap-6">
                    Events <Calendar size={28} className="text-brand-gold" />
                  </h3>
                </div>

                <div className="space-y-12 flex-grow">
                  {events.map((event, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 10 }}
                      className="flex gap-10 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-center">
                        <div className="text-brand-gold font-serif text-4xl font-black leading-none mb-2">{event.day}</div>
                        <div className="text-[11px] font-black tracking-[0.3em] text-brand-white/40 uppercase">{event.month}</div>
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-brand-white group-hover:text-brand-gold transition-colors mb-3">
                          {event.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-brand-white/40 tracking-[0.1em] uppercase">
                          <span className="flex items-center gap-2"><Clock size={14} className="text-brand-gold" /> {event.time}</span>
                          <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-gold" /> {event.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="shimmer-btn w-full mt-12 py-6 text-[#0B1D3A] font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 rounded-2xl shadow-2xl shadow-brand-gold/20 flex items-center justify-center gap-4 group">
                  Academic Calendar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
