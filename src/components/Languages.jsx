import React from 'react';
import { motion } from 'framer-motion';
import { FaLanguage, FaGlobe } from 'react-icons/fa';

const languages = {
  native: ['Urdu', 'Punjabi', 'Saraiki'],
  other: [
    { name: 'English', understanding: 'C1', speaking: 'C1', writing: 'C1' }
  ]
};

const Languages = () => {
  return (
    <section id="languages" className="py-24 bg-black relative border-t border-[#D4AF37]/5 overflow-hidden">
      {/* Decorative Moving Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent animate-pulse"></div>
      
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Unified Communication Hub Design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 bg-white/[0.02] border border-[#D4AF37]/10 rounded-[3rem] relative overflow-hidden group max-w-5xl mx-auto"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-16">
              {/* Pie Chart Style Graph - Fixed Alignment */}
              <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/[0.03]" />
                  <motion.circle 
                    cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    strokeDasharray="283%"
                    initial={{ strokeDashoffset: "283%" }}
                    whileInView={{ strokeDashoffset: "42%" }}
                    transition={{ duration: 2.5, ease: "circOut" }}
                    className="text-[#D4AF37]"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <span className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">C1</span>
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] mt-3 whitespace-nowrap">English Proficiency</span>
                </div>
              </div>

              <div className="flex-1 space-y-10 text-center md:text-left">
                <div className="space-y-2">
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#D4AF37]">Communication Hub</h3>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Linguistic Mastery</h2>
                </div>
                
                <div className="space-y-8">
                  <p className="text-sm md:text-lg font-serif italic text-white/50 leading-relaxed border-l-2 border-[#D4AF37]/30 pl-8 mx-auto md:mx-0 max-w-xl">
                    "Language is the roadmap of a culture. It tells you where its people come from and where they are going."
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {['Urdu', 'Punjabi', 'Saraiki'].map(lang => (
                      <div key={lang} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:border-[#D4AF37]/40 transition-all duration-500">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
                        <span className="text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-white">{lang} (Native)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default Languages;
