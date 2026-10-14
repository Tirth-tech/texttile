import React, { useState } from 'react';
import { TRANSFORMATION_STEPS } from '../data/materialsData';
import { ArrowRight, CheckCircle2, ChevronRight, Sprout, Cpu, Layers, Activity, Grid, ShieldCheck, RefreshCw } from 'lucide-react';

const ICON_MAP = {
  Sprout: Sprout,
  Cpu: Cpu,
  Layers: Layers,
  Activity: Activity,
  Grid: Grid,
  ShieldCheck: ShieldCheck,
  RefreshCw: RefreshCw
};

export default function TransformationTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const current = TRANSFORMATION_STEPS[activeStep];
  const IconComponent = ICON_MAP[current.icon] || Sprout;

  return (
    <section className="py-24 bg-[#121513] text-white relative overflow-hidden bg-grain">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1E2D1D]/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7A5C43]/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#8CA18B] bg-[#1E2D1D] px-4 py-1.5 rounded-full border border-[#8CA18B]/30 inline-block shadow-sm">
            Proprietary BioTransform™ Pipeline
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            We Turn Residues Into Resources.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            From overlooked agricultural crop waste to high-tenacity yarns and luxury fabrics—explore our 7-stage eco-enzymatic transformation science.
          </p>
        </div>

        {/* Timeline Navigation Bar */}
        <div className="mt-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-max justify-between gap-2 p-2 bg-[#1C201D] rounded-full border border-white/10">
            {TRANSFORMATION_STEPS.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1E2D1D] text-white shadow-lg ring-1 ring-[#8CA18B]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                    isActive ? 'bg-[#8CA18B] text-[#121513]' : 'bg-white/10 text-gray-300'
                  }`}>
                    {s.step}
                  </span>
                  <span>{s.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Card Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1C201D] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Left Text & Metrics Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1E2D1D] flex items-center justify-center text-[#8CA18B] shadow-sm">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#8CA18B] uppercase tracking-widest">
                  STAGE {current.step} OF 07
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#9AB09E]">
              {current.subtitle}
            </p>

            <p className="text-sm text-gray-300 leading-relaxed font-light">
              {current.description}
            </p>

            {/* Metric Banner */}
            <div className="p-4 rounded-2xl bg-[#121513] border border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono">Stage Benchmark</span>
                <span className="block text-lg font-extrabold text-[#8CA18B]">{current.stat}</span>
              </div>
              <CheckCircle2 className="w-6 h-6 text-[#8CA18B]" />
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Stage
              </button>
              <button
                disabled={activeStep === TRANSFORMATION_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(TRANSFORMATION_STEPS.length - 1, prev + 1))}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#1E2D1D] hover:bg-[#253924] text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4 text-[#8CA18B]" />
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden h-80 sm:h-96 border border-white/10 shadow-lg group">
              <img 
                src={current.image} 
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121513] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-white bg-[#121513]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  Step {current.step}: {current.title}
                </span>
                <span className="text-xs text-[#8CA18B] font-mono">100% Traceable</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
