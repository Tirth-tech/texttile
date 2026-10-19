import React from 'react';
import Hero from '../components/Hero';
import QuestSection from '../components/QuestSection';
import TechDifferenceSection from '../components/TechDifferenceSection';
import ImpactVisualizer from '../components/ImpactVisualizer';
import SupplyChainSection from '../components/SupplyChainSection';
import { ArrowUpRight } from 'lucide-react';
import './HomePage.css';

export default function HomePage({ setActiveTab, onSelectProduct, onSelectTechStage, onOpenPartnerModal }) {
  // Pure original sections with fluid wave transitions and attractive organic shapes
  return (
    <div className="homepage-wrapper">

      {/* 1. HERO COMPONENT WITH FULL VIDEO BACKGROUND */}
      <Hero />

      {/* Wave Transition 1: Hero to Quest */}
      <div className="section-wave-divider section-wave-divider--hero-to-quest" aria-hidden="true">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path
            d="M0,45 C240,90 480,10 720,55 C960,100 1200,25 1440,60 L1440,90 L0,90 Z"
            fill="#FAF9F5"
          />
          <path
            d="M0,45 C240,90 480,10 720,55 C960,100 1200,25 1440,60"
            stroke="rgba(140, 161, 139, 0.45)"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      {/* 2. OUR MISSION (CENTERED 3-LINE MISSION STATEMENT IN SCULPTURAL ORGANIC SHAPE) */}
      <QuestSection />

      {/* Wave Transition 2: Quest to Tech Difference */}
      <div className="section-wave-divider section-wave-divider--quest-to-tech" aria-hidden="true">
        <svg viewBox="0 0 1440 95" fill="none" preserveAspectRatio="none">
          <path
            d="M0,50 C280,10 560,95 840,40 C1120,-15 1300,75 1440,45 L1440,95 L0,95 Z"
            fill="#1E2D1D"
          />
          <path
            d="M0,50 C280,10 560,95 840,40 C1120,-15 1300,75 1440,45"
            stroke="rgba(140, 161, 139, 0.6)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* 3. OUR DIFFERENCE IS OUR TECH (4 STAGES: HOVER FOR SMALL INFO, CLICK OPENS NEW PAGE, INTEGRATED BOTTOM WAVE BORDER) */}
      <TechDifferenceSection onSelectStage={onSelectTechStage} setActiveTab={setActiveTab} />

      {/* 4. AVESA BIOTEX BY NUMBERS (6 SCULPTURAL ORGANIC STATS CARDS) */}
      <ImpactVisualizer />

      {/* Wave Transition 4: Impact to Supply Chain */}
      <div className="section-wave-divider section-wave-divider--impact-to-supply" aria-hidden="true">
        <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none">
          <path
            d="M0,35 C220,10 440,65 720,30 C1000,-5 1240,60 1440,35"
            stroke="rgba(140, 161, 139, 0.35)"
            strokeWidth="2"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      </div>

      {/* 5. THROUGHOUT THE SUPPLY CHAIN (HORIZONTAL WAVE SCROLL & ORGANIC WAVE CARDS) */}
      <SupplyChainSection />

      {/* Wave Transition 5: Supply Chain to B2B CTA */}
      <div className="section-wave-divider section-wave-divider--supply-to-cta" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path
            d="M0,45 C260,95 520,15 780,65 C1040,115 1280,30 1440,55 L1440,100 L0,100 Z"
            fill="#1E2D1D"
          />
          <path
            d="M0,45 C260,95 520,15 780,65 C1040,115 1280,30 1440,55"
            stroke="rgba(140, 161, 139, 0.55)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* 6. B2B COLLABORATION CTA (IN ATTRACTIVE ORGANIC WAVE CONTAINER) */}
      <section className="cta-organic-section">
        <div className="cta-organic-section__container">
          
          {/* Sculptural Organic Wave CTA Box */}
          <div className="cta-organic-card">
            
            <div className="cta-organic-card__badge">
              <span className="cta-organic-card__dot" />
              <span>Open for B2B Commercial Pilots</span>
            </div>

            <h2 className="cta-organic-card__title">
              Let's Build the Next Material Together.
            </h2>

            <p className="cta-organic-card__desc">
              We partner with forward-thinking fashion houses, apparel brands, textile spinners, and agricultural cooperatives to turn raw jute into cottonized clothes.
            </p>

            <div className="cta-organic-card__btn-wrap">
              <button
                onClick={onOpenPartnerModal}
                className="cta-organic-card__btn"
              >
                <span>Start a Collaboration</span>
                <ArrowUpRight className="w-4 h-4 text-[#8CA18B]" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
