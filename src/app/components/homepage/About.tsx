// src/components/About.jsx
import React from 'react';
import { HiLightBulb, HiUserGroup, HiGlobeAlt } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 transform -rotate-1">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-2 rounded-lg inline-block mb-4">
                      <span className="bg-white text-blue-700 rounded px-1 mr-1">YI</span>
                      YourIdea
                    </div>
                    <p className="text-gray-600">Innovative digital solutions since 2018</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div> */}
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About YourIdea Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2018, YourIdea Solutions has been at the forefront of digital transformation for businesses of all sizes. We believe in the power of technology to solve complex problems and create opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Our mission is to deliver exceptional digital experiences that drive growth and innovation. We combine technical expertise with creative thinking to help our clients achieve their business goals.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <HiLightBulb className="w-10 h-10" />,
                  title: "Innovative Solutions",
                  description: "We stay ahead of the curve with cutting-edge technologies and creative approaches."
                },
                {
                  icon: <HiUserGroup className="w-10 h-10" />,
                  title: "Expert Team",
                  description: "Our team of specialists brings years of experience in their respective fields."
                },
                {
                  icon: <HiGlobeAlt className="w-10 h-10" />,
                  title: "Global Reach",
                  description: "We serve clients worldwide with the same level of dedication and quality."
                }
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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

export default About;