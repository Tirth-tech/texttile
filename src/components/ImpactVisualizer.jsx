import React, { useState, useEffect, useRef } from 'react';
import { IMPACT_METRICS } from '../data/materialsData';
import { Droplets, Wind, Recycle, Users, Info, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Droplets: Droplets,
  Wind: Wind,
  Recycle: Recycle,
  Users: Users
};

/* ── COUNT-UP HOOK ──────────────────────────────────────────────────── */
function useCountUp(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startCounting) return;
    
    // Parse the numeric value from string (handles commas & signs)
    const cleanTarget = parseFloat(target.toString().replace(/[^0-9.\-+]/g, ''));
    if (isNaN(cleanTarget)) {
      setCount(target);
      return;
    }

    const isDecimal = target.toString().includes('.');
    const startTime = performance.now();
    
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = eased * cleanTarget;
      
      if (isDecimal) {
        setCount(currentVal.toFixed(1));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, startCounting]);

  return count;
}

/* ── FORMAT WITH COMMAS ────────────────────────────────────────────── */
function formatNumber(num) {
  if (typeof num === 'string' && num.includes('.')) {
    return num; // already formatted decimal
  }
  return Number(num).toLocaleString();
}

/* ── SINGLE METRIC CARD WITH COUNT-UP ──────────────────────────────── */
function MetricCard({ metric, isSelected, onClick, startCounting }) {
  const Icon = ICON_MAP[metric.icon] || Droplets;
  
  // Extract just the number and prefix/suffix
  const rawValue = metric.value;
  const hasPlus = rawValue.toString().startsWith('+');
  const cleanNum = rawValue.toString().replace(/[^0-9.]/g, '');
  
  const animatedValue = useCountUp(cleanNum, 2200, startCounting);
  const displayValue = (hasPlus ? '+' : '') + formatNumber(animatedValue);

  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${
        isSelected 
          ? 'bg-[#1E3A2B] text-white border-emerald-600 shadow-xl scale-[1.02]' 
          : 'bg-[#F3EFEA] text-[#1A1D1B] border-[var(--border-light)] hover:bg-[#ECE6DD]'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isSelected ? 'bg-white/10 text-[#84CC16]' : 'bg-[#1E3A2B] text-white'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
          isSelected ? 'bg-[#84CC16] text-[#121513]' : 'bg-[#FAF8F5] text-[#1E3A2B]'
        }`}>
          {metric.comparison}
        </span>
      </div>

      <div className="mt-6">
        <span className={`block text-xs font-bold uppercase tracking-wider ${
          isSelected ? 'text-emerald-200' : 'text-[#5C635E]'
        }`}>
          {metric.title}
        </span>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="font-heading text-3xl font-extrabold tracking-tight">
            {displayValue}
          </span>
          <span className={`text-xs font-semibold ${isSelected ? 'text-emerald-200' : 'text-[#7A5C43]'}`}>
            {metric.unit}
          </span>
        </div>
        <p className={`text-[11px] mt-2 leading-relaxed ${
          isSelected ? 'text-gray-300' : 'text-[#5C635E]'
        }`}>
          {metric.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ImpactVisualizer() {
  const [selectedMetric, setSelectedMetric] = useState(IMPACT_METRICS[0]);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-3.5 py-1 rounded-full border border-[var(--border-light)]">
              Rigorous Life Cycle Assessment
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1A1D1B] tracking-tight">
              Avesa Biotex by Numbers
            </h2>
            <p className="text-sm sm:text-base text-[#5C635E] font-normal leading-relaxed">
              We quantify environmental and social savings at every stage—from agricultural waste collection to eco-enzymatic refining.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#5C635E] bg-[#F3EFEA] p-3 rounded-2xl border border-[var(--border-light)] max-w-md">
            <Info className="w-5 h-5 text-[#1E3A2B] shrink-0" />
            <span>Impact values are based on ISO 14040 lifecycle assumptions and will be updated with third-party verified company batch data.</span>
          </div>
        </div>

        {/* 4 Primary Metric Cards with Count-Up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              isSelected={selectedMetric.id === metric.id}
              onClick={() => setSelectedMetric(metric)}
              startCounting={startCounting}
            />
          ))}
        </div>

        {/* Detailed Comparison Graphic */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#F3EFEA] border border-[var(--border-light)] shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-lg">
              <span className="text-xs font-bold text-[#C85A32] uppercase tracking-widest">
                Side-by-Side Comparison: {selectedMetric.title}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1D1B]">
                Conventional Fibre vs Avesa Biotex
              </h3>
              <p className="text-xs sm:text-sm text-[#5C635E]">
                Traditional raw material systems consume massive resource inputs. Our circular bio-refining model eliminates waste before it enters the environment.
              </p>
            </div>

            {/* Visual Bar Comparison */}
            <div className="w-full md:w-1/2 space-y-6 bg-[#FAF8F5] p-6 rounded-2xl border border-[var(--border-light)]">
              
              {/* Conventional */}
              <div>
                <div className="flex justify-between text-xs font-bold text-[#1A1D1B] mb-1.5">
                  <span>Traditional Material System</span>
                  <span className="text-red-700 font-mono">{selectedMetric.conventional}</span>
                </div>
                <div className="w-full h-4 bg-red-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full w-[85%]" />
                </div>
              </div>

              {/* Avesa Biotex */}
              <div>
                <div className="flex justify-between text-xs font-bold text-[#1E3A2B] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                    <span>Avesa Biotex Solution</span>
                  </span>
                  <span className="text-[#1E3A2B] font-mono font-extrabold">{selectedMetric.avesa || selectedMetric.aethel}</span>
                </div>
                <div className="w-full h-4 bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1E3A2B] rounded-full w-[15%]" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
