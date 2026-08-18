import React from 'react';
import { motion } from 'framer-motion';
import WashiTape from './WashiTape';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ScreenTransition({ onNext, config }) {
  const { afterLetter } = config;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[75vh]"
    >
      {/* Top washi tape */}
      <div className="absolute -top-3 z-20">
        <WashiTape variant="lavender" rotation="-2deg" width="w-24" />
      </div>

      {/* Main card */}
      <div className="w-full paper-texture rounded-3xl p-7 sm:p-9 shadow-scrapbook border border-purple-100/80 text-center relative">
        <div className="w-12 h-12 bg-purple-100/70 rounded-full flex items-center justify-center mx-auto mb-6 text-dream-violet">
          <Sparkles className="w-5 h-5 text-dream-violet" />
        </div>

        <p className="font-handwriting text-2xl text-dream-violetDeep mb-2">
          {afterLetter.firstLine}
        </p>

        <p className="font-sans text-sm sm:text-base text-dream-textMain font-medium leading-relaxed mb-4 px-2">
          {afterLetter.secondLine}
        </p>

        <p className="font-sans text-xs sm:text-sm text-dream-textMuted leading-relaxed mb-8 px-4">
          {afterLetter.thirdLine}
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm sm:text-base cursor-pointer"
        >
          <span>{afterLetter.buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
