import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, 
  FaArrowLeft, FaDownload, FaUserAlt, FaCode, FaGraduationCap, FaBriefcase,
  FaLaptopCode, FaTerminal
} from 'react-icons/fa';

const Resume = () => {
  const skills = [
    "Laravel", "React.js", "PHP", "MySQL", "JavaScript", 
    "HTML5", "CSS3", "Tailwind CSS", "RESTful API", 
    "Git", "Node.js", "Express.js", "Bootstrap"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-4 md:p-12 font-sans selection:bg-[#D4AF37]/30">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center bg-[#111115] p-4 rounded-2xl border border-white/5 shadow-2xl">
          <Link to="/" className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-all font-black uppercase tracking-widest text-xs">
            <FaArrowLeft /> Back to Mission
          </Link>
          <div className="flex gap-4">
             <button onClick={() => window.print()} className="flex items-center gap-2 bg-[#D4AF37] text-black px-6 py-2 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg active:scale-95">
              <FaDownload /> Export PDF
            </button>
          </div>
        </div>

        {/* Main Resume Card */}
        <div className="bg-[#111115] rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="p-8 md:p-12 border-b border-white/5 bg-gradient-to-br from-[#111115] to-[#1a1a20]">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
                >
                  Aman<span className="text-[#D4AF37]">ullah</span>
                </motion.h1>
                <p className="text-xl md:text-2xl text-[#D4AF37] font-medium uppercase tracking-[0.3em]">
                  Web Developer & Tech Innovator
                </p>
                <div className="flex flex-wrap gap-6 pt-4 text-white/60 text-sm">
                  <div className="flex items-center gap-2"><FaUserAlt className="text-[#D4AF37]" /> Male</div>
                  <a href="mailto:engr.amanullah310ab@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-all"><FaEnvelope className="text-[#D4AF37]" /> engr.amanullah310ab@gmail.com</a>
                  <a href="tel:+923498673236" className="flex items-center gap-2 hover:text-[#D4AF37] transition-all"><FaPhoneAlt className="text-[#D4AF37]" /> +92 349 8673236</a>
                </div>
                <div className="flex flex-wrap gap-6 text-white/60 text-sm">
                  <a href="https://linkedin.com/in/amanullah-anjum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-all"><FaLinkedin className="text-[#D4AF37]" /> linkedin.com/in/amanullah-anjum</a>
                  <a href="https://github.com/Amanullah236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-all"><FaGithub className="text-[#D4AF37]" /> github.com/Amanullah236</a>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#D4AF37]" /> Rahim Yar Khan, Punjab, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-12">
            
            {/* Left Column (Story & Growth) */}
            <div className="lg:col-span-2 space-y-12">
              <motion.section 
                whileHover={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                className="space-y-6 p-6 border border-white/5 rounded-2xl transition-all bg-white/[0.01]"
              >
                <div className="flex items-center gap-4">
                  <FaUserAlt className="text-[#D4AF37] text-2xl" />
                  <h2 className="text-2xl font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2">About Me</h2>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  I'm a passionate Web Developer and Software Engineering student at **Islamia University of Bahawalpur Rahim yar khan campus**, focused on crafting 
                  modern, responsive, and high-performance web applications.
                </p>
              </motion.section>

              <motion.section 
                whileHover={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                className="space-y-6 p-6 border border-white/5 rounded-2xl transition-all bg-white/[0.01]"
              >
                <div className="flex items-center gap-4">
                  <FaBriefcase className="text-[#D4AF37] text-2xl" />
                  <h2 className="text-2xl font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2">Experience</h2>
                </div>
                <div className="relative pl-8 border-l border-[#D4AF37]/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Full Stack Web Developer</h3>
                  <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-3">HubMicroo • 2026 - Present</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Spearheading end-to-end development of enterprise-grade web applications, focusing on scalable backend architecture and high-performance frontend interfaces using Laravel and React.
                  </p>
                  <ul className="text-white/50 text-[11px] list-disc pl-4 space-y-1 font-medium">
                    <li>API Architecture & Integration</li>
                    <li>React 19 & Tailwind Design</li>
                    <li>Scalable Backend Systems</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section 
                whileHover={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                className="space-y-6 p-6 border border-white/5 rounded-2xl transition-all bg-white/[0.01]"
              >
                <div className="flex items-center gap-4">
                  <FaLaptopCode className="text-[#D4AF37] text-2xl" />
                  <h2 className="text-2xl font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2">Internship</h2>
                </div>
                <div className="relative pl-8 border-l border-[#D4AF37]/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Software Engineering Intern</h3>
                  <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-3">Devicon • 1 Year</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Collaborated in high-intensity team environments to deliver industrial-standard software solutions, gaining hands-on expertise in agile methodologies and professional development workflows.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                whileHover={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                className="space-y-6 p-6 border border-white/5 rounded-2xl transition-all bg-white/[0.01]"
              >
                <div className="flex items-center gap-4">
                  <FaGraduationCap className="text-[#D4AF37] text-2xl" />
                  <h2 className="text-2xl font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2">Academic</h2>
                </div>
                <div className="relative pl-8 border-l border-[#D4AF37]/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">BS Software Engineering</h3>
                  <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-3">IUB RYK • Final Year</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Acquiring deep theoretical and practical knowledge in software design, algorithms, and system architecture, with a primary focus on engineering solutions for real-world digital challenges.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-8"
              >
                <h3 className="text-sm font-black uppercase tracking-widest">Growth Metrics</h3>
                <div className="space-y-6">
                  {[{ l: 'Backend', v: '95%' }, { l: 'Frontend', v: '90%' }, { l: 'Database', v: '85%' }, { l: 'API', v: '92%' }].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.l}</span>
                        <span className="text-xs font-black text-[#D4AF37]">{stat.v}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: stat.v }} className="h-full bg-[#D4AF37]" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column (Details & Values) */}
            <div className="space-y-12">
              <section className="space-y-6">
                <h2 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest">{skill}</span>
                  ))}
                </div>
              </section>

              {/* Simplified Communication Hub for Resume */}
              <section className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-4">
                  <h2 className="text-sm font-black uppercase tracking-widest text-[#D4AF37]">Linguistic Hub</h2>
                  <FaTerminal className="text-[#D4AF37] text-xs" />
                </div>
                
                <div className="space-y-6">
                  {/* English Proficiency - Simple Style */}
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white">English</p>
                      <p className="text-[8px] font-black text-[#D4AF37] uppercase">Global Communication</p>
                    </div>
                    <span className="text-xl font-black text-white px-4 border-l border-white/10">C1</span>
                  </div>

                  {/* Native Tongues - Simple Badges */}
                  <div className="space-y-3">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 px-1">Native Tongues</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Urdu', 'Punjabi', 'Saraiki'].map(lang => (
                        <div key={lang} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/70">{lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Soulful Quote - Elegant Text */}
                  <p className="text-[10px] font-serif italic text-white/40 leading-relaxed border-t border-white/5 pt-4">
                    "Our mother tongue is the language of our soul; global language is the bridge to the world's wisdom."
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2">Training</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white">Full Stack Dev</h4>
                    <p className="text-[#D4AF37] text-[9px] font-black uppercase mt-1">Devicon • 4 Months</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white">Digital Marketing</h4>
                    <p className="text-[#D4AF37] text-[9px] font-black uppercase mt-1">DevCastle • 3 Months</p>
                  </div>
                </div>
              </section>

              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Philosophy</h3>
                <p className="text-xs font-serif italic text-white/90">"Driven by faith, grounded in respect, and powered by code."</p>
              </motion.section>

              <div className="grid grid-cols-2 gap-4">
                {['Innovation', 'Precision', 'Integrity', 'Global'].map(val => (
                  <div key={val} className="p-3 rounded-xl border border-white/5 text-center">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">{val}</h4>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['Service', 'Tech', 'History', 'Design'].map(item => (
                  <div key={item} className="p-3 bg-white/5 border border-white/5 rounded-xl text-center text-[9px] font-black uppercase tracking-widest text-white/60">
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
