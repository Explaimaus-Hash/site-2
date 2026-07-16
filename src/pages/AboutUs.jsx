import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dualiteLogo from "../assets/logos/dualite.png";
import senseLogo from "../assets/logos/senseoriginal.png";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const SuccessStoriesSlider = () => {
  const stories = [
    {
      company: "Dualite",
      logo: dualiteLogo,
      achievement: "Secured funding from 100X.VC",
      description: "Dualite successfully transitioned from an early-stage prototype to a venture-backed startup, securing substantial funding from the prestigious 100X.VC. Their journey showcases the power of technical precision and market-ready innovation nurtured within the PSIT-SIF ecosystem.",
      impact: "Revolutionizing how developers and designers collaborate through seamless design-to-code automation."
    },
    {
      company: "Senseoriginal Technologies",
      logo: senseLogo,
      achievement: "Early Revenue Growth & Market Traction",
      description: "Senseoriginal has demonstrated exceptional growth by achieving early revenue milestones in the competitive IoT and Deeptech landscape. Their focus on reducing counterfeiting through advanced technology has positioned them as a rising leader in brand protection.",
      impact: "Leading the charge in deep-tech innovation by providing cutting-edge security solutions for global brands."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [stories.length]);

  return (
    <div className="relative group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-50 rounded-2xl p-6 flex items-center justify-center mb-6">
              <img src={stories[currentIndex].logo} alt={stories[currentIndex].company} className="w-full h-full object-contain" />
            </div>
            <div className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wider">
              {stories[currentIndex].achievement}
            </div>
          </div>

          <div className="w-full md:w-2/3 relative">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-green-100 -z-10" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{stories[currentIndex].company}</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 italic">
              "{stories[currentIndex].description}"
            </p>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
              <p className="text-gray-800 font-medium">
                <span className="text-green-600 font-bold">The Impact:</span> {stories[currentIndex].impact}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)}
          className="p-3 rounded-full bg-white shadow-md border border-gray-100 text-gray-400 hover:text-green-600 hover:border-green-200 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % stories.length)}
          className="p-3 rounded-full bg-white shadow-md border border-gray-100 text-gray-400 hover:text-green-600 hover:border-green-200 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {stories.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-green-500' : 'w-2 bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="section-heading-container mt-12">
          <h2 className="section-title">About Us</h2>
          <div className="section-title-bar" />
        </div>

        {/* Introduction Text */}
        <div className="mt-8 text-lg md:text-xl lg:text-2xl text-neutral-600 space-y-8 max-w-4xl mx-auto text-center">
          <p>
            PSIT Startup and Incubation Foundation (PSIT-SIF) is a dedicated initiative
            fostering innovation and entrepreneurship at Pranveer Singh Institute of
            Technology (PSIT), Kanpur. Inspired by the innovative spirit of IIT Kanpur,
            PSIT-SIF aims to build a robust startup ecosystem by providing aspiring
            entrepreneurs with the necessary resources, mentorship, and support to
            transform their ideas into successful ventures.
          </p>

          <p>
            Our Startup Incubation Centre stands at the forefront of India's innovation ecosystem,
            empowering students, transforming industries, and fueling economic growth. We offer a
            comprehensive support system that includes expert mentorship, access to state-of-the-art
            facilities, networking opportunities, and financial support to help startups thrive.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="py-20 bg-gray-50 -mx-4 px-4 border-y border-gray-100">
          <div className="section-heading-container">
            <h2 className="section-title">Key Features</h2>
            <div className="section-title-bar" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {[
              {
                title: "Seed Funding",
                image: "/fet1.png",
                description: "Access to financial assistance to kick-start your venture. Helping startups prepare for fundraising and investor pitches."
              },
              {
                title: "Mentorship",
                image: "/fet2.png",
                description: "Guidance from industry experts to navigate challenges and seize opportunities."
              },
              {
                title: "Infrastructure",
                image: "/fet3.png",
                description: "State-of-the-art facilities and workspaces to foster innovation."
              },
              {
                title: "Networking",
                image: "/fet4.png",
                description: "Connect with investors, industry leaders, and fellow entrepreneurs."
              },
              {
                title: "Training & Workshops",
                image: "/fet5.png",
                description: "Enhance skills and knowledge through specialized training sessions."
              },
              {
                title: "Community and Collaboration",
                image: "/fet6.png",
                description: "Creating a collaborative environment where startups can interact and learn from each other."
              }
            ].map((feature, index) => (
              <div key={index} className="card flex flex-col bg-white shadow-md border border-slate-200 rounded-lg">
                <div className="relative w-full h-32 overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="mb-2 text-slate-800 text-xl md:text-2xl font-semibold">{feature.title}</h2>
                  <p className="text-slate-600 text-sm leading-normal">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fueling Innovation Section */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <div className="section-heading-container text-left items-start mb-8">
                <h2 className="section-title !text-left">Fueling Innovation at PSIT-SIF</h2>
                <div className="section-title-bar !mx-0" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center">
                At PSIT-SIF, we believe in the power of innovation to drive meaningful
                change and create a lasting impact on society. Our incubation programs
                are carefully designed to equip the next generation of entrepreneurs
                with the essential tools, mentorship, and resources needed to transform
                their ideas into successful ventures. Through a dynamic ecosystem of
                expert guidance, networking opportunities, and financial support, we
                empower aspiring innovators to navigate challenges, refine their business
                models, and bring groundbreaking solutions to life.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                className="w-full max-w-md mx-auto"
                src="/fet7.png"
                alt="Innovation illustration"
              />
            </div>
          </div>
        </div>

        {/* Focus Area Section */}
        <div className="py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <img
                className="w-full max-w-md mx-auto"
                src="/fet8.png"
                alt="Emerging Technology"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="section-heading-container text-left items-start mb-8">
                <h2 className="section-title !text-left">Focus Area: Emerging Technologies</h2>
                <div className="section-title-bar !mx-0" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center">
                PSIT-SIF is actively supporting startups in cutting-edge fields like Artificial Intelligence (AI),
                Machine Learning (ML), and Wearable Devices. Whether it's developing AI-powered solutions,
                revolutionizing healthcare with innovative wearable technology, enhancing user experiences
                with smart gadgets, or creating intelligent devices for the future, PSIT-SIF provides a
                launchpad with mentorship, resources, and networking opportunities to turn groundbreaking
                ideas into reality.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Section - Sliding Carousel */}
        <div className="bg-gradient-to-b from-green-50 to-white py-20 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="section-heading-container">
              <h2 className="section-title">Success Stories</h2>
              <div className="section-title-bar" />
            </div>

            <SuccessStoriesSlider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
