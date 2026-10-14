import React, { useState, useEffect, useRef } from 'react';

const STATS_DATA = [
  {
    id: 'yards',
    target: 700,
    formattedTarget: '700',
    description: 'Yards of processing line equipment, stretched end to end',
  },
  {
    id: 'pounds-hour',
    target: 22000,
    formattedTarget: '22,000',
    description: 'Pounds of hemp & jute straw that can be processed per hour',
  },
  {
    id: 'pounds-year',
    target: 150000000,
    formattedTarget: '150,000,000',
    description: 'Pounds of hemp & jute straw that can be processed per year',
  },
  {
    id: 'waste',
    target: 0,
    formattedTarget: '0',
    description: 'Amount of waste, as the Avesa Biotex bio-process utilizes every part of the plant stalk',
  },
  {
    id: 'co2',
    target: 10,
    formattedTarget: '10',
    description: 'Tons of CO2 that one acre of bio-crops absorbs on average',
  },
  {
    id: 'acres',
    target: 25000,
    formattedTarget: '25,000',
    description: 'Acres of sustainable bio-crop farming currently contracted',
  },
];

/* ── NUMBER FORMATTER WITH COMMAS ── */
function formatCommas(num) {
  return Number(num).toLocaleString('en-US');
}

/* ── SINGLE STAT CARD WITH COUNT-UP ANIMATION ── */
function StatCard({ stat, startCounting }) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      setCurrentVal(0);
      return;
    }

    if (stat.target === 0) {
      setCurrentVal(0);
      return;
    }

    let startTime = null;
    let animationFrameId = null;
    const duration = 2200; // 2.2s smooth count-up

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * stat.target);

      setCurrentVal(val);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentVal(stat.target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [startCounting, stat.target]);

  return (
    <div className="bg-[#1C303E] border border-[#2D4A5E] rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[220px] sm:min-h-[250px] shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-[#3D637E]">
      <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
        {formatCommas(currentVal)}
      </div>
      <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed max-w-xs">
        {stat.description}
      </p>
    </div>
  );
}

export default function ImpactVisualizer() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
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
    <section ref={sectionRef} className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)] inline-block">
            Impact You Can Measure
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1A1D1B] tracking-tight">
            Avesa Biotex by Numbers
          </h2>
          <p className="text-sm sm:text-base text-[#5C635E] font-normal leading-relaxed">
            Quantifiable metrics from harvest processing to zero-waste bio-refining.
          </p>
        </div>

        {/* 3x2 Grid Matching User Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STATS_DATA.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
              startCounting={startCounting}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
