import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ArrowRight, Menu, X } from 'lucide-react';

/* ── White Stylized 3-Leaf Botanical Emblem (Matching Screenshot) ── */
const LeafLogo = () => (
  <svg viewBox="0 0 36 36" className="w-8 h-8 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Center upright leaf */}
    <path d="M18 5C18 5 22.5 12 22.5 18C22.5 22.5 20 26 18 28C16 26 13.5 22.5 13.5 18C13.5 12 18 5 18 5Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M18 9V27" strokeWidth="1.4" />
    {/* Left curving leaf */}
    <path d="M14 23C14 23 8.5 21 6 15.5C4 10 9 7.5 9 7.5C9 7.5 12 11.5 13 16.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M9.5 12.5C12 16.5 13.5 20 13.5 20" strokeWidth="1.4" />
    {/* Right curving leaf */}
    <path d="M22 23C22 23 27.5 21 30 15.5C32 10 27 7.5 27 7.5C27 7.5 24 11.5 23 16.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M26.5 12.5C24 16.5 22.5 20 22.5 20" strokeWidth="1.4" />
  </svg>
);

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'product-yarns', label: 'Products' },
  { id: 'technology', label: 'Sustainability' },
  { id: 'applications', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeTab, setActiveTab, onOpenPartnerModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine if a nav item is active (matching sub-routes)
  const isItemActive = (id) => {
    if (activeTab === id) return true;
    if (id === 'product-yarns' && ['product-detail', 'product-yarns', 'product-fibres', 'product-fabric'].includes(activeTab)) return true;
    return false;
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        
        {/* Floating Dark Green Textured Linen Pill */}
        <div className="navbar-pill rounded-2xl sm:rounded-[22px] px-5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          
          {/* ── Brand Logo & Text ── */}
          <button
            onClick={() => go('home')}
            className="flex items-center gap-3 focus:outline-none group shrink-0 text-left"
          >
            <LeafLogo />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white leading-tight">
                Avesa Biotex
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-wider text-white/75 font-normal">
                Sustainable Textiles
              </span>
            </div>
          </button>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-7">
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

          {/* ── Desktop CTA Button (Get in Touch) ── */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenPartnerModal}
              className="px-5 py-2 rounded-full border border-white/40 text-white text-xs font-semibold tracking-wide hover:bg-white hover:text-[#173222] transition-all flex items-center gap-2 group shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* ── Mobile Slide-down Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 navbar-pill rounded-2xl p-4 space-y-1.5 border border-white/15 animate-fadeIn">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    active ? 'bg-white/20 text-white font-bold' : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-white" />}
                </button>
              );
            })}
            <div className="pt-2 border-t border-white/15">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full py-2.5 rounded-full border border-white/45 text-white text-xs font-bold text-center hover:bg-white hover:text-[#173222] transition-colors flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
