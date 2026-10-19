import React, { useState, useEffect, useRef } from 'react';
import './ImpactVisualizer.css';

const STATS_DATA = [
  {
    id: 'yards',
    target: 700,
    formattedTarget: '700',
    description: 'Yards of processing line equipment, stretched end to end',
  },
  {
    id: 'pounds-hour',
    target: 22000,
    formattedTarget: '22,000',
    description: 'Pounds of hemp & jute straw that can be processed per hour',
  },
  {
    id: 'pounds-year',
    target: 150000000,
    formattedTarget: '150,000,000',
    description: 'Pounds of hemp & jute straw that can be processed per year',
  },
  {
    id: 'waste',
    target: 0,
    formattedTarget: '0',
    description: 'Amount of waste, as the Avesa Biotex bio-process utilizes every part of the plant stalk',
  },
  {
    id: 'co2',
    target: 10,
    formattedTarget: '10',
    description: 'Tons of CO2 that one acre of bio-crops absorbs on average',
  },
  {
    id: 'acres',
    target: 25000,
    formattedTarget: '25,000',
    description: 'Acres of sustainable bio-crop farming currently contracted',
  },
];

/* ── NUMBER FORMATTER WITH COMMAS ── */
function formatCommas(num) {
  return Number(num).toLocaleString('en-US');
}

/* ── SINGLE STAT CARD WITH ORGANIC WAVE SHAPE ── */
function StatCard({ stat, index, startCounting }) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      setCurrentVal(0);
      return;
    }

    if (stat.target === 0) {
      setCurrentVal(0);
      return;
    }

    let startTime = null;
    let animationFrameId = null;
    const duration = 2200; // 2.2s smooth count-up

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * stat.target);

      setCurrentVal(val);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentVal(stat.target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [startCounting, stat.target]);

  return (
    <div className={`impact-stat-card impact-stat-card--${index % 6}`}>
      <div className="impact-stat-card__number">
        {formatCommas(currentVal)}
      </div>
      <p className="impact-stat-card__desc">
        {stat.description}
      </p>
    </div>
  );
}

export default function ImpactVisualizer() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="impact-visualizer-section" id="impact">
      <div className="impact-visualizer__container">
        
        {/* Section Header */}
        <div className="impact-visualizer__header">
          <div className="impact-visualizer__badge">
            <span>IMPACT YOU CAN MEASURE</span>
          </div>
          <h2 className="impact-visualizer__title">
            Avesa Biotex by Numbers
          </h2>
          <p className="impact-visualizer__subtitle">
            Quantifiable metrics from harvest processing to zero-waste bio-refining.
          </p>
        </div>

        {/* 6 Sculptural Organic Stat Cards Grid */}
        <div className="impact-visualizer__grid">
          {STATS_DATA.map((stat, idx) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={idx}
              startCounting={startCounting}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
