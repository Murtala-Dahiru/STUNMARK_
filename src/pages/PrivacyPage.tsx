import React from 'react';

const PrivacyPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Privacy Policy
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
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">1. Introduction</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Stunmark ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us, or engage our creative and growth services.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect personal data in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2 leading-relaxed">
              <li><strong>Contact Information:</strong> Your name, email address, company name, and phone number when you submit a project brief or request a consultation.</li>
              <li><strong>Usage Data:</strong> Technical details about your device, browser, IP address, and how you interact with our website to optimize your digital experience.</li>
              <li><strong>Client Data:</strong> Any information provided to us in the course of our creative partnerships and service agreements.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We process your personal data for legitimate business interests, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2 leading-relaxed">
              <li>To provide, maintain, and optimize our services.</li>
              <li>To communicate with you regarding project inquiries, active engagements, and agency announcements.</li>
              <li>To analyze site usage and improve our website structure, design, and conversion potential.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">4. Data Sharing & Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We do not sell, rent, or trade your personal data to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We implement industry-standard technical and organizational security measures to protect your data.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Your Rights</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict the use of your information. To exercise these rights, please contact us at <a href="mailto:studio@stunmark.com" className="text-primary-600 hover:underline">studio@stunmark.com</a>.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">6. Updates to This Policy</h2>
            <p className="text-gray-600 mb-0 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically to stay informed about how we protect your privacy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
