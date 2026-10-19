import React from 'react';
import './QuestSection.css';
import { Sprout, Users, RefreshCw, Sparkles } from 'lucide-react';

/* ── Lush Botanical Green Leaves Matching Reference Drawing ── */
const BotanicalLeaves = () => (
  <svg viewBox="0 0 120 120" className="mission-browser-card__leaves" aria-hidden="true">
    {/* Base stem */}
    <path d="M15,115 Q35,80 40,40" stroke="#0D4B2B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    
    {/* Leaf 1 (Leftmost round leaf) */}
    <path d="M35,115 C10,95 5,65 18,48 C30,42 42,60 40,82 C38,100 35,115 35,115 Z" fill="#1EB56D" stroke="#0D4B2B" strokeWidth="2.5" />
    <path d="M28,100 C22,80 20,65 22,50" stroke="#0D4B2B" strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="24" y1="78" x2="16" y2="70" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="25" y1="88" x2="32" y2="80" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />
    
    {/* Leaf 2 (Tall Center leaf with veins) */}
    <path d="M42,115 C30,85 28,45 42,18 C56,18 64,38 58,68 C52,95 42,115 42,115 Z" fill="#28D685" stroke="#0D4B2B" strokeWidth="2.5" />
    <path d="M42,110 C40,80 42,48 44,22" stroke="#0D4B2B" strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="41" y1="60" x2="33" y2="52" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="43" y1="75" x2="52" y2="66" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="42" y1="42" x2="50" y2="35" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="41" y1="92" x2="34" y2="86" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />

    {/* Leaf 3 (Right Frilled leaf) */}
    <path d="M48,115 C55,95 68,75 78,58 C84,62 80,75 70,88 C60,100 48,115 48,115 Z" fill="#1EB56D" stroke="#0D4B2B" strokeWidth="2.5" />
    <path d="M52,108 C62,90 70,75 75,60" stroke="#0D4B2B" strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="60" y1="92" x2="54" y2="86" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="66" y1="80" x2="74" y2="72" stroke="#0D4B2B" strokeWidth="1.8" strokeLinecap="round" />

    {/* Back small leaf */}
    <path d="M55,115 C65,100 78,90 85,82 C90,86 86,96 78,104 C68,112 55,115 55,115 Z" fill="#169356" stroke="#0D4B2B" strokeWidth="2.2" />
  </svg>
);

const MISSION_CARDS = [
  {
    id: '01',
    pill: 'PILLAR 01',
    title: 'Revolutionizing Natural Bast',
    paragraphs: [
      "I was really impressed by the softness of the product when I received it.",
      "It was much softer than I anticipated and it feels great to use."
    ],
    sealTitle: 'BAST CELLULOSE',
    sealSub: 'ECO-REFINED',
    icon: Sprout,
  },
  {
    id: '02',
    pill: 'PILLAR 02',
    title: 'Empowering Farming Communities',
    paragraphs: [
      "To empower farming communities by creating fair-trade supply chains that uplift livelihoods.",
      "Transforming post-harvest agricultural crop residue into fair-trade income for cooperatives."
    ],
    sealTitle: 'FAIR HARVEST',
    sealSub: '+35% INCOME',
    icon: Users,
  },
  {
    id: '03',
    pill: 'PILLAR 03',
    title: 'Uncompromising Planet Care',
    paragraphs: [
      "To revolutionize the textile industry by transforming natural jute fibres into high-performance materials.",
      "Proving that true biological circularity and luxury apparel quality coexist without compromise."
    ],
    sealTitle: 'ZERO PLASTICS',
    sealSub: '100% CIRCULAR',
    icon: RefreshCw,
  },
];

export default function QuestSection() {
  return (
    <section className="quest-section" id="mission">
      <div className="quest-section__container">
        
        {/* Section Header */}
        <div className="quest-mission__header">
          <div className="quest-mission__badge">
            <span className="quest-mission__badge-dot" />
            <span>PURPOSE & IMPACT</span>
          </div>
          <h2 className="quest-mission__title">
            <span className="quest-mission__triangle">▼</span>OUR MISSION
          </h2>
          <div className="quest-mission__divider" />
        </div>

        {/* 3 Different Horizontal Browser-Styled Cards (No Brand Logos, Enhanced Aesthetics) */}
        <div className="mission-horizontal-cards-grid">
          {MISSION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="mission-browser-card">
                
                {/* Emerald Green Browser Header Bar with 3 Dots */}
                <div className="mission-browser-card__top-bar">
                  <div className="mission-browser-card__dots">
                    <span className="mission-browser-card__dot" />
                    <span className="mission-browser-card__dot" />
                    <span className="mission-browser-card__dot" />
                  </div>
                </div>

                {/* White Card Body */}
                <div className="mission-browser-card__body">
                  
                  {/* Top Meta: Pillar Badge & Title */}
                  <div className="mission-browser-card__head">
                    <div className="mission-browser-card__pillar-badge">
                      <span className="mission-browser-card__pillar-dot" />
                      <span>{card.pill}</span>
                    </div>
                    <h3 className="mission-browser-card__title">{card.title}</h3>
                  </div>

                  {/* Main Quote / Statement Body */}
                  <div className="mission-browser-card__content">
                    {card.paragraphs.map((p, idx) => (
                      <p key={idx} className="mission-browser-card__text">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Bottom Footer: Leaves (Left) & Elegant Circular Seal Stamp (Right - No commercial logos) */}
                  <div className="mission-browser-card__footer">
                    <div className="mission-browser-card__leaves-wrap">
                      <BotanicalLeaves />
                    </div>

                    <div className="mission-browser-card__seal-wrap">
                      <div className="mission-browser-card__seal">
                        <div className="mission-browser-card__seal-icon">
                          <Icon className="w-4 h-4 text-[#1E2D1D]" />
                        </div>
                        <div className="mission-browser-card__seal-text">
                          <span className="mission-browser-card__seal-main">{card.sealTitle}</span>
                          <span className="mission-browser-card__seal-sub">{card.sealSub}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
