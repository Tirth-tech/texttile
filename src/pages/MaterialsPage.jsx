import React, { useState } from 'react';
import MaterialCard from '../components/MaterialCard';
import { MATERIALS } from '../data/materialsData';
import { Search, Filter, Layers, ArrowRight } from 'lucide-react';

export default function MaterialsPage({ onSelectMaterial, onOpenPartnerModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Natural Fibres', 'Bio-Based Materials', 'Recycled & Circular Fibres', 'Composite Materials'];

  const filteredMaterials = MATERIALS.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          material.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          material.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#FAF8F5]">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)]">
          Sustainable Bio-Material Catalog
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#1A1D1B] tracking-tight max-w-4xl mx-auto leading-tight">
          High-Performance Bio-Fibres & <br className="hidden sm:inline" />
          <span className="text-shimmer font-serif-italic font-normal">Circular Textiles.</span>
        </h1>
        <p className="text-base text-[#5C635E] max-w-2xl mx-auto">
          Explore our range of 100% bio-based staple fibres, filament yarns, plant-based leathers, and structural composite pellets engineered from agricultural waste streams.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-[#F3EFEA] rounded-3xl border border-[var(--border-light)] flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          
          {/* Search Box */}
          <div className="w-full md:w-80 flex items-center gap-2 bg-[#FAF8F5] px-4 py-3 rounded-2xl border border-[var(--border-light)]">
            <Search className="w-4 h-4 text-[#5C635E]" />
            <input 
              type="text" 
              placeholder="Search by fibre name, crop source, or spec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-[#1A1D1B] focus:outline-none"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#1E3A2B] text-white shadow-xs' 
                    : 'bg-[#FAF8F5] text-[#5C635E] hover:text-[#1A1D1B] border border-[var(--border-light)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Material Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredMaterials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map(mat => (
              <MaterialCard 
                key={mat.id} 
                material={mat} 
                onSelect={onSelectMaterial} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F3EFEA] rounded-3xl border border-[var(--border-light)] space-y-3">
            <Layers className="w-10 h-10 text-[#5C635E] mx-auto" />
            <h3 className="font-heading text-lg font-bold text-[#1A1D1B]">No materials found matching your criteria.</h3>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs text-[#1E3A2B] font-bold underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Custom Material Development Request */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#1E3A2B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-[#84CC16] uppercase tracking-widest">CUSTOM SPECIFICATION DEVELOPMENT</span>
            <h3 className="font-heading text-2xl font-bold">Need a Custom Agro-Fibre Blend or Specific Staple Length?</h3>
            <p className="text-xs text-gray-200">Our materials science team formulates tailored fiber specifications for specific spinning and weaving machinery.</p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="bg-[#FAF8F5] text-[#1E3A2B] px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Formulation</span>
            <ArrowRight className="w-4 h-4 text-[#C85A32]" />
          </button>
        </div>
      </section>

    </div>
  );
}
