import React, { useState } from 'react';
import './QuestSection.css';
import { ArrowRight, CheckCircle2, RotateCw } from 'lucide-react';

const SECTIONS_DATA = [
  {
    id: 'fabrics',
    colorName: 'green',
    title: 'Sustainable Fabrics',
    bgImage: '/images/fabric-green.jpg',
    itemImage: '/images/sustainable-fabrics-item.jpg',
    itemAlt: 'Sustainable fabric sample',
    themeColor: '#107C41',
    accentColor: '#4ADE80',
    number: '01',
    oneLiner: 'Eco-engineered, zero-waste circular fabrics tailored for global luxury and everyday fashion.',
    features: [
      '100% plant-derived & biodegradable bast cellulose fibers',
      'Zero synthetic microplastics & zero toxic effluent in processing',
      'Soft-touch premium handfeel rivaling luxury linen & combed cotton',
      'Regenerative supply chain creating +35% income for agricultural farmers'
    ],
    specs: {
      weight: '120 - 320 GSM',
      composition: 'Bast Hemp / Organic Cotton',
      finish: 'Enzymatic Softened'
    },
    ctaText: 'Explore Sustainable Fabrics',
    productId: 'fabric'
  },
  {
    id: 'fibers-yarns',
    colorName: 'blue',
    title: 'Natural Fibers & Yarns',
    bgImage: '/images/fabric-blue.jpg',
    itemImage: '/images/natural-yarns-item.jpg',
    itemAlt: 'Natural bast yarn spools and cones',
    themeColor: '#0E7490',
    accentColor: '#38BDF8',
    number: '02',
    oneLiner: 'High-tensile bast fiber yarns engineered for industrial high-speed spinning and weaving.',
    features: [
      'Proprietary mechanical & enzymatic decortication technology',
      'Counts ranging from 10s Ne to 60s Ne in ring-spun and rotor blends',
      'Naturally breathable, moisture-wicking, and hypoallergenic properties',
      'Seamlessly drops into standard commercial textile mills without retooling'
    ],
    specs: {
      yarnCounts: '10s to 60s Ne',
      strength: 'High Tensile Bast',
      type: 'Ring & Rotor Spun'
    },
    ctaText: 'Explore Fibers & Yarns',
    productId: 'yarns'
  },
  {
    id: 'custom-solutions',
    colorName: 'yellow',
    title: 'Custom Textile Solution',
    bgImage: '/images/fabric-yellow.jpg',
    itemImage: '/images/custom-textile-item.jpg',
    itemAlt: 'Custom textile swatches with measuring tools',
    themeColor: '#B45309',
    accentColor: '#FBBF24',
    number: '03',
    oneLiner: 'Tailor-made fiber formulations, custom GSM weaves, and private-label fabric engineering.',
    features: [
      'Bespoke weights from 80 GSM featherlight to 450 GSM structural canvas',
      'Custom natural dyeing, pantone color matching & botanical pigments',
      'Rapid prototyping with comprehensive lab-dip swatch sampling',
      'Full LCA (Life Cycle Assessment) transparency on carbon and water savings'
    ],
    specs: {
      customGSM: '80 - 450 GSM',
      sampling: 'Rapid 7-Day Swatches',
      MOQ: 'Flexible Scalability'
    },
    ctaText: 'Request Custom Swatch',
    productId: null
  }
];

export default function QuestSection({ onSelectProduct, onOpenPartnerModal, setActiveTab }) {
  const [activeFlippedId, setActiveFlippedId] = useState(null);

  const handleCardClick = (id) => {
    setActiveFlippedId((prev) => (prev === id ? null : id));
  };

  const handleCtaClick = (e, item) => {
    e.stopPropagation();
    if (!item.productId) {
      if (onOpenPartnerModal) onOpenPartnerModal();
    } else {
      if (onSelectProduct) {
        onSelectProduct(item.productId);
      } else if (setActiveTab) {
        setActiveTab(`product-${item.productId}`);
      }
    }
  };

  return (
    <section className="screen-cover-section" id="mission">
      
      {/* Section Header */}
      <div className="screen-cover-header">
        <h2 className="screen-cover-title">
          A world of sustainable textile
        </h2>
        <p className="screen-cover-subtitle">
          Hover over each screen section below to flip and inspect in-depth specifications.
        </p>
      </div>

      {/* Screen-Covering Vertical Boxes */}
      <div className="screen-cover-stack">
        {SECTIONS_DATA.map((item) => {
          const isFlipped = activeFlippedId === item.id;

          return (
            <div
              key={item.id}
              className={`screen-cover-box ${isFlipped ? 'screen-cover-box--touch-active' : ''}`}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="screen-cover-box__inner">
                
                {/* ──────────────── FRONT FACE (COVERS SCREEN) ──────────────── */}
                <div
                  className="screen-cover-box__face screen-cover-box__front"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className="screen-cover-box__overlay" />

                  <div className="screen-cover-box__layout">
                    
                    {/* Big Picture Frame */}
                    <div className="screen-cover-box__media-frame">
                      <img
                        src={item.itemImage}
                        alt={item.itemAlt}
                        className="screen-cover-box__image"
                      />
                    </div>

                    {/* Content Pane */}
                    <div className="screen-cover-box__content">
                      <div className="screen-cover-box__eyebrow">
                        <span className="screen-cover-box__number">
                          PILLAR {item.number}
                        </span>
                        <div className="screen-cover-box__flip-hint">
                          <RotateCw className="w-4 h-4 animate-spin-slow" />
                          <span>Hover to Flip</span>
                        </div>
                      </div>

                      <div className="screen-cover-box__text-group">
                        <h3 className="screen-cover-box__heading">
                          {item.title}
                        </h3>
                        <p className="screen-cover-box__one-liner">
                          {item.oneLiner}
                        </p>
                      </div>

                      <div className="screen-cover-box__footer">
                        <span className="screen-cover-box__explore-link">
                          Explore Full Technical Specifications
                          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ──────────────── BACK FACE (FLIPPED DETAILS) ──────────────── */}
                <div
                  className="screen-cover-box__face screen-cover-box__back"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className="screen-cover-box__back-overlay" />

                  <div className="screen-cover-box__back-layout">
                    
                    {/* Left: Thumbnail & Heading */}
                    <div className="screen-cover-box__back-left">
                      <div className="screen-cover-box__back-thumb">
                        <img
                          src={item.itemImage}
                          alt={item.itemAlt}
                        />
                      </div>
                      <div className="screen-cover-box__back-title-wrap">
                        <span className="screen-cover-box__number">
                          PILLAR {item.number}
                        </span>
                        <h4 className="screen-cover-box__back-heading">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Right: Full Features & Specs */}
                    <div className="screen-cover-box__back-right">
                      <ul className="screen-cover-box__features">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="screen-cover-box__feature-item">
                            <CheckCircle2 className="screen-cover-box__check-icon" style={{ color: item.accentColor }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="screen-cover-box__actions-bar">
                        <div className="screen-cover-box__specs">
                          {Object.entries(item.specs).map(([key, val]) => (
                            <div key={key} className="screen-cover-box__spec-item">
                              <span className="screen-cover-box__spec-key">{key}</span>
                              <span className="screen-cover-box__spec-val">{val}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={(e) => handleCtaClick(e, item)}
                          className="screen-cover-box__cta-btn"
                        >
                          <span>{item.ctaText}</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
