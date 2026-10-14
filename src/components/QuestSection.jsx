import React from 'react';
import './QuestSection.css';

export default function QuestSection() {
  return (
    <section className="quest-section">
      <div className="quest-section__container">
        
        <div className="quest-mission-layout">
          
          {/* Header */}
          <div className="quest-section__header-wrap quest-section__header-wrap--centered">
            <h2 className="quest-section__title quest-section__title--centered">
              <span className="quest-section__triangle">▼</span>OUR MISSION
            </h2>
            <div className="quest-section__divider quest-section__divider--centered" />
          </div>

          {/* 3 Centered Lines */}
          <div className="quest-mission__lines">
            <p className="quest-mission__line">
              To revolutionize the textile industry by transforming natural jute fibres into sustainable, high-performance materials that protect our planet.
            </p>
            <p className="quest-mission__line">
              To empower farming communities by creating fair-trade supply chains that uplift livelihoods while reducing environmental impact.
            </p>
            <p className="quest-mission__line">
              To prove that sustainability and premium quality can coexist — delivering eco-conscious textiles without compromise.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
