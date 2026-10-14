import React from 'react';
import { ArrowUpRight, Sparkles, Droplet, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MaterialCard({ material, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(material)}
      className="group relative bg-[#F3EFEA] hover:bg-[#ECE6DD] border border-[var(--border-light)] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
    >
      {/* Image Container with Badge */}
      <div className="relative h-64 overflow-hidden bg-[#E8DFD3]">
        <img 
          src={material.image} 
          alt={material.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121513]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="bg-[#1E2D1D]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#8CA18B]/30 shadow-xs">
            {material.category}
          </span>
          <span className="bg-[#FAF8F5]/90 backdrop-blur-md text-[#7A5C43] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--border-light)] shadow-xs">
            {material.badge}
          </span>
        </div>

        {/* Hover Arrow Button */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FAF8F5] text-[#1E2D1D] flex items-center justify-center group-hover:bg-[#1E2D1D] group-hover:text-white transition-colors duration-300 shadow-md">
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

        {/* Material Name Overlay on Image */}
        <div className="absolute bottom-4 left-4 right-16">
          <h3 className="font-heading text-2xl font-bold text-white tracking-tight leading-none drop-shadow-sm">
            {material.name}
          </h3>
          <p className="text-xs font-medium text-[#C5D3C4] mt-1 line-clamp-1">
            {material.source}
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-[#5C635E] leading-relaxed line-clamp-3 font-normal">
          {material.shortDesc}
        </p>

        {/* Key Specs Pills */}
        <div className="space-y-2 pt-2 border-t border-[var(--border-light)]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#5C635E] font-medium">Tensile Strength:</span>
            <span className="font-semibold text-[#1A1D1B]">{material.tensileStrength}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#5C635E] font-medium">Water Saved:</span>
            <span className="font-bold text-[#1E2D1D] bg-[#8CA18B]/20 px-2 py-0.5 rounded text-[11px]">
              {material.sustainabilityImpact.waterSaved}
            </span>
          </div>
        </div>

        {/* Key Features Bullet Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {material.keyProperties.slice(0, 2).map((prop, idx) => (
            <span 
              key={idx} 
              className="text-[10px] font-medium bg-[#FAF9F5] text-[#1E2D1D] px-2.5 py-1 rounded-lg border border-[#8CA18B]/25 flex items-center gap-1"
            >
              <CheckCircle2 className="w-3 h-3 text-[#8CA18B]" />
              {prop}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-2 text-xs font-bold text-[#1E2D1D] group-hover:text-[#8CA18B] flex items-center justify-between transition-colors">
          <span>Explore Specifications</span>
          <span className="text-[11px] underline underline-offset-4 font-semibold">View Detail →</span>
        </div>
      </div>
    </div>
  );
}
