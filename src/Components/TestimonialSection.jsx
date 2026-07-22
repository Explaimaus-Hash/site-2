import React from 'react';
import img1 from "../assets/team/dowload_1.jpeg"
import img2 from "../assets/team/download_2.jpeg"
import img3 from "../assets/raghvendra_sir_cropped.jpg"
import img4 from "../assets/raguraj.jpg"
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mr. Pranveer Singh",
      role: "Chairman",
      comment: "Welcome to PSIT, where we strive to nurture talent, inspire innovation, and empower students to achieve excellence.",
      imageSrc: `${img1}`
    },
    {
      name: "Prof. Man Mohan Shukla",
      role: "Group Director",
      comment: "At PSIT, we are committed to providing quality education and shaping future leaders for a better tomorrow.",
      imageSrc: `${img2}`
    },
    {
      name: "Prof. Raghvendra Singh",
      role: "Director",
      comment: "Great balance of academics and extracurricular activities.",
      imageSrc: `${img3}`
    },
    {
      name: "Prof. Raghuraj Singh Suryavanshi",
      role: "Additional Director",
      comment: "Fostering innovation through excellence in teaching and research.",
      imageSrc: `${img4}`
    }
  ];

  return (
    <div className="section-container">
      <div className="section-heading-container">
        <h1 className="section-title">Our <span className="text-green-600">Dignitaries</span></h1>
        <div className="section-title-bar" />
        <p className="section-subtitle">
          Guided by the vision and leadership of our esteemed mentors who pave the way for academic and entrepreneurial excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="standard-card flex flex-col md:flex-row items-center md:items-stretch p-8 gap-8 group"
          >
            <div className="w-48 h-56 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-green-100 group-hover:border-green-500 transition-colors duration-500 md:self-center">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between text-center md:text-left">
              <div className="mb-6">
                <div className="relative pl-6 text-left">
                  <span className="text-3xl text-green-300 font-serif absolute left-0 top-0 select-none leading-none">“</span>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    {testimonial.comment}
                    <span className="text-3xl text-green-300 font-serif ml-1 select-none leading-none">”</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-gray-900 mb-1 font-outfit">{testimonial.name}</h3>
                <p className="text-green-600 font-bold uppercase tracking-widest text-xs font-inter">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;