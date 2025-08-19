// src/components/About.jsx
import Link from 'next/link';
import React from 'react';
import { HiLightBulb, HiUserGroup, HiGlobeAlt } from 'react-icons/hi';
import ImageComponent from '../ui/ImageComponent';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-4 transform">
               <Link href={`#`} className="relative block w-full h-full rounded-xl overflow-hidden" aria-label={`Open banner`}>
                  <ImageComponent url={`/home/h2.jpg`} img_title={`Home Banner`} object_cover={true} />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              </Link>
            </div>
            
            {/*  */}
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Code Mantra Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2018, Code Mantra Technologies has been at the forefront of digital transformation for businesses of all sizes. We believe in the power of technology to solve complex problems and create opportunities.
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