import React from 'react';

/**
 * Gentle floating doodles: purple stars, sparkles, cute hearts, and subtle petals.
 * Designed to look like a soft, dreamy scrapbook background without being distracting.
 */
export default function BackgroundDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-70">
      {/* Top Left Sparkle Cluster */}
      <div className="absolute top-6 left-6 text-dream-lilac text-lg animate-float-slow opacity-60">
        ✦
      </div>
      <div className="absolute top-16 left-14 text-dream-violet text-sm animate-pulse-subtle opacity-50">
        ✿
      </div>
      <div className="absolute top-28 left-4 text-dream-pinkAccent text-xs animate-wiggle-gentle opacity-40">
        ♡
      </div>

      {/* Top Right Cluster */}
      <div className="absolute top-8 right-10 text-dream-violet text-base animate-float-reverse opacity-65">
        ˚₊‧
      </div>
      <div className="absolute top-24 right-5 text-dream-lilac text-xs animate-pulse-subtle opacity-45">
        ✦
      </div>
      <div className="absolute top-36 right-12 text-dream-pinkAccent text-sm animate-float-slow opacity-50">
        ♡
      </div>

      {/* Middle Floating Accents */}
      <div className="absolute top-1/3 left-4 text-dream-lilac text-xs opacity-40 hidden sm:block">
        ✿ ‧₊˚
      </div>
      <div className="absolute top-1/2 right-4 text-dream-violet text-xs opacity-40 hidden sm:block">
        ✦
      </div>
      <div className="absolute top-2/3 left-6 text-dream-pinkAccent text-sm opacity-50 animate-float-slow">
        ♡
      </div>
      <div className="absolute top-3/4 right-8 text-dream-lilac text-base opacity-45 animate-float-reverse">
        ✿
      </div>

      {/* Bottom Floating Accents */}
      <div className="absolute bottom-10 left-8 text-dream-violet text-sm animate-pulse-subtle opacity-55">
        ✦
      </div>
      <div className="absolute bottom-6 right-10 text-dream-lilac text-sm animate-float-slow opacity-60">
        ˚₊‧ ♡
      </div>
      <div className="absolute bottom-16 right-4 text-dream-pinkAccent text-xs opacity-40">
        ✿
      </div>

      {/* Soft gradient orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-200/15 rounded-full blur-3xl" />
    </div>
  );
}
