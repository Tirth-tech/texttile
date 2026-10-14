import React from 'react';
import { TEAM_MEMBERS, PARTNERS } from '../data/materialsData';
import { Leaf, Award, Globe, ShieldCheck, Share2, ArrowRight, HeartHandshake, Sprout, Cpu } from 'lucide-react';

export default function AboutPage({ onOpenPartnerModal }) {
  return (
    <div className="pt-24 pb-20 space-y-24 bg-[#FAF8F5]">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)]">
          About Avesa Biotex
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#1A1D1B] tracking-tight max-w-4xl mx-auto leading-tight">
          Where Agriculture Meets <br className="hidden sm:inline" />
          <span className="text-shimmer font-serif-italic font-normal">Materials Science.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C635E] max-w-3xl mx-auto font-normal leading-relaxed">
          Avesa Biotex is a circular technology company pioneering the industrial transformation of agricultural jute and crop waste into high-value textile fibres, yarns, and eco-sustainable materials.
        </p>
      </section>

      {/* Mission & Vision Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-10 rounded-3xl bg-[#1E2D1D] text-white space-y-4 shadow-xl">
            <span className="text-xs font-mono text-[#8CA18B] uppercase tracking-widest">OUR PURPOSE</span>
            <h2 className="font-heading text-3xl font-extrabold text-white">Our Mission</h2>
            <p className="text-sm text-gray-200 leading-relaxed font-light">
              To accelerate the global transition toward circular material systems by converting overlooked agricultural waste streams into high-performance, commercially scalable textile raw materials.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-[#FAF9F5] text-[#1E2D1D] space-y-4 border border-[#8CA18B]/30 shadow-sm">
            <span className="text-xs font-mono text-[#8CA18B] uppercase tracking-widest">THE HORIZON</span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1E2D1D]">Our Vision</h2>
            <p className="text-sm text-[#5C635E] leading-relaxed">
              A world where waste becomes an obsolete concept, where every textile product begins in soil and re-nourishes soil, and where sustainable bio-materials are the global industrial standard.
            </p>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E2D1D] bg-[#8CA18B]/20 px-3.5 py-1 rounded-full border border-[#8CA18B]/30">
            Guiding Philosophy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2D1D]">What We Believe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#8CA18B]/25 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E2D1D] text-[#8CA18B] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Science-First Sustainability</h3>
            <p className="text-xs text-[#5C635E] leading-relaxed">We reject greenwashing. Every material claim is backed by ISO 14040 verified life cycle assessments and physical mechanical testing.</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#8CA18B]/25 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E2D1D] text-[#8CA18B] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Farmer Prosperity</h3>
            <p className="text-xs text-[#5C635E] leading-relaxed">True circularity must be social. We purchase crop waste directly from farm cooperatives, boosting smallholder family seasonal earnings by over 30%.</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#8CA18B]/25 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E2D1D] text-[#8CA18B] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Industrial Drop-In Scale</h3>
            <p className="text-xs text-[#5C635E] leading-relaxed">For sustainable materials to succeed, they must work on existing global spinning and weaving infrastructure without requiring expensive retooling.</p>
          </div>
        </div>
      </section>

      {/* Leadership & Research Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-3.5 py-1 rounded-full border border-[var(--border-light)]">
            World-Class Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1A1D1B]">Leadership & Scientific Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-[#F3EFEA] rounded-3xl overflow-hidden border border-[var(--border-light)] p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-56 rounded-2xl overflow-hidden bg-[#E8DFD3]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#1A1D1B]">{member.name}</h3>
                <span className="text-xs font-semibold text-[#1E2D1D] block">{member.role}</span>
                <p className="text-xs text-[#5C635E] mt-2 line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Network Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-3.5 py-1 rounded-full border border-[var(--border-light)]">
            Global Ecosystem
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1A1D1B]">Research & Industry Ecosystem</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#F3EFEA] border border-[var(--border-light)] text-center space-y-2 flex flex-col justify-between">
              <span className="font-mono text-xs font-extrabold text-[#1E2D1D] tracking-wider block">{partner.logoText}</span>
              <span className="text-[10px] text-[#5C635E] block">{partner.category}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
