// src/pages/services/web-design-development.tsx
'use client'
import Link from 'next/link';
import React from 'react';
import { FaCloud, FaCode, FaDatabase, FaReact, FaServer } from 'react-icons/fa';
import { HiLightBulb, HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineGlobe, HiOutlineSearch, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineChat, HiOutlineDocumentText, HiOutlineTemplate, HiOutlinePencil, HiOutlineDocumentSearch } from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const WebDesignDevelopmentPage = () => {
  const services = [
    {
      icon: <HiOutlineDesktopComputer className="w-10 h-10" />,
      title: "Responsive Website Design",
      description: "Beautiful designs that work flawlessly on all devices from desktops to smartphones."
    },
    {
      icon: <HiOutlineDeviceMobile className="w-10 h-10" />,
      title: "Mobile-First Development",
      description: "Prioritizing mobile experience with progressive enhancement for larger screens."
    },
    {
      icon: <HiOutlineGlobe className="w-10 h-10" />,
      title: "E-Commerce Solutions",
      description: "Online stores with secure payment gateways and intuitive shopping experiences."
    },
    {
      icon: <HiOutlineSearch className="w-10 h-10" />,
      title: "SEO-Optimized Development",
      description: "Websites built with search engine visibility as a core principle."
    },
    {
      icon: <HiOutlineChartBar className="w-10 h-10" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized assets and efficient code."
    },
    {
      icon: <HiOutlineShieldCheck className="w-10 h-10" />,
      title: "Security Implementation",
      description: "Protection against vulnerabilities with SSL, firewalls, and secure coding practices."
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Free Consultation",
      description: "We discuss your goals, target audience, and project requirements"
    },
    {
      icon: <HiOutlineDocumentSearch className="w-8 h-8" />,
      title: "Analysis & Planning",
      description: "Research, competitive analysis, and project roadmap creation"
    },
    {
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      title: "Service Registration",
      description: "Formal agreement on scope, timeline, and deliverables"
    },
    {
      icon: <HiOutlineTemplate className="w-8 h-8" />,
      title: "Sitemap & Wireframes",
      description: "Structural planning and layout visualization"
    },
    {
      icon: <HiOutlinePencil className="w-8 h-8" />,
      title: "Design & Development",
      description: "Visual design creation and technical implementation"
    },
    {
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      title: "Content Creation",
      description: "Crafting compelling copy and media assets"
    },
    {
      icon: <HiOutlineSearch className="w-8 h-8" />,
      title: "Testing & QA",
      description: "Comprehensive quality assurance across all devices"
    },
    {
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
      title: "Launch & Maintenance",
      description: "Deployment and ongoing support services"
    }
  ];

const technologies = [
  { name: 'React', category: 'Frontend', icon: <FaReact /> },
  { name: 'Next.js', category: 'Frontend', icon: <FaReact /> },
  { name: 'Wordpress', category: 'Frontend', icon: <FaCode /> },
  { name: 'TypeScript', category: 'Frontend', icon: <FaCode /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <FaCode /> },
  { name: 'Node.js', category: 'Backend', icon: <FaServer /> },
  { name: 'Express', category: 'Backend', icon: <FaServer /> },
  { name: 'MongoDB', category: 'Database', icon: <FaDatabase /> },
  { name: 'PostgreSQL', category: 'Database', icon: <FaDatabase /> },
  { name: 'GraphQL', category: 'API', icon: <FaCode /> },
  { name: 'REST API', category: 'API', icon: <FaCode /> },
  { name: 'AWS', category: 'Hosting', icon: <FaCloud /> },
  { name: 'Vercel', category: 'Hosting', icon: <FaCloud /> },
  { name: 'Hostinger', category: 'Hosting', icon: <FaCloud /> }
];

  const benefits = [
    {
      title: "Increased Conversions",
      description: "Optimized user journeys that turn visitors into customers"
    },
    {
      title: "Enhanced Credibility",
      description: "Professional design that builds trust with your audience"
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors with superior digital experiences"
    },
    {
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Web Design & Development
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Digital Presence</h1>
              <p className="text-xl mb-10 max-w-2xl">
                We create stunning, high-performance websites that engage your audience and drive business growth. From concept to launch, we handle every detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/portfolio" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
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
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 transform rotate-3">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 transform -rotate-3">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <div className="flex justify-between mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/20 h-4 rounded-full w-3/4"></div>
                      <div className="bg-white/20 h-4 rounded-full"></div>
                      <div className="bg-white/20 h-4 rounded-full w-5/6"></div>
                      <div className="bg-white/20 h-4 rounded-full w-2/3"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 aspect-square"></div>
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 aspect-square"></div>
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 aspect-square"></div>
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 aspect-square"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Design & Development Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive solutions tailored to your business needs and objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services?.length >= 0 && services?.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service?.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service?.title}</h3>
                <p className="text-gray-600">{service?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A structured approach to ensure quality, efficiency, and client satisfaction
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              {processSteps && processSteps?.length >= 0 && processSteps?.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:mt-40'}`}
                >
                  <div className="absolute top-0 left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white -translate-x-1/2 z-10">
                    {step?.icon}
                  </div>
                  
                  <div className={`bg-white rounded-2xl p-6 shadow-md ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <div className={`font-bold text-lg text-blue-600 mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step?.title}</h3>
                    <p className="text-gray-600">{step?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Technologies */}
     <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">
            Our Technology Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Cutting-edge technologies powering our high-performance, scalable web solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies?.map((tech, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 text-center 
                         transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
                         group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative text-3xl text-blue-600 mb-4 flex justify-center">
                {tech.icon}
              </div>
              <div className="relative text-xl font-semibold text-gray-900 mb-2">
                {tech.name}
              </div>
              <div className="relative text-sm text-blue-600 bg-blue-100 rounded-full px-3 py-1 
                            inline-block font-medium">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Web Development</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in Quality Web Development?</h3>
                <p className="mb-6">
                  In today&apos;s digital-first world, your website is often the first impression customers have of your business. 
                  A professionally designed and developed website is crucial for establishing credibility, engaging visitors, 
                  and converting them into customers.
                </p>
                <p>
                  Unlike template-based solutions, custom web development provides a tailored experience that aligns perfectly 
                  with your brand identity and business objectives, while offering superior performance, security, and scalability.
                </p>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <HiLightBulb className="w-6 h-6" />
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">Industry Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">75% of users judge credibility based on website design</span>
                      <span className="text-sm font-medium text-gray-700">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Website load time impacts conversion rates</span>
                      <span className="text-sm font-medium text-gray-700">53% abandon if more than 5s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '53%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Mobile accounts for 54% of web traffic</span>
                      <span className="text-sm font-medium text-gray-700">54%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '54%' }}></div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s collaborate to create a website that not only looks stunning but also delivers measurable business results.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WebDesignDevelopmentPage;