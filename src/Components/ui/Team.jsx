import React, { useState } from "react";
import img from "../../assets/laww.jpg";
import sandeep from "../../assets/team/sandeep.jpeg";
import anurag from "../../assets/team/anurag.jpeg";
import vijay from "../../assets/team/vijay.jpeg";
import rajat from '../../assets/team/rajat_verma.jpg';

function Team() {
  const teamMembers = [
    { name: "Anurag Dhawan", image: anurag },
    { name: "Dr. Rajat Verma", image: rajat },
    { name: "Sandeep Kumar Khare ", image: sandeep },
    { name: "Vijay Kumar Yadav", image: vijay },
  ];

 /*  // State to manage the current carousel index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of 5 members
  const goToNext = () => {
    if (currentIndex + 5 < teamMembers.length) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  // Function to go to the previous set of 5 members
  const goToPrev = () => {
    if (currentIndex - 5 >= 0) {
      setCurrentIndex(currentIndex - 5);
    }
  }; */

  return (
    <div className="team">
      <div className="heading m-[70px]">
        <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
          Our Team
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-500 h-[5px] w-[140px]" />
        </div>
      </div>

      <div className="members bg-white pb-5 mt-2">
        <div className="flex flex-col md:flex-row font-medium justify-center gap-8 md:gap-x-24 mt-6 py-6 px-4 mb-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="card text-center">
              <img className="p-1 w-48 h-48 rounded-full mx-auto" src={member.image} alt={member.name} />
              <p className="text-slate-700 dark:text-slate-500 text-lg mt-2">{member.name}</p>
            </div>
          ))}
        </div>



        {/* Second Row - Carousel for Other Members
        <div className="carousel-container mt-6">
          <div className="flex justify-around items-center mb-4">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-lg ml-6 text-lg text-white bg-green-500 disabled:bg-gray-400"
            >
               Prev
            </button>
            <div className="carousel-items flex overflow-x-auto space-x-10">
            {teamMembers.slice(currentIndex, currentIndex + 6).map((member, index) => (
              <div key={index} className="card text-center">
                <img className="w-24 h-24 rounded-full" src={member.image} alt={member.name} />
                <p className="text-slate-700 dark:text-slate-500 text-lg">{member.role}</p>
                <p className="text-slate-700 dark:text-slate-500 text-sm">{member.name}</p>
              </div>
            ))}
          </div>
            <button 
              onClick={goToNext}
              disabled={currentIndex + 5 >= teamMembers.length}
              className="p-2 mr-6 rounded-lg text-lg text-white bg-green-500 disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Team;