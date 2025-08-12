// src/components/about/CompanyStory.jsx
import React from 'react';
import { HiLightBulb, HiChartBar, HiGlobe } from 'react-icons/hi';

const CompanyStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a leading digital solutions provider - our journey of innovation and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 transform">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-2 rounded-lg inline-block mb-4">
                      <span className="bg-white text-blue-700 rounded px-1 mr-1">YI</span>
                      YourIdea
                    </div>
                    <p className="text-gray-600">Founded in 2018 with a vision for digital transformation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-8">
              YourIdea Solutions was founded in 2018 by a team of passionate tech enthusiasts who believed that every business deserves access to cutting-edge digital solutions. What started as a small garage operation has grown into a full-service digital agency serving clients worldwide.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Our journey began with a simple mission: to transform innovative ideas into powerful digital experiences. Over the years, we&aps;ve helped startups, SMEs, and enterprises navigate the digital landscape and achieve remarkable growth through our bespoke solutions.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <HiLightBulb className="w-10 h-10" />,
                  title: "The Beginning",
                  description: "Started with just 3 team members working from a small office space"
                },
                {
                  icon: <HiChartBar className="w-10 h-10" />,
                  title: "Growth Phase",
                  description: "Expanded to 20+ specialists serving 100+ clients by 2020"
                },
                {
                  icon: <HiGlobe className="w-10 h-10" />,
                  title: "Global Reach",
                  description: "Now serving clients across 15 countries with innovative solutions"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;