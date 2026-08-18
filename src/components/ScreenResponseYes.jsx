import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WashiTape from './WashiTape';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function ScreenResponseYes({ onNext, config }) {
  const { responseYes } = config;

  useEffect(() => {
    // Gentle, soft purple celebration (not overwhelming)
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#CDB5EE', '#9D7EC7', '#FCEAF2', '#FAF6FD', '#BFA2DB'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 45,
        origin: { x: 0.1, y: 0.7 },
        colors: colors,
        ticks: 200,
        gravity: 0.6,
        scalar: 0.9,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 45,
        origin: { x: 0.9, y: 0.7 },
        colors: colors,
        ticks: 200,
        gravity: 0.6,
        scalar: 0.9,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[75vh]"
    >
      {/* Top washi tape */}
      <div className="absolute -top-3 z-20">
        <WashiTape variant="pink" rotation="-1deg" width="w-24" />
      </div>

      {/* Celebration card */}
      <div className="w-full paper-texture rounded-3xl p-7 sm:p-9 shadow-scrapbook border border-purple-200/80 text-center relative overflow-hidden">
        
        {/* Soft glowing purple heart badge */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-tr from-purple-200 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-dream-violetDeep shadow-soft"
        >
          <Heart className="w-8 h-8 fill-dream-violet text-dream-violetDeep" />
        </motion.div>

        {/* Title */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-dream-accent font-bold mb-4 tracking-wide">
          {responseYes.title}
        </h2>

        {/* Messages */}
        <div className="space-y-3 mb-8 px-2">
          {responseYes.messages.map((msg, index) => (
            <p key={index} className="font-sans text-sm sm:text-base text-dream-textMain leading-relaxed">
              {msg}
            </p>
          ))}
        </div>

        {/* Next to Chapter 01 */}
        {responseYes.buttonText && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm sm:text-base cursor-pointer"
          >
            <span>{responseYes.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
