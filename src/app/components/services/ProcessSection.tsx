// src/components/services/ProcessSection.jsx
import React from 'react';
import { HiLightBulb, HiOutlineDocumentSearch, HiOutlineCode, HiOutlineCog, HiOutlineCheckCircle } from 'react-icons/hi';

const ProcessSection = () => {
  const steps = [
    {
      icon: <HiLightBulb className="w-8 h-8" />,
      title: "Discovery & Planning",
      description: "We start by understanding your goals, audience, and requirements to create a strategic plan."
    },
    {
      icon: <HiOutlineDocumentSearch className="w-8 h-8" />,
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes to visualize the user experience."
    },
    {
      icon: <HiOutlineCode className="w-8 h-8" />,
      title: "Development",
      description: "Our developers build your solution using the latest technologies and best practices."
    },
    {
      icon: <HiOutlineCog className="w-8 h-8" />,
      title: "Testing & Refinement",
      description: "We rigorously test your solution to ensure quality, performance, and security."
    },
    {
      icon: <HiOutlineCheckCircle className="w-8 h-8" />,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure its success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure quality, efficiency, and successful project delivery.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-xl mb-4 flex items-center justify-center text-blue-600 mx-auto">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-lg mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;