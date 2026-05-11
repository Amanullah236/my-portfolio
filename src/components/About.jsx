import React from 'react';
import { motion } from 'framer-motion';

// Optimized Component
const About = () => {
  const stats = [
    { label: 'Completed Projects', value: '120 +' },
    { label: 'Client satisfaction', value: '95 %' },
    { label: 'Years of experience', value: '10 +' },
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0 group"
          >
            <div className="absolute -inset-6 border border-[#D4AF37]/10 rounded-full animate-spin-slow opacity-50"></div>
            <div className="absolute -inset-4 border-2 border-[#D4AF37]/30 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -inset-2 border border-white/5 rounded-full"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] z-10"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] z-10"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_80px_rgba(212,175,55,0.3)] transition-all duration-700 group-hover:shadow-[0_0_120px_rgba(212,175,55,0.5)]">
              <img 
                src="/src/assets/images/UMR16987.JPG.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover md:grayscale brightness-90 md:brightness-75 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none opacity-0 group-hover:opacity-100"></div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black border border-[#D4AF37] text-[#D4AF37] text-[10px] font-black px-8 py-3 rounded-sm uppercase tracking-[0.5em] shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap z-20 group-hover:-translate-y-2 transition-transform">
              Engineer 01
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
                <span className="text-white/70 font-black tracking-[0.4em] uppercase text-xs">Origin</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">
                Who Is <span className="text-[#D4AF37]">Amanullah ?</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed border-l-2 border-[#D4AF37]/30 pl-8 italic">
                I started my journey with technology through learning and exploring web development. 
                Over time, I developed a strong passion for creating modern and professional websites 
                from scratch. This passion led me toward software engineering, where I continuously 
                learn new technologies and build creative digital experiences that improve my skills 
                and solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-3xl md:text-5xl font-black text-white">{stat.value}</h4>
                  <p className="text-[10px] text-[#D4AF37]/80 uppercase tracking-[0.3em] font-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;