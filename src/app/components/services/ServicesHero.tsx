// src/components/services/ServicesHero.jsx
import React from 'react';
import { HiArrowDown } from 'react-icons/hi';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Solutions <span className="text-blue-600">That Drive Growth</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0">
              We combine technical expertise with creative thinking to deliver innovative solutions that transform businesses and create exceptional digital experiences.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all">
                Get a Free Consultation
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Projects", value: "150+" },
                  { title: "Happy Clients", value: "100+" },
                  { title: "Team Experts", value: "20+" },
                  { title: "Years Experience", value: "5+" }
                ].map((item, index) => (
                  <div key={index} className="bg-blue-800 bg-opacity-50 rounded-xl p-6 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold mb-2">{item.value}</div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            
          </div>
        </div>
        
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-4">Explore our services</p>
          <HiArrowDown className="w-8 h-8 text-blue-600 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;