import React, { useEffect, useRef, useState } from 'react';
import './TechDifferenceSection.css';
import { Sparkles } from 'lucide-react';

/* ── Custom SVGs matching the 8 Natural Properties Reference ── */
const NaturalIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 25C7 25 8 13 18 8C18 8 20 17 14 23C12.5 24.5 10 25.5 7 25Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M14 23C17 21 21 16 25 11C25 11 27 19 21 24C19 25.5 16.5 26 14 26" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 25L16 16" />
  </svg>
);

const FeatherIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6C17 7 10 13 8 20C7.5 21.5 7 24 6 26C8 25 10.5 24.5 12 24C19 22 25 15 26 8C26 7 25 6 24 6Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M6 26L16 16" />
    <path d="M14 18L18 20" />
    <path d="M17 15L21 17" />
    <path d="M20 12L24 14" />
  </svg>
);

const DurableIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 25V18C11 16.9 11.9 16 13 16H19C20.1 16 21 16.9 21 18V25" fill="currentColor" fillOpacity="0.15" />
    <rect x="11" y="13" width="10" height="9" rx="3" fill="currentColor" fillOpacity="0.15" />
    <path d="M11 15C9.5 15 8.5 16 8.5 17.5C8.5 19 9.5 20 11 20" />
    <path d="M14 13V11C14 10.4 14.4 10 15 10C15.6 10 16 10.4 16 11V13" />
    <path d="M16 13V11C16 10.4 16.4 10 17 10C17.6 10 18 10.4 18 11V13" />
    <path d="M16 4V6" />
    <path d="M9 7L10.5 8.5" />
    <path d="M23 7L21.5 8.5" />
    <path d="M6 12H8" />
    <path d="M24 12H26" />
  </svg>
);

const BreathableIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12H19C20.7 12 22 10.7 22 9C22 7.3 20.7 6 19 6C17.3 6 16 7.3 16 9" />
    <path d="M5 16H23C24.7 16 26 17.3 26 19C26 20.7 24.7 22 23 22C21.3 22 20 20.7 20 19" />
    <path d="M5 20H15C16.1 20 17 20.9 17 22C17 23.1 16.1 24 15 24C13.9 24 13 23.1 13 22" />
  </svg>
);

const AntimicrobialIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="7.5" fill="currentColor" fillOpacity="0.15" />
    <circle cx="16" cy="16" r="7.5" />
    <line x1="16" y1="4" x2="16" y2="7.5" />
    <line x1="16" y1="24.5" x2="16" y2="28" />
    <line x1="4" y1="16" x2="7.5" y2="16" />
    <line x1="24.5" y1="16" x2="28" y2="16" />
    <line x1="7.5" y1="7.5" x2="10" y2="10" />
    <line x1="22" y1="22" x2="24.5" y2="24.5" />
    <line x1="24.5" y1="7.5" x2="22" y2="10" />
    <line x1="10" y1="22" x2="7.5" y2="24.5" />
    <line x1="10.5" y1="21.5" x2="21.5" y2="10.5" strokeWidth="2.6" />
  </svg>
);

const UVProtectiveIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 6C16 6 12 7.5 9 8C9 15 11 22 16 26C21 22 23 15 23 8C20 7.5 16 6 16 6Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M6 5L7.5 6.5" />
    <path d="M10 3L10.8 5" />
    <path d="M4 10L6 10.8" />
    <path d="M13 14L16 11L19 14" />
    <path d="M16 11V20" />
  </svg>
);

const BiodegradableIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 6L19 11H13L16 6Z" fill="currentColor" />
    <path d="M13 11L9.5 17L7 21L12.5 21" />
    <path d="M7 21L9 24.5H15L11 18" />
    <path d="M22.5 14.5L19.5 19.5H25.5L22.5 14.5Z" fill="currentColor" />
    <path d="M19.5 19.5L22 24L25 24L22 19.5" />
    <path d="M15.5 25H21.5L23.5 21" />
  </svg>
);

const MoistureWickingIcon = () => (
  <svg viewBox="0 0 32 32" className="property-badge__icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.5 7C12.5 7 8.5 12 8.5 15C8.5 17.2 10.3 19 12.5 19C14.7 19 16.5 17.2 16.5 15C16.5 12 12.5 7 12.5 7Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M20.5 13C20.5 13 17.5 16.5 17.5 18.5C17.5 20.2 18.8 21.5 20.5 21.5C22.2 21.5 23.5 20.2 23.5 18.5C23.5 16.5 20.5 13 20.5 13Z" fill="currentColor" fillOpacity="0.2" />
    <circle cx="7" cy="22" r="1.5" fill="currentColor" />
    <circle cx="15" cy="24" r="1.5" fill="currentColor" />
    <circle cx="23" cy="24.5" r="1.5" fill="currentColor" />
    <circle cx="11" cy="25" r="1" fill="currentColor" />
    <circle cx="19" cy="26" r="1" fill="currentColor" />
  </svg>
);

const PROPERTIES = [
  { id: 'natural', title: 'Natural', Icon: NaturalIcon },
  { id: 'skin-friendly', title: 'Skin-Friendly', Icon: FeatherIcon },
  { id: 'durable', title: 'Durable', Icon: DurableIcon },
  { id: 'breathable', title: 'Breathable', Icon: BreathableIcon },
  { id: 'antimicrobial', title: 'Antimicrobial', Icon: AntimicrobialIcon },
  { id: 'uv-protective', title: 'UV-Protective', Icon: UVProtectiveIcon },
  { id: 'biodegradable', title: 'Biodegradable', Icon: BiodegradableIcon },
  { id: 'moisture-wicking', title: 'Moisture-Wicking', Icon: MoistureWickingIcon },
];

export default function TechDifferenceSection() {
  const sectionRef = useRef(null);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staged sequential reveal animation
          setAnimationStep(1); // Stage 1: Jute
          const t1 = setTimeout(() => setAnimationStep(2), 250); // Arrow 1
          const t2 = setTimeout(() => setAnimationStep(3), 500); // Stage 2: Cottonized Fibre
          const t3 = setTimeout(() => setAnimationStep(4), 750); // Arrow 2
          const t4 = setTimeout(() => setAnimationStep(5), 1000); // Stage 3: Spun Yarn
          const t5 = setTimeout(() => setAnimationStep(6), 1250); // Arrow 3
          const t6 = setTimeout(() => setAnimationStep(7), 1500); // Stage 4: Finished Fabric
          const t7 = setTimeout(() => setAnimationStep(8), 1750); // Properties

          return () => {
            [t1, t2, t3, t4, t5, t6, t7].forEach(clearTimeout);
          };
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="tech-difference">
      {/* Top Decorative Organic Waves */}
      <div className="tech-difference__waves-top">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,25 C180,60 360,5 540,35 C720,65 900,10 1080,40 C1260,70 1380,20 1440,30"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="3.5"
            fill="none"
          />
          <path
            d="M0,45 C200,15 380,70 580,25 C780,-10 960,55 1160,20 C1320,-5 1400,45 1440,40"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M0,60 C240,75 440,30 680,60 C900,90 1120,40 1320,65 C1390,75 1420,55 1440,58"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="tech-difference__container">
        
        {/* ── SECTION TITLE ── */}
        <div className={`tech-difference__header ${animationStep >= 1 ? 'tech-difference__header--visible' : ''}`}>
          <h2 className="tech-difference__title">
            Our difference is our tech.
          </h2>
        </div>

        {/* ── 4-STAGE TRANSFORMATION FLOW (Jute → Cottonized Fibre → Yarns → Fabrics) ── */}
        <div className="tech-transformation-pipeline">
          
          {/* Stage 1: Raw Jute */}
          <div className={`fiber-stage ${animationStep >= 1 ? 'fiber-stage--visible' : ''}`}>
            <div className="fiber-stage__img-wrap">
              <img
                src="/images/avesa_jute.jpg"
                alt="Raw Jute Agricultural Biomass"
                className="fiber-stage__img"
              />
            </div>
            <span className="fiber-stage__tag">Raw Jute</span>
          </div>

          {/* Arrow 1 */}
          <div className={`transformation-arrow ${animationStep >= 2 ? 'transformation-arrow--visible' : ''}`}>
            <svg className="transformation-arrow__svg" viewBox="0 0 100 40" fill="none">
              <path
                d="M 10,22 Q 50,8 82,20"
                stroke="#8CA18B"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transformation-arrow__path"
              />
              <path
                d="M 68,10 L 85,20 L 70,30"
                stroke="#8CA18B"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transformation-arrow__head"
              />
            </svg>
          </div>

          {/* Stage 2: Cottonized Fibre (with Sparkle) */}
          <div className={`fiber-stage fiber-stage--cotton ${animationStep >= 3 ? 'fiber-stage--visible' : ''}`}>
            <div className="fiber-stage__img-wrap fiber-stage__img-wrap--cotton">
              <img
                src="/images/cottonized_fiber_sample.jpg"
                alt="Cottonized Jute Fibre"
                className="fiber-stage__img"
              />
              <div className="fiber-stage__sparkle">
                <Sparkles className="w-5 h-5 text-[#8CA18B]" />
              </div>
            </div>
            <span className="fiber-stage__tag fiber-stage__tag--cotton">Cottonized Fibre</span>
          </div>

          {/* Arrow 2 */}
          <div className={`transformation-arrow ${animationStep >= 4 ? 'transformation-arrow--visible' : ''}`}>
            <svg className="transformation-arrow__svg" viewBox="0 0 100 40" fill="none">
              <path
                d="M 10,22 Q 50,8 82,20"
                stroke="#8CA18B"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transformation-arrow__path"
              />
              <path
                d="M 68,10 L 85,20 L 70,30"
                stroke="#8CA18B"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transformation-arrow__head"
              />
            </svg>
          </div>

          {/* Stage 3: Yarns */}
          <div className={`fiber-stage ${animationStep >= 5 ? 'fiber-stage--visible' : ''}`}>
            <div className="fiber-stage__img-wrap">
              <img
                src="/images/avesa_yarn.jpg"
                alt="Spun Cottonized Yarns"
                className="fiber-stage__img"
              />
            </div>
            <span className="fiber-stage__tag">Spun Yarns</span>
          </div>

          {/* Arrow 3 */}
          <div className={`transformation-arrow ${animationStep >= 6 ? 'transformation-arrow--visible' : ''}`}>
            <svg className="transformation-arrow__svg" viewBox="0 0 100 40" fill="none">
              <path
                d="M 10,22 Q 50,8 82,20"
                stroke="#8CA18B"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transformation-arrow__path"
              />
              <path
                d="M 68,10 L 85,20 L 70,30"
                stroke="#8CA18B"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transformation-arrow__head"
              />
            </svg>
          </div>

          {/* Stage 4: Fabrics */}
          <div className={`fiber-stage ${animationStep >= 7 ? 'fiber-stage--visible' : ''}`}>
            <div className="fiber-stage__img-wrap">
              <img
                src="/images/avesa_fabric.jpg"
                alt="Sustainable Woven & Knitted Fabrics"
                className="fiber-stage__img"
              />
            </div>
            <span className="fiber-stage__tag">Finished Fabrics</span>
          </div>

        </div>

        {/* ── 8 MATERIAL PROPERTIES STRIP (Coded from Reference Image) ── */}
        <div className={`tech-properties-card ${animationStep >= 8 ? 'tech-properties-card--visible' : ''}`}>
          <div className="tech-properties-card__inner">
            {PROPERTIES.map((prop, idx) => {
              const Icon = prop.Icon;
              return (
                <React.Fragment key={prop.id}>
                  <div className="property-badge">
                    <div className="property-badge__circle">
                      <Icon />
                    </div>
                    <span className="property-badge__title">{prop.title}</span>
                  </div>
                  {idx < PROPERTIES.length - 1 && (
                    <div className="property-badge__divider" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Decorative Waves */}
      <div className="tech-difference__waves-bottom">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0,30 C300,5 600,55 900,20 C1200,-15 1380,45 1440,30"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
