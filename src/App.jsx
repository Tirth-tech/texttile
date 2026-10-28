import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import IntroSplashVideo from './components/IntroSplashVideo';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import StageDetailPage from './pages/StageDetailPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState('yarns');
  const [selectedTechStage, setSelectedTechStage] = useState(0);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Auto scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleSelectProduct = (productId) => {
    setSelectedProduct(productId);
    setActiveTab('product-detail');
  };

  const handleSelectTechStage = (stageIdx) => {
    setSelectedTechStage(stageIdx);
    setActiveTab('stage-detail');
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectProduct={handleSelectProduct}
            onSelectTechStage={handleSelectTechStage}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
      case 'technology':
        return (
          <TechnologyPage
            initialStage={selectedTechStage}
            onBack={() => setActiveTab('home')}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
      case 'applications':
        return (
          <ApplicationsPage
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'product-detail':
      case 'product-yarns':
      case 'product-fibres':
      case 'product-fabric':
        return (
          <ProductDetailPage
            initialProduct={selectedProduct}
            onBack={() => setActiveTab('home')}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
      case 'stage-detail':
        return (
          <StageDetailPage
            stageIndex={selectedTechStage}
            onSelectStage={(idx) => setSelectedTechStage(idx)}
            onBack={() => setActiveTab('home')}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectProduct={handleSelectProduct}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        );
    }
  };

  return (
    <>
      {/* Vi & Hero Bike App Inspired Opening Video Reveal */}
      {showIntro && (
        <IntroSplashVideo onComplete={handleIntroComplete} />
      )}

      <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#1E2D1D] selection:bg-[#8CA18B] selection:text-[#1E2D1D]">

        {/* Navigation Header */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenPartnerModal={() => setPartnerModalOpen(true)}
          onReplayIntro={handleReplayIntro}
        />

        {/* Main Page View Container */}
        <main className="flex-1">
          {renderActivePage()}
        </main>

        {/* Global Footer */}
        <Footer
          setActiveTab={setActiveTab}
          onOpenPartnerModal={() => setPartnerModalOpen(true)}
          onReplayIntro={handleReplayIntro}
        />

        {/* Commercial Collaboration & Swatch Request Modal */}
        <ContactModal
          isOpen={partnerModalOpen}
          onClose={() => setPartnerModalOpen(false)}
        />

      </div>
    </>
  );
}
