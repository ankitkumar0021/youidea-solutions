// src/components/portfolio/PortfolioHero.jsx
import React from 'react';
import { HiArrowDown } from 'react-icons/hi';

const PortfolioHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-200">Creative Work</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0">
              Discover our portfolio of innovative digital solutions that have helped businesses transform and grow.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white/20 rounded-xl aspect-square flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className=""></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-24 animate-bounce">
        <HiArrowDown className="mx-auto h-8 w-8 text-blue-200" />
      </div>
    </section>
  );
};

export default PortfolioHero;