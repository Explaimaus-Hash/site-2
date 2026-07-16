import React from 'react';
import img1 from "../assets/th.png";
import img2 from "../assets/msme.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/innohub.png";
import { FocusCards } from './ui/focus-cards';
import Companies from './ui/Companies';
import { Link } from 'react-router-dom';

const ProgramPartners = () => {
  const strategicPartners = [
    {
      image: img1,
      title: "NIDHI-DST ITBI",
      description: "Driving technological entrepreneurship nationwide",
      benefits: [
        "Innovative startup ecosystem",
        "Technology funding",
        "Entrepreneurial development"
      ]
    },
    {
      image: img2,
      title: "MSME",
      description: "Empowering small business growth",
      benefits: [
        "Economic acceleration",
        "Enterprise support",
        "National development"
      ]
    }
  ];

  const ecosystemCards = [
    {
      src: img1,
      title: "NIDHI-DST ITBI",
      description: "The National Initiative for Developing and Harnessing Innovations (NIDHI) is a flagship program under the Department of Science and Technology (DST), Government of India. It supports innovations addressing societal challenges and fostering entrepreneurship. A key component is the Innovation and Technology Business Incubator (ITBI).",
      number: "01"
    },
    {
      src: img2,
      title: "MSME",
      description: "The Ministry of Micro, Small, and Medium Enterprises (MSME) is a key government body in India responsible for the development and promotion of the Micro, Small, and Medium Enterprises (MSME) sector. This sector plays a vital role in India's economy by contributing significantly to employment generation, export promotion, and overall industrial development",
      number: "02"
    },
    {
      src: img4,
      title: "Stratup India",
      description: "Connecting startups with potential customers, partners, and investors. Helping ventures scale their operations and expand their market presence through our extensive network.",
      number: "03"
    },
    {
      src: img3,
      title: "StartinUp",
      description: "Fostering partnerships between academia and industry to drive innovation. Creating opportunities for collaborative research and development in priority sectors.",
      number: "04"
    },
     {
      src: img5,
      title: "InnovationHub",
      description: "Fostering partnerships between academia and industry to drive innovation. Creating opportunities for collaborative research and development in priority sectors.",
      number: "05"
    }
  ];

  return (
    <div>
      {/* Strategic Partners Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
        <div className="heading mb-10">
        <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
          Strategic Partners
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-500 h-[5px] w-[200px]" />
        </div>
      </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {strategicPartners.map((program, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="w-48 h-32 relative mb-6">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg">
                    {program.description}
                  </p>
                  
                  <ul className="flex flex-col items-center space-y-2 pt-4">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div >
      <div className="heading mb-10 mt-10">
        <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
        Our Ecosystem
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-500 h-[5px] w-[200px]" />
        </div>
      </div>
        
        {/* <div className="text-center space-y-5 pt-[70px] pb-[100px]">
          <p className="font-extralight tracking-wider text-3xl text-black">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis architecto eum quisquam delectus vel, nihil ipsam ut! Illum neque asperiores et minima, veniam pariatur fugiat alias, amet, provident cupiditate nesciunt!
          </p>
          <p className="font-extralight tracking-wider text-5xl text-black">
            entrepreneurial journeys
          </p>
        </div> */}

        <div className="pb-[100px] pt-5 ml-10 mr-10 ">
          <FocusCards cards={ecosystemCards} />
        </div>

        {/* Startups Section */}
        <div>
        <div className="heading ">
        <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
           Our Startups
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-500 h-[5px] w-[200px]" />
        </div>
      </div>
          
          <p className="flex justify-center font-extralight tracking-wider text-5xl text-black pt-[20px] pb-[50px]">
            {/* The Phenomenal Disruptors */}
          </p>
          
          <Companies />
          
          <div className="flex justify-center mt-10 pb-[50px]">
          <Link to="/startups">
             <button
              type="button"
              className="py-5 px-10 text-sm bg-green-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
             >
             View All
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPartners;
