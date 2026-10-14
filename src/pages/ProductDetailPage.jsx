import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Download, ArrowUpRight, Sparkles, Layers, ShieldCheck, Droplet, Leaf, Wind } from 'lucide-react';

const PRODUCT_DATA = {
  yarns: {
    id: 'yarns',
    title: 'Natural & Blended Yarns',
    badge: 'Blended Ring & Rotor Spun',
    heroImage: '/images/product_yarns.jpg',
    tagline: 'High-performing, sustainable blended yarns spun on standard commercial textile machinery with zero re-tooling.',
    overview: 'Avesa Biotex yarns are engineered by blending our bio-refined cottonized agricultural jute fibers with organic cotton, Tencel™, and recycled fibers. They deliver the strength, drape, and softness required for modern apparel without the heavy environmental tax of virgin cotton.',
    highlights: [
      'Drop-in compatibility with global ring & rotor spinning equipment',
      'Naturally breathable with superior moisture-wicking properties',
      '82% lower water consumption than conventional virgin cotton yarns',
      '100% biodegradable and microplastic-free'
    ],
    specs: [
      { label: 'Available Counts', value: 'Ne 10s to Ne 40s (Single & 2-Ply)' },
      { label: 'Blend Formulations', value: '30/70 Jute-Cotton, 50/50 Jute-Tencel, 20/80 Jute-Recycled' },
      { label: 'Tensile Strength', value: '18.5 – 22.0 cN/tex' },
      { label: 'Elongation at Break', value: '6.5% – 8.2%' },
      { label: 'Twist Multiplier (TM)', value: '3.6 – 4.2' },
      { label: 'Spinning Technology', value: 'Ring Spun, Rotor / Open-End, Compact' }
    ],
    applications: ['Denim & Heavy Bottomweights', 'Casual Knitwear & T-Shirts', 'Woven Shirting & Dresses', 'Home Furnishings & Upholstery'],
    ecoMetrics: [
      { number: '82%', label: 'Water Saved vs Virgin Cotton' },
      { number: '0g', label: 'Synthetic Microplastics' },
      { number: '100%', label: 'Agricultural Waste Upcycled' },
      { number: 'Class 1', label: 'OEKO-TEX® Tested Safe' }
    ]
  },
  fibres: {
    id: 'fibres',
    title: 'Decorticated Staple Fibres',
    badge: 'Cottonized Staple Fibre',
    heroImage: '/images/product_fibres.jpg',
    tagline: 'Uniform, clean, bio-softened natural fibres produced from post-harvest crop residue ready for multi-industry scaling.',
    overview: 'Our proprietary eco-cavitation and bio-enzymatic refining process converts coarse lignocellulosic jute stalks into soft, cotton-equivalent staple fibres. Available at commercial volume for yarn spinners, non-woven manufacturers, and biocomposite molders.',
    highlights: [
      'Consistent staple length matching standard upland cotton specs',
      'Residual lignin reduced to <2.5% for ultra-soft hand feel',
      'Eliminates the seasonal open-field burning of crop waste',
      'High thermal and acoustic insulation capabilities'
    ],
    specs: [
      { label: 'Staple Length', value: '28 mm – 38 mm (Uniform Cut)' },
      { label: 'Fiber Fineness', value: '3.2 – 3.8 dtex (Micronaire equivalent)' },
      { label: 'Residual Lignin', value: '< 2.4% (Enzymatically Cleaned)' },
      { label: 'Moisture Regain', value: '11.5% – 13.0%' },
      { label: 'Color Grade', value: 'Natural Ecru (Bleach & Dye Ready)' },
      { label: 'Supply Capacity', value: '500+ Metric Tonnes / Month' }
    ],
    applications: ['Short-Staple Ring Spinning', 'Non-Woven Geotextiles & Filter Media', 'Automotive Bio-Composites', 'Biodegradable Molded Packaging'],
    ecoMetrics: [
      { number: '10L', label: 'Water used per KG of Fibre' },
      { number: 'Zero', label: 'Harsh Caustic Effluents' },
      { number: '3.4x', label: 'Farmer Income Boost per Harvest' },
      { number: '100%', label: 'Regenerative Feedstock' }
    ]
  },
  fabric: {
    id: 'fabric',
    title: 'Sustainable Blended Fabrics',
    badge: 'Woven & Knitted Textiles',
    heroImage: '/images/product_fabric.jpg',
    tagline: 'Lustrous, durable, tactile textiles merging rich organic hand feel with exceptional circular performance.',
    overview: 'Showcasing a versatile portfolio of woven and circular knitted fabrics crafted with Avesa Biotex blended yarns. From crisp lightweight summer shirting to rugged heavyweight denim, our fabrics bring texture, structure, and eco-credibility to modern fashion collections.',
    highlights: [
      'Natural thermodynamic regulation keeping wearers cool and dry',
      'High dye uptake and color fastness with low-impact natural dyes',
      'Enhanced tensile durability for long garment lifecycle',
      'Fully compostable at end-of-life leaving zero toxic residue'
    ],
    specs: [
      { label: 'Fabric Structures', value: 'Plain Weave, 3/1 Twill, Oxford, Single Jersey, French Terry' },
      { label: 'Weight Range (GSM)', value: '115 GSM to 380 GSM' },
      { label: 'Usable Width', value: '54" to 60" (137 cm – 152 cm)' },
      { label: 'Shrinkage (Warp/Weft)', value: '< 3.0% (Pre-shrunk sanforized)' },
      { label: 'Color Fastness', value: 'Grade 4-5 (Washing & Light)' },
      { label: 'Finish Options', value: 'Natural Raw, Enzyme Wash, Mercerized, Brushed' }
    ],
    applications: ['Contemporary Fashion & Apparel', 'Workwear & Uniforms', 'Interior Drapery & Soft Furnishings', 'Eco-Luxury Hotel Textiles'],
    ecoMetrics: [
      { number: '94%', label: 'Carbon Reduction in Finishing' },
      { number: '100%', label: 'Circularity Index' },
      { number: 'GOTS', label: 'Organic Supply Chain Verified' },
      { number: 'Grade A', label: 'Skin Contact Safe' }
    ]
  }
};

export default function ProductDetailPage({ initialProduct = 'yarns', onBack, onOpenPartnerModal }) {
  const [currentTab, setCurrentTab] = useState(initialProduct || 'yarns');

  useEffect(() => {
    if (initialProduct && PRODUCT_DATA[initialProduct]) {
      setCurrentTab(initialProduct);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialProduct]);

  const product = PRODUCT_DATA[currentTab] || PRODUCT_DATA.yarns;

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      
      {/* ── Top Bar & Back Navigation ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A2B] bg-white border border-[#1E3A2B]/15 px-4 py-2 rounded-full hover:bg-[#1E3A2B] hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* ── 3-Product Tab Switcher ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-3 p-2 bg-white/80 backdrop-blur rounded-2xl border border-[#1E3A2B]/10 max-w-2xl mx-auto shadow-sm">
          {Object.keys(PRODUCT_DATA).map((key) => {
            const prod = PRODUCT_DATA[key];
            const isActive = currentTab === key;
            return (
              <button
                key={key}
                onClick={() => setCurrentTab(key)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all text-center ${
                  isActive
                    ? 'bg-[#1E3A2B] text-white shadow-md'
                    : 'text-[#4A5550] hover:text-[#1E3A2B] hover:bg-gray-100'
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Product Showcase Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#1E3A2B]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with Hex Accent */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-[#84CC16]/15 rounded-3xl rotate-3" />
              <img
                src={product.heroImage}
                alt={product.title}
                className="relative z-10 w-full h-full object-contain rounded-2xl p-4 bg-white shadow-md border border-[#84CC16]/20"
              />
            </div>
          </div>

          {/* Right Column: Title, Tagline, Highlights & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 text-[#1E3A2B] text-xs font-bold uppercase tracking-wider border border-[#1E3A2B]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>{product.badge}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#121815] tracking-tight">
              {product.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
              {product.tagline}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.overview}
            </p>

            {/* Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {product.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1E3A2B] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenPartnerModal}
                className="bg-[#1E3A2B] hover:bg-[#2A4B37] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 hover:scale-105"
              >
                <span>Request Sample Swatch</span>
                <ArrowUpRight className="w-4 h-4 text-[#84CC16]" />
              </button>

              <button
                onClick={() => alert(`Technical data sheet for ${product.title} downloaded.`)}
                className="bg-white hover:bg-gray-50 text-[#1E3A2B] border border-[#1E3A2B]/20 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#1E3A2B]" />
                <span>Technical Data Sheet (.PDF)</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ── Specifications & Eco Metrics Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Technical Specs Table */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#1E3A2B]/10 shadow-lg space-y-6">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#84CC16]" />
            <h2 className="font-heading text-xl font-bold text-[#121815]">
              Technical Specifications
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-gray-500 uppercase tracking-wider">{spec.label}</span>
                <span className="font-bold text-[#121815]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Sustainability Metrics */}
        <div className="lg:col-span-5 bg-[#1E3A2B] text-white rounded-3xl p-8 shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#84CC16] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Eco Impact</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Circular Life Cycle
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {product.ecoMetrics.map((eco, idx) => (
              <div key={idx} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#84CC16]">
                  {eco.number}
                </div>
                <div className="text-[11px] text-emerald-100 font-light mt-1">
                  {eco.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-xs text-emerald-200/80">
            Tested in certified textile laboratories under ASTM, ISO, and OEKO-TEX compliance standards.
          </div>
        </div>

      </div>

    </div>
  );
}
