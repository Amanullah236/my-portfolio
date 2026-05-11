import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setFileName('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <span className="text-white font-black tracking-[0.4em] uppercase text-xs">Transmission</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 leading-none uppercase tracking-tighter">
              Establish <br />
              <span className="text-[#D4AF37]">Contact</span>
            </h2>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-6 bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] text-white font-black uppercase tracking-widest text-xs mb-8"
                >
                  <span className="animate-pulse mr-2">●</span> Transmission Received Successfully
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="relative group">
                <input 
                  {...register("name", { required: "Name is required" })}
                  type="text" 
                  placeholder="Name"
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent text-white font-bold uppercase tracking-widest"
                  id="name"
                />
                <label htmlFor="name" className="absolute left-0 -top-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-[#D4AF37]">
                  Identity
                </label>
                {errors.name && <span className="text-[#D4AF37] text-[10px] font-bold mt-1 absolute left-0 bottom-[-20px] uppercase">{errors.name.message}</span>}
              </div>

              <div className="relative group">
                <input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  type="email" 
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent text-white font-bold uppercase tracking-widest"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 -top-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-[#D4AF37]">
                  Endpoint
                </label>
                {errors.email && <span className="text-[#D4AF37] text-[10px] font-bold mt-1 absolute left-0 bottom-[-20px] uppercase">{errors.email.message}</span>}
              </div>

              <div className="relative group">
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows="1"
                  placeholder="Message"
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent text-white font-bold uppercase tracking-widest resize-none"
                  id="message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-[#D4AF37]">
                  Data Packet
                </label>
                {errors.message && <span className="text-[#D4AF37] text-[10px] font-bold mt-1 absolute left-0 bottom-[-20px] uppercase">{errors.message.message}</span>}
              </div>

              <div className="relative">
                <label className="flex items-center gap-4 cursor-pointer text-white/30 hover:text-[#D4AF37] transition-colors">
                  <FaPaperclip />
                  <span className="text-[10px] font-black uppercase tracking-widest">{fileName || "Attach Documentation"}</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                  />
                </label>
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] active:scale-95"
              >
                Send Packet
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/10 text-center space-y-6 group">
          <motion.h3 
            whileHover={{ scale: 1.05, color: '#D4AF37' }}
            className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter cursor-default transition-all"
          >
            Amanullah<span className="text-[#D4AF37]">_</span>
          </motion.h3>
          <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.5em] max-w-2xl mx-auto leading-relaxed">
            Designed with focus <span className="text-[#D4AF37]">●</span> All rights reserved for Amanullah.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;