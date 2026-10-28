import React, { useRef, useEffect, useState, useCallback } from 'react';
import './IntroSplashVideo.css';

export default function IntroSplashVideo({ onComplete }) {
  const videoRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Trigger ultra-smooth, blink-free reveal transition
  const handleReveal = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Freeze video on its crisp final frame so it doesn't blink or snap to black
    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch (e) {
        // Ignore pause errors
      }
    }

    setIsFadingOut(true);

    // Wait for the butter-smooth 1-second cross-dissolve before unmounting
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000);
  }, [onComplete]);

  // Lock body scroll while intro is playing
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Autoplay immediately on mount with zero delay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch((err) => {
      console.warn('Autoplay fallback:', err);
    });
  }, []);

  // Monitor playback to smoothly trigger fade slightly before the absolute end
  // to prevent any browser decoder black-frame blink
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || hasTriggeredRef.current) return;

    const { currentTime, duration } = video;
    if (duration > 0 && currentTime >= duration - 0.2) {
      handleReveal();
    }
  };

  return (
    <div
      className={`pure-intro-splash ${isFadingOut ? 'pure-intro-splash--fade-out' : ''}`}
      aria-hidden="true"
    >
      <div className="pure-intro-splash__viewport">
        <video
          ref={videoRef}
          className="pure-intro-splash__video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleReveal}
        >
          <source src="/videos/front-video.mp4" type="video/mp4" />
          <source src="/images/video/front video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
