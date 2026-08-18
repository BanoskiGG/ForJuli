import React from 'react';
import { motion } from 'framer-motion';
import WashiTape from './WashiTape';
import { Sparkles, Heart } from 'lucide-react';

export default function ScreenResponseThink({ config }) {
  const { responseThink } = config;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[75vh]"
    >
      {/* Top washi tape */}
      <div className="absolute -top-3 z-20">
        <WashiTape variant="lavender" rotation="2deg" width="w-24" />
      </div>

      {/* Gentle respectful card */}
      <div className="w-full paper-texture rounded-3xl p-7 sm:p-9 shadow-scrapbook border border-purple-100/80 text-center relative">
        <div className="w-12 h-12 bg-purple-100/70 rounded-full flex items-center justify-center mx-auto mb-6 text-dream-violet">
          <span className="text-xl">✿</span>
        </div>

        <h2 className="font-handwriting text-3xl sm:text-4xl text-dream-accent font-bold mb-4 tracking-wide">
          {responseThink.title}
        </h2>

        <div className="space-y-3 mb-6 px-2">
          {responseThink.messages.map((msg, idx) => (
            <p key={idx} className="font-sans text-sm sm:text-base text-dream-textMain leading-relaxed">
              {msg}
            </p>
          ))}
        </div>

        {responseThink.closing && (
          <div className="pt-4 border-t border-purple-100/60 mt-4">
            <p className="font-handwriting text-lg sm:text-xl text-dream-textMuted">
              {responseThink.closing}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
