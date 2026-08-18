import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { contentConfig } from './config/content';
import { useYouTubeAudio } from './hooks/useYouTubeAudio';
import BackgroundDoodles from './components/BackgroundDoodles';
import MusicPlayer from './components/MusicPlayer';

// Screens
import ScreenOpening from './components/ScreenOpening';
import ScreenBuildup from './components/ScreenBuildup';
import ScreenEnvelope from './components/ScreenEnvelope';
import ScreenLetter from './components/ScreenLetter';
import ScreenTransition from './components/ScreenTransition';
import ScreenQuestion from './components/ScreenQuestion';
import ScreenResponseYes from './components/ScreenResponseYes';
import ScreenResponseThink from './components/ScreenResponseThink';
import ScreenChapterOne from './components/ScreenChapterOne';

export const SCREENS = {
  OPENING: 'OPENING',
  BUILDUP: 'BUILDUP',
  ENVELOPE: 'ENVELOPE',
  LETTER: 'LETTER',
  TRANSITION: 'TRANSITION',
  QUESTION: 'QUESTION',
  RESPONSE_YES: 'RESPONSE_YES',
  RESPONSE_THINK: 'RESPONSE_THINK',
  CHAPTER_ONE: 'CHAPTER_ONE',
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.OPENING);
  const audioState = useYouTubeAudio(contentConfig.youtubeVideoId);

  // Handle first user interaction to unlock/start background music
  const handleStartExperience = () => {
    audioState.playAudio();
    setCurrentScreen(SCREENS.BUILDUP);
  };

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-b from-[#FAF6FD] via-[#F6EEFD] to-[#FAF6FD] text-[#3B2D4A] py-6 sm:py-10">
      {/* Soft Background Doodles & Gradient Ambiance */}
      <BackgroundDoodles />

      {/* Floating Music Controller */}
      <MusicPlayer audioState={audioState} />

      {/* Main Interactive Screen Container */}
      <div className="w-full z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {currentScreen === SCREENS.OPENING && (
            <ScreenOpening
              key="opening"
              onNext={handleStartExperience}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.BUILDUP && (
            <ScreenBuildup
              key="buildup"
              onNext={() => setCurrentScreen(SCREENS.ENVELOPE)}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.ENVELOPE && (
            <ScreenEnvelope
              key="envelope"
              onNext={() => setCurrentScreen(SCREENS.LETTER)}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.LETTER && (
            <ScreenLetter
              key="letter"
              onNext={() => setCurrentScreen(SCREENS.TRANSITION)}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.TRANSITION && (
            <ScreenTransition
              key="transition"
              onNext={() => setCurrentScreen(SCREENS.QUESTION)}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.QUESTION && (
            <ScreenQuestion
              key="question"
              onSelectYes={() => setCurrentScreen(SCREENS.RESPONSE_YES)}
              onSelectThink={() => setCurrentScreen(SCREENS.RESPONSE_THINK)}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.RESPONSE_YES && (
            <ScreenResponseYes
              key="response-yes"
              onNext={() => setCurrentScreen(SCREENS.CHAPTER_ONE)}
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.RESPONSE_THINK && (
            <ScreenResponseThink
              key="response-think"
              config={contentConfig}
            />
          )}

          {currentScreen === SCREENS.CHAPTER_ONE && (
            <ScreenChapterOne
              key="chapter-one"
              config={contentConfig}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
