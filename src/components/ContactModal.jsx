import React, { useState } from 'react';
import { X, Send, CheckCircle2, Leaf, ArrowRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, initialMaterial = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: initialMaterial ? initialMaterial.name : 'Fibres',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121513]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-light)] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F3EFEA] hover:bg-[#E8DFD3] text-[#1A1D1B] flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-3 py-1 rounded-full border border-[var(--border-light)]">
                B2B Collaboration & Swatch Request
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-[#1A1D1B] tracking-tight mt-3">
                Let's Build the Next Material Together.
              </h2>
              <p className="text-xs sm:text-sm text-[#5C635E] mt-1">
                Partner with Avesa Biotex to integrate bio-based cellulosic fibers, circular yarns, and high-performance sustainable fabrics into your production line.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Dr. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Company / Brand *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Atelier Sustainable"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Work Email *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="s.jenkins@atelier.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Country / Region</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Switzerland / USA"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Area of Primary Interest *</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border border-[var(--border-light)] text-xs font-bold text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                >
                  <option value="Fibres">Natural & Circular Fibres (Banana, Hemp, Pine)</option>
                  <option value="Yarns">Spun Sustainable Yarns</option>
                  <option value="Fabrics">Woven & Knitted Fabrics</option>
                  <option value="Bio-materials">Bio-Composite Pellets & Non-Wovens</option>
                  <option value="Technology Partnership">R&D & Tech Licensing Partnership</option>
                  <option value="Brand Collaboration">Brand Co-Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Project Details & Swatch Requirements</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your target application, volume requirements, or technical specs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                />
              </div>

                <button
                type="submit"
                className="w-full bg-[#1E2D1D] hover:bg-[#253924] text-white py-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all"
              >
                <span>Submit Collaboration Inquiry</span>
                <Send className="w-4 h-4 text-[#8CA18B]" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#8CA18B]/20 text-[#1E2D1D] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-[#8CA18B]" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#1E2D1D]">
              Inquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-[#5C635E] max-w-md mx-auto">
              Thank you, <strong className="text-[#1E2D1D]">{formData.name}</strong>. Our Materials Science Partnerships team will review your project specs for <strong className="text-[#1E2D1D]">{formData.company}</strong> and contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#1E2D1D] text-white text-xs font-bold"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
