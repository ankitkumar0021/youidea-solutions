// src/components/Hero.jsx
import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import ImageComponent from '../ui/ImageComponent';

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
            <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4 transform ">
              <Link href={`#`} className="relative block w-full h-full rounded-xl overflow-hidden" aria-label={`Open banner`}>
                  <ImageComponent url={`/home/h1.jpg`} img_title={`Home Banner`} object_cover={true} />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;