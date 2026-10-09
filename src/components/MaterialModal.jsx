import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Droplet, Wind, Recycle, Layers, FileText } from 'lucide-react';

export default function MaterialModal({ material, onClose, onRequestSample }) {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#121513]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-light)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#F3EFEA]/90 backdrop-blur-md border-b border-[var(--border-light)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#1E3A2B] text-white text-xs font-bold px-3 py-1 rounded-full">
              {material.category}
            </span>
            <span className="text-xs text-[#5C635E] font-medium hidden sm:inline">
              SKU: {material.id.toUpperCase()}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#E8DFD3] text-[#1A1D1B] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative rounded-2xl overflow-hidden bg-[#E8DFD3] h-72 sm:h-80 shadow-md">
              <img 
                src={material.image} 
                alt={material.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-md text-[#7A5C43] text-xs font-bold px-3 py-1.5 rounded-full border border-[var(--border-light)] shadow-xs">
                {material.badge}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#7A5C43] uppercase">
                  {material.source}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1A1D1B] tracking-tight mt-1">
                  {material.name}
                </h2>
                <p className="text-sm font-semibold text-[#1E3A2B] mt-1">
                  {material.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C635E] leading-relaxed">
                {material.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestSample(material);
                  }}
                  className="bg-[#1E3A2B] hover:bg-[#2A4B37] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
                >
                  <span>Request Material Swatch Kit</span>
                  <ArrowRight className="w-4 h-4 text-[#84CC16]" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="space-y-4 pt-6 border-t border-[var(--border-light)]">
            <h3 className="font-heading text-lg font-bold text-[#1A1D1B] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#1E3A2B]" />
              <span>Technical & Mechanical Specifications</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)]">
                <span className="block text-[11px] font-medium text-[#5C635E]">Composition</span>
                <span className="block text-xs font-bold text-[#1A1D1B] mt-1">{material.composition}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)]">
                <span className="block text-[11px] font-medium text-[#5C635E]">Tensile Strength</span>
                <span className="block text-xs font-bold text-[#1A1D1B] mt-1">{material.tensileStrength}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)]">
                <span className="block text-[11px] font-medium text-[#5C635E]">GSM Range</span>
                <span className="block text-xs font-bold text-[#1A1D1B] mt-1">{material.gsmRange}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)]">
                <span className="block text-[11px] font-medium text-[#5C635E]">Biodegradability</span>
                <span className="block text-xs font-bold text-[#1E3A2B] mt-1">{material.biodegradability}</span>
              </div>
            </div>
          </div>

          {/* Environmental Impact Breakdown */}
          <div className="p-6 rounded-3xl bg-[#1E3A2B] text-white space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#84CC16]" />
                <span>Verified Sustainability Savings</span>
              </h3>
              <span className="text-[10px] text-emerald-200 uppercase tracking-widest bg-emerald-900/60 px-3 py-1 rounded-full">
                ISO 14040 LCA Verified
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <Droplet className="w-5 h-5 text-[#84CC16] mb-1" />
                <span className="block text-[11px] text-emerald-200">Water Reduction</span>
                <span className="block text-xl font-extrabold text-white mt-1">{material.sustainabilityImpact.waterSaved}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <Wind className="w-5 h-5 text-[#84CC16] mb-1" />
                <span className="block text-[11px] text-emerald-200">Carbon Prevented</span>
                <span className="block text-xl font-extrabold text-white mt-1">{material.sustainabilityImpact.carbonAvoided}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <Recycle className="w-5 h-5 text-[#84CC16] mb-1" />
                <span className="block text-[11px] text-emerald-200">Agri Waste Diverted</span>
                <span className="block text-xl font-extrabold text-white mt-1">{material.sustainabilityImpact.wasteDiverted}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#84CC16] mb-1" />
                <span className="block text-[11px] text-emerald-200">Farmer Bonus</span>
                <span className="block text-xl font-extrabold text-white mt-1">{material.sustainabilityImpact.farmerIncomeBoost}</span>
              </div>
            </div>
          </div>

          {/* Applications & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Recommended Applications */}
            <div className="p-6 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-3">
              <h4 className="font-heading text-sm font-bold text-[#1A1D1B] uppercase tracking-wider">
                Recommended Applications
              </h4>
              <div className="space-y-2">
                {material.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1A1D1B]">
                    <div className="w-2 h-2 rounded-full bg-[#C85A32]" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Readiness */}
            <div className="p-6 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-3">
              <h4 className="font-heading text-sm font-bold text-[#1A1D1B] uppercase tracking-wider">
                Standards & Certifications
              </h4>
              <div className="space-y-2">
                {material.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2B]">
                    <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
