"use client";
import { useState } from 'react';
import './globals.css';
import Head from 'next/head';

// Accordion Component
const Accordion = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 w-[400px] mx-auto border border-gray-300 rounded-lg shadow-none hover:shadow-[0px_4px_20px_rgba(255,255,255,0.7)]">
      <div 
        className="bg-white p-4 cursor-pointer flex justify-between items-center" 
        onClick={onToggle}
      >
        <h3 className="font-semibold text-black">{title}</h3>
        <span className="text-black">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="bg-gray-200 p-4 text-black">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Main Component
export default function Home() {
  const [isMultiple, setIsMultiple] = useState(true); 
  const [activeAccordions, setActiveAccordions] = useState([]);

  const handleToggleAccordion = (index) => {
    if (isMultiple) {
      setActiveAccordions((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setActiveAccordions((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  const handleModeToggle = () => {
    setIsMultiple((prev) => !prev);
    setActiveAccordions([]); 
  };

  const NormalProfileCard = ({ name, position, experience }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative p-6 rounded-lg shadow-md w-80 transition-all duration-300 overflow-hidden 
                ${isHovered ? 'hover:shadow-[10px_10px_30px_rgba(0,128,0,0.8)] h-48' : 'h-20'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 rounded-lg border-4 border-transparent 
                ${isHovered ? 'animated-border-green' : 'border-gray-300'} backdrop-blur-sm bg-white/45`}>
                
                {/* Profile Header */}
                <div className="flex items-center mb-1 relative z-10 p-4">
                    <div className="w-12 h-12 text-gray-600 flex-shrink-0">
                        <span className="material-symbols-outlined text-5xl">
                            account_circle
                        </span>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-bold text-xl">{name}</h2>
                        <p className="text-gray-600">{position}</p>
                    </div>
                </div>

                {/* Content that appears when hovered */}
                <div className={`transition-opacity duration-300 p-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-gray-800 mb-2">Experience: {experience} years</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-red-600">
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
};

  const PremiumProfileCard = ({ name, position, experience, location, skills }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative bg-yellow-100 p-6 rounded-lg shadow-lg w-80 transition-all duration-300 overflow-hidden 
                ${isHovered ? 'animated-border-red h-auto' : 'h-20'} 
                ${isHovered ? 'hover:shadow-[10px_10px_30px_rgba(255,0,0,0.8)]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background with Premium label */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-6xl font-bold text-gray-400 pointer-events-none">
                Premium
            </div>

            {/* Main card content */}
            <div className="relative z-10 transition-opacity duration-300">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 text-gray-600 flex-shrink-0">
                        <span className="material-symbols-outlined text-5xl">
                            account_circle
                        </span>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-bold text-xl">{name}</h2>
                        <p className="text-gray-600">{position}</p>
                    </div>
                </div>

                {/* Details and Buttons */}
                <div
                    className={`transition-all duration-600 ${
                        isHovered ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
                    }`}
                >
                    <p className="text-gray-800">Experience: {experience} years</p>
                    <p className="text-gray-800">Location: {location}</p>
                    <div className="mt-2">
                        <h3 className="font-semibold">Skills:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 mt-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600">
                            Message 📩
                        </button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600">
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
  return (
    // <div className="bg-black min-h-screen text-white flex flex-col items-center">
    //   <h1 className="text-center text-3xl font-bold py-8">ACCORDION</h1>
    //   <div className="flex items-center mb-6">
    //     <label className="relative inline-flex items-center cursor-pointer">
    //       <input 
    //         type="checkbox" 
    //         className="sr-only peer" 
    //         checked={isMultiple} 
    //         onChange={handleModeToggle} 
    //       />
    //       <div className="toggle-bg w-14 h-8 bg-gray-200 rounded-full peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-300 ease-in-out"></div>
    //       <div className="toggle-circle absolute top-0.5 left-[4px] peer-checked:left-[calc(100%-1.5rem)] w-7 h-7 bg-white border rounded-full transition-all"></div>
    //     </label>
    //     <span className="ml-5 text-sm">{isMultiple ? 'Multiple' : 'Single'} Mode</span>
    //   </div>
    //   <Accordion
    //     title="REACT"
    //     content="A JavaScript library for building user interfaces, primarily for web applications, with a component-based architecture."
    //     isOpen={activeAccordions.includes(0)}
    //     onToggle={() => handleToggleAccordion(0)}
    //   />
    //   <Accordion
    //     title="NEXT"
    //     content="A React framework for building server-side rendered and statically generated web applications, providing optimized performance and features like API routes and routing."
    //     isOpen={activeAccordions.includes(1)}
    //     onToggle={() => handleToggleAccordion(1)}
    //   />
    //   <Accordion
    //     title="FLUTTER"
    //     content="A UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart programming language."
    //     isOpen={activeAccordions.includes(2)}
    //     onToggle={() => handleToggleAccordion(2)}
    //   />
    // </div>
    <div className="min-h-screen flex flex-col items-center py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>

      <Head>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
      </Head>

      <h1 className="text-3xl font-bold mb-10 relative z-10 animate-fade-in-up">
    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-text">
        User Profiles
    </span>
</h1>
      {/* Profile Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative z-10">
          <NormalProfileCard name="AKASH" position="Software Engineer" experience={5} />
          <NormalProfileCard name="ARAVIND" position="Project Manager" experience={7} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <PremiumProfileCard
              name="AJITH"
              position="Senior Developer"
              experience={10}
              location="Chennai"
              skills={['React', 'Node.js', 'SQL']}
          />
          <PremiumProfileCard
              name="VIJAY"
              position="UX Designer"
              experience={8}
              location="Andhra"
              skills={['Figma', 'Adobe XD', 'Testing']}
          />
      </div>
  </div>

  );
}
