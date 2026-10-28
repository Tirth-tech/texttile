import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ArrowUpRight, Menu, X, Play } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'technology', label: 'Technology' },
  { id: 'product-yarns', label: 'Products' },
  { id: 'about', label: 'About Us' },
];

export default function Navbar({ activeTab, setActiveTab, onOpenPartnerModal, onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine if a nav item is active (matching product sub-routes)
  const isItemActive = (id) => {
    if (activeTab === id) return true;
    if (id === 'product-yarns' && ['product-detail', 'product-yarns', 'product-fibres', 'product-fabric'].includes(activeTab)) return true;
    return false;
  };

  return (
    <header className={`navbar-fullwidth ${scrolled ? 'navbar-fullwidth--scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-6">
        
        {/* ── Brand Logo & Text (Avesa Biotex Circular Woven Emblem) ── */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 focus:outline-none group shrink-0 text-left"
        >
          <img
            src="/images/avesa_logo_mark.png"
            alt="Avesa Biotex"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white leading-tight drop-shadow-sm">
              Avesa Biotex
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-widest text-[#C2D0C1] uppercase font-medium">
              Sustainable Textiles
            </span>
          </div>
        </button>

        {/* ── Desktop Nav Links (Home, Technology, Products, About Us) ── */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`navbar-link ${active ? 'navbar-link--active' : ''}`}
              >
                <span>{item.label}</span>
                {active && <span className="navbar-link__underline" />}
              </button>
            );
          })}
        </nav>

        {/* ── Desktop CTA Buttons ── */}
        <div className="hidden md:flex items-center gap-3">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white/90 hover:text-white text-xs font-semibold tracking-wider transition-all shadow-sm"
              title="Watch Opening Video"
            >
              <Play className="w-3 h-3 text-[#8CA18B] fill-current" />
              <span>Intro</span>
            </button>
          )}

          <button
            onClick={onOpenPartnerModal}
            className="bg-white/10 hover:bg-white text-white hover:text-[#162D1D] border border-white/40 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 group shrink-0"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:text-[#162D1D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* ── Mobile Hamburger Button ── */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 text-white border border-white/25 hover:bg-white/25 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* ── Mobile Slide-down Drawer ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/15 px-4 py-4 space-y-2 bg-[#162D1D]/95 backdrop-blur-xl animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  active
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {active && <span className="w-2 h-2 rounded-full bg-white shadow-sm" />}
              </button>
            );
          })}
          {onReplayIntro && (
            <button
              onClick={() => {
                setMobileOpen(false);
                onReplayIntro();
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 text-white/90 hover:bg-white/10 hover:text-white"
            >
              <Play className="w-3.5 h-3.5 text-[#8CA18B] fill-current" />
              <span>Watch Opening Intro</span>
            </button>
          )}
          <div className="pt-3 border-t border-white/15">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full py-3 rounded-full bg-white text-[#162D1D] text-xs font-extrabold uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#162D1D]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
