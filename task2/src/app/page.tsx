"use client";
import { useState } from 'react';
import './globals.css';

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

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold py-8">ACCORDION</h1>
      <div className="flex items-center mb-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isMultiple} 
            onChange={handleModeToggle} 
          />
          <div className="toggle-bg w-14 h-8 bg-gray-200 rounded-full peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-300 ease-in-out"></div>
          <div className="toggle-circle absolute top-0.5 left-[4px] peer-checked:left-[calc(100%-1.5rem)] w-7 h-7 bg-white border rounded-full transition-all"></div>
        </label>
        <span className="ml-5 text-sm">{isMultiple ? 'Multiple' : 'Single'} Mode</span>
      </div>
      <Accordion
        title="REACT"
        content="A JavaScript library for building user interfaces, primarily for web applications, with a component-based architecture."
        isOpen={activeAccordions.includes(0)}
        onToggle={() => handleToggleAccordion(0)}
      />
      <Accordion
        title="NEXT"
        content="A React framework for building server-side rendered and statically generated web applications, providing optimized performance and features like API routes and routing."
        isOpen={activeAccordions.includes(1)}
        onToggle={() => handleToggleAccordion(1)}
      />
      <Accordion
        title="FLUTTER"
        content="A UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart programming language."
        isOpen={activeAccordions.includes(2)}
        onToggle={() => handleToggleAccordion(2)}
      />
    </div>
  );
}
