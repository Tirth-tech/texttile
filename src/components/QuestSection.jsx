import React from 'react';
import './QuestSection.css';
import { Infinity as InfinityIcon, Unlink, Cpu } from 'lucide-react';

export default function QuestSection() {
  return (
    <section className="quest-section">
      <div className="quest-section__container">
        
        <div className="quest-section__grid">
          
          {/* ── LEFT: Visual Artwork (Jute, Cotton, Yarn, Fabric with organic shapes) ── */}
          <div className="quest-section__artwork-col">
            <div className="quest-section__artwork-wrap">
              <img
                src="/images/quest_artwork_full.png"
                alt="AltMat Alternative Materials - Jute, Cotton, Yarn, Fabric"
                className="quest-section__artwork-img"
              />
            </div>
          </div>

          {/* ── RIGHT: Header & 3 Info Rows (What? Why? How?) ── */}
          <div className="quest-section__content-col">
            
            {/* Header with triangle accent and underline */}
            <div className="quest-section__header-wrap">
              <h2 className="quest-section__title">
                <span className="quest-section__triangle">▼</span>YOUR QUEST FOR ALTERNATIVE MATERIALS START HERE
              </h2>
              <div className="quest-section__divider" />
            </div>

            {/* 3 Interactive Rows */}
            <div className="quest-rows">
              
              {/* 1. What? */}
              <div className="quest-row">
                <div className="quest-row__pill">
                  <InfinityIcon className="quest-row__icon" strokeWidth={1.75} />
                </div>
                <div className="quest-row__body">
                  <h3 className="quest-row__heading">What?</h3>
                  <p className="quest-row__text">
                    AltMat is an Alternative Materials Science company. We build materials of the future and regenerative technologies behind it. building Materials of Future. One of our key technologies upgrades agricultural residues into high performing natural materials called as Altag. Altag embodies holistic Sustainability, Inclusivity and Performance.
                  </p>
                </div>
              </div>

              {/* 2. Why? */}
              <div className="quest-row">
                <div className="quest-row__pill">
                  <Unlink className="quest-row__icon" strokeWidth={1.75} />
                </div>
                <div className="quest-row__body">
                  <h3 className="quest-row__heading">Why?</h3>
                  <p className="quest-row__text">
                    Textiles immensely damage the environment. For instance, polyester is plastic. Fashion wants to shift to better materials, but choosing between environment and economics has been an either-or choice. ‘No More!’
                  </p>
                </div>
              </div>

              {/* 3. How? */}
              <div className="quest-row">
                <div className="quest-row__pill">
                  <Cpu className="quest-row__icon" strokeWidth={1.75} />
                </div>
                <div className="quest-row__body">
                  <h3 className="quest-row__heading">How?</h3>
                  <p className="quest-row__text">
                    Using materials science and sustainable proprietary processes, we transform biomass of certain food, medicinal and industrial crops into natural fibres.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
