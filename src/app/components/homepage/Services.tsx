// src/components/Services.jsx
import React from "react";
import Link from "next/link";
import { HiCode, HiDeviceMobile, HiShoppingCart, HiSearch, HiChartBar, HiTemplate, HiArrowRight, HiPhotograph, HiVideoCamera } from "react-icons/hi";

const Services = () => {
  const services = [
    { icon: <HiCode className="w-8 h-8" />, title: "Web Design & Development", description: "Beautiful, responsive websites that convert visitors into customers.", link: "/services/web-development" },
    { icon: <HiDeviceMobile className="w-8 h-8" />, title: "Mobile App Development", description: "Native and cross-platform apps for iOS and Android.", link: "/services/mobile-app" },
    { icon: <HiShoppingCart className="w-8 h-8" />, title: "E-Commerce Development", description: "Robust online stores with seamless shopping experiences.", link: "/services/ecommerce" },
    { icon: <HiSearch className="w-8 h-8" />, title: "SEO Services", description: "Improve your visibility and rank higher in search results.", link: "/services/seo" },
    { icon: <HiTemplate className="w-8 h-8" />, title: "Logo & Branding", description: "Professional branding that makes your business stand out.", link: "/services/logo-design" },
    { icon: <HiPhotograph className="w-8 h-8" />, title: "Graphic Design", description: "Creative visuals, brochures, and graphics tailored to your brand.", link: "/services/graphic-design" },
    { icon: <HiVideoCamera className="w-8 h-8" />, title: "Video Editing", description: "Engaging video content for promotions, ads, and social media.", link: "/services/video-editing" },
    { icon: <HiChartBar className="w-8 h-8" />, title: "Digital Marketing", description: "Strategies to reach your audience and grow your brand.", link: "/services/digital-marketing" },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Services</h2>
          <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#d4111e] via-indigo-600 to-[#d4111e] mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We offer a wide range of digital services to help your business grow and succeed online.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article key={index} className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#d4111e] via-indigo-600 to-[#d4111e] overflow-hidden transition-transform hover:scale-[1.01]">
              <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-[#d4111e] inline-flex items-center justify-center text-white mb-5 shadow-md transform transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="relative inline-block">
                      {service.title}
                      <span className="absolute left-0 -bottom-1 block h-0.5 w-full bg-gradient-to-r from-[#d4111e] via-indigo-600 to-[#d4111e] scale-x-0 transform origin-left transition-transform group-hover:scale-x-100" />
                    </span>
                  </h3>

                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-[#d4111e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4111e]/40">
                    Learn more
                    <HiArrowRight className="transform transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700">Trusted</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
