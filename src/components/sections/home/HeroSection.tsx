import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image - cinematic */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2873489/pexels-photo-2873489.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Cinematic production"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Left: Message */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-primary-400 font-semibold text-sm uppercase tracking-[0.3em] mb-8">
                Creative & Growth Company
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-white">
                Brands That<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Own Their
                </span><br />
                Category.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-12 leading-relaxed font-light">
                Building brands, stories, and creative systems that scale perception and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row items-start gap-5"
            >
              <Button
                to="/contact"
                variant="accent"
                size="lg"
                className="text-lg px-10 py-5 font-bold shadow-2xl hover:shadow-accent-500/20 transition-all duration-300"
              >
                Start a Project
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/5 hover:border-white/40 text-lg px-10 py-5 font-semibold transition-all duration-300"
              >
                Explore Capabilities
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right: Visual composition */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Creative production"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-black">
                <img
                  src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
                  alt="Brand design"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Play button overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 group">
                  <Play size={28} className="text-white ml-1 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute -top-4 -right-4 w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
