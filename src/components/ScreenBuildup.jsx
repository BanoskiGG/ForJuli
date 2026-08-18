import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WashiTape from './WashiTape';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function ScreenBuildup({ onNext, config }) {
  const [currentStep, setCurrentStep] = useState(0);
  const messages = config.buildup.messages;
  const isLastStep = currentStep >= messages.length;

  const handleNextMessage = () => {
    if (currentStep < messages.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[78vh]"
    >
      {/* Top washi tape */}
      <div className="absolute -top-3 z-20">
        <WashiTape variant="pink" rotation="2deg" width="w-24 sm:w-28" />
      </div>

      {/* Main card */}
      <div className="w-full paper-texture rounded-3xl p-6 sm:p-8 shadow-scrapbook border border-purple-100/80 relative flex flex-col justify-between min-h-[380px]">
        {/* Progress dots */}
        <div className="flex justify-center items-center gap-1.5 mb-6">
          {messages.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                idx === currentStep
                  ? 'w-6 bg-dream-violetDeep'
                  : idx < currentStep
                  ? 'w-2 bg-dream-violet/60'
                  : 'w-2 bg-purple-200/50'
              }`}
            />
          ))}
          <div
            className={`h-1.5 rounded-full transition-all duration-400 ${
              isLastStep ? 'w-6 bg-dream-pinkAccent' : 'w-2 bg-purple-200/50'
            }`}
          />
        </div>

        {/* Message Container */}
        <div className="my-auto py-4 text-center">
          <AnimatePresence mode="wait">
            {!isLastStep ? (
              <motion.div
                key={`msg-${currentStep}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="space-y-4"
              >
                <span className="text-dream-violet/40 font-handwriting text-lg block">
                  ✦ {currentStep + 1} / {messages.length} ✦
                </span>
                <p className="font-sans text-base sm:text-lg text-dream-textMain font-medium leading-relaxed px-3">
                  "{messages[currentStep]}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="final-buildup"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <div className="p-4 bg-purple-50/80 rounded-2xl border border-purple-200/50 relative">
                  <span className="absolute -top-3 left-4 text-xs bg-white px-2 py-0.5 rounded-full text-dream-violet font-mono border border-purple-200/60 shadow-2xs">
                    // a small confession
                  </span>
                  <p className="font-handwriting text-xl sm:text-2xl text-dream-accent leading-relaxed pt-1">
                    "{config.buildup.handwrittenNote}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-purple-100/50 flex flex-col items-center">
          {!isLastStep ? (
            <button
              onClick={handleNextMessage}
              className="px-6 py-2.5 bg-purple-100 hover:bg-purple-200/80 text-dream-violetDeep font-medium rounded-full text-sm transition-all duration-200 flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Next ♡</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-dream-violet to-dream-violetDeep text-white font-medium rounded-full shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>{config.buildup.buttonText}</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
