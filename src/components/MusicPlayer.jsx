import React from 'react';
import { Music, Volume2, VolumeX, Pause, Play } from 'lucide-react';

/**
 * Floating Music Control badge and hidden YouTube player container.
 */
export default function MusicPlayer({ audioState }) {
  const { isPlaying, isReady, togglePlay, loadError } = audioState;

  return (
    <>
      {/* Hidden YouTube IFrame container */}
      <div 
        className="fixed -top-96 -left-96 w-1 h-1 pointer-events-none opacity-0 overflow-hidden" 
        aria-hidden="true"
      >
        <div id="youtube-hidden-player"></div>
      </div>

      {/* Floating Music Control Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 shadow-soft border ${
            isPlaying
              ? 'bg-purple-100/90 text-dream-violetDeep border-purple-300/80 shadow-glow backdrop-blur-md scale-100'
              : 'bg-white/85 text-dream-textMuted border-purple-200/60 hover:bg-purple-50/90 backdrop-blur-sm'
          } active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-300`}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          title={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Animated soundwave bars when playing, or music note when paused */}
          {isPlaying ? (
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 bg-dream-violetDeep rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3"></span>
              <span className="w-0.5 bg-dream-violetDeep rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s] h-2"></span>
              <span className="w-0.5 bg-dream-violetDeep rounded-full animate-[pulse_1s_ease-in-out_infinite_0.4s] h-3.5"></span>
            </div>
          ) : (
            <Music className="w-3.5 h-3.5 text-dream-violet" />
          )}

          <span className="font-sans text-[11px] tracking-tight">
            {isPlaying ? "♫ playing" : "♪ music"}
          </span>
        </button>
      </div>
    </>
  );
}
