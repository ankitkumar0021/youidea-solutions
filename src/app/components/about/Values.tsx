import React from 'react';
import { HiLightBulb, HiUserGroup, HiGlobeAlt, HiHeart } from 'react-icons/hi';

const Values = () => {
  const values = [
    {
      icon: <HiLightBulb className="w-10 h-10" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver creative solutions."
    },
    {
      icon: <HiUserGroup className="w-10 h-10" />,
      title: "Collaboration",
      description: "We work closely with our clients to achieve shared goals."
    },
    {
      icon: <HiGlobeAlt className="w-10 h-10" />,
      title: "Global Impact",
      description: "Our solutions empower businesses worldwide."
    },
    {
      icon: <HiHeart className="w-10 h-10" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our values guide everything we do, ensuring we deliver exceptional results with integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;