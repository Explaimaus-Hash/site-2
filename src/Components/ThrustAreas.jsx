import React from 'react';
import cse from '../assets/cse.jpg';
import aiml from '../assets/aiml.jpg';
import wear from '../assets/wear.jpg';

const ThrustAreas = () => {
    const thrustAreas = [
        { title: "CS & Software Engineering", description: "Exploring modern software development, system architecture, and best practices.", image: cse },
        { title: "AI/ML", description: "Advancing artificial intelligence and machine learning research and applications.", image: aiml },
        { title: "Wearable Devices", description: "Innovating in the field of smart wearables and health monitoring technologies.", image: wear }
    ];

    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4">
            <div className="max-w-7xl mx-auto">
            <div className="heading mb-10">
                <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
                Thrust Areas
                </h2>
                <div className="flex justify-center">
                <div className="bg-green-500 h-[5px] w-[140px]" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center overflow-x-auto md:overflow-visible gap-6 py-4 px-2">
            {thrustAreas.map((area, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={area.image} alt={area.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{area.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{area.description}</p>
                </div>
                </div>
            ))}
            </div>
            </div>
        </div>
    );
}

export default ThrustAreas;
