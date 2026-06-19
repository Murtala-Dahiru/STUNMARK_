import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CinematicProductionPage from './pages/CinematicProductionPage';
import BrandIdentityPage from './pages/BrandIdentityPage';
import DigitalCommercePage from './pages/DigitalCommercePage';
import ContentEcosystemPage from './pages/ContentEcosystemPage';
import GrowthPerformancePage from './pages/GrowthPerformancePage';
import ApproachPage from './pages/ApproachPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CookieConsent from './components/ui/CookieConsent';

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Stunmark | Creative & Growth Company',
      '/services': 'Services | Stunmark',
      '/services/cinematic-production': 'Cinematic Production | Stunmark',
      '/services/brand-identity': 'Brand & Identity | Stunmark',
      '/services/digital-commerce': 'Digital & Commerce | Stunmark',
      '/services/content-ecosystem': 'Content Ecosystem | Stunmark',
      '/services/growth-performance': 'Growth & Performance | Stunmark',
      '/approach': 'Process | Stunmark',
      '/industries': 'Markets | Stunmark',
      '/about': 'About | Stunmark',
      '/resources': 'Journal | Stunmark',
      '/contact': 'Contact | Stunmark',
      '/privacy': 'Privacy Policy | Stunmark',
      '/terms': 'Terms of Service | Stunmark',
      '/cookies': 'Cookie Policy | Stunmark',
    };

    document.title = pageTitles[location.pathname] || 'Stunmark';
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/cinematic-production" element={<CinematicProductionPage />} />
          <Route path="/services/brand-identity" element={<BrandIdentityPage />} />
          <Route path="/services/digital-commerce" element={<DigitalCommercePage />} />
          <Route path="/services/content-ecosystem" element={<ContentEcosystemPage />} />
          <Route path="/services/growth-performance" element={<GrowthPerformancePage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
