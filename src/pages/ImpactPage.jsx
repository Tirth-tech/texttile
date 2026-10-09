import React from 'react';
import ImpactVisualizer from '../components/ImpactVisualizer';
import CircularDiagram from '../components/CircularDiagram';
import { ShieldCheck, Download, Info, CheckCircle2, Users, Sprout } from 'lucide-react';

export default function ImpactPage({ onOpenPartnerModal }) {
  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#FAF8F5]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)]">
          Quantified Sustainability & LCA
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#1A1D1B] tracking-tight max-w-4xl mx-auto leading-tight">
          Impact You Can <br className="hidden sm:inline" />
          <span className="text-shimmer font-serif-italic font-normal">Measure & Audit.</span>
        </h1>
        <p className="text-base text-[#5C635E] max-w-2xl mx-auto">
          We combine rigorous ISO 14040 environmental life cycle assessments with direct social impact metrics across 12,000+ smallholder farming households.
        </p>
      </section>

      {/* Main Impact Visualizer Dashboard */}
      <ImpactVisualizer />

      {/* Circular System Diagram */}
      <CircularDiagram />

      {/* Download Impact Report Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#1E3A2B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-[#84CC16] uppercase tracking-widest">ANNUAL SUSTAINABILITY AUDIT</span>
            <h3 className="font-heading text-2xl font-bold">Download the 2026 ISO 14040 Verified LCA Report</h3>
            <p className="text-xs text-gray-200">Detailed methodology, water footprint benchmarks, atmospheric stubble burning prevention data, and farm income audit metrics.</p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="bg-[#84CC16] text-[#121513] px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-lime-400 transition-colors shrink-0 flex items-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Report PDF</span>
          </button>
        </div>
      </section>

    </div>
  );
}
