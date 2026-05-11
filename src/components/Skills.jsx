import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws, 
  FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, 
  SiMongodb, SiRedis, SiGraphql, SiVercel, SiFramer, SiBootstrap, SiMysql, SiLaravel
} from 'react-icons/si';

const skills = [
  { 
    category: "Frontend", 
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-[#D4AF37]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-white" /> },
      { name: "Bootstrap 5", icon: <SiBootstrap className="text-[#D4AF37]" /> },
      { name: "JavaScript", icon: <FaJs className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#D4AF37]" /> },
      { name: "React", icon: <FaReact className="text-white" /> }
    ]
  },
  { 
    category: "Backend", 
    items: [
      { name: "PHP", icon: <FaPhp className="text-[#D4AF37]" /> },
      { name: "Laravel", icon: <SiLaravel className="text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#D4AF37]" /> },
      { name: "Express", icon: <FaJs className="text-white" /> }
    ]
  },
  { 
    category: "Database", 
    items: [
      { name: "MySQL", icon: <SiMysql className="text-[#D4AF37]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#D4AF37]" /> }
    ]
  },
  { 
    category: "Infrastructure", 
    items: [
      { name: "Docker", icon: <FaDocker className="text-white" /> },
      { name: "AWS", icon: <FaAws className="text-[#D4AF37]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#D4AF37]" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-[#D4AF37] uppercase">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto uppercase tracking-widest text-xs"
          >
            Deploying high-performance architecture with cutting-edge stack.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 p-8 rounded-2xl transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] group"
            >
              <h3 className="text-xs font-black mb-8 text-white/70 flex items-center gap-3 uppercase tracking-[0.4em] group-hover:text-[#D4AF37] transition-colors">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></span>
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                {category.items.map((skill, i) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-4 group/skill cursor-pointer"
                  >
                    <div className="text-4xl text-white/80 md:text-white/40 group-hover/skill:text-white transition-all duration-300 transform group-hover/skill:rotate-12 filter group-hover/skill:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                      {skill.icon}
                    </div>
                    <span className="text-[9px] font-black text-white/70 md:text-white/40 group-hover/skill:text-[#D4AF37] transition-all uppercase tracking-[0.2em] text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;