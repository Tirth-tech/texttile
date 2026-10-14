import React, { useRef, useEffect, useState } from 'react';
import './HeroVideo.css';

/* =========================================================================
 * ⚙️ HERO VIDEO TIMING & ADJUSTMENT SETTINGS
 * You can change these numbers to adjust when and how the text disappears:
 * ========================================================================= */
const SETTINGS = {
  // Option A: Set exact time in seconds when the text should disappear (e.g., 3.8 = 3.8 seconds into the video)
  FADE_OUT_AT_SECOND: 11,

  // Option B (alternative): Set by percentage of total video length (0.50 = 50% through video)
  USE_PERCENTAGE: false,
  FADE_OUT_PERCENTAGE: 78.57,
};

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay deferred:', err);
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;

    // Calculate when the text will disappear based on the settings above
    const fadeThreshold = SETTINGS.USE_PERCENTAGE && duration > 0
      ? duration * SETTINGS.FADE_OUT_PERCENTAGE
      : SETTINGS.FADE_OUT_AT_SECOND;

    if (currentTime < fadeThreshold) {
      setTextVisible(true);
    } else {
      setTextVisible(false);
    }
  };

  return (
    <section className="hero">
      {/* Centered Background Video */}
      <div className="hero__video-wrapper">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/altmat-poster.jpg?v=2"
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/videos/altmat-hero.mp4?v=2" type="video/mp4" />
          <source src="/videos/altmat-hero.webm?v=2" type="video/webm" />
          <source src="/images/video/altmat-hero.mp4?v=2" type="video/mp4" />
          <source src="/images/video/altmat-hero.webm?v=2" type="video/webm" />
        </video>
      </div>

      {/* Atmospheric Overlays - dims gently after text fades for pure video clarity */}
      <div className={`hero__overlay ${!textVisible ? 'hero__overlay--dimmed' : ''}`} />
      <div className={`hero__glow hero__glow--left ${!textVisible ? 'hero__glow--hidden' : ''}`} />
      <div className={`hero__glow hero__glow--right ${!textVisible ? 'hero__glow--hidden' : ''}`} />

      {/* Brand & Headline Content */}
      <div className={`hero__content ${textVisible ? 'hero__content--visible' : 'hero__content--faded'}`}>
        <div className="hero__badge">
          <img src="/images/avesa_logo_mark.png" alt="Avesa Biotex" className="h-5 w-5 object-contain" />
          <span>AVESA BIOTEX</span>
        </div>

        <h1 className="hero__title">From field to fabric.</h1>

        <p className="hero__description">
          We grow jute and cotton, spin them, weave them and sew clothes you wear every day.
        </p>
      </div>

      {/* Subtle bottom fade to blend with subsequent section */}
      <div className="hero__bottom-fade" />
    </section>
  );
}
