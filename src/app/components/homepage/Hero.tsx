// src/components/Hero.jsx
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your <span className="text-blue-600">Business</span> with Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              We create innovative digital experiences that drive growth and transform businesses. From web development to digital marketing, we&apos;ve got you covered.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all flex items-center group">
                Get Started 
                <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Our Work
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8">
              {[
                { value: '150+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '12+', label: 'Team Members' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{item.value}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 transform rotate-1">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-2 rounded-lg inline-block mb-4">
                      <span className="bg-white text-blue-700 rounded px-1 mr-1">YI</span>
                      YourIdea
                    </div>
                    <p className="text-gray-600">Digital Solutions for Modern Businesses</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div> */}
            {/* <div className="absolute top-20 left-20 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;