import React, { useEffect, useRef, useState } from 'react';
import './TechDifferenceSection.css';
import { Flame, Wind, Droplets, Repeat, Sparkles, ArrowRight } from 'lucide-react';

export default function TechDifferenceSection() {
  const sectionRef = useRef(null);
  const [animationStep, setAnimationStep] = useState(0); // 0: hidden, 1: jute, 2: arrow, 3: cotton, 4: details

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staged animation sequence on scroll
          setAnimationStep(1); // Step 1: Jute appears
          
          const t1 = setTimeout(() => setAnimationStep(2), 400);  // Step 2: Arrow appears
          const t2 = setTimeout(() => setAnimationStep(3), 850);  // Step 3: Cotton appears
          const t3 = setTimeout(() => setAnimationStep(4), 1250); // Step 4: Full details appear

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px'
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
        <div className="tech-difference__grid">
          
          {/* ── LEFT: Animated Visual Transformation (Jute → Cotton) ── */}
          <div className="tech-difference__visuals">
            <div className="tech-difference__fibers-row">
              
              {/* 1. Raw Jute Fiber */}
              <div className={`fiber-card fiber-card--jute ${animationStep >= 1 ? 'fiber-card--visible' : ''}`}>
                <div className="fiber-card__img-wrap">
                  <img
                    src="/images/jute_raw_sample.jpg"
                    alt="Raw Jute Agricultural Waste Fiber"
                    className="fiber-card__img"
                  />
                </div>
                <span className="fiber-card__tag">Raw Jute Waste</span>
              </div>

              {/* 2. Hand-drawn Transformation Arrow */}
              <div className={`transformation-arrow ${animationStep >= 2 ? 'transformation-arrow--visible' : ''}`}>
                <svg className="transformation-arrow__svg" viewBox="0 0 120 40" fill="none">
                  <path
                    d="M 10,22 Q 55,8 95,20"
                    stroke="#14281D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="transformation-arrow__path"
                  />
                  <path
                    d="M 80,10 L 98,20 L 82,30"
                    stroke="#14281D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transformation-arrow__head"
                  />
                </svg>
              </div>

              {/* 3. Cottonized Natural Fiber */}
              <div className={`fiber-card fiber-card--cotton ${animationStep >= 3 ? 'fiber-card--visible' : ''}`}>
                <div className="fiber-card__img-wrap fiber-card__img-wrap--cotton">
                  <img
                    src="/images/cottonized_fiber_sample.jpg"
                    alt="Cottonized Superior Textile Fibre"
                    className="fiber-card__img"
                  />
                  {/* Glowing Transformation Sparkle */}
                  <div className="fiber-card__sparkle">
                    <Sparkles className="w-5 h-5 text-emerald-200" />
                  </div>
                </div>
                <span className="fiber-card__tag fiber-card__tag--cotton">Cottonized Fibre</span>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Tech Details & 4 Impact Badges ── */}
          <div className={`tech-difference__content ${animationStep >= 4 ? 'tech-difference__content--visible' : ''}`}>
            
            <h2 className="tech-difference__title">
              Our difference is our tech.
            </h2>

            <p className="tech-difference__desc">
              Aethel's proprietary technology enables us to process agricultural waste into superior textile fibres, bringing significant changes in the textile chain by creating socially inclusive, progressively viable, and adequately available materials to promote sustainability in the textile industry.
            </p>

            <h3 className="tech-difference__subtitle">
              Our technology uplifts farmers and upheals nature
            </h3>

            {/* 4 Feature Badges Grid */}
            <div className="tech-difference__features">
              
              <div className="tech-feature-item">
                <div className="tech-feature-item__icon">
                  <Flame className="w-6 h-6 text-[#14281D]" />
                </div>
                <p className="tech-feature-item__text">
                  prevents burning of agricultural waste
                </p>
              </div>

              <div className="tech-feature-item">
                <div className="tech-feature-item__icon">
                  <Wind className="w-6 h-6 text-[#14281D]" />
                </div>
                <p className="tech-feature-item__text">
                  increase income for marginal farmers
                </p>
              </div>

              <div className="tech-feature-item">
                <div className="tech-feature-item__icon">
                  <Droplets className="w-6 h-6 text-[#14281D]" />
                </div>
                <p className="tech-feature-item__text">
                  uses less than 10 litres of water/kg
                </p>
              </div>

              <div className="tech-feature-item">
                <div className="tech-feature-item__icon">
                  <Repeat className="w-6 h-6 text-[#14281D]" />
                </div>
                <p className="tech-feature-item__text">
                  low impact closed loop technology
                </p>
              </div>

            </div>

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
