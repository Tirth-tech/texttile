import React, { useState, useEffect } from 'react';
import TransformationTimeline from '../components/TransformationTimeline';
import { Cpu, Layers, ShieldCheck, Zap, RefreshCw, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

/* ── Comprehensive 4 Stages Technical Dossier Data ── */
const STAGE_DETAILS = [
  {
    index: 0,
    number: '01',
    tag: 'Raw Jute',
    badge: 'Stage 01 • Agricultural Sourcing',
    image: '/images/avesa_jute.jpg',
    headline: 'Agricultural Biomass & Raw Jute Bast',
    summary: 'Direct sourcing of agricultural crop biomass from regenerative floodplains relying exclusively on natural monsoon rainfall without synthetic fertilizers or chemical irrigation.',
    details: 'Jute is one of the fastest-growing natural bast crops on Earth, sequestering massive amounts of atmospheric carbon during its 120-day growth cycle. Raw jute stalks are harvested by farming cooperatives and undergo gentle mechanical retting and decortication to isolate pure, high-cellulose bast fiber bundles without burning agricultural residues.',
    specs: [
      { label: 'Cellulose Content', value: '65% – 70%' },
      { label: 'Water Footprint', value: '100% Rainfed (Zero Groundwater)' },
      { label: 'Harvest Rotation', value: '120-Day Rapid Renewal' },
      { label: 'Carbon Sequestration', value: '~15 Tonnes CO2 / Hectare' }
    ],
    ecologicalImpact: 'Eliminates open-field stubble burning while providing marginal farming households with an immediate +35% guaranteed income uplift.'
  },
  {
    index: 1,
    number: '02',
    tag: 'Cottonized Fibre',
    badge: 'Stage 02 • Core Proprietary Breakthrough',
    image: '/images/cottonized_fiber_sample.jpg',
    headline: 'Proprietary Mechanical-Enzymatic Cottonization',
    summary: 'Our patented technology breaks down rigid lignin bonds and separates fibers into ultra-fine, cotton-like staples with zero harsh alkalis.',
    details: 'Naturally coarse bast fibers possess high tensile strength but are traditionally too stiff for modern apparel spinning. Our closed-loop bio-softening platform utilizes natural aqueous enzyme chemistry and mechanical ultrasound cavitation to delignify the fiber bundles, creating silky, crimped staples matching the exact softness, handfeel, and drape of premium cotton.',
    specs: [
      { label: 'Fiber Fineness', value: '1.8 – 2.4 Denier (Comparable to Cotton)' },
      { label: 'Staple Length', value: '34 mm – 38 mm' },
      { label: 'Energy Savings', value: '60% Reduction vs Synthetic Polymers' },
      { label: 'Chemical Bleach', value: '0% Sodium Hydroxide / Chlorine' }
    ],
    ecologicalImpact: 'Replaces water-thirsty virgin cotton and petrochemical polyester with a low-impact, biodegradable circular fiber.'
  },
  {
    index: 2,
    number: '03',
    tag: 'Spun Yarns',
    badge: 'Stage 03 • Mill Transformation',
    image: '/images/avesa_yarn.jpg',
    headline: 'High-Tenacity Cottonized Spun Yarns',
    summary: 'Cottonized fibers run seamlessly on standard rotor and ring spinning equipment without machinery modifications or retooling capex.',
    details: 'Because our cottonized staples mirror cotton fiber geometry and crimp, yarn spinners can immediately process them on existing spinning frames. Available as 100% pure circular jute yarns or homogenous intimate blends with organic cotton, lyocell, and recycled wool. The resulting yarns exhibit remarkable tensile strength and low hairiness.',
    specs: [
      { label: 'Count Range', value: 'Ne 10s to Ne 40s (Ring & Rotor)' },
      { label: 'Tenacity', value: 'High Tensile Strength (Rkm > 18)' },
      { label: 'Mill Adaptation', value: '100% Drop-In (Zero Capex)' },
      { label: 'Yarn Evenness (CVm)', value: '< 12% Low Pilling Profile' }
    ],
    ecologicalImpact: 'Offers textile mills worldwide an immediate commercial decarbonization off-ramp with zero operational downtime.'
  },
  {
    index: 3,
    number: '04',
    tag: 'Finished Fabrics',
    badge: 'Stage 04 • Circular Consumer Textiles',
    image: '/images/avesa_fabric.jpg',
    headline: 'Circular, High-Performance Woven & Knitted Fabrics',
    summary: 'Engineered into luxurious textiles for fashion, denim, luxury apparel, and home interiors that are 100% biodegradable in soil.',
    details: 'Our finished fabrics deliver a luxurious, tactile handfeel with inherent performance advantages: naturally antibacterial, odor-inhibiting, UV-protective, and thermoregulating. When garments reach end-of-life, they break down naturally in healthy soil without shedding microplastics or toxic chemical coatings.',
    specs: [
      { label: 'Soil Biodegradability', value: '100% Soil Compostable (~180 Days)' },
      { label: 'Water in Finishing', value: '< 10L per Kilogram of Fabric' },
      { label: 'Skin Comfort', value: 'Naturally Hypoallergenic' },
      { label: 'Microplastics Shed', value: '0% Synthetic Polymer Residue' }
    ],
    ecologicalImpact: 'Closes the loop from soil back to soil, enabling global apparel brands to hit science-based ESG reduction targets.'
  }
];

export default function TechnologyPage({ onOpenPartnerModal, initialStage = 0, onBack }) {
  const [activeStage, setActiveStage] = useState(initialStage);

  // Sync if initialStage changes
  useEffect(() => {
    if (typeof initialStage === 'number') {
      setActiveStage(initialStage);
    }
  }, [initialStage]);

  const current = STAGE_DETAILS[activeStage] || STAGE_DETAILS[0];

  return (
    <div className="pt-24 pb-20 space-y-20 bg-[#FAF9F5] text-[#1E2D1D]">
      
      {/* ── TOP HERO & BACK NAVIGATION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          {onBack && (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1E2D1D] hover:text-[#8CA18B] bg-white border border-[#8CA18B]/30 px-4 py-2 rounded-full shadow-sm transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4 text-[#8CA18B]" />
              <span>Back to Home</span>
            </button>
          )}

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1E2D1D] bg-[#8CA18B]/20 px-4 py-1.5 rounded-full border border-[#8CA18B]/40">
            Technology Deep-Dive
          </span>
        </div>

        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1E2D1D] tracking-tight leading-tight">
            Our Difference <br className="hidden sm:inline" />
            <span className="text-[#8CA18B] font-serif-italic font-normal">Is Our Tech.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#354734] max-w-3xl mx-auto font-normal leading-relaxed">
            From raw agricultural bast to high-performance textiles—explore the 4 interconnected transformation stages powering our regenerative material science.
          </p>
        </div>
      </section>

      {/* ── 4-STAGE INTERACTIVE DETAILED DOSSIER CARD ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#8CA18B]/35 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Stage Switcher Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 p-1.5 bg-[#FAF9F5] rounded-2xl border border-[#8CA18B]/25 max-w-3xl mx-auto">
            {STAGE_DETAILS.map((stg) => {
              const isActive = activeStage === stg.index;
              return (
                <button
                  key={stg.index}
                  onClick={() => setActiveStage(stg.index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1E2D1D] text-[#FAF9F5] shadow-md'
                      : 'text-[#354734] hover:text-[#1E2D1D] hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                    isActive ? 'bg-[#8CA18B] text-[#1E2D1D]' : 'bg-[#8CA18B]/20 text-[#1E2D1D]'
                  }`}>
                    {stg.number}
                  </span>
                  <span>{stg.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#FAF9F5] border border-[#8CA18B]/30 shadow-md p-6 flex items-center justify-center aspect-square max-h-[380px] mx-auto w-full">
                <img
                  src={current.image}
                  alt={current.tag}
                  className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#1E2D1D] text-[#FAF9F5] text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-[#8CA18B]/50">
                  {current.badge}
                </span>
              </div>

              {/* Ecological Advantage Box */}
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border-l-4 border-[#8CA18B] border border-[#8CA18B]/20 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8CA18B] font-mono">
                  Ecological Advantage
                </span>
                <p className="text-xs sm:text-sm text-[#1E2D1D] font-medium leading-relaxed">
                  {current.ecologicalImpact}
                </p>
              </div>
            </div>

            {/* Content & Specs Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8CA18B]">
                  Stage {current.number} Technical Dossier
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E2D1D] leading-tight">
                  {current.headline}
                </h2>
                <p className="text-sm sm:text-base text-[#354734] leading-relaxed pt-2">
                  {current.summary}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#8CA18B]/20 text-xs sm:text-sm text-[#243522] leading-relaxed">
                {current.details}
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E2D1D]">
                  Laboratory & Performance Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#8CA18B]/25 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8CA18B] shrink-0" />
                      <div>
                        <span className="text-[11px] text-[#4A5D49] block">{spec.label}</span>
                        <strong className="text-xs sm:text-sm font-bold text-[#1E2D1D] block">
                          {spec.value}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 3 CORE TECHNOLOGICAL BREAKTHROUGHS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E2D1D] bg-[#8CA18B]/20 px-3.5 py-1 rounded-full border border-[#8CA18B]/30">
            Patented Innovations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2D1D]">
            Three Proprietary Engineering Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-[#8CA18B]/30 space-y-4 shadow-sm hover:border-[#8CA18B] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#1E2D1D] text-[#8CA18B] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Ultrasound Eco-Cavitation</h3>
            <p className="text-xs text-[#354734] leading-relaxed">
              Replaces harsh sodium hydroxide and chlorine bleach retting with low-energy acoustic cavitation, gently dissolving pectin bonds while preserving natural crystalline fiber tenacity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#8CA18B]/30 space-y-4 shadow-sm hover:border-[#8CA18B] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#1E2D1D] text-[#8CA18B] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Micro-Fibrillation Crimp</h3>
            <p className="text-xs text-[#354734] leading-relaxed">
              Custom mechanical crimping aligns short-staple plant cellulosic bundles, matching the exact spinning mechanics of premium Pima cotton and Merino wool.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#8CA18B]/30 space-y-4 shadow-sm hover:border-[#8CA18B] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#1E2D1D] text-[#8CA18B] flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Closed-Loop Water Recovery</h3>
            <p className="text-xs text-[#354734] leading-relaxed">
              100% of water used in our enzymatic tanks is filtered through membrane bioreactors and re-circulated back into processing tanks with zero liquid effluent discharge.
            </p>
          </div>

        </div>
      </section>

      {/* Scaling Roadmap CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#1E2D1D] text-[#FAF9F5] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-[#8CA18B] uppercase tracking-widest">TECHNICAL WHITE PAPER</span>
            <h3 className="font-heading text-2xl font-bold">Interested in Technology Licensing or R&D Joint Ventures?</h3>
            <p className="text-xs text-[#C5D3C4]">Our engineering team works with global textile mills and chemical manufacturers to license BioTransform™ modules.</p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="bg-[#FAF9F5] text-[#1E2D1D] px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Request Tech Dossier</span>
            <ArrowRight className="w-4 h-4 text-[#8CA18B]" />
          </button>
        </div>
      </section>

    </div>
  );
}
