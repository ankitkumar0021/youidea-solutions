// src/pages/services/graphic-design.tsx
import React from 'react';
import { HiOutlineLightBulb, HiOutlineColorSwatch, HiOutlinePhotograph, HiOutlineDocumentText, HiOutlineShoppingBag, HiOutlineDesktopComputer, HiOutlineGlobe, HiOutlineChat, HiOutlinePencil, HiOutlineEye, HiOutlineRefresh, HiOutlineThumbUp, HiDeviceMobile, HiOutlinePrinter, HiOutlineTemplate } from 'react-icons/hi';
import { FaAngleDoubleDown, FaFigma, FaSketch } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import Link from 'next/link';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiCanva, SiFigma, SiFramer, SiSketch } from 'react-icons/si';

const GraphicDesignPage = () => {
  const services = [
    {
      icon: <HiOutlineColorSwatch className="w-10 h-10" />,
      title: "Brand Identity Design",
      description: "Logo design, color palettes, typography systems, and brand guidelines"
    },
    {
      icon: <HiOutlineDocumentText className="w-10 h-10" />,
      title: "Print Design",
      description: "Brochures, business cards, flyers, posters, and packaging"
    },
    {
      icon: <HiOutlinePhotograph className="w-10 h-10" />,
      title: "Digital Graphics",
      description: "Social media graphics, banners, ads, and email templates"
    },
    {
      icon: <HiOutlineShoppingBag className="w-10 h-10" />,
      title: "Marketing Materials",
      description: "Sales sheets, presentations, catalogs, and trade show displays"
    },
    {
      icon: <HiOutlineDesktopComputer className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Website interfaces, app screens, and user experience flows"
    },
    {
      icon: <HiOutlineGlobe className="w-10 h-10" />,
      title: "Illustration",
      description: "Custom illustrations, icons, and infographics"
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Discovery & Consultation",
      description: "Understand your goals, audience, and design needs"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Concept Development",
      description: "Brainstorm ideas and create initial concepts"
    },
    {
      icon: <HiOutlinePencil className="w-8 h-8" />,
      title: "Design Creation",
      description: "Develop visual solutions based on selected concepts"
    },
    {
      icon: <HiOutlineEye className="w-8 h-8" />,
      title: "Review & Feedback",
      description: "Present designs and incorporate your feedback"
    },
    {
      icon: <HiOutlineRefresh className="w-8 h-8" />,
      title: "Refinement",
      description: "Polish and perfect the designs based on input"
    },
    {
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
      title: "Delivery & Support",
      description: "Provide final files and ongoing assistance"
    }
  ];

type Tool = { name: string; icon: React.ReactNode; label?: string };

const tools: Tool[] = [
  { name: 'Figma', icon: <SiFigma className="w-8 h-8" />, label: 'UI/UX & Prototyping' },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="w-8 h-8" />, label: 'Image Editing' },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="w-8 h-8" />, label: 'Vector & Logo' },
  { name: 'Sketch', icon: <SiSketch className="w-8 h-8" />, label: 'Design Systems' },
  { name: 'Canva', icon: <SiCanva className="w-8 h-8" />, label: 'Quick Marketing Assets' },
  { name: 'Framer', icon: <SiFramer className="w-8 h-8" />, label: 'Prototyping & Motion' },
  { name: 'After Effects', icon: <SiAdobeaftereffects className="w-8 h-8" />, label: 'Motion & Animation' },
  { name: 'InDesign', icon: <SiAdobeindesign className="w-8 h-8" />, label: 'Print & Layout' }
];

  const benefits = [
    {
      title: "Professional Image",
      description: "Establish credibility and trust with high-quality visuals"
    },
    {
      title: "Brand Recognition",
      description: "Create memorable visuals that make your brand stand out"
    },
    {
      title: "Consistent Messaging",
      description: "Maintain visual consistency across all touchpoints"
    },
    {
      title: "Increased Engagement",
      description: "Capture attention and communicate effectively"
    }
  ];

  const portfolioItems = [
    { category: "Logo Design", count: 42 },
    { category: "Brand Identity", count: 28 },
    { category: "Print Materials", count: 35 },
    { category: "Packaging Design", count: 19 },
    { category: "Digital Graphics", count: 57 },
    { category: "Illustrations", count: 23 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Graphic Design Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Brand with Stunning Visuals</h1>
              <p className="text-xl mb-10 max-w-2xl">
                We create compelling visual identities that communicate your brand story, engage your audience, and elevate your business.
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
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2 items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="text-sm text-gray-500">Design Showcase</div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4 md:p-6 md:h-96 h-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              <div className="rounded-xl flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-r from-blue-500 to-indigo-600 transform transition hover:scale-105">
                <div className="bg-white/20 p-3 rounded-full inline-flex items-center justify-center mb-3">
                  <HiOutlinePhotograph className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold text-center">
                  <div className="text-xl md:text-2xl mb-2">Logo</div>
                </div>
              </div>

              <div className="rounded-xl flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-r from-yellow-400 to-orange-500 transform transition hover:scale-105">
                <div className="bg-white/20 p-3 rounded-full inline-flex items-center justify-center mb-3">
                  <HiOutlineTemplate className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold text-center">
                  <div className="text-xl md:text-2xl mb-2">Branding</div>
                  
                </div>
              </div>

              <div className="rounded-xl flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-r from-green-500 to-teal-600 transform transition hover:scale-105">
                <div className="bg-white/20 p-3 rounded-full inline-flex items-center justify-center mb-3">
                  <HiOutlinePrinter className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold text-center">
                  <div className="text-xl md:text-2xl mb-2">Print</div>
                </div>
              </div>

              <div className="rounded-xl flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-r from-pink-500 to-purple-600 transform transition hover:scale-105">
                <div className="bg-white/20 p-3 rounded-full inline-flex items-center justify-center mb-3">
                  <HiDeviceMobile className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold text-center">
                  <div className="text-xl md:text-2xl mb-2">Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blobs - hidden on small screens to avoid layout issues */}
      <div className="hidden md:block " />
      <div className="hidden md:block " />
    </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Graphic Design Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive design solutions for all your visual communication needs
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

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Explore our diverse range of design projects across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{item.count}+</div>
                    <div className="text-gray-800 font-medium">Projects</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">{item.category}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A collaborative approach to creating designs that exceed expectations
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

      {/* Tools & Technologies */}
       <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Tools We Use</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">Professional tools we rely on to create polished, high-quality designs — from UI to motion and print.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              role="group"
              tabIndex={0}
              aria-label={`${tool.name} — ${tool.label ?? ''}`}
              title={`${tool.name}${tool.label ? ` — ${tool.label}` : ''}`}
              className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md focus:shadow-md transition-shadow transform hover:-translate-y-0.5 focus:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm mb-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600">
                  {tool.icon}
                </div>
              </div>

              <div className="text-sm sm:text-base font-semibold text-gray-900">{tool.name}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{tool.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Graphic Design</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in Quality Design?</h3>
                <p className="mb-6">
                  Professional graphic design is not just about making things look pretty - it&apos;s about effective 
                  communication. Good design builds trust, communicates your brand values, and influences how 
                  people perceive your business.
                </p>
                <p>
                  Studies show that well-designed content receives 94% more views than content without design 
                  consideration. In today&apos;s visually-driven world, quality design is essential for standing out 
                  and connecting with your audience.
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">Design Impact Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">94% of first impressions are design-related</span>
                      <span className="text-sm font-medium text-gray-700">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Design-driven companies outperform S&P by 219%</span>
                      <span className="text-sm font-medium text-gray-700">219%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Color increases brand recognition by up to 80%</span>
                      <span className="text-sm font-medium text-gray-700">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Visual Identity?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s collaborate to create stunning designs that communicate your brand story and captivate your audience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;