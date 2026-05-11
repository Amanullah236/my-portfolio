import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaTerminal, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaBriefcase /> },
    { name: 'Services', href: '#services', icon: <FaTerminal /> },
    { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { name: 'Skills', href: '#skills', icon: <FaTerminal /> },
    { name: 'Projects', href: '#projects', icon: <FaCode /> },
    { name: ' Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <div className="fixed top-6 md:top-8 left-0 w-full z-[100] px-4 flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`pointer-events-auto flex items-center gap-2 md:gap-4 p-2 md:px-6 md:py-3 rounded-full border border-[#D4AF37]/30 bg-black/80 backdrop-blur-2xl shadow-[0_0_30px_rgba(212,175,55,0.15)] max-w-fit transition-all duration-300 ${
            scrolled ? 'scale-90 border-[#D4AF37]/50' : 'scale-100'
          }`}
        >
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-full transition-all hover:bg-[#D4AF37]/10"
              >
                <span className="text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  {link.icon}
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </span>
                <motion.span 
                  className="absolute inset-0 rounded-full border border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="nav-hover"
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center px-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-[#D4AF37] p-2 hover:bg-[#D4AF37]/10 rounded-full transition-all"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white ml-2">Menu</span>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-8 w-full max-w-xs">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/50 group transition-all"
                >
                  <span className="text-3xl text-[#D4AF37] group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xl font-black uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
                      {link.name}
                    </span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Navigate to {link.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => setIsOpen(false)}
              className="mt-12 w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-2xl hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              <HiX />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


