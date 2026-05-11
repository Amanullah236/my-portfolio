import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#D4AF37] rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D4AF37] rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_#D4AF37]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </>
  );
};

export default CustomCursor;
