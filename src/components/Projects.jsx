import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Exclusive Private Parties",
    desc: "A premium private events and celebration website with elegant UI/UX, cinematic hero sections, responsive design, and modern frontend animations built for luxury event experiences.",
    tech: ["Event Booking System", "Event Categories", "Event planning & coordination", "Custom event planning"],
    image: "/images/projects/project images.jpeg",
    
  },
  {
    title: "Admin Dashboard (Management Panel)",
    desc: "The dashboard provides real-time insights into platform activity, ensuring smooth operation of all private events and luxury experiences. It is built with a focus on performance, security, and ease of use.",
    tech: ["User Management", "Event Scheduling System", "Payment Tracking"],
    image: "/images/projects/image.png",
    github: "#",
    live: "#"
  },

{
    title: "HealthPlus — Your Health Partner",
    desc: "HealthPlus is a healthcare management platform that provides online doctor appointments, medical consultations, and health services.",
    tech: ["Online Appointment Booking", "Doctor Profiles", "Online Consultation", "Event Showcase Sections","Contact & Inquiry Forms"],
    image: "/images/projects/project4.png",
    
  },

  {
    title: "LuxeCart Commerce",
    desc: "A modern luxury eCommerce platform with real-time inventory, secure Stripe payments, responsive design, and advanced shopping experiences built using the MERN stack.",
    tech: ["Product Management System", "Real-Time Inventory System", "Smart Shopping Cart", "User Authentication System"],
    image: "/images/projects/project3.png",
    github: "#",
    live: "#"
  },

  {
    title: "EduBridge — Global Learning Platform",
    desc: "EduBridge is an international online learning platform where students can join live courses, watch tutorials, and get certifications from teachers around the world.",
    tech: ["Online Course System", "Live Classes", "Video Tutorials Library", "Certification System"],
    image: "/images/projects/project5.png",
    
  },
  {
    title: "TravelVista — Explore The World",
    desc: "TravelVista is a modern travel and tourism website that helps users discover destinations, book hotels, and plan trips worldwide. It features a sleek design, interactive maps, and personalized recommendations for an unforgettable travel experience.",
    tech: ["Flight Booking System","Hotel Reservation", "Destination Explorer", ],
    image: "/images/projects/project6.png",
    
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter"
          >
            Mission <span className="text-[#D4AF37]">Reports</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/[0.02] rounded-none overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)]"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden block">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover md:grayscale brightness-90 md:brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 border border-[#D4AF37]/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-black mb-3 text-white uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.desc}
                </p>
                
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-[#D4AF37] hover:text-white transition-all uppercase group/btn"
                >
                  Execute Project <span className="w-8 h-[1px] bg-[#D4AF37] group-hover/btn:w-12 transition-all"></span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;