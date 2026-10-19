import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Download, Layers, Leaf, RefreshCw } from 'lucide-react';

export const STAGES_FULL_DATA = [
  {
    index: 0,
    number: '01',
    tag: 'Raw Jute',
    badge: 'Stage 01 • Agricultural Sourcing & Decortication',
    headline: 'Raw Jute Agricultural Biomass',
    tagline: 'Natural • Strong • Eco-Friendly',
    image: '/images/avesa_jute.jpg',
    overview: 'Harvested directly from regenerative farming cooperatives, raw jute is one of the fastest-growing natural bast crops on Earth. Our sourcing model transforms post-harvest agricultural crop residue and natural golden jute into a high-grade textile feedstock.',
    processBreakdown: [
      {
        title: 'Monsoon Rainfed Cultivation',
        description: 'Cultivated in fertile floodplains relying 100% on natural monsoon rainfall. Requires zero heavy synthetic fertilizers, toxic pesticides, or artificial groundwater irrigation.'
      },
      {
        title: 'Eco-Mechanical Retting & Decortication',
        description: 'Harvested stalks undergo gentle water retting and mechanical separation, isolating raw cellulose bast fiber bundles without chemical caustic baths.'
      },
      {
        title: 'Marginal Farmer Economic Uplift',
        description: 'By monetizing crop residue that was previously burned as field waste, we provide smallholder farmers with an immediate 35% guaranteed household income boost.'
      }
    ],
    specs: [
      { label: 'Cellulose Content', value: '65% – 70%' },
      { label: 'Water Footprint', value: '100% Rainfed (Zero Groundwater)' },
      { label: 'Growth Cycle', value: '120 Days Rapid Renewal' },
      { label: 'Carbon Absorption', value: '~15 Tonnes CO2 / Hectare' },
      { label: 'Stubble Burning', value: '0% Crop Biomass Waste' },
      { label: 'Chemical Treatment', value: 'Zero Caustic Bleaches' }
    ],
    ecologicalMetrics: [
      { num: '+35%', label: 'Farmer Household Income Boost' },
      { num: '100%', label: 'Rainfed Renewable Biomass' },
      { num: 'Zero', label: 'Groundwater Irrigation Needed' },
      { num: '120d', label: 'Crop Rotation Renewal Cycle' }
    ]
  },
  {
    index: 1,
    number: '02',
    tag: 'Cottonized Fibre',
    badge: 'Stage 02 • Core Bio-Softening Breakthrough',
    headline: 'Proprietary Cottonized Fibre',
    tagline: 'Soft • Breathable • Pure Cellulose',
    image: '/images/cottonized_fiber_sample.jpg',
    overview: 'Our patented core technological breakthrough. Through aqueous enzyme bio-softening and ultrasound acoustic cavitation, we remove rigid lignin bonds from natural jute bast to produce ultra-soft, fine cotton-like staple fibers.',
    processBreakdown: [
      {
        title: 'Ultrasound Acoustic Cavitation',
        description: 'Acoustic micro-bubbles gently peel away rigid plant lignins and pectins without damaging the natural crystalline tensile core of the cellulose fiber.'
      },
      {
        title: 'Precision Micro-Fibrillation Crimp',
        description: 'Custom bio-mechanical crimping optimizes staple fibers to 34–38 mm, perfectly matching the spinning geometry of premium Pima cotton.'
      },
      {
        title: 'Closed-Loop Bio-Enzymatic Chemistry',
        description: 'Operates in closed-loop aqueous tanks with 100% water recovery via membrane bioreactors. Zero toxic effluent discharge into public waterways.'
      }
    ],
    specs: [
      { label: 'Fiber Fineness', value: '1.8 – 2.4 Denier (Cotton Equivalent)' },
      { label: 'Staple Length', value: '34 mm – 38 mm Uniform Cut' },
      { label: 'Residual Lignin', value: '< 2.2% Cleaned Cellulose' },
      { label: 'Moisture Regain', value: '11.5% – 13.0%' },
      { label: 'Energy Savings', value: '60% vs Petrochemical Synthetics' },
      { label: 'Spinning Fit', value: '100% Drop-In on Standard Frames' }
    ],
    ecologicalMetrics: [
      { num: '95%', label: 'Less Water vs Conventional Cotton' },
      { num: '60%', label: 'Lower Energy vs Virgin Synthetics' },
      { num: '100%', label: 'Closed-Loop Water Recovery' },
      { num: '1.8D', label: 'Ultra-Fine Cotton Handfeel' }
    ]
  },
  {
    index: 2,
    number: '03',
    tag: 'Spun Yarns',
    badge: 'Stage 03 • Commercial Spinning & Blends',
    headline: 'High-Tenacity Cottonized Spun Yarns',
    tagline: 'Durable • Versatile • High Tenacity',
    image: '/images/avesa_yarn.jpg',
    overview: 'Because our cottonized fibers match conventional fiber geometries, spinners run them directly on existing rotor and ring spinning lines with zero retooling capex. Available as 100% circular yarns or smooth intimate blends.',
    processBreakdown: [
      {
        title: 'Zero-Capex Mill Runnability',
        description: 'Seamlessly processed on standard commercial spinning frames worldwide, enabling spinning mills to offer sustainable yarns immediately.'
      },
      {
        title: 'Intimate Blending Formulations',
        description: 'Blends cleanly with organic cotton, Tencel™, lyocell, linen, and recycled fibers to deliver exceptional yarn evenness (CVm < 12%) and low pilling.'
      },
      {
        title: 'Broad Commercial Count Range',
        description: 'Engineered across commercial counts from coarse Ne 10s for heavy denim and upholstery to fine Ne 40s for soft luxury apparel knits.'
      }
    ],
    specs: [
      { label: 'Available Counts', value: 'Ne 10s to Ne 40s (Single & 2-Ply)' },
      { label: 'Spinning Technology', value: 'Ring Spun, Rotor / Open-End, Compact' },
      { label: 'Tenacity (Rkm)', value: '18.5 – 22.0 cN/tex High Strength' },
      { label: 'Elongation at Break', value: '6.5% – 8.2%' },
      { label: 'Blend Formulations', value: '30/70 Jute-Cotton, 50/50 Jute-Tencel' },
      { label: 'Mill Adaptation', value: '100% Drop-In Solution' }
    ],
    ecologicalMetrics: [
      { num: 'Zero', label: 'Spinning Mill Retooling Capex' },
      { num: 'Ne 40s', label: 'Fine Apparel Count Achieved' },
      { num: '<12%', label: 'Evenness (CVm) Low-Pill Spec' },
      { num: '100%', label: 'Commercial Drop-In Ready' }
    ]
  },
  {
    index: 3,
    number: '04',
    tag: 'Finished Fabrics',
    badge: 'Stage 04 • Circular Consumer Textiles',
    headline: 'Circular, High-Performance Woven & Knitted Fabrics',
    tagline: 'Silky • Biodegradable • Circular Textile',
    image: '/images/avesa_fabric.jpg',
    overview: 'Woven and knitted into premium textiles for global fashion, denim, athleisure, and luxury interiors. Naturally thermoregulating, odor-resistant, and 100% compostable in soil at end-of-life.',
    processBreakdown: [
      {
        title: 'Inherent Biological Performance',
        description: 'Naturally antibacterial, anti-odor, and UV-protective without synthetic chemical coatings or hazardous finishing additives.'
      },
      {
        title: 'Ultra-Low Water Finishing',
        description: 'Consumes less than 10 litres of water per kilogram of fabric, drastically outperforming conventional cotton finishing standards.'
      },
      {
        title: 'True Biological Circularity',
        description: 'Completely decomposes in healthy soil in ~180 days, returning organic nutrients to the earth with zero synthetic microplastics.'
      }
    ],
    specs: [
      { label: 'Soil Biodegradability', value: '100% Soil Compostable (~180 Days)' },
      { label: 'Finishing Water', value: '< 10L per Kilogram of Fabric' },
      { label: 'Microplastics Shed', value: '0% Synthetic Residue' },
      { label: 'Handfeel & Drape', value: 'Silky, Breathable, Soft' },
      { label: 'Natural Properties', value: 'Antimicrobial, UV Shield, Moisture-Wick' },
      { label: 'ESG Certification', value: 'OEKO-TEX® & Cradle-to-Cradle Ready' }
    ],
    ecologicalMetrics: [
      { num: '180d', label: 'Complete Soil Biodegradation' },
      { num: '0%', label: 'Synthetic Microplastics Shed' },
      { num: '<10L', label: 'Water Consumption / kg Fabric' },
      { num: '100%', label: 'Cradle-to-Cradle Circular' }
    ]
  }
];

export default function StageDetailPage({ stageIndex = 0, onSelectStage, onBack, onOpenPartnerModal }) {
  const [activeIdx, setActiveIdx] = useState(stageIndex);

  useEffect(() => {
    if (typeof stageIndex === 'number') {
      setActiveIdx(stageIndex);
    }
  }, [stageIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeIdx]);

  const current = STAGES_FULL_DATA[activeIdx] || STAGES_FULL_DATA[0];

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % STAGES_FULL_DATA.length;
    setActiveIdx(nextIdx);
    if (onSelectStage) onSelectStage(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + STAGES_FULL_DATA.length) % STAGES_FULL_DATA.length;
    setActiveIdx(prevIdx);
    if (onSelectStage) onSelectStage(prevIdx);
  };

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F5] text-[#1E2D1D] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ── TOP NAV BAR ── */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#8CA18B]/30 pb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 text-xs font-bold text-[#1E2D1D] hover:text-[#8CA18B] bg-white border border-[#8CA18B]/40 px-5 py-2.5 rounded-full shadow-sm transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 text-[#8CA18B]" />
            <span>Back to Home</span>
          </button>

          {/* 4 Stages Switcher Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-1.5 rounded-2xl border border-[#8CA18B]/30 shadow-sm flex-wrap">
            {STAGES_FULL_DATA.map((stg) => {
              const isSelected = activeIdx === stg.index;
              return (
                <button
                  key={stg.index}
                  onClick={() => {
                    setActiveIdx(stg.index);
                    if (onSelectStage) onSelectStage(stg.index);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#1E2D1D] text-[#FAF9F5] shadow-md'
                      : 'text-[#354734] hover:text-[#1E2D1D] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono ${
                    isSelected ? 'bg-[#8CA18B] text-[#1E2D1D]' : 'bg-[#8CA18B]/20 text-[#1E2D1D]'
                  }`}>
                    {stg.number}
                  </span>
                  <span>{stg.tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── HERO BANNER ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1E2D1D] bg-[#8CA18B]/20 px-3.5 py-1 rounded-full border border-[#8CA18B]/40">
              {current.badge}
            </span>
            <span className="text-xs font-bold text-[#8CA18B] uppercase tracking-wider">
              {current.tagline}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1E2D1D] tracking-tight leading-tight">
            {current.headline}
          </h1>

          <p className="text-base sm:text-lg text-[#354734] max-w-4xl leading-relaxed">
            {current.overview}
          </p>
        </div>

        {/* ── MAIN PRODUCT STAGE SHOWCASE CARD ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-[#8CA18B]/35 shadow-xl p-8 flex items-center justify-center aspect-square max-h-[420px] mx-auto w-full group">
              <img
                src={current.image}
                alt={current.headline}
                className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-5 left-5 right-5 text-center bg-[#1E2D1D]/90 backdrop-blur-md text-[#FAF9F5] text-xs font-mono font-bold py-2 px-4 rounded-xl border border-[#8CA18B]/40">
                {current.tagline}
              </span>
            </div>

            {/* Impact Metric Counters */}
            <div className="grid grid-cols-2 gap-3.5">
              {current.ecologicalMetrics.map((eco, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-[#8CA18B]/30 shadow-sm">
                  <div className="font-mono text-2xl font-bold text-[#1E2D1D]">
                    {eco.num}
                  </div>
                  <div className="text-[11px] text-[#4A5D49] font-medium mt-1 leading-snug">
                    {eco.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Deep Dive (Right) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Process Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#8CA18B]/30 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-[#8CA18B]" />
                <h2 className="font-heading text-xl font-bold text-[#1E2D1D]">
                  Transformation Methodology
                </h2>
              </div>

              <div className="space-y-4">
                {current.processBreakdown.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-[#FAF9F5] border border-[#8CA18B]/20">
                    <span className="w-6 h-6 rounded-full bg-[#1E2D1D] text-[#8CA18B] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1E2D1D]">{item.title}</h3>
                      <p className="text-xs text-[#354734] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#8CA18B]/30 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#8CA18B]" />
                <h2 className="font-heading text-xl font-bold text-[#1E2D1D]">
                  Laboratory & Technical Data
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#8CA18B]/25">
                    <span className="text-[11px] text-[#4A5D49] block">{spec.label}</span>
                    <strong className="text-xs sm:text-sm font-bold text-[#1E2D1D] block mt-0.5">
                      {spec.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ── BOTTOM STAGE STEPPERS & CTA ── */}
        <div className="pt-8 border-t border-[#8CA18B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#8CA18B]/40 text-xs font-bold text-[#1E2D1D] hover:bg-gray-50 transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#8CA18B]" />
              <span>Previous Stage</span>
            </button>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E2D1D] text-[#FAF9F5] text-xs font-bold hover:bg-[#2A3F29] transition-all shadow-sm"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-4 h-4 text-[#8CA18B]" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-full bg-white border border-[#8CA18B]/40 text-xs font-bold text-[#1E2D1D] hover:bg-gray-50 transition-all"
            >
              Back to Home
            </button>
            {onOpenPartnerModal && (
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3 rounded-full bg-[#8CA18B] hover:bg-[#7D937C] text-[#1E2D1D] text-xs font-extrabold uppercase tracking-wider transition-all shadow-md"
              >
                Inquire About This Stage
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
