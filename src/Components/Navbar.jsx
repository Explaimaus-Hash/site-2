import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img from "../assets/th.png";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    
  }, []);



  const navItems = [
    { title: "Home", route: "/home" },
    { title: "About", route: "/about" },
    { title: "Startup Directory", route: "/startups" },
    { title: "Our Events", route: "/events" },
  ];

  useEffect(() => {
    const handleScrollPosition = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <div className="relative w-full">
      {/* 2. Main Institutional Header */}
      <div className="bg-white dark:bg-[#1a1a1a] border-b border-slate-100 dark:border-transparent py-4 md:py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Partners */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <img src={img6} alt="PSIT SIF" className="h-14 md:h-20 lg:h-24 w-auto object-contain" />
              <div className="h-12 w-px bg-slate-200 hidden md:block" />
              <img src={img7} alt="DST" className="h-14 md:h-16 lg:h-14 w-auto object-contain" />
            </div>

            {/* Central Title */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-[#e6edf3] tracking-tight leading-tight transition-colors duration-300">
                PSIT STARTUP AND INCUBATION FOUNDATION
              </h1>
              <div className="mt-1 flex flex-col items-center">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-green-600 tracking-tighter">
                  DST inclusive-TBI
                </span>
                <p className="text-xs md:text-sm font-semibold text-slate-500 dark:text-[#8b949e] uppercase tracking-widest mt-1">
                  Center for AI/ML and Wearable Devices
                </p>
              </div>
            </div>

            {/* Right Partners */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <img src={img8} alt="PSIT Kanpur" className="h-14 md:h-16 lg:h-20 w-auto object-contain" />
              <div className="h-12 w-px bg-slate-200 hidden md:block" />
              <img src={img} alt="DST NIDHI" className="h-12 md:h-16 lg:h-14 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sticky Navigation */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-card py-3 translate-y-0"
            : "bg-white dark:bg-[#111111] py-4 border-b border-slate-50 dark:border-[#2d2d2d]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.route}
                  className="nav-link-effect py-2 text-sm lg:text-base font-bold text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3] transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* CTA Button & Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
            
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdC7JnM4DRB5AhCctMmgUiCG73-uiDLR8NxbIky6UUOUCC8mA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group ripple"
              >
                Apply for Incubation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Menu Actions */}
            <div className="md:hidden flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <span className="text-sm font-bold text-slate-900 dark:text-[#e6edf3] uppercase">Menu</span>
              </div>
              <div className="flex items-center gap-2">
                
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 transition-colors hover:bg-slate-100 dark:hover:bg-[#21262d] rounded-xl"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-slate-900 dark:text-[#e6edf3]" />
                  ) : (
                    <Menu className="w-6 h-6 text-slate-900 dark:text-[#e6edf3]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#111111] border-t border-slate-100 dark:border-[#2d2d2d] shadow-2xl p-6 space-y-4"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-between items-center py-4 px-4 text-slate-700 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#21262d] hover:text-green-600 dark:hover:text-green-500 rounded-2xl font-bold transition-all"
                  >
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100 dark:border-[#2d2d2d]">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdC7JnM4DRB5AhCctMmgUiCG73-uiDLR8NxbIky6UUOUCC8mA/viewform"
                    className="flex items-center justify-center w-full py-4 bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-500/30 active:scale-[0.98] transition-transform"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;

