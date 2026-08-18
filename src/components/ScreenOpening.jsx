import React from 'react';
import { motion } from 'framer-motion';
import WashiTape from './WashiTape';
import { Sparkles, Heart } from 'lucide-react';

export default function ScreenOpening({ onNext, config }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[75vh]"
    >
      {/* Decorative Washi Tape */}
      <div className="absolute -top-3 sm:-top-4 z-20">
        <WashiTape variant="lavender" rotation="-2deg" width="w-24 sm:w-28" />
      </div>

      {/* Main Card */}
      <div className="w-full paper-texture rounded-3xl p-7 sm:p-9 shadow-scrapbook border border-purple-100/80 text-center relative overflow-hidden">
        {/* Subtle decorative background badge */}
        <div className="w-14 h-14 bg-purple-100/60 rounded-full flex items-center justify-center mx-auto mb-6 text-dream-violet">
          <Heart className="w-6 h-6 fill-purple-300/40 text-dream-violet" />
        </div>

        {/* Text content */}
        <h1 className="font-handwriting text-3xl sm:text-4xl text-dream-accent font-bold mb-3 tracking-wide leading-snug">
          {config.opening.greeting}
        </h1>

        <p className="font-sans text-sm sm:text-base text-dream-textMuted leading-relaxed mb-8 px-2">
          {config.opening.subtext}
        </p>

        {/* Interactive Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm sm:text-base cursor-pointer"
        >
          <span>{config.opening.buttonText}</span>
        </motion.button>
      </div>

      {/* Subtle bottom scrapbook hint */}
      <p className="mt-5 text-[11px] text-dream-textMuted/60 font-sans tracking-wide text-center">
        ✧ best experienced with sound ✧
      </p>
    </motion.div>
  );
}
