import React, { useRef, useState, useEffect } from 'react';
import './ApplicationsPage.css';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const APPLICATION_ITEMS = [
  {
    id: 'interiors',
    num: '01.',
    title: 'INTERIORS',
    indexLabel: 'INTERIORS.',
    image: '/images/app_interiors.png?v=3',
    imagePosition: 'left', // image on left, text on right
    description: `Humanity can no more afford to have luxury that isn't environmentally sustainable. Be it a room or an office, personal space is an important influencer, and so is equipping it with the right materials. Empower your range of interior collections like carpets, upholstery, and home textiles with Alt Materials. Alt Yarns, available in many desired blends and counts for interiors, can also be made to order for quantities over 3 tones.`,
    ctaText: 'Write to us here.'
  },
  {
    id: 'apparel',
    num: '02.',
    title: 'APPAREL',
    indexLabel: 'APPAREL.',
    image: '/images/app_apparel.png?v=3',
    imagePosition: 'right', // text on left, image on right
    description: `Fashion is an immediate language. Our clothes not only represent our style but also reflect our conscience and values. Apparels produced from AltMat's fibres and yarns will help you communicate your best story forward and will allow your customers to make the right and guilt-free choice. Alt Yarns, available in many desired blends and counts for apparels, can also be made to order for quantities over 3 tones.`,
    ctaText: 'Write to us here.'
  },
  {
    id: 'accessories',
    num: '03.',
    title: 'ACCESSORIES',
    indexLabel: 'ACCESSORIES.',
    image: '/images/app_accessories.png?v=3',
    imagePosition: 'left', // image on left, text on right
    description: `Just like every work of art, outfits need a finishing touch. It speaks volumes when these finishing touches are built with right materials — Materials that not only reflect luxury and style but also environmental consciousness. Allow us to help you adopt Alt Yarns to piece together a diverse range of accessories from shoes to bags. Alt Yarns, available in many desired blends and counts for accessories, can also be made to order for quantities over 3 tones.`,
    ctaText: 'Write to us here.'
  },
  {
    id: 'non-woven',
    num: '04.',
    title: 'NON WOVEN',
    indexLabel: 'NON WOVEN.',
    image: '/images/app_nonwoven.png?v=3',
    imagePosition: 'right', // text on left, image on right
    description: `Specific grades of Alt fibres can cater to different kinds of non woven applications. It works seamlessly with different kinds of existing infrastructure. These natural cellulosic fibres bring the goodness of sustainability and performance to your range of varied non-woven applications.`,
    ctaText: 'Write to us here for discussing specialised applications.'
  }
];

export default function ApplicationsPage({ onOpenPartnerModal }) {
  const [activeSection, setActiveSection] = useState('interiors');

  // Smooth scroll to selected application
  const scrollToSection = (id) => {
    const el = document.getElementById(`app-${id}`);
    if (el) {
      const yOffset = -90; // offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of APPLICATION_ITEMS) {
        const el = document.getElementById(`app-${item.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="applications-page">
      
      {/* ── 1. Top Index Directory (Matching Image 1) ── */}
      <section className="applications-hero">
        <div className="applications-hero__container">
          
          <div className="applications-hero__header">
            <span className="applications-hero__dash">—</span>
            <h1 className="applications-hero__title">APPLICATIONS</h1>
          </div>

          {/* Quick jump index list */}
          <div className="applications-index">
            {APPLICATION_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`applications-index__row ${activeSection === item.id ? 'applications-index__row--active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <button className="applications-index__button">
                  <span className="applications-index__text">{item.indexLabel}</span>
                  <span className="applications-index__num">{item.num}</span>
                </button>
                <div className="applications-index__line" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. Detailed Application Rows (Matching Images 2, 3, 4, 5) ── */}
      <section className="applications-content">
        <div className="applications-content__container">
          
          {APPLICATION_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`app-${item.id}`}
              className={`application-block application-block--${item.imagePosition}`}
            >
              {/* Visual Image */}
              <div className="application-block__media">
                <div className="application-block__img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="application-block__img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text & Details */}
              <div className="application-block__details">
                <h2 className="application-block__heading">
                  <span className="application-block__number">{item.num}</span>
                  <span className="application-block__title-text">{item.title}</span>
                </h2>

                <p className="application-block__desc">
                  {item.description}
                </p>

                <button
                  onClick={onOpenPartnerModal}
                  className="application-block__cta"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8CA18B]" />
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
