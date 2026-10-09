import React, { useState } from 'react';
import { RefreshCw, Sprout, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const NODES = [
  { step: "01", title: "Agricultural Harvest", desc: "Regenerative crops & residual biomass generation." },
  { step: "02", title: "Residue Aggregation", desc: "Fair-trade crop waste purchasing from farm co-ops." },
  { step: "03", title: "Enzymatic Bio-Refining", desc: "Zero-toxic solvent eco-decortication." },
  { step: "04", title: "Fibre & Yarn Spinning", desc: "High-tenacity cellulosic staple & filigree yarns." },
  { step: "05", title: "Fabric & Composite Weave", desc: "Luxury denims, knits, felts & bio-composites." },
  { step: "06", title: "Consumer Product Life", desc: "High-durability apparel, footwear & mobility." },
  { step: "07", title: "Soil Nutrient Return", desc: "100% Home & soil compostability replenishing crops." }
];

export default function CircularDiagram() {
  const [activeNode, setActiveNode] = useState(0);
  const selected = NODES[activeNode];

  return (
    <section className="py-24 bg-[#121513] text-white relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#84CC16] bg-[#1E3A2B] px-4 py-1.5 rounded-full border border-emerald-500/30 inline-block shadow-sm">
            Zero-Waste Circular Architecture
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designing Materials for a Circular System.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Nature does not produce waste. Every material we engineer begins in the soil and returns to the soil without synthetic residue.
          </p>
        </div>

        {/* Circular Interactive Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Circular Wheel Controls (Left) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-[#1C201D] rounded-3xl border border-white/10 shadow-xl relative min-h-[420px]">
            
            {/* Center Hub */}
            <div className="w-32 h-32 rounded-full bg-[#1E3A2B] border-2 border-[#84CC16] flex flex-col items-center justify-center text-center p-2 z-10 shadow-2xl">
              <RefreshCw className="w-8 h-8 text-[#84CC16] animate-spin-slow mb-1" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">100% Circular</span>
              <span className="text-[9px] text-emerald-200">Zero Microplastics</span>
            </div>

            {/* Orbit Ring Buttons */}
            <div className="w-full space-y-2 mt-8">
              {NODES.map((node, idx) => {
                const isActive = activeNode === idx;
                return (
                  <button
                    key={node.step}
                    onClick={() => setActiveNode(idx)}
                    className={`w-full text-left p-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between border ${
                      isActive 
                        ? 'bg-[#1E3A2B] text-white border-[#84CC16] shadow-md translate-x-2' 
                        : 'bg-[#121513] text-gray-400 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                        isActive ? 'bg-[#84CC16] text-[#121513]' : 'bg-white/10 text-gray-400'
                      }`}>
                        {node.step}
                      </span>
                      <span>{node.title}</span>
                    </div>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active Node Detail Card (Right) */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[#1C201D] border border-white/10 shadow-2xl space-y-6 flex flex-col justify-between h-full min-h-[420px]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-[#84CC16] uppercase tracking-widest bg-[#1E3A2B] px-3 py-1 rounded-full">
                  STAGE {selected.step} OF 07
                </span>
                <span className="text-xs text-gray-400">Biological Loop Node</span>
              </div>

              <h3 className="font-heading text-3xl font-bold text-white mt-3">
                {selected.title}
              </h3>

              <p className="text-sm text-gray-300 font-light leading-relaxed mt-4">
                {selected.desc}
              </p>
            </div>

            {/* Circular Value Proposition Box */}
            <div className="p-6 rounded-2xl bg-[#121513] border border-white/10 space-y-3">
              <span className="text-xs font-bold text-[#84CC16] uppercase tracking-wider block">
                Environmental & Economic Value
              </span>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  <span>Eliminating toxic chemical sludge & synthetic polymers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  <span>Full traceability from farm batch ID to finished fabric</span>
                </li>
              </ul>
            </div>

            {/* Stepper control */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-gray-400">Click any stage above to inspect loop details</span>
              <button
                onClick={() => setActiveNode((prev) => (prev + 1) % NODES.length)}
                className="px-4 py-2 rounded-full bg-[#1E3A2B] hover:bg-[#2A4B37] text-white text-xs font-bold flex items-center gap-2"
              >
                <span>Advance Loop</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#84CC16]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
