// src/pages/services/logo-design.tsx
import Link from 'next/link';
import React from 'react';
import { HiOutlineLightBulb, HiOutlineColorSwatch, HiOutlineRefresh, HiOutlineEye, HiOutlineThumbUp, HiOutlinePencil, HiOutlineSparkles, HiOutlineChat, HiOutlineDocumentText, HiOutlineArrowRight } from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const LogoDesignPage = () => {
  const services = [
    {
      icon: <HiOutlineLightBulb className="w-10 h-10" />,
      title: "Brand Identity Design",
      description: "Logo concepts that communicate your brand essence"
    },
    {
      icon: <HiOutlineColorSwatch className="w-10 h-10" />,
      title: "Color Psychology",
      description: "Strategic color selection for emotional impact"
    },
    {
      icon: <HiOutlinePencil className="w-10 h-10" />,
      title: "Typography Pairing",
      description: "Font combinations that enhance brand personality"
    },
    {
      icon: <HiOutlineRefresh className="w-10 h-10" />,
      title: "Logo Variations",
      description: "Full set of horizontal, vertical, and icon versions"
    },
    {
      icon: <HiOutlineDocumentText className="w-10 h-10" />,
      title: "Brand Guidelines",
      description: "Rules for proper logo usage across all mediums"
    },
    {
      icon: <HiOutlineSparkles className="w-10 h-10" />,
      title: "Logo Animation",
      description: "Animated versions for digital platforms"
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Discovery Session",
      description: "Understand your brand, audience, and vision"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Concept Development",
      description: "Brainstorm ideas and create initial sketches"
    },
    {
      icon: <HiOutlinePencil className="w-8 h-8" />,
      title: "Design Creation",
      description: "Develop 3-5 unique logo concepts"
    },
    {
      icon: <HiOutlineEye className="w-8 h-8" />,
      title: "Review & Feedback",
      description: "Present concepts and refine based on input"
    },
    {
      icon: <HiOutlineRefresh className="w-8 h-8" />,
      title: "Refinement",
      description: "Polish the selected concept to perfection"
    },
    {
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
      title: "Delivery",
      description: "Provide final files in all required formats"
    }
  ];

  const benefits = [
    {
      title: "Brand Recognition",
      description: "Create a memorable visual identity that stands out"
    },
    {
      title: "Professional Image",
      description: "Establish credibility and trust with high-quality design"
    },
    {
      title: "Emotional Connection",
      description: "Communicate your brand values through visual elements"
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate from competitors with a unique identity"
    }
  ];

  const logoTypes = [
    { name: "Wordmark Logos", examples: "Coca-Cola, Google" },
    { name: "Letterform Logos", examples: "IBM, HBO" },
    { name: "Pictorial Marks", examples: "Apple, Twitter" },
    { name: "Abstract Symbols", examples: "Nike, Pepsi" },
    { name: "Mascot Logos", examples: "KFC, Pringles" },
    { name: "Combination Marks", examples: "Burger King, Lacoste" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Professional Logo Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Create a Memorable Brand Identity</h1>
              <p className="text-xl mb-10 max-w-2xl">
                We design distinctive logos that communicate your brand essence, build recognition, and make a lasting impression.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/porfolio" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                  View Our Portfolio
                </Link>
              <a
                href="https://wa.me/919654272754"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Get Free Consultation
              </a>

              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500">Logo Concepts</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 h-96">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-xl aspect-square flex items-center justify-center">
                        <div className="text-4xl font-bold text-blue-600">AB</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl aspect-square flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full"></div>
                      </div>
                      <div className="bg-white rounded-xl aspect-square flex items-center justify-center">
                        <div className="font-bold text-2xl text-gray-800">Brand</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl aspect-square flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded-lg transform rotate-45"></div>
                      </div>
                      <div className="bg-white rounded-xl aspect-square flex items-center justify-center">
                        <div className="text-4xl font-bold text-purple-600">Z</div>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl aspect-square flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Logo Design Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive solutions to create a distinctive brand identity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Types */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Logos We Design</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Different logo styles for different brand personalities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600">Examples: {type.examples}</p>
                <div className="mt-4">
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                    See examples <HiOutlineArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Logo Design Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A collaborative approach to creating your perfect logo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>
                <div className="font-bold text-lg text-blue-600 mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Logo Design</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in a Quality Logo?</h3>
                <p className="mb-6">
                  Your logo is often the first impression customers have of your brand. A professional logo builds 
                  credibility, communicates your brand values, and creates recognition that sets you apart from competitors.
                </p>
                <p>
                  Studies show that consistent brand presentation across all platforms can increase revenue by up to 23%. 
                  A well-designed logo is the foundation of your brand identity system.
                </p>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <HiOutlineThumbUp className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Logo Impact Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Color increases brand recognition by up to 80%</span>
                      <span className="text-sm font-medium text-gray-700">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Consistent branding increases revenue by up to 23%</span>
                      <span className="text-sm font-medium text-gray-700">23%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">First impressions are 94% design-related</span>
                      <span className="text-sm font-medium text-gray-700">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Perfect Logo?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s design a distinctive logo that captures your brand essence and makes a lasting impression.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              Start Your Logo Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesignPage;