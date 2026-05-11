import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaFacebookF, FaInstagram, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCopy 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const contactInfo = [
    { 
      label: 'Email', 
      value: 'engr.amanullah310ab@gmail.com', 
      icon: <FaEnvelope />, 
      action: 'copy' 
    },
    { 
      label: 'Phone', 
      value: '+92 349 8673236', 
      icon: <FaPhoneAlt />, 
      action: 'copy' 
    },
    { 
      label: 'Location', 
      value: 'Rahim Yar Khan, Punjab, Pakistan', 
      icon: <FaMapMarkerAlt />, 
      action: 'none' 
    }
  ];

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20 py-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-black text-white tracking-tighter"
            >
              AMANULLAH<span className="text-[#D4AF37]">_</span>
            </motion.h2>
            <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] leading-relaxed max-w-sm">
              Developing high-performance web applications with a focus on modern architecture, security, and exceptional user experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaGithub />, name: 'Github', url: 'https://github.com/Amanullah236' },
                { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/amanullah-anjum' },
                { icon: <FaFacebookF />, name: 'Facebook', url: 'https://www.facebook.com/aman.ullah.876719' },
                { icon: <FaInstagram />, name: 'Instagram', url: 'https://www.instagram.com/amanullah.developer?igsh=b3o4MmF4YXBwYzZo' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: '#D4AF37', color: '#D4AF37' }}
                  className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 transition-all rounded-full hover:bg-[#D4AF37]/5"
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#D4AF37]">Get In Touch</h4>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="group flex items-start gap-5">
                  <div className="text-[#D4AF37] text-xl mt-1">{info.icon}</div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">{info.label}</p>
                    <div className="flex items-center gap-3">
                      <p className="text-white text-sm md:text-base font-bold tracking-wider">{info.value}</p>
                      {info.action === 'copy' && (
                        <button 
                          onClick={() => copyToClipboard(info.value, info.label)}
                          className="text-white/40 hover:text-[#D4AF37] transition-colors p-1"
                          title={`Copy ${info.label}`}
                        >
                          <FaCopy size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links / Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#D4AF37]">Newsletter</h4>
            <div className="space-y-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL"
                  className="w-full bg-white/[0.05] border border-white/10 py-4 px-6 text-xs font-bold tracking-widest focus:outline-none focus:border-[#D4AF37]/50 transition-all uppercase text-white"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors">
                  JOIN
                </button>
              </div>
              <p className="text-xs text-white/40 font-medium tracking-wide leading-relaxed">
                Stay updated with my latest projects and tech insights.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
            © {currentYear} Amanullah. All Rights Reserved.
          </p>
          
          <div className="flex gap-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Copy Notification Pop-up */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 bg-[#D4AF37] text-black px-8 py-3 font-black uppercase tracking-widest text-[10px] shadow-2xl z-[200]"
          >
            {copiedText} Copied to Clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
