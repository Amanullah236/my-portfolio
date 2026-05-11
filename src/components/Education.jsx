import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity, FaAward } from 'react-icons/fa';

const education = [
  { 
    title: "BS Software Engineering", 
    inst: "The Islamia University of Bahawalpur Rahim Yar Khan Campus", 
    year: "In Progress ",
    desc: "Specializing in advanced software architecture, algorithms, and full-stack development systems.",
    icon: <FaUniversity />
  },
  { 
    title: "Intermediate (Pre-Engineering)", 
    inst: "Govt. Post Graduate College Khanpur", 
    year: "Completed",
    desc: "Focused on advanced mathematics, physics, and computer science foundations.",
    icon: <FaSchool />
  },
  { 
    title: "Matriculation (Computer Science)", 
    inst: "Govt. Boys High School Chak No.225/1-L Head Fareed, Cholistan", 
    year: "Completed",
    desc: "Foundational studies in mathematics and initial programming concepts.",
    icon: <FaAward />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-black relative border-t border-[#D4AF37]/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Academic <span className="text-[#D4AF37]">Journey</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex gap-8 md:gap-12 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  {item.icon}
                </div>
                {index !== education.length - 1 && (
                  <div className="w-[2px] h-full bg-gradient-to-b from-[#D4AF37]/50 to-transparent my-4"></div>
                )}
              </div>

              <div className="pb-12">
                <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">{item.title}</h3>
                <p className="text-[#D4AF37] font-medium mb-4">{item.inst}</p>
                <p className="text-white/80 leading-relaxed max-w-2xl text-sm italic">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
