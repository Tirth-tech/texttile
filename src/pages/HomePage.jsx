import React from 'react';
import Hero from '../components/Hero';
import QuestSection from '../components/QuestSection';
import TechDifferenceSection from '../components/TechDifferenceSection';
import ImpactVisualizer from '../components/ImpactVisualizer';
import SupplyChainSection from '../components/SupplyChainSection';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage({ setActiveTab, onSelectProduct, onSelectTechStage, onOpenPartnerModal }) {
  return (
    <div className="space-y-0">

      {/* 1. HERO COMPONENT WITH FULL VIDEO BACKGROUND */}
      <Hero />

      {/* 2. OUR MISSION (CENTERED 3-LINE MISSION STATEMENT) */}
      <QuestSection />

      {/* 3. OUR DIFFERENCE IS OUR TECH (4 STAGES: HOVER FOR SMALL INFO, CLICK OPENS NEW PAGE) */}
      <TechDifferenceSection onSelectStage={onSelectTechStage} setActiveTab={setActiveTab} />

      {/* 4. AVESA BIOTEX BY NUMBERS (COUNT-UP IMPACT METRICS) */}
      <ImpactVisualizer />

      {/* 5. THROUGHOUT THE SUPPLY CHAIN (HORIZONTAL WAVE SCROLL ANIMATION: FARMER -> YARN -> MILL -> BRAND) */}
      <SupplyChainSection />

      {/* 6. B2B COLLABORATION CTA */}
      <section className="py-24 bg-[#1E2D1D] text-[#FAF9F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#8CA18B] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Open for B2B Commercial Pilots
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#FAF9F5] max-w-4xl mx-auto leading-tight">
            Let's Build the Next Material Together.
          </h2>
          <p className="text-sm sm:text-lg text-[#C5D3C4] max-w-2xl mx-auto font-light leading-relaxed">
            We partner with forward-thinking fashion houses, apparel brands, textile spinners, and agricultural cooperatives to turn raw jute into cottonized clothes.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="bg-[#FAF9F5] hover:bg-white text-[#1E2D1D] px-9 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <span>Start a Collaboration</span>
              <ArrowUpRight className="w-4 h-4 text-[#8CA18B]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
