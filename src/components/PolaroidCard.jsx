import React from 'react';
import WashiTape from './WashiTape';

/**
 * Polaroid scrapbook card component for optional photos.
 */
export default function PolaroidCard({ 
  photo, 
  rotation = "-2deg",
  className = "" 
}) {
  if (!photo || !photo.url) return null;

  return (
    <div
      style={{ transform: `rotate(${photo.rotation || rotation})` }}
      className={`relative bg-[#FAF8F5] p-3 pb-5 rounded-sm shadow-scrapbook border border-[#ECE5D8] transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 ${className}`}
    >
      {/* Top washi tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <WashiTape variant="pink" width="w-16" height="h-4" rotation="1deg" />
      </div>

      {/* Photo frame */}
      <div className="w-full aspect-[4/3] bg-purple-50 overflow-hidden rounded-xs border border-purple-100/50 relative">
        <img
          src={photo.url}
          alt={photo.caption || "Scrapbook photo"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Handwritten caption */}
      {photo.caption && (
        <div className="mt-3 text-center">
          <p className="font-handwriting text-base text-dream-textMain leading-tight">
            {photo.caption}
          </p>
          {photo.date && (
            <span className="text-[10px] text-dream-textMuted/70 font-sans tracking-wide block mt-0.5">
              {photo.date}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
