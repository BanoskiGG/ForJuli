import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WashiTape from './WashiTape';
import { Heart, MailOpen } from 'lucide-react';

export default function ScreenEnvelope({ onNext, config }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Smooth delay before transitioning to full letter reading view
    setTimeout(() => {
      onNext();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[78vh]"
    >
      {/* Washi tape decoration */}
      <div className="absolute -top-3 z-30">
        <WashiTape variant="lavender" rotation="-1.5deg" width="w-28" />
      </div>

      {/* Intro Header */}
      <div className="text-center mb-6 z-10">
        <h2 className="font-handwriting text-3xl sm:text-4xl text-dream-accent font-bold tracking-wide">
          {config.envelope.title}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-dream-textMuted mt-1">
          {config.envelope.subtitle}
        </p>
      </div>

      {/* Interactive Envelope Container */}
      <div
        onClick={handleOpen}
        className="w-full max-w-[320px] sm:max-w-[350px] aspect-[4/3] relative cursor-pointer group perspective-1000 select-none my-2"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpen()}
        aria-label="Click to open letter envelope"
      >
        {/* Envelope Base Body */}
        <div className="w-full h-full bg-[#EADCF8] rounded-2xl shadow-envelope border border-purple-300/60 relative overflow-hidden flex flex-col justify-end p-5 transition-transform duration-300 group-hover:scale-[1.02]">
          
          {/* Subtle paper grain texture */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#9D7EC7_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Envelope Bottom Triangle Flaps */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#DEC8F4] to-[#E6D4F7] clip-path-envelope-body border-t border-purple-200/50 z-10 flex items-center justify-center" />

          {/* Letter inside peek animation */}
          <motion.div
            initial={{ y: 0 }}
            animate={isOpen ? { y: -70, opacity: 1 } : { y: 0, opacity: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-6 right-6 top-6 bottom-4 bg-[#FDFBF7] rounded-t-lg shadow-md border border-[#E9DFCF] z-5 p-3 flex flex-col items-center justify-start overflow-hidden"
          >
            <div className="w-12 h-1 bg-purple-200 rounded-full mb-2 opacity-60" />
            <div className="w-full space-y-1.5 opacity-40">
              <div className="w-full h-1 bg-purple-300/40 rounded-full" />
              <div className="w-4/5 h-1 bg-purple-300/40 rounded-full" />
              <div className="w-3/4 h-1 bg-purple-300/40 rounded-full" />
            </div>
          </motion.div>

          {/* Envelope Top Flap (Flips open on tap) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 15 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-[#E1CEF5] border-b border-purple-300/60 rounded-t-2xl shadow-xs flex items-center justify-center"
          >
            {/* Purple Wax Seal with Heart */}
            {!isOpen && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-5 w-11 h-11 bg-gradient-to-tr from-[#7B55AB] to-[#9D7EC7] rounded-full shadow-md border-2 border-[#FAF6FD] flex items-center justify-center z-20"
              >
                <Heart className="w-5 h-5 text-white fill-white/80" />
              </motion.div>
            )}
          </motion.div>

          {/* Handwritten envelope recipient label */}
          <div className="relative z-12 text-center mt-auto pb-1">
            <span className="font-handwriting text-xl sm:text-2xl text-dream-accent font-bold tracking-wide">
              {config.letter.salutation.replace(',', '')} ♡
            </span>
          </div>
        </div>
      </div>

      {/* Button below envelope */}
      <div className="mt-8 z-10 w-full flex justify-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          disabled={isOpen}
          className="px-8 py-3.5 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-300 flex items-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-80"
        >
          <MailOpen className="w-4 h-4" />
          <span>{isOpen ? "Opening letter..." : config.envelope.buttonText}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
