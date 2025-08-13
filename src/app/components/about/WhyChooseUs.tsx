// src/components/about/WhyChooseUs.jsx
import React from 'react';
import { HiLightningBolt, HiUserGroup, HiShieldCheck, HiGlobe } from 'react-icons/hi';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <HiLightningBolt className="w-10 h-10" />,
      title: "Innovative Solutions",
      description: "We stay ahead of the curve with cutting-edge technologies and creative approaches to solve complex problems."
    },
    {
      icon: <HiUserGroup className="w-10 h-10" />,
      title: "Expert Team",
      description: "Our diverse team of specialists brings years of experience and deep industry knowledge to every project."
    },
    {
      icon: <HiShieldCheck className="w-10 h-10" />,
      title: "Proven Results",
      description: "We measure our success by the tangible results we deliver to our clients, from increased revenue to improved efficiency."
    },
    {
      icon: <HiGlobe className="w-10 h-10" />,
      title: "Global Perspective",
      description: "With clients across multiple industries and countries, we bring a broad perspective to every challenge."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose YourIdea Solutions?</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              In a crowded marketplace, we stand out through our commitment to excellence, innovative approach, and client-centric philosophy.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {reason.icon}
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">95%</div>
                  <p className="text-xl font-medium text-gray-700">Client Retention Rate</p>
                  <p className="text-gray-600 mt-2">Our clients stay with us year after year</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                  <p className="text-gray-700">Team Members</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;