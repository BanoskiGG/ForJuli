import React from 'react';
import { motion } from 'framer-motion';
import WashiTape from './WashiTape';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';

export default function ScreenLetter({ onNext, config }) {
  const { letter } = config;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-lg mx-auto px-3 sm:px-4 py-6 relative"
    >
      {/* Letter Container with Physical Paper Styling */}
      <div className="relative paper-texture rounded-2xl p-6 sm:p-9 shadow-letter border border-[#EDE4D6] transition-shadow duration-300">
        
        {/* Top-Left and Top-Right Washi Tape */}
        <div className="absolute -top-3 left-4 z-20">
          <WashiTape variant="lavender" rotation="-4deg" width="w-20 sm:w-24" />
        </div>
        <div className="absolute -top-3 right-4 z-20">
          <WashiTape variant="pink" rotation="3deg" width="w-20 sm:w-24" />
        </div>

        {/* Small top decorative stamp / doodle */}
        <div className="flex justify-between items-center mb-6 pt-2 border-b border-purple-100/60 pb-3">
          <span className="text-xs font-handwriting text-dream-violet font-semibold tracking-wider uppercase">
            ✦ a note for you ✦
          </span>
          <div className="flex items-center gap-1 text-dream-pinkAccent text-xs">
            <span>✿</span>
            <span>♡</span>
          </div>
        </div>

        {/* Salutation */}
        <h1 className="font-handwriting text-3xl sm:text-4xl text-dream-accent font-bold mb-5 tracking-wide">
          {letter.salutation}
        </h1>

        {/* Letter Paragraphs */}
        <div className="space-y-4 text-dream-textMain font-sans text-sm sm:text-base leading-relaxed tracking-normal">
          {letter.paragraphs.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Handwritten Signature */}
        <div className="mt-8 pt-4 border-t border-purple-100/50 flex flex-col items-end">
          <p className="font-handwriting text-2xl sm:text-3xl text-dream-violetDeep font-bold tracking-wide">
            {letter.signature}
          </p>
          <span className="text-[11px] font-handwriting text-dream-textMuted/70 mt-0.5">
            with all my honesty ♡
          </span>
        </div>

        {/* Bottom Washi Tape */}
        <div className="absolute -bottom-2.5 right-8 z-20">
          <WashiTape variant="lilac" rotation="-2deg" width="w-20" height="h-4" />
        </div>
      </div>

      {/* Button to proceed */}
      <div className="mt-8 flex justify-center pb-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-8 py-3.5 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-300 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
        >
          <span>{letter.buttonText || "Next →"}</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
