import React, { useState, useEffect } from 'react';
import { Shield, Settings, Check, X } from 'lucide-react';
import Button from './Button';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  version: number;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    functional: true,
    version: 1
  });

  const STORAGE_KEY = 'stunmark-cookie-consent';

  useEffect(() => {
    // Check if user has already set preferences
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay to make the entrance smooth and feel premium
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
      } catch (e) {
        console.error('Error parsing cookie preferences', e);
      }
    }
  }, []);

  useEffect(() => {
    // Listen for custom event to open preferences dynamically (e.g. from Policy page)
    const handleOpen = () => {
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpen);
    return () => window.removeEventListener('open-cookie-preferences', handleOpen);
  }, []);

  const savePreferences = (newPrefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    setPreferences(newPrefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const allPrefs = {
      necessary: true,
      analytics: true,
      functional: true,
      version: 1
    };
    savePreferences(allPrefs);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      functional: false,
      version: 1
    };
    savePreferences(essentialOnly);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[420px] bg-navy-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white p-6 z-50 transition-all duration-300 animate-slide-up">
      {/* Banner Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-primary-600/10 p-2 rounded-xl text-primary-400 shrink-0">
          <Shield size={24} />
        </div>
        <div className="flex-grow">
          <h4 className="text-base font-bold text-white leading-snug">Cookie Compliance</h4>
          <p className="text-xs text-gray-300 leading-relaxed mt-1">
            We use cookies to enhance your digital experience, optimize performance, and analyze platform traffic.
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={18} />
        </button>
      </div>

      {/* Preferences Panel (Collapsible) */}
      {showPreferences && (
        <div className="border-t border-white/10 pt-4 mt-4 space-y-4 transition-all duration-300">
          <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Configure Settings</h5>
          
          <div className="space-y-3">
            {/* Necessary */}
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="text-xs font-bold text-white">Necessary Cookies</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Required for site operation. Cannot be disabled.</p>
              </div>
              <div className="w-9 h-5 rounded-full bg-primary-600 flex items-center justify-end px-1 opacity-60 cursor-not-allowed">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div>
                <p className="text-xs font-bold text-white">Analytics & Performance</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Helps us monitor visitor counts and site usage.</p>
              </div>
              <button
                onClick={() => togglePreference('analytics')}
                className={`w-9 h-5 rounded-full transition-colors relative flex items-center ${
                  preferences.analytics ? 'bg-primary-600 justify-end' : 'bg-gray-700 justify-start'
                } px-1`}
              >
                <div className="w-3 h-3 rounded-full bg-white shadow-sm"></div>
              </button>
            </div>

            {/* Functional */}
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div>
                <p className="text-xs font-bold text-white">Functional Preferences</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Remember language, location, and visual configurations.</p>
              </div>
              <button
                onClick={() => togglePreference('functional')}
                className={`w-9 h-5 rounded-full transition-colors relative flex items-center ${
                  preferences.functional ? 'bg-primary-600 justify-end' : 'bg-gray-700 justify-start'
                } px-1`}
              >
                <div className="w-3 h-3 rounded-full bg-white shadow-sm"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="border-t border-white/10 pt-4 mt-5">
        {showPreferences ? (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowPreferences(false)}
              className="text-xs font-semibold py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleSaveCustom}
              className="text-xs font-semibold py-2.5 px-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <Check size={14} />
              Save Settings
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleRejectAll}
                className="text-xs font-semibold py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="text-xs font-semibold py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <Settings size={14} />
                Manage Settings
              </button>
            </div>
            <button
              onClick={handleAcceptAll}
              className="text-xs font-semibold py-3 px-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all shadow-md"
            >
              Accept All Cookies
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
