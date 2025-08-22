// src/components/Stats.jsx
'use client'
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    {
      image: "/home/card1.jpg",
      value: 150,
      label: "Projects Completed",
      description: "Successfully delivered across industries worldwide.",
      suffix: "+"
    },
    {
      image: "/home/card2.jpg",
      value: 50,
      label: "Happy Clients",
      description: "Trusted by startups and enterprises alike.",
      suffix: "+"
    },
    {
      image: "/home/card3.jpg",
      value: 12,
      label: "Team Members",
      description: "A passionate crew of developers & designers.",
      suffix: "+"
    },
    {
      image: "/home/card4.jpg",
      value: 5,
      label: "Years Experience",
      description: "Proven expertise in building scalable solutions.",
      suffix: "+"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all  border-b-2 border-[#d4111e]"
            >
              {/* Top Image */}
              <div className="w-full h-40 overflow-hidden">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                  height={1000}
                  width={1000}
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <CountUp end={stat.value} duration={3} />{stat.suffix}
                </div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
