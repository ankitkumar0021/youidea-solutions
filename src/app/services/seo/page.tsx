// src/pages/services/seo-services.tsx
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { HiOutlineSearch, HiOutlineChartBar, HiOutlineDocumentText, HiOutlineGlobe, HiOutlineDeviceMobile, HiOutlineChat, HiOutlineLightBulb, HiOutlinePencil, HiOutlineEye, HiOutlineRefresh, HiOutlineThumbUp } from 'react-icons/hi';

const SEOServicesPage = () => {
  const services = [
    {
      icon: <HiOutlineSearch className="w-10 h-10" />,
      title: "Keyword Research",
      description: "Identify high-value keywords to target your ideal customers"
    },
    {
      icon: <HiOutlineDocumentText className="w-10 h-10" />,
      title: "On-Page Optimization",
      description: "Optimize content, meta tags, and structure for search engines"
    },
    {
      icon: <HiOutlineGlobe className="w-10 h-10" />,
      title: "Technical SEO",
      description: "Improve site speed, mobile-friendliness, and crawlability"
    },
    {
      icon: <HiOutlineDeviceMobile className="w-10 h-10" />,
      title: "Local SEO",
      description: "Dominate local search results and Google My Business"
    },
    {
      icon: <HiOutlineChartBar className="w-10 h-10" />,
      title: "Content Strategy",
      description: "Create SEO-optimized content that ranks and converts"
    },
    {
      icon: <HiOutlineChartBar className="w-10 h-10" />,
      title: "Link Building",
      description: "Earn high-quality backlinks to boost domain authority"
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Free SEO Audit",
      description: "Comprehensive analysis of your current website performance"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Strategy Development",
      description: "Custom SEO plan tailored to your business goals"
    },
    {
      icon: <HiOutlinePencil className="w-8 h-8" />,
      title: "Implementation",
      description: "On-page optimizations and technical improvements"
    },
    {
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      title: "Content Creation",
      description: "SEO-optimized content that targets valuable keywords"
    },
    {
      icon: <HiOutlineEye className="w-8 h-8" />,
      title: "Link Building",
      description: "Acquire authoritative backlinks to boost rankings"
    },
    {
      icon: <HiOutlineRefresh className="w-8 h-8" />,
      title: "Monitoring & Reporting",
      description: "Track progress and refine strategy based on data"
    }
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Rank higher in search results for relevant keywords"
    },
    {
      title: "Targeted Traffic",
      description: "Attract visitors actively searching for your offerings"
    },
    {
      title: "Higher Conversion Rates",
      description: "Quality traffic that's more likely to become customers"
    },
    {
      title: "Long-Term Results",
      description: "Sustainable growth that compounds over time"
    }
  ];

  const metrics = [
    { name: "Organic Traffic", value: "Increase by 150-300%" },
    { name: "Keyword Rankings", value: "Top 3 positions for 50+ keywords" },
    { name: "Conversion Rate", value: "Improvement of 25-50%" },
    { name: "ROI", value: "5-10x return on investment" }
  ];

  return (
    <>
    <Head>
      <title>SEO Services | Code Mantra Technologies</title>
      <meta name="description" content="SEO services: technical SEO, on-page, content strategy and local SEO to help you rank higher and get more organic traffic." />
      <meta name="keywords" content="SEO services, technical SEO, on-page SEO, local SEO, content strategy, SEO audit, organic traffic growth" />
      <link rel="canonical" href="https://www.mycodemantra.com/services/seo" />

      <meta property="og:title" content="SEO Services | Code Mantra Technologies" />
      <meta property="og:description" content="Technical SEO audits, on-page optimisation and content marketing to boost organic growth." />
      {/* <meta property="og:image" content="https://www.mycodemantra.com/images/og-seo.jpg" /> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                SEO Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Dominate Search Rankings & Drive Targeted Traffic</h1>
              <p className="text-xl mb-10 max-w-2xl">
                Our data-driven SEO strategies help businesses rank higher, attract qualified leads, and grow revenue sustainably.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="px-8 py-4 bg-[#d4111e] hover:bg-[#ff4b51] text-white rounded-lg font-bold shadow-lg transition-colors">
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
                    <div className="text-sm text-gray-500">SEO Dashboard</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xl font-bold text-gray-800">SEO Performance</div>
                      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm">
                        +245% Traffic
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-600 mb-2">1,250</div>
                        <div className="text-sm text-gray-600">Organic Visitors/Mo</div>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-600 mb-2">42</div>
                        <div className="text-sm text-gray-600">Top 3 Rankings</div>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                          <div className="h-2 bg-green-600 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between mb-3">
                        <div className="text-sm font-medium text-gray-700">Keyword Rankings</div>
                        <div className="text-sm text-blue-600">View All</div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { keyword: "SEO Services", position: "#1" },
                          { keyword: "Digital Marketing", position: "#3" },
                          { keyword: "Local SEO", position: "#2" }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div className="text-sm font-medium text-gray-900">{item.keyword}</div>
                            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              {item.position}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SEO Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive SEO solutions to improve visibility, traffic, and conversions
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

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SEO Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A proven methodology for sustainable search engine growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-blue-100">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional SEO</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in SEO?</h3>
                <p className="mb-6">
                  SEO delivers 5x more traffic than social media and has a 14.6% close rate compared to outbound marketing&apos;s 1.7%. 
                  Unlike paid ads, SEO results compound over time, providing sustainable growth and long-term value.
                </p>
                <p>
                  With 93% of online experiences beginning with a search engine, SEO is essential for businesses that want to be 
                  found by their ideal customers at the moment they&apos;re searching for solutions.
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">SEO Performance Metrics</h3>
                <div className="space-y-6">
                  {metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                        <span className="text-sm font-medium text-gray-700">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${
                          index === 0 ? 'bg-blue-600 w-4/5' : 
                          index === 1 ? 'bg-green-600 w-3/4' : 
                          index === 2 ? 'bg-purple-600 w-2/3' : 
                          'bg-indigo-600 w-9/10'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Dominate Search Rankings?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s develop an SEO strategy that drives qualified traffic and grows your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SEOServicesPage;