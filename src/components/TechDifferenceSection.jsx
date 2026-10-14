import React, { useEffect, useRef, useState } from 'react';
import './TechDifferenceSection.css';
import { Flame, Wind, Droplets, Repeat, ArrowRight, ChevronRight } from 'lucide-react';

const TABS = [
  {
    id: 'jute',
    title: 'Jute',
    image: '/images/avesa_jute.jpg',
    description: 'Premium raw jute fibre — the golden foundation of our sustainable textile process. Sourced directly from farming communities.',
  },
  {
    id: 'yarns',
    title: 'Yarns',
    image: '/images/avesa_yarn.jpg',
    description: 'Fine, cotton-soft yarns spun from cottonized jute fibres — ready for weaving and knitting into premium textiles.',
  },
  {
    id: 'fabrics',
    title: 'Fabrics',
    image: '/images/avesa_fabric.jpg',
    description: 'Beautiful, durable fabrics woven from our sustainable yarns — available in a range of natural tones and textures.',
  },
];

const STEPS = [
  {
    id: 1,
    title: 'Prevents burning of agricultural waste',
    detail: 'By sourcing jute crop residues that would otherwise be burnt in fields, we eliminate harmful smoke and carbon emissions while giving farmers additional income from their waste.',
    icon: Flame,
  },
  {
    id: 2,
    title: 'Increases income for marginal farmers',
    detail: 'Our fair-trade procurement model pays farmers up to 40% more than traditional jute markets, empowering rural communities and creating sustainable livelihoods.',
    icon: Wind,
  },
  {
    id: 3,
    title: 'Uses less than 10 litres of water/kg',
    detail: 'Compared to 10,000+ litres per kg for cotton farming, our eco-enzymatic process uses minimal water — making it one of the most water-efficient textile processes globally.',
    icon: Droplets,
  },
  {
    id: 4,
    title: 'Low impact closed loop technology',
    detail: 'Our proprietary closed-loop system recycles water and chemicals, produces zero toxic effluent, and ensures every by-product is repurposed — achieving true circular manufacturing.',
    icon: Repeat,
  },
];

export default function TechDifferenceSection() {
  const sectionRef = useRef(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [activeTab, setActiveTab] = useState('jute');
  const [activeStepId, setActiveStepId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStep(1);
          const t1 = setTimeout(() => setAnimationStep(2), 400);
          const t2 = setTimeout(() => setAnimationStep(3), 850);
          const t3 = setTimeout(() => setAnimationStep(4), 1250);

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentTab = TABS.find(t => t.id === activeTab);

  const handleStepClick = (stepId) => {
    setActiveStepId(activeStepId === stepId ? null : stepId);
  };

  return (
    <section ref={sectionRef} className="tech-difference">
      {/* Top Decorative Organic Waves */}
      <div className="tech-difference__waves-top">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,25 C180,60 360,5 540,35 C720,65 900,10 1080,40 C1260,70 1380,20 1440,30"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="3.5"
            fill="none"
          />
          <path
            d="M0,45 C200,15 380,70 580,25 C780,-10 960,55 1160,20 C1320,-5 1400,45 1440,40"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M0,60 C240,75 440,30 680,60 C900,90 1120,40 1320,65 C1390,75 1420,55 1440,58"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="tech-difference__container">
        
        {/* ── TITLE ── */}
        <div className={`tech-difference__content ${animationStep >= 1 ? 'tech-difference__content--visible' : ''}`}>
          <h2 className="tech-difference__title">
            Our difference is our tech.
          </h2>
        </div>

        {/* ── 3 TABS: Jute / Yarns / Fabrics ── */}
        <div className={`tech-tabs ${animationStep >= 2 ? 'tech-tabs--visible' : ''}`}>
          <div className="tech-tabs__nav">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tech-tabs__btn ${activeTab === tab.id ? 'tech-tabs__btn--active' : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tech-tabs__content">
            <div className="tech-tabs__image-wrap">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="tech-tabs__image"
                key={currentTab.id}
              />
            </div>
            <p className="tech-tabs__description">
              {currentTab.description}
            </p>
          </div>
        </div>

        {/* ── PROPERTIES IMAGE ── */}
        <div className={`tech-properties ${animationStep >= 3 ? 'tech-properties--visible' : ''}`}>
          <img
            src="/images/avesa_properties.png"
            alt="Avesa Biotex Properties - Natural, Skin-Friendly, Durable, Breathable, Antimicrobial, UV-Protective, Biodegradable, Moisture-Wicking"
            className="tech-properties__img"
          />
        </div>

        {/* ── 4 CLICKABLE INTERCONNECTED STEPS ── */}
        <div className={`tech-steps ${animationStep >= 4 ? 'tech-steps--visible' : ''}`}>
          <h3 className="tech-steps__subtitle">
            Our technology uplifts farmers and upheals nature
          </h3>
          
          <div className="tech-steps__grid">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStepId === step.id;
              
              return (
                <React.Fragment key={step.id}>
                  <div
                    className={`tech-step-card ${isActive ? 'tech-step-card--active' : ''}`}
                    onClick={() => handleStepClick(step.id)}
                  >
                    <div className="tech-step-card__header">
                      <div className="tech-step-card__icon-wrap">
                        <Icon className="w-6 h-6 text-[#14281D]" />
                      </div>
                      <div className="tech-step-card__title-wrap">
                        <span className="tech-step-card__number">0{step.id}</span>
                        <p className="tech-step-card__title">{step.title}</p>
                      </div>
                      <ChevronRight className={`tech-step-card__chevron ${isActive ? 'tech-step-card__chevron--open' : ''}`} />
                    </div>
                    
                    {isActive && (
                      <div className="tech-step-card__detail">
                        <p>{step.detail}</p>
                      </div>
                    )}
                  </div>

                  {/* Connector line between steps */}
                  {index < STEPS.length - 1 && (
                    <div className="tech-step-connector">
                      <div className="tech-step-connector__line" />
                      <ArrowRight className="tech-step-connector__arrow" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Decorative Waves */}
      <div className="tech-difference__waves-bottom">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0,30 C300,5 600,55 900,20 C1200,-15 1380,45 1440,30"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
