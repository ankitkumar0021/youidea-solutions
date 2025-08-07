// src/components/Services.jsx
import React from 'react';
import { HiCode, HiDeviceMobile, HiShoppingCart, HiDatabase, HiSearch, HiChartBar, HiTemplate, HiArrowRight, HiPhotograph, HiVideoCamera } from 'react-icons/hi';

const Services = () => {
  const services = [
  {
    icon: <HiCode className="w-10 h-10" />,
    title: "Web Design & Development",
    description: "Beautiful, responsive websites that convert visitors into customers."
  },
  {
    icon: <HiDeviceMobile className="w-10 h-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android."
  },
  {
    icon: <HiShoppingCart className="w-10 h-10" />,
    title: "E-Commerce Development",
    description: "Robust online stores with seamless shopping experiences."
  },
  {
    icon: <HiSearch className="w-10 h-10" />,
    title: "SEO Services",
    description: "Improve your visibility and rank higher in search results."
  },
  {
    icon: <HiChartBar className="w-10 h-10" />,
    title: "Digital Marketing",
    description: "Strategies to grow your audience and increase conversions."
  },
  {
    icon: <HiTemplate className="w-10 h-10" />,
    title: "Logo Design",
    description: "Professional branding that makes your business stand out."
  },
  {
    icon: <HiPhotograph className="w-10 h-10" />,
    title: "Graphic Design",
    description: "Creative visuals, brochures, and graphics tailored to your brand."
  },
  {
    icon: <HiVideoCamera className="w-10 h-10" />,
    title: "Video Editing",
    description: "Engaging video content for promotions, ads, and social media."
  }
];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of digital services to help your business grow and succeed online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all group hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 text-blue-600 font-medium flex items-center group-hover:text-blue-800">
                Learn more
                <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;