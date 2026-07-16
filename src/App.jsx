import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import BenifitedStartupPage from './pages/StartupsDirectoryPage';
import AboutUs from './pages/AboutUs';

const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Apply fade-in class and observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/startups" element={<BenifitedStartupPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
