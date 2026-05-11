import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaTerminal } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-transparent pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <motion.div 
              animate={{ width: [0, 48, 48] }}
              transition={{ duration: 1 }}
              className="h-[2px] bg-[#D4AF37]"
            ></motion.div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-[0.3em] uppercase animate-glitch">
              Engineer <span className="text-[#D4AF37]">01</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#D4AF37] font-mono text-sm opacity-50 tracking-widest">const developer = { "{" }</span>
              <h1 className="text-4xl md:text-6xl font-medium text-white/80 pl-4">
                name: <span className="text-white font-black uppercase tracking-tighter">Amanullah</span>,
              </h1>
              <span className="text-[#D4AF37] font-mono text-sm opacity-50 tracking-widest pl-4">role: "Web Developer"</span>
              <span className="text-[#D4AF37] font-mono text-sm opacity-50 tracking-widest">{ "}" };</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none pt-4">
              Web <br />
              <span className="text-[#D4AF37]">DEVELOPER</span>
            </h2>
          </div>

          <p className="text-white/80 text-lg max-w-lg leading-relaxed border-l-2 border-yellow-500/50 pl-6">
  Passionate Software Engineering student and Web Developer focused on creating 
  modern, responsive, and user-friendly websites. I enjoy learning new technologies, 
  building creative digital experiences, and turning ideas into real-world projects. 
  Based in <span className="text-white font-bold">Rahim Yar Khan, Pakistan</span>, 
  with a vision to work and grow <span className="text-yellow-300 font-bold">Globally</span>.
</p>

          <div className="flex flex-wrap gap-6 pt-6">
            <a 
              href="https://github.com/Amanullah236" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95 text-center flex items-center justify-center"
            >
              Learn More
            </a>
            <Link 
              to="/resume" 
              className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all active:scale-95 flex items-center justify-center gap-2 text-center"
            >
              View Resume
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end w-full"
        >
          {/* Professional IDE Window */}
          <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
            {/* Window Header */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">amanullah.js</div>
              <div className="w-10"></div>
            </div>

            {/* IDE Content */}
            <div className="p-4 md:p-8 font-mono text-xs md:text-sm leading-relaxed">
              <div className="flex gap-4 md:gap-6">
                <div className="text-white/10 text-right select-none space-y-1">
                  {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(n => <div key={n}>{n}</div>)}
                </div>
                <div className="space-y-1">
                  <div><span className="text-[#c678dd]">class</span> <span className="text-[#e5c07b]">Amanullah</span> {"{"}</div>
                  <div className="pl-4 font-black italic text-white/20">// Full Stack Software Engineer</div>
                  <div className="pl-4"><span className="text-[#c678dd]">constructor</span>() {"{"}</div>
                  <div className="pl-8"><span className="text-[#e06c75]">this</span>.<span className="text-[#d19a66]">name</span> = <span className="text-[#98c379]">"Engr. Amanullah"</span>;</div>
                  <div className="pl-8"><span className="text-[#e06c75]">this</span>.<span className="text-[#d19a66]">degree</span> = <span className="text-[#98c379]">"BS Software Engineering"</span>;</div>
                  <div className="pl-8"><span className="text-[#e06c75]">this</span>.<span className="text-[#d19a66]">skills</span> = [<span className="text-[#98c379]">"Laravel"</span>, <span className="text-[#98c379]">"React"</span>, <span className="text-[#98c379]">"PHP"</span>, <span className="text-[#98c379]">"MySQL"</span>];</div>
                  <div className="pl-4">{"}"}</div>
                  <div className="pl-4"><span className="text-[#61afef]">mission</span>() {"{"}</div>
                  <div className="pl-8"><span className="text-[#c678dd]">return</span> <span className="text-[#98c379]">"Building scalable web solutions"</span>;</div>
                  <div className="pl-4">{"}"}</div>
                  <div>{"}"}</div>
                  <div className="pt-4"><span className="text-[#5c6370] italic">// Initializing professional profile...</span></div>
                  <div><span className="text-[#98c379]">console</span>.<span className="text-[#61afef]">log</span>(<span className="text-[#98c379]">"Status: Ready to Build."</span>);</div>
                </div>
              </div>
            </div>

            {/* Glowing effect inside IDE */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-10 -right-10 text-[#D4AF37]/10 text-9xl animate-float"><FaCode /></div>
          <div className="absolute -bottom-10 -left-10 text-white/5 text-8xl animate-float" style={{ animationDelay: '2s' }}><FaTerminal /></div>
        </motion.div>
      </div>

      {/* Ticker Bar */}
      <div className="absolute bottom-0 w-full bg-[#D4AF37]/5 backdrop-blur-sm border-t border-[#D4AF37]/10 py-4 overflow-hidden">
        <div className="flex gap-20 whitespace-nowrap animate-glitch-slow">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <span key={i} className="text-xs font-black uppercase tracking-[0.5em] text-white/50">
                Advanced Systems <span className="text-[#D4AF37]">_</span> Web Development <span className="text-[#D4AF37]">_</span> Cyber Architecture
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;