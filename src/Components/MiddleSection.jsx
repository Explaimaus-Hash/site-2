import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Lightbulb, Users, BadgeDollarSign, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import itbiBoard from "../assets/itbi_board.png";
import innovationLogo from "../assets/innovation_cell_logo.png";

const MiddleSection = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      text: "Foster Innovation",
      desc: "Nurturing breakthrough ideas"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "Support Startups",
      desc: "End-to-end incubation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Build Community",
      desc: "Vibrant mentor network"
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      text: "Provide Funding",
      desc: "Financial seed support"
    }
  ];

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#161b22] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50/50 blur-[120px] rounded-full -z-1" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 blur-[100px] rounded-full -z-1" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="section-heading-container mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold mb-6 border border-green-100 dark:border-green-800">
            <Zap className="w-4 h-4" />
            Flagship Program
          </div>
          <h2 className="section-title mb-4">i-TBI Program</h2>
          <div className="section-title-bar mb-8" />
          <p className="section-subtitle text-slate-600 dark:text-[#8b949e] max-w-4xl">
            The Inclusive Technology Business Incubator (i-TBI) is a prestigious Department of Science & Technology (DST) initiative, specifically engineered to catalyze innovation and entrepreneurship within our ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Content Section */}
          <div className="lg:col-span-7 space-y-10 overflow-hidden pl-6">
            <div className="standard-card p-6 md:p-10 bg-slate-50/30 dark:bg-[#21262d]/50 backdrop-blur-sm border-slate-100 dark:border-[#30363d] w-full overflow-hidden">
              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-5 bg-white dark:bg-[#21262d] p-5 rounded-2xl border border-slate-100 dark:border-[#30363d] shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-[#e6edf3] mb-1">{item.text}</h4>
                      <p className="text-xs text-slate-500 dark:text-[#8b949e] font-medium uppercase tracking-wider">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-600 dark:text-[#e6edf3] text-base leading-relaxed mb-8 border-l-[1px] border-green-600 pl-4 not-italic font-inter">
                "We are committed to fostering a culture of innovation where students and entrepreneurs bridge the gap between visionary ideas and scalable commercial realities."
              </p>

              <p className="text-slate-500 dark:text-[#8b949e] leading-relaxed">
                Supported by the Department of Science & Technology (DST), this initiative provides a robust three-year framework for educational institutions to cultivate a thriving startup culture. We expect innovators to leverage our mentorship ecosystem to build high-impact tech solutions.
              </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              <div className="standard-card overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-50 dark:hover:bg-[#21262d]/50 transition-colors"
                  onClick={() => toggleExpand('criteria')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#21262d] flex items-center justify-center text-slate-600 dark:text-[#e6edf3] font-bold">01</div>
                    <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-[#e6edf3]">Academic Program Criteria</h3>
                  </div>
                  {expandedSection === 'criteria' ? (
                    <ChevronUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === 'criteria' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="bg-slate-50 dark:bg-[#21262d]/50 p-6 rounded-2xl text-slate-700 dark:text-[#e6edf3] space-y-4 border border-slate-100 dark:border-[#30363d]">
                        {[
                          "Individual Innovators or Startups: Open to students and entrepreneurs with high-impact potential.",
                          "Stage of Idea: Well-defined roadmap or early-stage functional prototype.",
                          "Focus Areas: Alignment with societal, technological, or critical economic challenges."
                        ].map((text, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-600 dark:text-[#e6edf3]">{text}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="standard-card overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-50 dark:hover:bg-[#21262d]/50 transition-colors"
                  onClick={() => toggleExpand('vision')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#21262d] flex items-center justify-center text-slate-600 dark:text-[#e6edf3] font-bold">02</div>
                    <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-[#e6edf3]">Institutional Vision and Targets</h3>
                  </div>
                  {expandedSection === 'vision' ? (
                    <ChevronUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === 'vision' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 dark:bg-[#2d2d2d] p-6 rounded-2xl text-white">
                          <h4 className="font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs text-green-400">
                            Vision Statement
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">To transform novel technological ideas into scalable startups, empowering communities through inclusive innovation.</p>
                        </div>
                        <div className="bg-green-600 dark:bg-[#1a4d2e] dark:border dark:border-green-600 p-6 rounded-2xl text-white shadow-lg shadow-green-200 dark:shadow-none">
                          <h4 className="font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs text-white/80">
                            Core Targets
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {["Idea to Startup Conversion", "Ecosystem Development", "Prototype to Product Support"].map((li, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-3 h-3" />
                                <span className="font-bold">{li}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Image/Badge Section */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8 lg:sticky lg:top-32 h-max">
            {[
              { img: itbiBoard, title: "Incubation Hub", subtitle: "World-class infrastructure for tech-focused startups.", boldBg: false },
              { img: innovationLogo, title: "Innovation Cell", subtitle: "Nurturing the next generation of changemakers.", boldBg: true }
            ].map((banner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="standard-card group relative bg-white dark:bg-[#21262d] border-slate-100 dark:border-[#30363d] flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
              >
                <div className={`w-full h-[220px] image-container relative py-4 ${banner.boldBg ? 'bg-[#111111]' : 'bg-white dark:bg-[#21262d]'}`}>
                  <img
                    src={banner.img}
                    alt={banner.title}
                    className={`w-full h-full object-center transition-transform duration-[400ms] ease-out !object-contain ${banner.boldBg ? 'scale-100 group-hover:scale-[1.03]' : 'scale-[1.08] group-hover:scale-[1.11]'} `}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-outfit mb-3 text-slate-900 dark:text-[#e6edf3] border-l-[1px] border-green-600 pl-3">{banner.title}</h3>
                  <p className="text-slate-500 dark:text-[#8b949e] text-sm leading-relaxed font-medium mb-4 flex-grow">{banner.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;