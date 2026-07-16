import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Stars } from 'lucide-react';
import audi from "../assets/banner/audi.jpg";
import expo from "../assets/banner/expo.jpg";
import expo2 from "../assets/banner/expo2.jpg";
import gokart from "../assets/banner/gokart.jpg";
import incub from "../assets/banner/incub.jpg";
import room from "../assets/banner/room.jpg";
import innovationAction from "../assets/banner/innovation_action.png";
import receptionReal from "../assets/facilities/receptionReal.png";

const MissionSection = () => {
  const slides = [
    {
      image: receptionReal,
      title: "World-Class Incubation Infrastructure",
      description: "Step into a premium ecosystem designed to nurture the next generation of global innovators and entrepreneurs."
    },
    {
      image: innovationAction,
      title: "Innovation in Action",
      description: "Collaborative environments where student-led startups transform visionary ideas into functional prototypes."
    },
    {
      image: room,
      title: "Vibrant Ecosystem",
      description: "Nurturing breakthrough ideas with world-class resources and specialized technical mentorship."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[650px] sm:h-[750px] overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full image-container !border-0 !rounded-none !shadow-none"
        >
          {/* Background Image with Ken Burns effect */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            src={slides[currentIndex].image}
            className="absolute inset-0 w-full h-full object-cover hero-image"
            alt={slides[currentIndex].title}
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
                {slides[currentIndex].title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed"
              >
                {slides[currentIndex].description}
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
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators (Progress Bar Style) */}
      <div className="absolute bottom-12 left-4 sm:left-8 lg:left-24 z-30 flex gap-3 w-48 sm:w-64">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={() => setCurrentIndex(idx)}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: currentIndex === idx ? "100%" : currentIndex > idx ? "100%" : "0%" }}
              transition={{ duration: currentIndex === idx ? 6 : 0, ease: "linear" }}
              className="h-full bg-green-600"
            />
          </div>
        ))}
      </div>

      {/* Side Arrows */}
      <div className="absolute right-8 sm:right-12 bottom-12 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default MissionSection;
