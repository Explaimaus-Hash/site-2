import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../assets/events/startup.jpg"
import img3 from "../assets/events/EE.jpg"
import img4 from "../assets/events/demoday.jpg"
import img5 from "../assets/events/hustlers.jpg"
import img6 from "../assets/events/startup2.jpg"
import img7 from "../assets/events/IPR2.jpeg"

// New event photos
import elevate26 from "../assets/banner/audi.jpg"
import drone from "../assets/events/drone.jpg"
import presentation from "../assets/events/presentation.jpg"

// Official Event Posters
import startupCharcha5 from "../assets/events/startup_charcha_5.jpg"
import startupCharcha4 from "../assets/events/startup_charcha_4.jpg"
import startupCharcha3 from "../assets/events/startup_charcha_3.jpg"
import startupCharcha2 from "../assets/events/startup_charcha_2.jpg"
import hustlersNew from "../assets/events/hustlers_new.png"

const showcaseImages = [
  { url: elevate26, title: "ELEVATE '26 Startup Conclave", description: "Bringing together visionaries and investors to shape the future of innovation." },
  { url: img7, title: "Intellectual Property Rights Workshop", description: "Empowering innovators with knowledge of legal protections and patent filing." },
  { url: drone, title: "Drone Technology Workshop", description: "Hands-on experience in assembling and programming advanced UAV systems." },
  { url: presentation, title: "Innovation Showcase", description: "Startups presenting ground-breaking solutions to industry experts." }
];

const FeaturedEventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group standard-card flex flex-col lg:flex-row mb-12"
    >
      <div className="relative w-full lg:w-1/2 h-80 lg:h-[450px] image-container rounded-l-3xl lg:rounded-r-none overflow-hidden bg-[#f5f5f5] dark:bg-[#21262d] p-1">
        <img
          src={event.image}
          alt={event.title}
          className="relative z-10 w-full h-full !object-contain transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] rounded-2xl"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="lg:w-1/2 p-10 flex flex-col justify-center items-center text-center bg-gray-50/50">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg font-medium">
          {event.description}
        </p>
        <div className="w-16 h-1.5 bg-green-500 mt-8 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      </div>
    </motion.div>
  );
};

const GridEventCard = ({ event, index }) => {
  const isReverted = index === 0 || index === 3 || index === 4;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group standard-card"
    >
      <div className="relative h-56 w-full image-container rounded-t-3xl rounded-b-none overflow-hidden bg-[#f5f5f5] dark:bg-[#21262d] p-1">
        <img
          src={event.image}
          alt={event.title}
          className={`relative z-10 w-full h-full transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] rounded-2xl ${isReverted ? 'object-cover' : '!object-contain'}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-8 flex flex-col items-center text-center">
        <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};

const Event = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);

  const events = [
    {
      image: startupCharcha5,
      title: 'StartUp Charcha 5.0',
      description: 'The latest edition of our flagship series brought together prominent investors and founders to discuss fundraising, scaling strategies, and the evolving startup ecosystem.',
    },
    {
      image: startupCharcha4,
      title: 'StartUp Charcha 4.0',
      description: 'An interactive session focusing on tech-driven startups, featuring industry leaders sharing their journey from ideation to successful market deployment.',
    },
    {
      image: startupCharcha3,
      title: 'StartUp Charcha 3.0',
      description: 'STARTUP CHARCHA 3.0, an exclusive talk show with Mr. Nitin Sharma, Founder of ROAD PILOT, as our esteemed chief guest.',
    },
    {
      image: img3,
      title: 'Empowering Entrepreneurs',
      description: 'A transformative series aimed at equipping aspiring leaders with essential management skills to thrive in today\'s competitive landscape.',
    },
    {
      image: img4,
      title: 'Demo Day',
      description: 'Organized under the NIDHI ITBI initiative, showcasing innovative prototypes and breakthrough ideas.',
    },
    {
      image: hustlersNew,
      title: 'Hustlers',
      description: 'Engaging mentors from the industry to inspire first-year engineering students to think big and embrace the startup mindset from day one.',
    },
    {
      image: startupCharcha2,
      title: 'StartUp Charcha 2.0',
      description: 'Featuring deep-dive conversations with successful founders like Mr. Shivendra Gupta, sharing real-world insights on scaling.',
    }
  ];

  const featuredEvents = events.slice(0, 2);
  const remainingEvents = events.slice(2);

  return (
    <div className="section-container">
      <div className="section-heading-container">
        <h2 className="section-title">Our Events</h2>
        <div className="section-title-bar" />
      </div>

      {/* Showcase Carousel */}
      <div className="mb-20 relative group">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl shadow-2xl image-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={showcaseImages[currentSlide].url}
                alt={showcaseImages[currentSlide].title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end justify-center pb-16">
                <div className="px-10 text-white text-center max-w-4xl">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-slate-300"
                  >
                    {showcaseImages[currentSlide].title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-300 font-medium"
                  >
                    {showcaseImages[currentSlide].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 right-10 flex space-x-2">
            {showcaseImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-green-500 w-8' : 'bg-white/40 w-2'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="mb-20">
        {featuredEvents.map((event, index) => (
          <FeaturedEventCard key={index} event={event} index={index} />
        ))}
      </div>

      {/* Past Events */}
      <div>
        <div className="section-heading-container !mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-outfit uppercase tracking-wider">Past Events</h2>
          <div className="w-16 h-1 bg-green-500 mt-2 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingEvents.map((event, index) => (
            <GridEventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;