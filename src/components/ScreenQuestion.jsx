import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function ScreenQuestion({ onSelectYes, onSelectThink, config }) {
  const { questionScreen } = config;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[75vh]"
    >
      {/* Sincere, clean card */}
      <div className="w-full bg-[#FAF7FC] rounded-3xl p-8 sm:p-10 shadow-scrapbook border border-purple-200/70 text-center relative">
        {/* Subtle purple heart icon */}
        <div className="w-12 h-12 bg-purple-100/80 rounded-full flex items-center justify-center mx-auto mb-7 text-dream-violet">
          <Heart className="w-5 h-5 text-dream-violet fill-purple-300/40" />
        </div>

        {/* The Question */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-dream-accent font-bold mb-3 tracking-wide leading-snug">
          {questionScreen.question}
        </h2>

        {/* Reassurance Subtext */}
        <p className="font-sans text-xs sm:text-sm text-dream-textMuted/80 font-normal mb-9">
          {questionScreen.subtext}
        </p>

        {/* Equal, Respectful Choices */}
        <div className="flex flex-col gap-3.5 w-full">
          {/* Yes Option */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSelectYes}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-200 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{questionScreen.yesButton}</span>
          </motion.button>

          {/* Need Time Option (Equally styled, fully accessible, zero tricks or guilt) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSelectThink}
            className="w-full py-3.5 px-6 bg-white hover:bg-purple-50/80 text-dream-textMain font-medium rounded-full border border-purple-200 shadow-xs hover:border-purple-300 transition-all duration-200 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{questionScreen.thinkButton}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
