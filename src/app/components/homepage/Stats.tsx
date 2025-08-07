// src/components/Stats.jsx
'use client'
import React from 'react';
import CountUp from 'react-countup';
import { HiLightningBolt, HiUserGroup, HiGlobe, HiEmojiHappy } from 'react-icons/hi';

const Stats = () => {
  const stats = [
    { icon: <HiLightningBolt className="w-8 h-8" />, value: 150, label: "Projects Completed", suffix: "+" },
    { icon: <HiUserGroup className="w-8 h-8" />, value: 50, label: "Happy Clients", suffix: "+" },
    { icon: <HiGlobe className="w-8 h-8" />, value: 12, label: "Team Members", suffix: "+" },
    { icon: <HiEmojiHappy className="w-8 h-8" />, value: 5, label: "Years Experience", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <CountUp end={stat.value} duration={3} />{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;