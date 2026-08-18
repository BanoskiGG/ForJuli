import React from 'react';
import { motion } from 'framer-motion';
import WashiTape from './WashiTape';
import PolaroidCard from './PolaroidCard';
import { Heart, Sparkles } from 'lucide-react';

export default function ScreenChapterOne({ config }) {
  const { chapterOne, photos } = config;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-lg mx-auto px-4 py-8 relative pb-20"
    >
      {/* Header Section */}
      <div className="text-center mb-8 relative">
        <div className="inline-block relative">
          <WashiTape variant="lavender" rotation="-2deg" width="w-28" className="mx-auto mb-2" />
          <h1 className="font-handwriting text-4xl sm:text-5xl text-dream-accent font-bold tracking-wide">
            {chapterOne.title}
          </h1>
        </div>
        <p className="font-handwriting text-lg sm:text-xl text-dream-violetDeep mt-1">
          {chapterOne.subtitle}
        </p>
      </div>

      {/* Optional Photo Memories Grid (if photos provided) */}
      {photos && photos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {photos.map((photo, idx) => (
            <PolaroidCard key={idx} photo={photo} />
          ))}
        </div>
      )}

      {/* Scrapbook Intention Cards List */}
      <div className="space-y-4">
        {chapterOne.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="paper-texture rounded-2xl p-5 sm:p-6 shadow-scrapbook border border-purple-100/80 relative hover:border-purple-200/80 transition-all duration-300"
          >
            {/* Washi tape on first and odd cards */}
            {index % 2 === 0 && (
              <div className="absolute -top-2.5 right-6 z-10">
                <WashiTape variant="pink" width="w-16" height="h-4" rotation={index % 4 === 0 ? "2deg" : "-2deg"} />
              </div>
            )}

            <div className="flex items-start gap-3">
              <span className="text-2xl select-none" aria-hidden="true">
                {card.icon}
              </span>
              <div className="flex-1">
                <h3 className="font-handwriting text-xl sm:text-2xl text-dream-accent font-bold mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-dream-textMain leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* End Note & Signature Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 p-6 text-center paper-texture rounded-2xl border border-[#EDE4D6] shadow-sm relative"
      >
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
          <WashiTape variant="lavender" width="w-20" height="h-4" rotation="-1deg" />
        </div>
        
        <p className="font-handwriting text-2xl sm:text-3xl text-dream-accent font-bold mb-2">
          {chapterOne.endingNote}
        </p>

        <p className="font-handwriting text-xl text-dream-violetDeep">
          {chapterOne.signature}
        </p>
      </motion.div>
    </motion.div>
  );
}
