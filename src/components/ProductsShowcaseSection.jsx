import React from 'react';
import './ProductsShowcaseSection.css';
import { ArrowRight, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'yarns',
    title: 'YARNS',
    image: '/images/product_yarns.jpg',
    description:
      'Get these natural and high performing blended Altag blended yarns to add the goodness of consciousness and guilt-free materials to your collection.',
    badge: 'Blended Ring & Rotor',
  },
  {
    id: 'fibres',
    title: 'FIBRES',
    image: '/images/product_fibres.jpg',
    description:
      'These natural and consistently available Altag Fibres can be used in a plethora of applications ranging from packaging to nonwovens and bio- composites.',
    badge: 'Decorticated Staple Fibre',
  },
  {
    id: 'fabric',
    title: 'FABRIC',
    image: '/images/product_fabric.jpg',
    description:
      'Showcasing Altag blended Fabrics that marvellously pulls in threads of sustainability, inclusivity and performance into one fabric.',
    badge: 'Woven & Knitted Textiles',
  },
];

export default function ProductsShowcaseSection({ onSelectProduct }) {
  return (
    <section className="products-showcase">
      <div className="products-showcase__container">
        
        {/* Section Heading */}
        <div className="products-showcase__header">
          <h2 className="products-showcase__title">
            Trusted by Fortune 500 and Global brands here are the Altag products for you:
          </h2>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="products-showcase__grid">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => onSelectProduct(product.id)}
            >
              {/* Product Visual Container with Hexagonal Background Accent */}
              <div className="product-card__visual-wrap">
                {/* Hexagon shape behind the product */}
                <div className="product-card__hexagon">
                  <svg viewBox="0 0 100 100" className="product-card__hexagon-svg">
                    <polygon
                      points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
                      fill="none"
                      stroke="#A3E635"
                      strokeWidth="10"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-card__img"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="product-card__body">
                <h3 className="product-card__name">{product.title}</h3>
                <p className="product-card__desc">{product.description}</p>
                
                <button
                  className="product-card__btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product.id);
                  }}
                >
                  <span className="product-card__btn-icon">➔</span>
                  <span className="product-card__btn-text">Read More</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
