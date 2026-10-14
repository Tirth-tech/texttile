import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: 'Fibres',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#FAF8F5]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A5C43] bg-[#F3EFEA] px-4 py-1.5 rounded-full border border-[var(--border-light)]">
          Global Commercial Inquiry & Swatches
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#1A1D1B] tracking-tight max-w-4xl mx-auto leading-tight">
          Let's Create <br className="hidden sm:inline" />
          <span className="text-shimmer font-serif-italic font-normal">Better Materials Together.</span>
        </h1>
        <p className="text-base text-[#5C635E] max-w-2xl mx-auto">
          Reach out to our global partnerships team in Zürich, Bangalore, or Boston to request physical material swatch kits, request custom fiber specs, or initiate joint R&D projects.
        </p>
      </section>

      {/* Main Grid: Form (Left) & Hub Info (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F3EFEA] p-8 sm:p-12 rounded-3xl border border-[var(--border-light)] shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#1A1D1B]">Commercial Enquiry Form</h3>
                  <p className="text-xs text-[#5C635E] mt-1">Please provide your target application specs or material swatch requirements.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Company / Organization *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Atelier Sustainable"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+41 44 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Country / Headquarters</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Switzerland / USA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1D1B] mb-1">What are you interested in? *</label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-bold text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                    >
                      <option value="Fibres">Natural & Circular Fibres (Banana, Hemp, Pine)</option>
                      <option value="Yarns">Spun Sustainable Yarns</option>
                      <option value="Fabrics">Woven & Knitted Fabrics</option>
                      <option value="Bio-materials">Bio-Composite Pellets & Non-Wovens</option>
                      <option value="Manufacturing">Manufacturing & Mill Integration</option>
                      <option value="Technology Partnership">R&D & Licensing Partnership</option>
                      <option value="Brand Collaboration">Brand Co-Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1D1B] mb-1">Message & Target Product Specs</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your target application, volume requirements, or physical swatch kit request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[var(--border-light)] text-xs font-medium text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#8CA18B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1E2D1D] hover:bg-[#253924] text-white py-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4 text-[#8CA18B]" />
                </button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8CA18B]/20 text-[#1E2D1D] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-[#8CA18B]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1E2D1D]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#5C635E] max-w-md mx-auto">
                  Thank you, <strong className="text-[#1E2D1D]">{formData.name}</strong>. Our Materials Science team will prepare your commercial dossier for <strong className="text-[#1E2D1D]">{formData.company}</strong> and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#1E2D1D] text-white text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Global Hub Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#1E2D1D] text-white space-y-4 shadow-xl">
              <span className="text-xs font-mono text-[#8CA18B] uppercase tracking-widest">GLOBAL HEADQUARTERS</span>
              <h3 className="font-heading text-2xl font-bold">Zürich R&D & Science Lab</h3>
              <div className="space-y-2 text-xs text-gray-200 font-light">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8CA18B]" /> Biomaterials Park West 12, 8005 Zürich, Switzerland</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#8CA18B]" /> europe@avesabiotex.com</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#8CA18B]" /> +41 44 890 1200</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#8CA18B]/30 space-y-4">
              <span className="text-xs font-mono text-[#8CA18B] uppercase tracking-widest">ASIAN AGRI-REFINING HUB</span>
              <h3 className="font-heading text-xl font-bold text-[#1E2D1D]">Bangalore Supply Hub</h3>
              <div className="space-y-2 text-xs text-[#5C635E] font-light">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#1E2D1D]" /> Industrial Agri Park Phase 2, Bangalore, India</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#1E2D1D]" /> india@avesabiotex.com</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[var(--border-light)] space-y-4">
              <span className="text-xs font-mono text-[#7A5C43] uppercase tracking-widest">NORTH AMERICAN BRAND LAB</span>
              <h3 className="font-heading text-xl font-bold text-[#1A1D1B]">Boston Innovation Office</h3>
              <div className="space-y-2 text-xs text-[#5C635E] font-light">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#1E2D1D]" /> Seaport District, Boston, MA 02210, USA</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#1E2D1D]" /> americas@avesabiotex.com</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
