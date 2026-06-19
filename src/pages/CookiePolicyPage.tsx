import React from 'react';
import Button from '../components/ui/Button';

const CookiePolicyPage = () => {
  const triggerPreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch a custom event to open the consent banner
    const event = new CustomEvent('open-cookie-preferences');
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-300 mb-0 leading-relaxed">
              Last Updated: June 16, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Control Panel Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Your Preferences</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                  You can update your cookie choices at any time. This includes opting out of non-essential analytics and functional cookies.
                </p>
              </div>
              <Button onClick={triggerPreferences} variant="primary" className="whitespace-nowrap">
                Update Settings
              </Button>
            </div>

            <div className="prose prose-slate">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">1. What Are Cookies?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide analytical data to website owners.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies to understand how you navigate our site, store your functional settings, and keep our platform secure. Below is a detailed breakdown of the cookie categories we employ.
              </p>

              <div className="space-y-8 mb-8">
                {/* Category 1 */}
                <div className="border-l-4 border-navy-900 pl-6 py-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Necessary Cookies (Always Active)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies are essential for core website functions such as navigation, page access, and form submissions. The website cannot function properly without these cookies, and they cannot be disabled.
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded">
                    Type: First-party, Persistent & Session
                  </span>
                </div>

                {/* Category 2 */}
                <div className="border-l-4 border-primary-600 pl-6 py-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics & Performance Cookies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information collected by these cookies is aggregated and anonymous.
                  </p>
                  <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded">
                    Type: Third-party (e.g. Google Analytics), Persistent
                  </span>
                </div>

                {/* Category 3 */}
                <div className="border-l-4 border-secondary-500 pl-6 py-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies enable our website to remember choices you make (such as your username, language, or preferred region) to provide a more personalized experience. If you do not allow these cookies, some parts of the website may not function as intended.
                  </p>
                  <span className="inline-block bg-secondary-50 text-secondary-700 text-xs font-semibold px-2.5 py-1 rounded">
                    Type: First-party, Persistent
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">3. Third-Party Cookies</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                In some cases, we use cookies provided by trusted third parties. For example, our site uses Google Analytics to help us understand how you use the site and ways we can improve your experience. These cookies may track things such as how long you spend on the site and the pages you visit so we can continue to produce engaging content.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">4. Controlling and Managing Cookies</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You have the right to decide whether to accept or reject non-essential cookies. You can manage your preferences directly on our website using the <strong>Update Settings</strong> panel above, or by adjusting your web browser controls.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Most browsers allow you to block or delete cookies through their settings. Note that disabling essential cookies may impact your ability to use certain features of this and other websites.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Contact Us</h2>
              <p className="text-gray-600 mb-0 leading-relaxed">
                If you have any questions about our use of cookies or this policy, please contact our privacy compliance team at <a href="mailto:studio@stunmark.com" className="text-primary-600 hover:underline">studio@stunmark.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicyPage;
