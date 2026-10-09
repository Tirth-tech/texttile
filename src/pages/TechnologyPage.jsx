import React from 'react';
import TransformationTimeline from '../components/TransformationTimeline';
import { Cpu, Layers, ShieldCheck, Zap, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TechnologyPage({ onOpenPartnerModal }) {
  return (
    <div className="pt-24 pb-20 space-y-24 bg-[#FAF8F5]">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E3A2B] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)]">
          BioTransform™ Platform Architecture
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#1A1D1B] tracking-tight max-w-4xl mx-auto leading-tight">
          Science Makes <br className="hidden sm:inline" />
          <span className="text-shimmer font-serif-italic font-normal">Sustainability Scalable.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C635E] max-w-3xl mx-auto font-normal leading-relaxed">
          Our proprietary technology platform combines green aqueous enzyme chemistry, mechanical ultrasound cavitation, and precision fiber crimping to extract high-tenacity textile cellulose from agricultural biomass.
        </p>
      </section>

      {/* Interactive Process Pipeline */}
      <TransformationTimeline />

      {/* Core Technical Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-3.5 py-1 rounded-full border border-[var(--border-light)]">
            Patented Innovations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1A1D1B]">Three Technological Breakthroughs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1E3A2B] text-[#84CC16] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1A1D1B]">Ultrasound Eco-Cavitation</h3>
            <p className="text-xs text-[#5C635E] leading-relaxed">
              Replaces harsh sodium hydroxide and chlorine bleach retting with low-energy acoustic cavitation, gently dissolving pectin bonds while preserving natural crystalline fiber tenacity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1A1D1B]">Micro-Fibrillation Crimp</h3>
            <p className="text-xs text-[#5C635E] leading-relaxed">
              Custom mechanical crimping aligns short-staple plant cellulosic bundles, matching the exact spinning mechanics of premium Pima cotton and Merino wool.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1E3A2B] text-white flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1A1D1B]">Closed-Loop Water Recovery</h3>
            <p className="text-xs text-[#5C635E] leading-relaxed">
              100% of water used in our enzymatic tanks is filtered through membrane bioreactors and re-circulated back into processing tanks with zero liquid effluent discharge.
            </p>
          </div>

        </div>
      </section>

      {/* Scaling Roadmap CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#1E3A2B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-[#84CC16] uppercase tracking-widest">TECHNICAL WHITE PAPER</span>
            <h3 className="font-heading text-2xl font-bold">Interested in Technology Licensing or R&D Joint Ventures?</h3>
            <p className="text-xs text-gray-200">Our engineering team works with global textile mills and chemical manufacturers to license BioTransform™ modules.</p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="bg-[#FAF8F5] text-[#1E3A2B] px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Request Tech Dossier</span>
            <ArrowRight className="w-4 h-4 text-[#C85A32]" />
          </button>
        </div>
      </section>

    </div>
  );
}
