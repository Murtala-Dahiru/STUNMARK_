import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Film, Palette, Monitor, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import SMMonogram from '../ui/SMMonogram';

const serviceLinks = [
  {
    to: '/services/cinematic-production',
    label: 'Cinematic Storytelling & Global Production',
    icon: <Film size={18} />,
    tag: 'Cinematic',
  },
  {
    to: '/services/brand-identity',
    label: 'Visual Systems & Brand Architecture',
    icon: <Palette size={18} />,
    tag: 'Brand',
  },
  {
    to: '/services/digital-commerce',
    label: 'Digital & Commerce',
    icon: <Monitor size={18} />,
    tag: 'Digital',
  },
  {
    to: '/services/content-ecosystem',
    label: 'Content Ecosystem & Digital Media',
    icon: <FileText size={18} />,
    tag: 'Content',
  },
  {
    to: '/services/growth-performance',
    label: 'Marketing, Growth & Performance',
    icon: <TrendingUp size={18} />,
    tag: 'Growth',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServicesEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  const textColor = scrolled ? 'text-gray-800' : 'text-white';
  const hoverColor = scrolled ? 'hover:text-primary-600' : 'hover:text-primary-400';

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 py-2 px-3 text-[13px] font-semibold tracking-wide uppercase ${
      isActive
        ? 'text-primary-600'
        : `${textColor} ${hoverColor}`
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/IMG_1950.PNG"
              alt="Stunmark Logo"
              className="h-[72px] sm:h-[84px] md:h-[96px] w-auto transition-all duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                to="/services"
                className={`transition-colors duration-200 py-2 px-3 text-[13px] font-semibold tracking-wide uppercase inline-flex items-center gap-1.5 ${
                  isServicesActive
                    ? 'text-primary-600'
                    : `${textColor} ${hoverColor}`
                }`}
              >
                Services
                <ChevronDown size={13} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                  servicesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="w-[380px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-200/60 py-2 overflow-hidden">
                  {/* Service links only - no "All Services" */}
                  <div className="py-1.5">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="flex items-center gap-4 px-6 py-3.5 group/link hover:bg-primary-50/40 transition-colors duration-200"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary-50 group-hover/link:bg-primary-100 flex items-center justify-center text-primary-500 transition-colors duration-200 shrink-0">
                          {link.icon}
                        </div>
                        <div className="flex-grow min-w-0">
                          <span className="block text-[13px] font-medium text-gray-800 group-hover/link:text-navy-900 transition-colors duration-200 leading-snug">
                            {link.label}
                          </span>
                        </div>
                        <ArrowRight size={13} className="text-gray-300 group-hover/link:text-primary-500 transition-all duration-200 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/approach" className={navLinkClasses}>
              How We Work
            </NavLink>
            <NavLink to="/industries" className={navLinkClasses}>
              Industries
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/resources" className={navLinkClasses}>
              Journal
            </NavLink>
            <Link
              to="/contact"
              className="ml-6 bg-primary-600 hover:bg-primary-700 text-white text-[13px] py-2.5 px-7 rounded-lg font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-md focus:outline-none transition-colors duration-300 ${
              scrolled || isOpen ? 'text-gray-700' : 'text-white'
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-xl w-full shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 py-6'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-1">
          {/* Services - always expanded on mobile */}
          <div>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 text-sm font-semibold tracking-wide uppercase rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-800 hover:text-primary-600 hover:bg-gray-50'
                }`
              }
            >
              Services
            </NavLink>
            <div className="pl-4 space-y-0.5 mt-1">
              {serviceLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center py-2.5 px-4 text-sm rounded-lg transition-colors ${
                      isActive ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-600 hover:text-primary-600'
                    }`
                  }
                >
                  <span className="mr-3 text-primary-400">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/approach" className={({ isActive }) =>
            `transition-colors duration-200 py-3 px-4 text-sm font-semibold tracking-wide uppercase rounded-lg ${
              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:text-primary-600 hover:bg-gray-50'
            }`
          }>
            How We Work
          </NavLink>
          <NavLink to="/industries" className={({ isActive }) =>
            `transition-colors duration-200 py-3 px-4 text-sm font-semibold tracking-wide uppercase rounded-lg ${
              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:text-primary-600 hover:bg-gray-50'
            }`
          }>
            Industries
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `transition-colors duration-200 py-3 px-4 text-sm font-semibold tracking-wide uppercase rounded-lg ${
              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:text-primary-600 hover:bg-gray-50'
            }`
          }>
            About
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) =>
            `transition-colors duration-200 py-3 px-4 text-sm font-semibold tracking-wide uppercase rounded-lg ${
              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-800 hover:text-primary-600 hover:bg-gray-50'
            }`
          }>
            Journal
          </NavLink>
          <Link
            to="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white text-center py-4 px-6 rounded-lg font-semibold tracking-wide transition-all duration-200 shadow-lg mt-2"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
