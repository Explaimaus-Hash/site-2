import React from "react";
import MiddleSection from "../Components/MiddleSection";
import ProgramPartners from "../Components/ProgramPartners";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MissionSection from "../Components/MissionSection";
import TestimonialSection from "../Components/TestimonialSection";
import Team from "../Components/ui/Team";
import Event from "../Components/Events";
import ThrustAreas from "../Components/ThrustAreas";
import Facilities from "../Components/Facilities";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] overflow-hidden transition-colors duration-300">
      <Navbar />
      <MissionSection />
      <TestimonialSection />
      <MiddleSection />
      <Facilities />
      <Event/>
      <ThrustAreas/>
      <ProgramPartners />
      <Team/>
      <Footer />
    </div>
  );
};

export default HomePage;
