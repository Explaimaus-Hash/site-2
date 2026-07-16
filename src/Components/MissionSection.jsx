import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stars } from 'lucide-react';
import innovationAction from "../assets/banner/innovation_action.png";

const MissionSection = () => {
  const slide = {
    image: innovationAction,
    title: "Innovation in Action",
    description: "Collaborative environments where student-led startups transform visionary ideas into functional prototypes."
  };

  return (
    <section className="relative w-full h-[650px] sm:h-[750px] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 w-full h-full image-container !border-0 !rounded-none !shadow-none">
        {/* Background Image with Ken Burns effect */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          src={slide.image}
          className="absolute inset-0 w-full h-full object-cover hero-image"
          alt={slide.title}
          fetchpriority="high"
          decoding="async"
        />

        {/* New Stacked Hero Vignette Overlay */}
        <div className="absolute inset-0 hero-vignette z-10 pointer-events-none" />

        {/* Polished Dark Overlay Gradient: Left-weighted */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950/90 dark:!bg-none dark:[background-image:linear-gradient(to_right,rgba(0,0,0,0.75)_40%,rgba(0,0,0,0.35)_100%)] z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 lg:px-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-8 backdrop-blur-md"
            >
              <Stars className="w-4 h-4" />
              Institutional Innovation Hub
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1]"
            >
              {slide.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4 relative z-50 pointer-events-auto"
            >
              <Link to="/about" className="btn-primary flex items-center justify-center ripple">
                Explore Programs
              </Link>
              <a href="mailto:sif@psit.in" className="px-8 py-3.5 rounded-xl border border-white text-white font-bold hover:bg-white hover:text-slate-900 dark:border-[2px] dark:border-[rgba(255,255,255,0.8)] dark:backdrop-blur-[4px] transition-all duration-300 flex items-center justify-center ripple">
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;