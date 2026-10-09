import React, { useState } from 'react';
import { Search, ShieldCheck, QrCode, MapPin, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function TraceabilityMockup() {
  const [batchId, setBatchId] = useState('BATCH-2026-BANANA-042');
  const [searched, setSearched] = useState(true);

  const sampleBatches = [
    { id: 'BATCH-2026-BANANA-042', name: 'Aethel-Banana™ Harvest Batch #42', crop: 'Banana Stem Waste', farm: 'Co-Op District 7, Karnataka', waterSaved: '94%', ecoScore: 'A+ (98/100)' },
    { id: 'BATCH-2026-HEMP-088', name: 'Aethel-Hemp™ Alpine Fiber Batch #88', crop: 'Industrial Hemp Stalks', farm: 'Chamonix Valley Co-Op', waterSaved: '98%', ecoScore: 'A+ (99/100)' },
    { id: 'BATCH-2026-PINE-019', name: 'Aethel-Pine™ Leaf Fiber Batch #19', crop: 'Pineapple Leaf Residue', farm: 'Luzon Agri Hub, PH', waterSaved: '91%', ecoScore: 'A+ (97/100)' }
  ];

  const currentBatch = sampleBatches.find(b => b.id === batchId) || sampleBatches[0];

  return (
    <section className="py-24 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E3A2B] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[var(--border-light)] inline-block shadow-sm">
            Digital Material Passport (DPP Ready)
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1A1D1B] tracking-tight">
            Know Where Your Material Comes From.
          </h2>
          <p className="text-sm sm:text-base text-[#5C635E] font-normal leading-relaxed">
            Every roll of Aethel material is backed by a blockchain-verifiable digital passport mapping farm origin, batch harvest metrics, and eco-refining benchmarks.
          </p>
        </div>

        {/* Search Bar Interactive Widget */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="p-2 bg-[#FAF8F5] rounded-2xl border border-[var(--border-light)] shadow-md flex items-center gap-2">
            <Search className="w-5 h-5 text-[#5C635E] ml-3" />
            <input 
              type="text" 
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              placeholder="Enter Material Batch ID (e.g. BATCH-2026-BANANA-042)"
              className="w-full bg-transparent text-xs sm:text-sm font-mono font-bold text-[#1A1D1B] focus:outline-none"
            />
            <button 
              onClick={() => setSearched(true)}
              className="bg-[#1E3A2B] hover:bg-[#2A4B37] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0"
            >
              Verify Passport
            </button>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-[#5C635E]">
            <span>Try sample batches:</span>
            {sampleBatches.map(b => (
              <button
                key={b.id}
                onClick={() => {
                  setBatchId(b.id);
                  setSearched(true);
                }}
                className={`font-mono text-[11px] underline ${batchId === b.id ? 'font-bold text-[#1E3A2B]' : 'hover:text-[#1E3A2B]'}`}
              >
                {b.id}
              </button>
            ))}
          </div>
        </div>

        {/* Passport Preview Card */}
        {searched && (
          <div className="mt-12 max-w-4xl mx-auto bg-[#FAF8F5] rounded-3xl border border-[var(--border-light)] shadow-xl p-8 sm:p-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-light)]">
              <div>
                <span className="text-[10px] font-mono text-[#7A5C43] uppercase tracking-widest bg-[#F3EFEA] px-2.5 py-1 rounded">
                  PASSPORT VERIFIED • ISO 14040
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#1A1D1B] mt-2">
                  {currentBatch.name}
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-[#1E3A2B] text-white p-3 rounded-2xl">
                <QrCode className="w-8 h-8 text-[#84CC16]" />
                <div>
                  <span className="block text-[10px] text-emerald-200 uppercase font-mono">ECO SCORE</span>
                  <span className="block text-base font-extrabold text-[#84CC16]">{currentBatch.ecoScore}</span>
                </div>
              </div>
            </div>

            {/* Traceability Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-1">
                <MapPin className="w-4 h-4 text-[#1E3A2B]" />
                <span className="block text-[10px] text-[#5C635E] font-medium uppercase">Farm Origin</span>
                <span className="block text-xs font-bold text-[#1A1D1B]">{currentBatch.farm}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-1">
                <ShieldCheck className="w-4 h-4 text-[#1E3A2B]" />
                <span className="block text-[10px] text-[#5C635E] font-medium uppercase">Residue Stream</span>
                <span className="block text-xs font-bold text-[#1A1D1B]">{currentBatch.crop}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-1">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                <span className="block text-[10px] text-[#5C635E] font-medium uppercase">Water Savings</span>
                <span className="block text-xs font-bold text-[#1E3A2B]">{currentBatch.waterSaved}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-1">
                <Sparkles className="w-4 h-4 text-[#C85A32]" />
                <span className="block text-[10px] text-[#5C635E] font-medium uppercase">Refining Protocol</span>
                <span className="block text-xs font-bold text-[#1A1D1B]">Aethel Eco-Cavitation™</span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="flex items-center justify-between text-xs text-[#5C635E] pt-4 border-t border-[var(--border-light)]">
              <span>Verified Hash: <code className="font-mono text-[11px] text-[#1A1D1B]">0x8f4b...39a1</code></span>
              <a href="#partner" className="text-[#1E3A2B] font-bold flex items-center gap-1 hover:underline">
                <span>Request API Access</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
