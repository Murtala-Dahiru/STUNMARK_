import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              Stun<span className="text-primary-400">Mark</span>
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A creative and growth company that designs brands, crafts stories, builds digital experiences, and engineers growth. Interconnected creative systems built to scale.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/cinematic-production" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Cinematic Production
                </Link>
              </li>
              <li>
                <Link to="/services/brand-identity" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Brand & Identity
                </Link>
              </li>
              <li>
                <Link to="/services/digital-commerce" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Digital & Commerce
                </Link>
              </li>
              <li>
                <Link to="/services/content-ecosystem" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Content Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/services/growth-performance" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Growth & Performance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Kaduna State</li>
              <li>Nigeria</li>
              <li className="pt-2">studio@stunmark.com</li>
              <li>+234 (0) 705 834 3078</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Stunmark. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
