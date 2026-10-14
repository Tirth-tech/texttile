import React, { useState, useEffect } from 'react';
import {
  Home, Info, Cpu, Layers, Grid3X3, BarChart3, BookOpen, Mail,
  ArrowUpRight, Leaf, Menu, X
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',         label: 'Home',         Icon: Home },
  { id: 'about',        label: 'About',        Icon: Info },
  { id: 'technology',   label: 'Technology',    Icon: Cpu },
  { id: 'applications', label: 'Applications',  Icon: Grid3X3 },
  { id: 'contact',      label: 'Contact',       Icon: Mail },
];

export default function Navbar({ activeTab, setActiveTab, onOpenPartnerModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // The label to display — hover takes priority, otherwise active
  const displayLabel = hoveredId
    ? (NAV_ITEMS.find(n => n.id === hoveredId)?.label || '')
    : (NAV_ITEMS.find(n => n.id === activeTab)?.label || 'Home');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[var(--border-light)] shadow-sm'
            : 'py-3 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">

          {/* ── Logo ───────────────────────────────────────────────────── */}
          <button onClick={() => go('home')} className="flex items-center gap-2 focus:outline-none group shrink-0">
            <img 
              src="/images/avesa_biotex_logo.jpg" 
              alt="Avesa Biotex Logo" 
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </button>

          {/* ── Center: Dock bar (desktop) ─────────────────────────────── */}
          <div className="hidden lg:flex flex-col items-center">

            {/* Dock pill */}
            <div className="relative flex items-center gap-[2px] px-2.5 py-1 rounded-full bg-[#1C201D] border border-white/10 shadow-lg">

              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                const isHovered = hoveredId === item.id;
                const Icon = item.Icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative flex items-center justify-center focus:outline-none"
                    aria-label={item.label}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* ── Hover bubble / tooltip ──── */}
                    <div
                      className={`absolute -top-9 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap pointer-events-none transition-all duration-200 ease-out ${
                        isHovered
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-1 scale-90'
                      } ${isActive ? 'bg-[#84CC16] text-[#121513]' : 'bg-[#2A2F2C] text-white'}`}
                    >
                      {item.label}
                      {/* tiny triangle */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 ${
                          isActive ? 'bg-[#84CC16]' : 'bg-[#2A2F2C]'
                        }`}
                      />
                    </div>

                    {/* ── Active bead (floating circle) ──── */}
                    <div
                      className={`absolute -top-[18px] w-7 h-7 rounded-full flex items-center justify-center pointer-events-none transition-all duration-300 ease-out ${
                        isActive
                          ? 'bg-[#84CC16] scale-100 opacity-100 shadow-[0_0_16px_rgba(132,204,22,0.5)]'
                          : 'bg-transparent scale-0 opacity-0'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#121513]" />
                    </div>

                    {/* ── Icon button ──── */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? 'text-[#84CC16]'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active page name label below dock */}
            <span
              className="mt-1 text-[9px] font-bold uppercase tracking-widest text-[#84CC16] transition-all duration-200"
              key={displayLabel}
            >
              {displayLabel}
            </span>
          </div>

          {/* ── Right: CTA + mobile hamburger ──────────────────────────── */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenPartnerModal}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E3A2B] hover:bg-[#2A4B37] text-white px-3.5 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all shadow-sm"
            >
              Partner
              <ArrowUpRight className="w-3 h-3 text-[#84CC16]" />
            </button>

            {/* Hamburger — tablets and mobile */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border-light)] bg-[#F3EFEA] text-[#1A1D1B] hover:bg-[#E8DFD3] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile slide-down menu ───────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[52px] z-40 bg-[#FAF8F5] overflow-y-auto p-4 space-y-1.5">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 transition-all ${
                activeTab === item.id
                  ? 'bg-[#1E3A2B] text-white'
                  : 'bg-[#F3EFEA] text-[#1A1D1B] hover:bg-[#E8DFD3]'
              }`}
            >
              <item.Icon className={`w-4 h-4 ${activeTab === item.id ? 'text-[#84CC16]' : 'text-[#7A5C43]'}`} />
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[var(--border-light)]">
            <button
              onClick={() => { setMobileOpen(false); onOpenPartnerModal(); }}
              className="w-full bg-[#1E3A2B] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              Partner With Us
              <ArrowUpRight className="w-4 h-4 text-[#84CC16]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
