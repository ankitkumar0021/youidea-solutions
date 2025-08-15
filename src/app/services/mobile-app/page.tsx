// src/pages/services/mobile-app-development.tsx
import React from 'react';
import { HiOutlineDeviceMobile, HiOutlineDeviceTablet, HiOutlineCog, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineRefresh, HiOutlineChat, HiOutlineDocumentText, HiOutlineTemplate, HiOutlineCode, HiOutlineCloudUpload, HiOutlineBeaker, HiOutlineArrowRight } from 'react-icons/hi';
import { FaApple, FaAndroid, FaReact } from 'react-icons/fa';
import { SiIonic, SiSwift, SiKotlin } from 'react-icons/si';
import { FaFlutter } from 'react-icons/fa6';
import Link from 'next/link';

const MobileAppDevelopmentPage = () => {
  const services = [
    {
      icon: <FaApple className="w-10 h-10" />,
      title: "iOS App Development",
      description: "Native iOS apps built with Swift for optimal performance on Apple devices."
    },
    {
      icon: <FaAndroid className="w-10 h-10" />,
      title: "Android App Development",
      description: "Native Android apps using Kotlin for seamless performance on all Android devices."
    },
    {
      icon: <FaReact className="w-10 h-10" />,
      title: "React Native Apps",
      description: "Cross-platform apps with native-like performance using React Native."
    },
    {
      icon: <FaFlutter className="w-10 h-10" />,
      title: "Flutter Apps",
      description: "Beautiful, natively compiled apps for mobile, web, and desktop from a single codebase."
    },
    {
      icon: <HiOutlineCog className="w-10 h-10" />,
      title: "App Maintenance",
      description: "Ongoing support, updates, and feature additions to keep your app current."
    },
    {
      icon: <HiOutlineShieldCheck className="w-10 h-10" />,
      title: "App Security",
      description: "Robust security measures to protect user data and prevent vulnerabilities."
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Free Consultation",
      description: "Discuss your app idea, target audience, and business objectives"
    },
    {
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      title: "Requirement Analysis",
      description: "Detailed planning of features, user flows, and technical specifications"
    },
    {
      icon: <HiOutlineTemplate className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Wireframing and prototyping to create intuitive user experiences"
    },
    {
      icon: <HiOutlineCode className="w-8 h-8" />,
      title: "Development",
      description: "Agile development sprints with regular progress updates"
    },
    {
      icon: <HiOutlineBeaker className="w-8 h-8" />,
      title: "Testing & QA",
      description: "Comprehensive testing across devices and operating systems"
    },
    {
      icon: <HiOutlineCloudUpload className="w-8 h-8" />,
      title: "Deployment",
      description: "App store submission and launch strategy implementation"
    },
    {
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      title: "Analytics Integration",
      description: "Implementation of tracking to measure user engagement"
    },
    {
      icon: <HiOutlineRefresh className="w-8 h-8" />,
      title: "Maintenance",
      description: "Ongoing updates, bug fixes, and feature enhancements"
    }
  ];

  const technologies = [
    { name: "React Native", category: "Cross-Platform", icon: <FaReact className="w-6 h-6" /> },
    { name: "Flutter", category: "Cross-Platform", icon: <FaFlutter className="w-6 h-6" /> },
    { name: "Swift", category: "iOS", icon: <SiSwift className="w-6 h-6" /> },
    { name: "Kotlin", category: "Android", icon: <SiKotlin className="w-6 h-6" /> },
    { name: "Ionic", category: "Hybrid", icon: <SiIonic className="w-6 h-6" /> },
    { name: "Firebase", category: "Backend", icon: <HiOutlineCog className="w-6 h-6" /> },
    { name: "GraphQL", category: "API", icon: <HiOutlineCog className="w-6 h-6" /> },
    { name: "Redux", category: "State Management", icon: <HiOutlineCog className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Increased Engagement",
      description: "Mobile apps keep your brand at users' fingertips with push notifications"
    },
    {
      title: "Enhanced UX",
      description: "Native performance and intuitive interfaces tailored to mobile devices"
    },
    {
      title: "Offline Capabilities",
      description: "Functionality that works even without internet connectivity"
    },
    {
      title: "Higher Conversions",
      description: "Streamlined purchasing processes increase sales and conversions"
    }
  ];

  const appTypes = [
    {
      name: "E-Commerce Apps",
      description: "Mobile shopping experiences with secure payments and inventory management"
    },
    {
      name: "Social Networking",
      description: "Connect users with engaging social features and real-time updates"
    },
    {
      name: "Productivity Tools",
      description: "Help users accomplish tasks more efficiently with intuitive interfaces"
    },
    {
      name: "Health & Fitness",
      description: "Track progress, provide guidance, and motivate users toward their goals"
    },
    {
      name: "On-Demand Services",
      description: "Connect service providers with customers in real-time"
    },
    {
      name: "Gaming Apps",
      description: "Immersive mobile gaming experiences with engaging mechanics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Mobile App Development
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Powerful Mobile Experiences</h1>
              <p className="text-xl mb-10 max-w-2xl">
                We create custom mobile applications that engage users, solve problems, and drive business growth across iOS and Android platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
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
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-400 rounded-3xl opacity-20"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-400 rounded-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500">Mobile App Mockup</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 h-96 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xl font-bold text-gray-800">Code Mantra App</div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                          <HiOutlineDeviceMobile className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                          <HiOutlineDeviceTablet className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {[1, 2, 3, 4]?.map((item) => (
                        <div key={item} className="bg-white rounded-xl p-3 aspect-square flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl p-4 flex-1 flex flex-col">
                      <div className="flex-1 bg-blue-50 rounded-lg mb-3"></div>
                      <div className="flex justify-between">
                        <div className="w-1/4 h-2 bg-blue-200 rounded-full"></div>
                        <div className="w-1/4 h-2 bg-blue-200 rounded-full"></div>
                        <div className="w-1/4 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-1/4 h-2 bg-blue-200 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mobile App Development Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive solutions for all platforms and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.length >= 0 && services.map((service, index) => (
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

      {/* App Types */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Apps We Develop</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Custom solutions tailored to your industry and business model
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
                <div className="mt-4">
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                    Learn more <HiOutlineArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mobile App Development Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A structured approach to ensure quality, performance, and user satisfaction
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:mt-40'}`}
                >
                  {/* Circle connector */}
                  <div className="absolute top-0 left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white -translate-x-1/2 z-10">
                    {step.icon}
                  </div>
                  
                  <div className={`bg-white rounded-2xl p-6 shadow-md ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <div className={`font-bold text-lg text-blue-600 mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      Phase {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mobile Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Modern technologies for building high-performance mobile applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
                  {tech.icon}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{tech.name}</div>
                <div className="text-sm text-blue-600 bg-blue-100 rounded-full px-3 py-1 inline-block">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Mobile App Development</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in Mobile Apps?</h3>
                <p className="mb-6">
                  Mobile apps provide direct access to your customers, with 90% of mobile time spent in apps versus mobile web. 
                  They enable personalized experiences, push notifications, and offline functionality that websites can&apos;t match.
                </p>
                <p>
                  With over 3.5 billion smartphone users worldwide, a mobile app can significantly increase customer engagement, 
                  brand loyalty, and revenue for your business.
                </p>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <HiOutlineDeviceMobile className="w-6 h-6" />
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">Mobile App Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">85% of users prefer mobile apps over mobile websites</span>
                      <span className="text-sm font-medium text-gray-700">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Average user spends 4.2 hours daily on mobile apps</span>
                      <span className="text-sm font-medium text-gray-700">4.2h/day</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Mobile apps drive 3x more conversions than mobile web</span>
                      <span className="text-sm font-medium text-gray-700">3x</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s turn your app idea into reality with our expert mobile development services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;