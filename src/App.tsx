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
    const defaultDescription = 'Stunmark is an integrated creative and growth company building category-defining brands. We design visual systems, craft cinematic stories, build digital experiences, and engineer growth.';
    const siteUrl = 'https://stunmark.com';

    interface PageMeta {
      title: string;
      description: string;
      schema?: object;
    }

    const pageMeta: Record<string, PageMeta> = {
      '/': {
        title: 'Stunmark | Creative & Growth Company',
        description: defaultDescription,
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              "name": "Stunmark",
              "url": `${siteUrl}/`,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
              },
              "sameAs": [
                "https://www.linkedin.com/company/stunmarkhq",
                "https://x.com/StunmarkHQ",
                "https://www.instagram.com/stunmark.hq",
                "https://www.facebook.com/share/1EuAtihwLL/"
              ]
            },
            {
              "@type": "LocalBusiness",
              "@id": `${siteUrl}/#localbusiness`,
              "name": "Stunmark",
              "telephone": "+234 705 834 3078",
              "email": "studio@stunmark.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kaduna",
                "addressRegion": "Kaduna State",
                "addressCountry": "NG"
              },
              "url": `${siteUrl}/`
            }
          ]
        }
      },
      '/services': {
        title: 'Capabilities & Integrated Services | Stunmark',
        description: 'Explore Stunmark capabilities: cinematic production, design systems, digital commerce platforms, content strategy, and performance-based marketing infrastructure.',
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Stunmark",
            "url": `${siteUrl}/`
          },
          "serviceType": "Creative & Growth Marketing Services",
          "areaServed": "Global"
        }
      },
      '/services/cinematic-production': {
        title: 'Cinematic Storytelling & Video Campaigns | Stunmark',
        description: 'High-end brand films, documentaries, video campaigns, and cinematic infrastructure that transform corporate narratives into cultural moments.',
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Stunmark"
          },
          "name": "Cinematic Production",
          "description": "Brand films, documentaries, and cinematic campaigns that transform narratives into cultural moments."
        }
      },
      '/services/brand-identity': {
        title: 'Brand Identity & Visual Design Systems | Stunmark',
        description: 'Scalable design systems and visual brand identities that define how modern brands look, feel, and behave across global channels.',
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Stunmark"
          },
          "name": "Brand & Identity Design",
          "description": "Scalable identity infrastructure that governs how brands look, feel, and behave across every touchpoint."
        }
      },
      '/services/digital-commerce': {
        title: 'Digital Experience & E-commerce Engineering | Stunmark',
        description: 'Custom web platforms, seamless UX design, and conversion-optimized e-commerce systems engineered for high performance and scalability.',
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Stunmark"
          },
          "name": "Digital & Commerce",
          "description": "Web platforms, UX design, and commerce systems engineered for seamless interaction and measurable growth."
        }
      },
      '/services/content-ecosystem': {
        title: 'Content Strategy & Platform Growth | Stunmark',
        description: 'Create always-on content ecosystems that build loyal audiences, own digital platforms, and compound brand equity over time.',
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Stunmark"
          },
          "name": "Content Ecosystem",
          "description": "Content ecosystems that grow audiences, own platforms, and compound cultural value over time."
        }
      },
      '/services/growth-performance': {
        title: 'Growth Marketing & Performance Creative | Stunmark',
        description: 'Connecting creative excellence with scientific, data-driven marketing systems to drive measurable customer acquisition and commercial results.',
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Stunmark"
          },
          "name": "Growth & Performance",
          "description": "Marketing systems that connect creative excellence with measurable commercial results at scale."
        }
      },
      '/approach': {
        title: 'Our Process & Core Methodology | Stunmark',
        description: 'How we build: Stunmark integrates brand strategy, storytelling, product experience, content, and growth media into a unified development loop.'
      },
      '/industries': {
        title: 'Markets & Industries We Define | Stunmark',
        description: 'Empowering ambitious brands across sectors: digital commerce, lifestyle/luxury, enterprise technology, and cultural production globally.'
      },
      '/about': {
        title: 'About Stunmark | Creative & Growth Infrastructure',
        description: 'We are a team of strategic designers, filmmakers, developers, and growth marketers. Read our mission, vision, values, and core principles.'
      },
      '/resources': {
        title: 'Stunmark Journal | Strategic Brand Insights',
        description: 'Perspectives and thought leadership on design systems, cinematic brand storytelling, performance creative, and growth marketing systems.'
      },
      '/contact': {
        title: 'Connect with Stunmark | Start a Partnership',
        description: 'Contact our studios in Kaduna State, Nigeria, to build category-defining brand systems and scale your marketing performance.'
      },
      '/privacy': {
        title: 'Privacy Policy | Stunmark',
        description: 'Read the privacy policy of Stunmark Limited regarding data collection and usage.'
      },
      '/terms': {
        title: 'Terms of Service | Stunmark',
        description: 'Understand the terms of service governing the use of Stunmark Limited platforms and assets.'
      },
      '/cookies': {
        title: 'Cookie Policy | Stunmark',
        description: 'Details on how Stunmark Limited uses cookies and tracking technologies to enhance user experiences.'
      }
    };

    const currentMeta = pageMeta[location.pathname] || {
      title: 'Stunmark | Creative & Growth Company',
      description: defaultDescription
    };

    // Update page title
    document.title = currentMeta.title;

    // Helper to update or create meta tags
    const updateOrCreateMeta = (nameOrProperty: string, value: string, isProperty: boolean = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.head.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Update SEO meta tags
    updateOrCreateMeta('description', currentMeta.description);
    
    // Update Open Graph tags
    updateOrCreateMeta('og:title', currentMeta.title, true);
    updateOrCreateMeta('og:description', currentMeta.description, true);
    updateOrCreateMeta('og:url', `${siteUrl}${location.pathname}`, true);

    // Update Twitter tags
    updateOrCreateMeta('twitter:title', currentMeta.title);
    updateOrCreateMeta('twitter:description', currentMeta.description);
    updateOrCreateMeta('twitter:url', `${siteUrl}${location.pathname}`);

    // Update Canonical URL
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${siteUrl}${location.pathname}`);

    // Inject/Update dynamic JSON-LD Structured Data Schema
    const schemaId = 'stunmark-jsonld-schema';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (schemaScript) {
      schemaScript.remove();
    }

    if (currentMeta.schema) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(currentMeta.schema);
      document.head.appendChild(schemaScript);
    }
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
