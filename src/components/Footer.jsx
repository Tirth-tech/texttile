import React, { useState } from 'react';
import { Leaf, ArrowRight, CheckCircle2, Globe, Share2, Mail, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenPartnerModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'technology', label: 'BioTransform™ Tech' },
    { id: 'product-yarns', label: 'Yarns' },
    { id: 'product-fibres', label: 'Fibres' },
    { id: 'product-fabric', label: 'Fabrics' },
    { id: 'applications', label: 'Applications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#121513] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Banner Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1C201D] border border-white/10 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] font-mono text-[#84CC16] uppercase tracking-widest bg-[#1E3A2B] px-3 py-1 rounded-full">
              MATERIALS INNOVATION JOURNAL
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Get updates on materials, innovation & circularity.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              Receive quarterly scientific whitepapers, LCA breakdowns, and new crop waste fibre announcements directly in your inbox.
            </p>
          </div>

          <div className="lg:col-span-5">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-[#121513] p-2 rounded-2xl border border-white/10">
                <Mail className="w-5 h-5 text-gray-400 ml-3" />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-[#1E3A2B] hover:bg-[#2A4B37] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#84CC16]" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-[#1E3A2B] text-white text-xs font-bold flex items-center gap-2 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-[#84CC16]" />
                <span>Thank you! You are subscribed to Aethel Materials Journal.</span>
              </div>
            )}
          </div>

        </div>

        {/* Main Footer Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A2B] flex items-center justify-center text-[#84CC16]">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                AETHEL MATERIALS
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              Turning what was once waste into the materials of tomorrow. Connecting agriculture, materials science, textile innovation, and circular economy technology to scale sustainable solutions globally.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#84CC16]">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                <span>Zürich • Bangalore • Boston</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Tech */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Solutions & Impact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {navLinks.slice(4).map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gray-300">
              Global Headquarters
            </h4>
            <div className="text-xs text-gray-400 space-y-1 font-light">
              <p className="font-bold text-white">Aethel Materials AG</p>
              <p>Biomaterials Park West 12</p>
              <p>8005 Zürich, Switzerland</p>
              <p className="pt-2 font-mono text-[11px] text-gray-300">contact@aethelmaterials.com</p>
            </div>

            <button
              onClick={onOpenPartnerModal}
              className="mt-2 w-full bg-[#1E3A2B] hover:bg-[#2A4B37] text-white py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-emerald-500/20"
            >
              <span>Partner Request</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#84CC16]" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© 2026 Aethel Materials AG. All rights reserved. Circular Economy & Sustainable Materials Science.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#cookie" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <div className="flex items-center gap-3 ml-2 text-gray-400">
              <a href="#share" className="hover:text-white"><Share2 className="w-4 h-4" /></a>
              <a href="#globe" className="hover:text-white"><Globe className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
