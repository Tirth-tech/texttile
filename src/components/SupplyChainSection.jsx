import React, { useEffect, useRef, useState } from 'react';
import './SupplyChainSection.css';
import { Sprout, Disc, Layers, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

const STAGES = [
  {
    id: 'farmer',
    index: 0,
    number: '01',
    title: 'Farmer',
    role: 'Regenerative Agriculture',
    icon: Sprout,
    summary: 'Direct sourcing of agricultural crop biomass from marginal farming cooperatives.',
    details: 'Empowers local farming communities by transforming post-harvest crop residue and natural jute into high-value raw material. Eliminates agricultural stubble burning while providing an additional guaranteed income stream for farming families.',
    metrics: [
      { label: 'Income Boost', value: '+35%' },
      { label: 'Stubble Burning', value: '0% Biomass Waste' },
      { label: 'Water Input', value: '100% Rainfed Crop' }
    ]
  },
  {
    id: 'yarn-manufacturer',
    index: 1,
    number: '02',
    title: 'Yarn Manufacturer',
    role: 'Cottonization & Spinning',
    icon: Disc,
    summary: 'Patented mechanical bio-softening running on existing standard spinning infrastructure.',
    details: 'Our proprietary cottonization technology alters lignified jute fibers into supple, cotton-like staples that run smoothly on conventional rotor and ring spinning systems without requiring machinery modifications.',
    metrics: [
      { label: 'Machinery Fit', value: '100% Drop-In' },
      { label: 'Fiber Fineness', value: '1.8 – 2.5 Denier' },
      { label: 'Yarn Counts', value: 'Ne 10s to 40s' }
    ]
  },
  {
    id: 'textile-fabric-mill',
    index: 2,
    number: '03',
    title: 'Textile Fabric Mill',
    role: 'Weaving & Circular Finishing',
    icon: Layers,
    summary: 'Ultra-low water finishing producing durable, breathable, and antimicrobial textiles.',
    details: 'Seamless weaving and knitting into premium circular fabrics. Uses less than 10 litres of water per kilogram, retaining natural antimicrobial, UV-protective, and rapid moisture-wicking characteristics naturally without synthetic coatings.',
    metrics: [
      { label: 'Water Usage', value: '< 10L / kg' },
      { label: 'Chemistry', value: 'Zero Toxic Effluent' },
      { label: 'Handfeel', value: 'Ultra Soft & Durable' }
    ]
  },
  {
    id: 'brand',
    index: 3,
    number: '04',
    title: 'Brand',
    role: 'Conscious Global Fashion',
    icon: ShoppingBag,
    summary: 'Delivering circular garments that meet ambitious ESG goals with complete transparency.',
    details: 'Forward-looking apparel and lifestyle brands incorporate Avesa Biotex fabrics into everyday consumer collections — providing conscious buyers with 100% biodegradable clothes that leave zero microplastics behind.',
    metrics: [
      { label: 'Biodegradability', value: '100% Soil Compostable' },
      { label: 'Microplastics', value: '0% Synthetic Shed' },
      { label: 'ESG Compliance', value: 'Scope 3 Reduction' }
    ]
  }
];

export default function SupplyChainSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [pointPos, setPointPos] = useState({ x: 100, y: 70 });

  // Wave points across a 1200x140 viewBox
  // Nodes will be placed horizontally at x = 120, 440, 760, 1080
  const waveD = "M 40,70 C 160,15 280,125 440,70 C 600,15 720,125 880,70 C 980,25 1060,115 1160,70";

  // Scroll tracking to drive wave point progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between entering viewport center and reaching top
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.4;
      const total = start - end;
      const current = start - rect.top;

      let progress = current / total;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      // Determine active stage from progress (0 to 3)
      const stageIdx = Math.min(3, Math.floor(progress * 4));
      setActiveStageIndex(stageIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update SVG point position based on scrollProgress
  useEffect(() => {
    if (pathRef.current) {
      try {
        const totalLength = pathRef.current.getTotalLength();
        // Ensure point travels across the 4 nodes (between 6% and 94% of curve)
        const t = 0.06 + scrollProgress * 0.88;
        const pt = pathRef.current.getPointAtLength(t * totalLength);
        setPointPos({ x: pt.x, y: pt.y });
      } catch (e) {
        // Fallback calculation
        setPointPos({ x: 80 + scrollProgress * 1040, y: 70 });
      }
    }
  }, [scrollProgress]);

  // Click on a node manually sets the stage
  const handleStageClick = (idx) => {
    setActiveStageIndex(idx);
    setScrollProgress(idx / 3);
  };

  const activeStage = STAGES[activeStageIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <section ref={sectionRef} className="supply-chain-section" id="supply-chain">
      <div className="supply-chain__container">
        
        {/* Section Header */}
        <div className="supply-chain__header">
          <div className="supply-chain__badge">
            <span className="supply-chain__badge-dot" />
            <span>CIRCULAR VALUE ECOSYSTEM</span>
          </div>
          <h2 className="supply-chain__title">Throughout The Supply Chain</h2>
          <p className="supply-chain__subtitle">
            Trace the regenerative journey of our fiber as it flows from farm soil into modern, ethical wardrobes.
          </p>
          <div className="supply-chain__divider" />
        </div>

        {/* Horizontal Wave Track */}
        <div className="supply-chain__track-wrap">
          <svg
            className="supply-chain__wave-svg"
            viewBox="0 0 1200 140"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Background Wave Track */}
            <path
              d={waveD}
              className="supply-chain__wave-path-bg"
              stroke="#D2DDD1"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Animated Wave Path */}
            <path
              ref={pathRef}
              d={waveD}
              className="supply-chain__wave-path-active"
              stroke="#8CA18B"
              strokeWidth="4"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Moving Point along the Wave */}
            <g className="supply-chain__moving-point" transform={`translate(${pointPos.x}, ${pointPos.y})`}>
              <circle r="16" fill="#8CA18B" fillOpacity="0.25" className="supply-chain__pulse-circle" />
              <circle r="9" fill="#1E2D1D" stroke="#FAF9F5" strokeWidth="2.5" />
              <circle r="4" fill="#8CA18B" />
            </g>
          </svg>

          {/* 4 Interactive Node Stations */}
          <div className="supply-chain__nodes-grid">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStageIndex === idx;
              const isPassed = activeStageIndex >= idx;

              return (
                <div
                  key={stage.id}
                  onClick={() => handleStageClick(idx)}
                  className={`supply-chain__node ${isActive ? 'supply-chain__node--active' : ''} ${isPassed ? 'supply-chain__node--passed' : ''}`}
                >
                  <div className="supply-chain__node-indicator">
                    <div className="supply-chain__node-bullet">
                      <span className="supply-chain__node-num">{stage.number}</span>
                    </div>
                  </div>

                  <div className="supply-chain__node-card">
                    <div className="supply-chain__node-icon-wrap">
                      <Icon className="w-5 h-5 supply-chain__node-icon" />
                    </div>
                    <span className="supply-chain__node-role">{stage.role}</span>
                    <h3 className="supply-chain__node-title">{stage.title}</h3>
                    <p className="supply-chain__node-summary">{stage.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Expanded Detail Box */}
        <div className="supply-chain__detail-box">
          <div className="supply-chain__detail-header">
            <div className="supply-chain__detail-title-group">
              <div className="supply-chain__detail-icon-badge">
                <ActiveIcon className="w-6 h-6 text-[#1E2D1D]" />
              </div>
              <div>
                <span className="supply-chain__detail-phase">Stage {activeStage.number} of 04</span>
                <h4 className="supply-chain__detail-heading">{activeStage.title}</h4>
              </div>
            </div>

            <div className="supply-chain__nav-tabs">
              {STAGES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => handleStageClick(idx)}
                  className={`supply-chain__tab-btn ${activeStageIndex === idx ? 'supply-chain__tab-btn--active' : ''}`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className="supply-chain__detail-body">
            <p className="supply-chain__detail-desc">{activeStage.details}</p>

            <div className="supply-chain__metrics-grid">
              {activeStage.metrics.map((m, i) => (
                <div key={i} className="supply-chain__metric-pill">
                  <CheckCircle2 className="w-4 h-4 text-[#8CA18B] shrink-0" />
                  <div className="supply-chain__metric-text">
                    <span className="supply-chain__metric-label">{m.label}:</span>
                    <strong className="supply-chain__metric-val">{m.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
