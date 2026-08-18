import React from 'react';

/**
 * Scrapbook washi tape element for corners and card decorations.
 */
export default function WashiTape({ 
  className = "", 
  variant = "lavender", 
  rotation = "-3deg", 
  width = "w-20 sm:w-24",
  height = "h-5 sm:h-6"
}) {
  const bgStyles = {
    lavender: "bg-purple-300/60 border-t border-b border-purple-200/40",
    pink: "bg-pink-300/60 border-t border-b border-pink-200/40",
    lilac: "bg-indigo-200/60 border-t border-b border-indigo-100/40",
    cream: "bg-amber-100/70 border-t border-b border-amber-200/40",
  };

  return (
    <div
      style={{ transform: `rotate(${rotation})` }}
      className={`relative ${width} ${height} ${bgStyles[variant] || bgStyles.lavender} backdrop-blur-xs shadow-sm flex items-center justify-center overflow-hidden pointer-events-none select-none z-10 ${className}`}
    >
      {/* Subtle paper torn edge effect on left and right */}
      <div className="absolute inset-y-0 left-0 w-1 bg-white/30" />
      <div className="absolute inset-y-0 right-0 w-1 bg-white/30" />
      {/* Subtle micro dots pattern on washi tape */}
      <div className="w-full h-full opacity-20 flex justify-around items-center text-[8px] text-purple-900">
        • • • •
      </div>
    </div>
  );
}
