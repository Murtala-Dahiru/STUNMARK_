import React from 'react';

const TermsPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Terms of Service
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              By accessing and using this website or engaging Stunmark for creative, production, or growth services, you agree to comply with and be bound by the following Terms of Service. If you do not agree, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">2. Professional Services</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Stunmark provides premium brand strategy, cinematic production, digital experiences, content ecosystems, and growth marketing services. All services are governed by separate, customized Client Service Agreements or Statements of Work (SOW). In the event of a conflict between these Terms and a specific SOW, the SOW shall prevail.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">3. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Unless otherwise specified in a custom agreement, all intellectual property, original visual assets, and designs created during a partnership remain the property of Stunmark until final payment is received and title is explicitly transferred. All materials displayed on this website, including logos, designs, copy, and videos, are owned by or licensed to Stunmark and are protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">4. User Conduct & Inquiries</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When using our contact form or submitting project briefs, you agree to provide accurate, current, and complete information. You are prohibited from using this website to transmit any unlawful, harmful, threatening, or offensive materials.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In no event shall Stunmark, its partners, or its employees be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of this website or our creative services, even if advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">6. Governing Law</h2>
            <p className="text-gray-600 mb-0 leading-relaxed">
              These Terms of Service and any disputes arising from them shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
