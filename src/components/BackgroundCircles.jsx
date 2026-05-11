import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  const balls = [
    { id: 1, size: 'w-40 h-40', color: 'bg-[#D4AF37]/10', animate: { x: ['0vw', '100vw', '0vw'], y: ['0vh', '100vh', '0vh'] } },
    { id: 2, size: 'w-64 h-64', color: 'bg-[#D4AF37]/5', animate: { x: ['100vw', '0vw', '100vw'], y: ['50vh', '10vh', '50vh'] } },
    { id: 3, size: 'w-32 h-32', color: 'bg-white/5', animate: { x: ['50vw', '0vw', '50vw'], y: ['100vh', '0vh', '100vh'] } },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
      {/* Noise Overlay */}
      <div className="noise" />
      
      {/* Scanline */}
      <div className="scanline" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* Golden Balls */}
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className={`absolute rounded-full blur-[80px] ${ball.size} ${ball.color}`}
          animate={ball.animate}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Code Symbols (Floating) */}
      {['{ }', '< >', '( )', ';', '//', '=>', '[]'].map((symbol, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute text-[#D4AF37]/10 font-mono text-4xl select-none"
          initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
          animate={{
            x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            rotate: [0, 360],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Error Symbols (Red-ish or Gold Flicker) */}
      {['!', '?', 'x'].map((error, i) => (
        <motion.div
          key={`error-${i}`}
          className="absolute text-white/5 font-mono text-2xl select-none"
          initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 2 }}
        >
          {error}
        </motion.div>
      ))}

      {/* Stars (Particles) */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-[1px] h-[1px] bg-white rounded-full"
          style={{ 
            left: `${Math.random() * 100}vw`, 
            top: `${Math.random() * 100}vh` 
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Modern Golden Vertical Lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-[1px] h-full bg-[#D4AF37]/5"
          style={{ left: `${20 * i}%` }}
          animate={{
            opacity: [0, 0.3, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;




