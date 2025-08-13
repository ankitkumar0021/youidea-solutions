// src/pages/services/video-editing.tsx
import Link from 'next/link';
import React from 'react';
import { 
  HiOutlineFilm, 
  HiOutlineColorSwatch, 
  HiOutlineMusicNote, 
  HiOutlineLightBulb, 
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineChat,
  HiOutlineEye,
  HiOutlineThumbUp,
  HiOutlineArrowRight
} from 'react-icons/hi';
import { HiOutlineClock, HiOutlineRocketLaunch } from 'react-icons/hi2';

const VideoEditingPage = () => {
  const services = [
    {
      icon: <HiOutlineFilm className="w-10 h-10" />,
      title: "Commercial Video Editing",
      description: "Create compelling ads that convert viewers into customers"
    },
    {
      icon: <HiOutlineColorSwatch className="w-10 h-10" />,
      title: "Color Grading",
      description: "Professional color correction to enhance visual storytelling"
    },
    {
      icon: <HiOutlineMusicNote className="w-10 h-10" />,
      title: "Audio Enhancement",
      description: "Clean audio, background music, and professional voiceovers"
    },
    {
      icon: <HiOutlineClock className="w-10 h-10" />,
      title: "Social Media Clips",
      description: "Short-form content optimized for TikTok, Instagram, and YouTube Shorts"
    },
    {
      icon: <HiOutlineDocumentText className="w-10 h-10" />,
      title: "Corporate Videos",
      description: "Professional presentations, training videos, and company profiles"
    },
    {
      icon: <HiOutlineSparkles className="w-10 h-10" />,
      title: "Motion Graphics",
      description: "Animated text, transitions, and visual effects to elevate your content"
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Project Consultation",
      description: "Discuss goals, target audience, and creative vision"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Storyboarding",
      description: "Develop visual narrative and shot sequences"
    },
    {
      icon: <HiOutlineFilm className="w-8 h-8" />,
      title: "Footage Review",
      description: "Organize and select the best clips for your project"
    },
    {
      icon: <HiOutlineColorSwatch className="w-8 h-8" />,
      title: "Editing & Enhancement",
      description: "Assemble footage, add effects, and refine transitions"
    },
    {
      icon: <HiOutlineEye className="w-8 h-8" />,
      title: "Review & Feedback",
      description: "Share draft for your input and suggestions"
    },
    {
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
      title: "Final Delivery",
      description: "Provide optimized files for all platforms"
    }
  ];

  const benefits = [
    {
      title: "Professional Quality",
      description: "Stand out with cinema-quality editing and effects"
    },
    {
      title: "Time Savings",
      description: "Focus on your business while we handle production"
    },
    {
      title: "Engagement Boost",
      description: "Create content that captures and retains attention"
    },
    {
      title: "Consistent Branding",
      description: "Maintain visual identity across all video content"
    }
  ];

  const videoTypes = [
    { name: "Explainer Videos", examples: "Product demos, service overviews" },
    { name: "Social Media Ads", examples: "Facebook, Instagram, TikTok ads" },
    { name: "Event Highlights", examples: "Conferences, weddings, corporate events" },
    { name: "Testimonials", examples: "Customer success stories and reviews" },
    { name: "Training Videos", examples: "Employee onboarding, tutorials" },
    { name: "YouTube Content", examples: "Vlogs, tutorials, channel branding" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-purple-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Professional Video Editing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Footage Into Engaging Stories</h1>
              <p className="text-xl mb-10 max-w-2xl">
                Professional video editing services that elevate your content, captivate your audience, and deliver results.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-teal-600 rounded-lg font-bold shadow-lg hover:bg-teal-50 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-teal-600 transition-colors">
                  View Showreel
                </button>
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
                    <div className="text-sm text-gray-500">Editing Preview</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl p-6 h-96 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-teal-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                          <HiOutlineFilm className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">YourBrand.mp4</div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="mt-2 bg-gray-700 rounded-full h-1">
                        <div className="bg-teal-400 h-1 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Video Editing Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive solutions for all your video content needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-teal-50 rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-teal-100 rounded-xl mb-6 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Videos We Edit</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Professional editing for various content formats and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600">Examples: {type.examples}</p>
                <div className="mt-4">
                  <button className="text-teal-600 font-medium flex items-center hover:text-teal-800">
                    See examples <HiOutlineArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Video Editing Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A streamlined workflow for professional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-teal-50 rounded-2xl p-6 border border-teal-100">
                <div className="font-bold text-lg text-teal-600 mb-2">Step {index + 1}</div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Video Editing</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-teal-600 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in Professional Editing?</h3>
                <p className="mb-6">
                  Video content is the most engaging form of media, with viewers retaining 95% of a message when they watch it in a video compared to 10% when reading it in text.
                </p>
                <p>
                  Professionally edited videos increase engagement, build trust with your audience, and deliver your message with maximum impact. They can increase conversion rates by up to 80% compared to static content.
                </p>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
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
              
              <div className="mt-10 bg-white rounded-2xl p-6 border border-teal-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Video Impact Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Marketers using video grow revenue 49% faster</span>
                      <span className="text-sm font-medium text-gray-700">49%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '49%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Video drives a 157% increase in organic traffic</span>
                      <span className="text-sm font-medium text-gray-700">157%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">93% of businesses get new customers via video</span>
                      <span className="text-sm font-medium text-gray-700">93%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              See how we&apos;ve transformed raw footage into compelling stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative pb-[56.25%] bg-gradient-to-br from-teal-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-4/5 h-4/5 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-teal-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                        <HiOutlineFilm className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">Project Title</h3>
                    <p className="text-teal-300 text-sm">Client Industry</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">Short description of the project and the results achieved through professional editing.</p>
                  <button className="mt-4 text-teal-600 font-medium flex items-center hover:text-teal-800">
                    Watch case study <HiOutlineArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Video Content?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s transform your footage into compelling stories that engage your audience and drive results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-4">
                <Link href="/porfolio" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                  View Our Portfolio
                </Link>
              <a
                href="https://wa.me/919315235323"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Get Free Consultation
              </a>

              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditingPage;