// src/components/about/AchievementTimeline.jsx
import React from 'react';
import { HiCalendar, HiLightBulb, HiUserGroup, HiGlobe } from 'react-icons/hi';

const AchievementTimeline = () => {
  const milestones = [
    {
      year: "2018",
      icon: <HiLightBulb className="w-6 h-6" />,
      title: "Company Founded",
      description: "Launched with a vision to transform digital experiences for businesses"
    },
    {
      year: "2019",
      icon: <HiUserGroup className="w-6 h-6" />,
      title: "Team Expansion",
      description: "Grew to 10 team members and served first enterprise client"
    },
    {
      year: "2020",
      icon: <HiGlobe className="w-6 h-6" />,
      title: "Global Expansion",
      description: "Started serving international clients across 5 countries"
    },
    {
      year: "2021",
      icon: <HiCalendar className="w-6 h-6" />,
      title: "Award Recognition",
      description: "Received 'Innovation Excellence Award' in digital solutions"
    },
    {
      year: "2023",
      icon: <HiUserGroup className="w-6 h-6" />,
      title: "Current Growth",
      description: "Team of 20+ specialists serving clients in 15+ countries"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milestones that mark our growth and achievements over the years.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="hidden md:block w-1/2"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                  {milestone.icon}
                </div>
                
                <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className={`bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`} style={{ maxWidth: '500px' }}>
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementTimeline;