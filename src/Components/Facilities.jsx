import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import startupRoom from '../assets/facilities/startupRoom.jpg';
import researchSpace from '../assets/facilities/lab.png';
import discussionRoom from '../assets/facilities/conference.png';
import library from '../assets/facilities/library.png';
import conferenceHall from '../assets/facilities/conference.png';
import computerLab from '../assets/facilities/compLab.png';

// New Startup Room Gallery
import startup1 from '../assets/facilities/startup1.png';
import startup2 from '../assets/facilities/startup2.jpg';
import startup3 from '../assets/facilities/startup3.png';

// Workstation images
import workstation from '../assets/facilities/workstation.png';
import cnc from '../assets/facilities/cnc.png';
import printer3d from '../assets/facilities/3dprinter.png';

import cuttingEdgeResearch from '../assets/facilities/cutting_edge_research.jpg';

// New Real Gallery Images
import facilityDesk1 from '../assets/facilities/facility_desk1.jpg';
import facilityDesk2 from '../assets/facilities/facility_desk2.jpg';
import facilityTeamwork from '../assets/facilities/facility_teamwork.jpg';
import facilityLabPc from '../assets/facilities/facility_lab_pc.jpg';
import facilityMeeting from '../assets/facilities/facility_meeting.jpg';

// Newly added real photos
import teamworkTable from '../assets/facilities/teamworkTable.png';
import printer3dReal from '../assets/facilities/printer3dReal.png';
import labBenchReal from '../assets/facilities/labBenchReal.png';
import conferenceTableWide from '../assets/facilities/conferenceTableWide.png';

const facilities = [
    {
        title: "Startup Room",
        description: "A dedicated space for budding entrepreneurs to brainstorm and develop their ideas.",
        images: [teamworkTable, facilityDesk1, facilityDesk2, startup1]
    },
    { 
        title: "Cutting-edge Research Space", 
        description: "Equipped with modern tools and technologies for advanced research and development.", 
        images: [labBenchReal, facilityLabPc, cuttingEdgeResearch] 
    },
    { title: "Group Discussion Room", description: "A collaborative space designed for team meetings and brainstorming sessions.", image: conferenceTableWide },
    { title: "Library", description: "A vast collection of books, research papers, and digital resources for academic enrichment.", image: library },
    { title: "Conference Hall", description: "Spacious hall for seminars, guest lectures, and industry interactions.", image: startupRoom },
    { 
        title: "Computer Lab", 
        description: "State-of-the-art systems for programming, simulations, and research.", 
        images: [facilityTeamwork, workstation] 
    }
];

const workstationSlides = [
    { image: workstation, title: "Modern Workstations", description: "Equipped with high-performance systems for intensive development and design work." },
    { image: facilityLabPc, title: "R&D Computing", description: "Specialized computing resources for simulation, modeling, and deep-tech research." },
    { image: printer3dReal, title: "3D Prototyping Lab", description: "Industrial-grade 3D printing facilities for rapid product development." },
    { image: cnc, title: "CNC Prototyping", description: "Precision machining facilities for creating high-quality physical prototypes." }
];

const FacilityCard = ({ facility }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const hasMultipleImages = facility.images && facility.images.length > 1;

    useEffect(() => {
        if (!hasMultipleImages) return;
        const timer = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % facility.images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [hasMultipleImages, facility.images]);

    const displayImage = hasMultipleImages ? facility.images[imgIndex] : facility.image;

    return (
        <div className="group image-container w-full h-[320px] cursor-pointer">
            <AnimatePresence mode="wait">
                <motion.img
                    key={imgIndex}
                    src={displayImage}
                    alt={facility.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] absolute inset-0"
                    loading="lazy"
                    decoding="async"
                />
            </AnimatePresence>

            {/* Bottom Shadow for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end items-center text-center h-full">
                <div className="p-4 rounded-xl flex flex-col items-center w-full mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                        {facility.title}
                    </h3>
                    <div className="overflow-hidden">
                        <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed font-medium">
                            {facility.description}
                        </p>
                    </div>
                    
                    {/* Decorative bar */}
                    <div className="w-12 h-1 bg-green-500 mt-4 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                </div>
            </div>

            {/* Pagination dots for multi-image cards */}
            {hasMultipleImages && (
                <div className="absolute top-4 right-4 flex space-x-1.5 z-20 bg-black/20 backdrop-blur-md px-2 py-1.5 rounded-full">
                    {facility.images.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? 'bg-green-500 w-4' : 'bg-white/40 w-1.5'}`} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Facilities = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % workstationSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % workstationSlides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + workstationSlides.length) % workstationSlides.length);

    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h2 className="section-title">Core Facilities</h2>
                <div className="section-title-bar" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
                    {facilities.map((facility, index) => (
                        <FacilityCard key={index} facility={facility} />
                    ))}
                </div>

                {/* Work Station Slider Section */}
                <div className="mt-20">
                    <div className="section-heading-container">
                        <h2 className="section-title">Advanced Workstations</h2>
                        <div className="section-title-bar" />
                        <p className="section-subtitle">
                            Our specialized innovation labs provide the tools and environment for entrepreneurs to build, test, and refine their technological solutions.
                        </p>
                    </div>

                    <div className="relative h-[600px] w-full rounded-2xl shadow-2xl group image-container">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={workstationSlides[currentIndex].image}
                                    alt={workstationSlides[currentIndex].title}
                                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                                    <div className="p-8 md:p-12 text-white max-w-3xl">
                                        <motion.h3
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl md:text-4xl font-bold mb-4"
                                        >
                                            {workstationSlides[currentIndex].title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-lg text-gray-200"
                                        >
                                            {workstationSlides[currentIndex].description}
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                            {workstationSlides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-green-500 w-8' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Facilities;
