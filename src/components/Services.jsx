import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaPalette, FaRocket, FaShieldAlt, FaTerminal } from 'react-icons/fa';

const services = [
  { 
    title: 'Frontend Dev', 
    desc: 'Crafting immersive, responsive, and high-performance user interfaces using React and modern CSS.', 
    icon: <FaCode />, 
    color: '#D4AF37' 
  },
  { 
    title: 'Backend Dev', 
    desc: 'Building robust, secure, and scalable server-side logic and database architectures.', 
    icon: <FaServer />, 
    color: '#FFFFFF' 
  },
  { 
    title: 'Full-Stack Web', 
    desc: 'Delivering end-to-end web applications with seamless integration between client and server.', 
    icon: <FaRocket />, 
    color: '#D4AF37' 
  },
  { 
    title: 'API Solutions', 
    desc: 'Connecting platforms with third-party services and building custom RESTful architectures.', 
    icon: <FaTerminal />, 
    color: '#FFFFFF' 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Core <span className="text-[#D4AF37]">Services</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 group transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
