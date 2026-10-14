import React from 'react';
import './QuestSection.css';

export default function QuestSection() {
  const missions = [
    {
      num: '01',
      title: 'Revolutionizing Natural Fibres',
      text: 'To revolutionize the textile industry by transforming natural jute fibres into sustainable, high-performance materials that protect our planet.'
    },
    {
      num: '02',
      title: 'Empowering Farming Communities',
      text: 'To empower farming communities by creating fair-trade supply chains that uplift livelihoods while reducing environmental impact.'
    },
    {
      num: '03',
      title: 'Uncompromising Quality & Planet Care',
      text: 'To prove that sustainability and premium quality can coexist — delivering eco-conscious textiles without compromise.'
    }
  ];

  return (
    <section className="quest-section" id="mission">
      <div className="quest-section__container">
        
        {/* Mission Box Wrapper with Corner Leaf Accents */}
        <div className="quest-mission-box-wrapper">
          
          {/* Bottom Left Corner Leaf Pattern (Outside & Behind the Box) */}
          <div className="quest-mission__leaf-wrap quest-mission__leaf-wrap--left" aria-hidden="true">
            <img 
              src="/images/leaves_corner_pattern.png" 
              alt="" 
              className="quest-mission__leaf-img"
            />
          </div>

          {/* Bottom Right Corner Leaf Pattern (Outside & Behind the Box) */}
          <div className="quest-mission__leaf-wrap quest-mission__leaf-wrap--right" aria-hidden="true">
            <img 
              src="/images/leaves_corner_pattern.png" 
              alt="" 
              className="quest-mission__leaf-img"
            />
          </div>

          {/* Elevated Mission Card / Box */}
          <div className="quest-mission-card">
            
            {/* Header */}
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

            {/* Mission Statements */}
            <div className="quest-mission__grid">
              {missions.map((item) => (
                <div key={item.num} className="quest-mission__item">
                  <span className="quest-mission__item-num">{item.num}</span>
                  <div className="quest-mission__item-body">
                    <h3 className="quest-mission__item-title">{item.title}</h3>
                    <p className="quest-mission__item-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
