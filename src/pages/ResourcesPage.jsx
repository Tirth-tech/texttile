import React, { useState } from 'react';
import { ARTICLES } from '../data/materialsData';
import { BookOpen, ArrowRight, FileText, Calendar, Clock, X } from 'lucide-react';

export default function ResourcesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#FAF8F5]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)]">
          Research & Scientific Journal
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#1A1D1B] tracking-tight max-w-4xl mx-auto leading-tight">
          Scientific Insights & <br className="hidden sm:inline" />
          <span className="text-shimmer font-serif-italic font-normal">Materials Intelligence.</span>
        </h1>
        <p className="text-base text-[#5C635E] max-w-2xl mx-auto">
          Explore peer-reviewed whitepapers, agricultural impact case studies, and bio-refining technical literature published by Avesa Biotex research labs.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map(article => (
            <div 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#F3EFEA] rounded-3xl overflow-hidden border border-[var(--border-light)] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 bg-[#E8DFD3] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#1E3A2B] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-[11px] text-[#5C635E]">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#1E3A2B]" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#7A5C43]" /> {article.readTime}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#1A1D1B] group-hover:text-[#1E3A2B] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-[#5C635E] leading-relaxed line-clamp-3 font-light">
                  {article.summary}
                </p>

                <div className="pt-2 text-xs font-bold text-[#1E3A2B] flex items-center justify-between">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121513]/80 backdrop-blur-md">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 border border-[var(--border-light)] relative space-y-6">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F3EFEA] hover:bg-[#E8DFD3] text-[#1A1D1B] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#1E3A2B] uppercase tracking-widest bg-[#F3EFEA] px-3 py-1 rounded-full">
              {selectedArticle.category}
            </span>

            <h2 className="font-heading text-3xl font-extrabold text-[#1A1D1B]">
              {selectedArticle.title}
            </h2>

            <div className="h-64 rounded-2xl overflow-hidden">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-[#5C635E] leading-relaxed">
              {selectedArticle.summary}
            </p>

            <p className="text-xs text-[#5C635E] leading-relaxed font-light">
              This publication discusses the chemical decortication pathway of agricultural lignocellulosic fibers, comparing mechanical ultrasound cavitation to traditional caustic soda retting processes. Water effluent analysis demonstrates 100% closed-loop recirculation capability.
            </p>

            <div className="pt-4 border-t border-[var(--border-light)] flex justify-end">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1E3A2B] text-white text-xs font-bold"
              >
                Close Article Reader
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
