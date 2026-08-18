import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook to manage background music via the YouTube IFrame API.
 * Keeps player hidden, handles mobile restrictions, and provides play/pause/ready states.
 */
export function useYouTubeAudio(videoId) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const playerRef = useRef(null);

  // Initialize YouTube IFrame API
  useEffect(() => {
    if (!videoId) return;

    let isMounted = true;

    // Callback when API is ready
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player('youtube-hidden-player', {
          height: '1',
          width: '1',
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            rel: 0,
            modestbranding: 1,
            disablekb: 1,
          },
          events: {
            onReady: (event) => {
              if (!isMounted) return;
              setIsReady(true);
              try {
                event.target.setVolume(70);
                event.target.playVideo();
              } catch (e) {
                console.warn('Volume adjust/autoplay error:', e);
              }
            },
            onStateChange: (event) => {
              if (!isMounted) return;
              // YT.PlayerState.PLAYING is 1, BUFFERING is 3, PAUSED is 2, CUED is 5
              if (event.data === 1) {
                setIsPlaying(true);
                setHasStartedOnce(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
            onError: (err) => {
              console.warn('YouTube IFrame Player error:', err);
              if (isMounted) {
                setLoadError(true);
              }
            },
          },
        });
      } catch (e) {
        console.warn('Failed to construct YT player:', e);
        if (isMounted) setLoadError(true);
      }
    };

    // Check if script already exists
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    // Global one-time interaction listener to unblock autoplay on strict mobile browsers
    const handleFirstGesture = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.playVideo();
        } catch (e) {
          // ignore
        }
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('pointerdown', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true, passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }
    };
  }, [videoId]);

  // Safe play trigger (can be invoked by initial button click)
  const playAudio = useCallback(() => {
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        playerRef.current.playVideo();
        setIsPlaying(true);
        setHasStartedOnce(true);
      } catch (e) {
        console.warn('Play video failed:', e);
      }
    }
  }, []);

  // Safe pause trigger
  const pauseAudio = useCallback(() => {
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } catch (e) {
        console.warn('Pause video failed:', e);
      }
    }
  }, []);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying, pauseAudio, playAudio]);

  return {
    isPlaying,
    isReady,
    hasStartedOnce,
    loadError,
    playAudio,
    pauseAudio,
    togglePlay,
  };
}
