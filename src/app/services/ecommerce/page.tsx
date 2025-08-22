// src/pages/services/ecommerce-development.tsx
import React from 'react';
import { HiOutlineShoppingCart, HiOutlineShoppingBag, HiOutlineCreditCard, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineDeviceMobile, HiOutlineGlobe, HiOutlineChat, HiOutlineDocumentText, HiOutlineTemplate, HiOutlinePencil, HiOutlineDocumentSearch, HiOutlineCog, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FaShopify, FaWordpress, FaMagento } from 'react-icons/fa';
import { SiWoocommerce, SiBigcommerce } from 'react-icons/si';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import Link from 'next/link';
import { FiActivity, FiHeadphones, FiWatch } from 'react-icons/fi';
import Head from 'next/head';

const EcommerceDevelopmentPage = () => {
  const services = [
    {
      icon: <HiOutlineShoppingCart className="w-10 h-10" />,
      title: "Online Store Development",
      description: "Custom e-commerce websites designed for optimal shopping experiences"
    },
    {
      icon: <HiOutlineShoppingBag className="w-10 h-10" />,
      title: "Product Catalog Management",
      description: "Organized product displays with filters, categories, and search"
    },
    {
      icon: <HiOutlineCreditCard className="w-10 h-10" />,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment options"
    },
    {
      icon: <HiOutlineChartBar className="w-10 h-10" />,
      title: "Analytics & Reporting",
      description: "Track sales, customer behavior, and inventory in real-time"
    },
    {
      icon: <HiOutlineShieldCheck className="w-10 h-10" />,
      title: "Security Implementation",
      description: "SSL encryption, PCI compliance, and fraud prevention"
    },
    {
      icon: <HiOutlineDeviceMobile className="w-10 h-10" />,
      title: "Mobile Commerce",
      description: "Responsive designs and mobile apps for shopping on-the-go"
    }
  ];

  const platforms = [
    {
      icon: <FaShopify className="w-10 h-10" />,
      name: "Shopify",
      description: "All-in-one commerce platform for businesses of all sizes"
    },
    {
      icon: <FaWordpress className="w-10 h-10" />,
      name: "WordPress + WooCommerce",
      description: "Flexible solution for content-driven e-commerce sites"
    },
    {
      icon: <FaMagento className="w-10 h-10" />,
      name: "Magento/Adobe Commerce",
      description: "Enterprise-level platform for complex requirements"
    },
    {
      icon: <SiBigcommerce className="w-10 h-10" />,
      name: "BigCommerce",
      description: "Scalable SaaS solution with built-in features"
    },
    {
      icon: <SiWoocommerce className="w-10 h-10" />,
      name: "Headless Commerce",
      description: "Decoupled frontend with backend e-commerce functionality"
    },
    {
      icon: <HiOutlineCog className="w-10 h-10" />,
      name: "Custom Solutions",
      description: "Tailor-made e-commerce platforms for unique business needs"
    }
  ];

  const processSteps = [
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: "Free Consultation",
      description: "Understand your business goals and requirements"
    },
    {
      icon: <HiOutlineDocumentSearch className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Research competition, target audience, and product positioning"
    },
    {
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      title: "Platform Selection",
      description: "Choose the right technology for your business needs"
    },
    {
      icon: <HiOutlineTemplate className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create intuitive shopping experiences and conversion-optimized flows"
    },
    {
      icon: <HiOutlinePencil className="w-8 h-8" />,
      title: "Development",
      description: "Build robust e-commerce functionality with secure integrations"
    },
    {
      icon: <HiOutlineDocumentSearch className="w-8 h-8" />,
      title: "Product Setup",
      description: "Organize catalog, inventory, and pricing structures"
    },
    {
      icon: <HiOutlineShieldCheck className="w-8 h-8" />,
      title: "Testing & Security",
      description: "Ensure PCI compliance, payment security, and performance"
    },
    {
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
      title: "Launch & Optimization",
      description: "Go live and continuously improve based on analytics"
    }
  ];

  const features = [
    {
      title: "Shopping Cart & Checkout",
      description: "Streamlined purchasing process with multiple payment options"
    },
    {
      title: "Product Management",
      description: "Easy inventory control with variants, SKUs, and stock tracking"
    },
    {
      title: "Order Processing",
      description: "Automated order management and fulfillment workflows"
    },
    {
      title: "Customer Accounts",
      description: "Personalized experiences with order history and wishlists"
    },
    {
      title: "Shipping Integration",
      description: "Real-time carrier rates and label printing"
    },
    {
      title: "Tax Calculation",
      description: "Automatic tax calculations based on location"
    },
    {
      title: "Marketing Tools",
      description: "Coupons, discounts, email campaigns, and SEO features"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive sales reports and customer insights"
    }
  ];

  const benefits = [
    {
      title: "24/7 Sales Channel",
      description: "Sell products anytime, anywhere without time restrictions"
    },
    {
      title: "Global Reach",
      description: "Access customers worldwide with multi-currency support"
    },
    {
      title: "Reduced Operational Costs",
      description: "Lower overhead compared to physical stores"
    },
    {
      title: "Personalized Marketing",
      description: "Target customers with tailored promotions and recommendations"
    }
  ];

    const products = [
    { name: 'Wireless Headphones', sales: '$2,450', icon: <FiHeadphones className="w-4 h-4" aria-hidden="true" /> },
    { name: 'Smart Watch Series 5', sales: '$1,980', icon: <FiWatch className="w-4 h-4" aria-hidden="true" /> },
    { name: 'Fitness Tracker', sales: '$1,230', icon: <FiActivity className="w-4 h-4" aria-hidden="true" /> }
  ];

  return (
    <>
    <Head>
      <title>E-Commerce Development | Code Mantra Technologies</title>
      <meta name="description" content="E-commerce websites & marketplaces: WooCommerce, Shopify, custom React/Next e-shops with payment gateway integration and optimised checkout." />
      <meta name="keywords" content="ecommerce development, Shopify development, WooCommerce, online store development, payment gateway integration, ecommerce website India" />
      <link rel="canonical" href="https://www.mycodemantra.com/services/ecommerce" />

      <meta property="og:title" content="E-Commerce Development | Code Mantra Technologies" />
      <meta property="og:description" content="Build fast, secure and conversion-focused online stores. Integrations, inventory, and payments." />
      {/* <meta property="og:image" content="https://www.mycodemantra.com/images/og-ecommerce.jpg" /> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                E-Commerce Development
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Online Sales</h1>
              <p className="text-xl mb-10 max-w-2xl">
                We build high-converting e-commerce stores that drive sales, engage customers, and grow your business 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
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
                    <div className="text-sm text-gray-500">E-Commerce Dashboard</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xl font-bold text-gray-800">Your Online Store</div>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                        $12,450 Revenue
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-blue-600">42</div>
                        <div className="text-sm text-gray-600">Orders</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-green-600">$1,240</div>
                        <div className="text-sm text-gray-600">Avg. Order</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-purple-600">3.2%</div>
                        <div className="text-sm text-gray-600">Conversion</div>
                      </div>
                    </div>
                    
                       <div className="bg-white rounded-xl p-4">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-sm font-medium text-gray-700">Top Selling Products</div>
                        </div>

                        <div className="space-y-3">
                          {products.map((product, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg mr-3 inline-flex items-center justify-center">
                                  {product.icon}
                                </div>
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              </div>
                              <div className="text-sm font-semibold text-gray-700">{product.sales}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our E-Commerce Development Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive solutions to build, optimize, and grow your online store
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

      {/* E-commerce Platforms */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">E-Commerce Platforms We Work With</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              We develop on all major e-commerce platforms to match your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential E-Commerce Features</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive functionality to power your online business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600">
                  <HiOutlineCurrencyDollar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our E-Commerce Development Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              A structured approach to building successful online stores
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:mt-40'}`}
                >
                  <div className="absolute top-0 left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white -translate-x-1/2 z-10">
                    {step.icon}
                  </div>
                  
                  <div className={`bg-white rounded-2xl p-6 shadow-md ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <div className={`font-bold text-lg text-blue-600 mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of E-Commerce Development</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Invest in E-Commerce?</h3>
                <p className="mb-6">
                  Global e-commerce sales are projected to reach $6.3 trillion by 2024. An online store opens new revenue 
                  streams, reduces operational costs, and provides valuable customer insights that physical stores can&apos;t match.
                </p>
                <p>
                  With mobile commerce accounting for over 70% of e-commerce traffic, a responsive, mobile-optimized store 
                  is essential for capturing today&apos;s shoppers.
                </p>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <HiOutlineGlobe className="w-6 h-6" />
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">E-Commerce Growth Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Global e-commerce sales growth rate</span>
                      <span className="text-sm font-medium text-gray-700">10.4% annually</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Mobile share of e-commerce traffic</span>
                      <span className="text-sm font-medium text-gray-700">72.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '72.9%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Cart abandonment rate</span>
                      <span className="text-sm font-medium text-gray-700">69.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '69.8%' }}></div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s build a high-converting e-commerce platform that grows your business.
          </p>
        </div>
      </section>
    </div>  
</>
  );
};

export default EcommerceDevelopmentPage;