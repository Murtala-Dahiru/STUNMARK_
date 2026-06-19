import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Calendar } from 'lucide-react';

const ResourcesPage = () => {
  const blogPosts = [
    {
      title: "Why Your Brand System Matters More Than Your Logo",
      excerpt: "A logo is a mark. A brand system is a language. Here is why the difference determines whether your brand scales or stalls.",
      category: "Brand Strategy",
      date: "June 15, 2026",
      imageUrl: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "The Cinematic Brand: How Film Redefines Brand Perception",
      excerpt: "Cinematic storytelling is not just for Hollywood. Discover how brand films are reshaping how audiences experience companies.",
      category: "Cinematic Production",
      date: "May 28, 2026",
      imageUrl: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Content Ecosystems vs. Content Campaigns: The Compounding Advantage",
      excerpt: "Campaigns end. Ecosystems compound. Here is how always-on content strategies create lasting audience value.",
      category: "Content Strategy",
      date: "May 12, 2026",
      imageUrl: "https://images.pexels.com/photos/7869106/pexels-photo-7869106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Design Systems That Scale: Building Visual Infrastructure for Growth",
      excerpt: "How to build design systems that maintain brand integrity as your company grows across markets and teams.",
      category: "Design Systems",
      date: "April 30, 2026",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Performance Creative: Where Design Meets Data",
      excerpt: "The best performing ads are the most intentional, not the loudest. How to engineer creative that converts.",
      category: "Growth & Performance",
      date: "April 15, 2026",
      imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Digital Experience Design: Beyond Aesthetics",
      excerpt: "Great digital experiences are intentional, not just beautiful. How to design platforms that perform.",
      category: "Digital & Commerce",
      date: "March 22, 2026",
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const categories = [
    "All",
    "Brand Strategy",
    "Cinematic Production",
    "Content Strategy",
    "Design Systems",
    "Growth & Performance",
    "Digital & Commerce"
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7869106/pexels-photo-7869106.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Editorial content"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              The Stunmark Journal
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Perspectives on brand, story, design, and growth from our creative team. Built for leaders who think about how their brand shows up in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="container-custom">
          <div className="flex items-center justify-start overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full mr-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white pt-12">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full mb-4">
                  Featured Article
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Integrated Creative Company: Why Silos Kill Brand Potential</h2>
                <p className="text-gray-600 mb-6">
                  Most institutions specialize in one thing. But brands do not exist in silos, and neither should the creative partners who build them. Here is why integration is the future of creative work.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    June 28, 2026
                  </span>
                  <span className="mx-3">|</span>
                  <span className="text-xs uppercase tracking-wider font-medium text-primary-600">
                    Featured
                  </span>
                </div>
                <Button
                  to="/blog/integrated-creative-institution"
                  variant="primary"
                  withArrow
                >
                  Read Article
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Integrated Creative Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Latest Perspectives"
            subtitle="Thinking on brand, story, design, and growth from our creative team."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-navy-900 text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="mx-3">|</span>
                    <span className="text-xs uppercase tracking-wider font-medium text-primary-600">
                      {post.category}
                    </span>
                  </div>
                  <Button
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    variant="primary"
                    size="sm"
                    withArrow
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              to="/blog"
              variant="primary"
              withArrow
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to the Stunmark Journal for perspectives on brand, story, design, and growth, delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Need a Creative Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our team is ready to discuss your brand, project, or creative challenge.
            </p>
            <Button
              to="/contact"
              variant="accent"
              size="lg"
              className="text-lg px-12 py-6 font-bold"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
