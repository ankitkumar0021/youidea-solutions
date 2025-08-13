// src/components/about/AboutHero.jsx
import Link from 'next/link';
import React from 'react';
import { HiArrowDown } from 'react-icons/hi';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Digital <span className="text-blue-600">Excellence</span> Since 2018
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0">
              At YourIdea Solutions, we transform innovative ideas into powerful digital solutions. 
              Discover our journey, values, and the passionate team behind our success.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href={`/portfolio`} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all">
                View Our Work
              </Link>
              {/* <button className="px-8 py-4 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Our Work
              </button> */}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4]?.map((item) => (
                  <div key={item} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 flex flex-col items-center justify-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {item}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {['Years', 'Team Members', 'Happy Clients', 'Projects'][item-1]}
                    </h3>
                    <p className="text-blue-600 font-bold">
                      {['5+', '12+', '50+', '150+'][item-1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-4">Learn more about our journey</p>
          <HiArrowDown className="w-8 h-8 text-blue-600 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;