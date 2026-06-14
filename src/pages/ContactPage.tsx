import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Send, Mail, Phone, MapPin, Check } from 'lucide-react';

const helpOptions = [
  { group: 'Services', items: [
    'Brand & Identity Systems',
    'Cinematic Production',
    'Digital Experience & Commerce',
    'Content & Media Ecosystems',
    'Marketing, Growth & Performance',
  ]},
  { group: 'Strategic', items: [
    'Creative Strategy & Advisory',
    'Creative Direction',
    'Digital Transformation',
  ]},
  { group: 'Partnership', items: [
    'Long-Term Partnership / Retainer',
    'Co-Production & Collaboration',
    'Institutional Inquiry',
  ]},
  { group: 'Other', items: [
    'Custom Project / Something Else',
  ]},
];

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactPage = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setFormState({ name: '', email: '', company: '', service: '', message: '' });
    setTimeout(() => { setSubmitted(false); }, 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Creative collaboration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Let's Build Something Remarkable.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you are launching a brand, scaling a platform, or telling a story that matters, we are ready. Tell us about your project and we will show you what is possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Start a Project</h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Tell us about your vision. Our team will respond within 24 hours with a clear perspective on how we can help.
              </p>

              {submitted ? (
                <div className="bg-success-50 border border-success-200 text-success-800 px-8 py-10 rounded-xl mb-8 flex items-start">
                  <Check size={28} className="text-success-600 mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Project Brief Received</h3>
                    <p className="text-lg">Thank you. Our creative team will be in touch within 24 hours to discuss your project with strategic clarity.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-shadow duration-200 hover:shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-shadow duration-200 hover:shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-shadow duration-200 hover:shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">How can we help you? *</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white text-base transition-shadow duration-200 hover:shadow-sm"
                      required
                    >
                      <option value="" disabled>Select an area</option>
                      {helpOptions.map((group) => (
                        <optgroup key={group.group} label={group.group}>
                          {group.items.map((item) => (
                            <option key={item} value={item}>{item}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Project *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-shadow duration-200 hover:shadow-sm resize-none"
                      placeholder="Describe your brand challenge, creative vision, or growth goals..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="!inline-flex w-full justify-center text-base py-4 font-bold transition-all duration-200 hover:shadow-lg"
                    >
                      <Send size={18} className="mr-2" />
                      Submit Project Brief
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-navy-900 text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white text-base leading-tight">Creative Inquiries</p>
                      <p className="text-gray-300 text-sm mt-1">studio@stunmark.com</p>
                      <p className="text-gray-400 text-sm">partnerships@stunmark.com</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10"></div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white text-base leading-tight">Direct Line</p>
                      <p className="text-gray-300 text-sm mt-1">+1 (555) 123-STUN</p>
                      <p className="text-gray-400 text-sm">Mon - Fri, 9am - 6pm</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10"></div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white text-base leading-tight">Studio</p>
                      <p className="text-gray-300 text-sm mt-1">1234 Innovation Drive</p>
                      <p className="text-gray-400 text-sm">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-4">Follow Our Work</p>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="#" className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                    <a href="#" className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-3">Schedule a Consultation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Prefer a direct conversation? Schedule a creative consultation with our team to discuss your brand, project, or strategic challenge.
                </p>
                <Button
                  href="#"
                  variant="primary"
                  size="lg"
                  className="!inline-flex w-full justify-center text-base py-4 font-bold"
                >
                  Schedule Creative Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">What makes Stunmark different?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are not a single-service operation. We are an interconnected creative and growth company combining cinematic production, brand architecture, digital and commerce, content ecosystems, and growth into one integrated system. Your brand, story, experience, content, and growth are built to reinforce each other, not exist in silos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
                <p className="text-gray-600 leading-relaxed">
                  It depends on scope. Brand identity systems typically take 6-10 weeks. Cinematic productions run 4-12 weeks. Digital platforms 8-16 weeks. We move with urgency while maintaining the craft your brand demands.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Do you work with startups or only established brands?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work with ambitious brands at any stage: from startups defining their identity for the first time to established companies reinventing their market position. The common thread is ambition and a refusal to be generic.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">How do you measure success?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We measure success by impact: perception, revenue, cultural position. Every project has defined success metrics before we begin, and we track them rigorously. Creative work that does not perform is failed creative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
