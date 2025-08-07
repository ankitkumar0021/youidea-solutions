// src/components/services/ServiceDetails.tsx
'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiCode,
  HiDeviceMobile,
  HiShoppingCart,
  HiDatabase,
  HiSearch,
  HiChartBar,
  HiTemplate,
  HiChevronRight,
} from 'react-icons/hi'

interface ServiceDetailsProps {
  activeCategory: string | number
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ activeCategory }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const allServices = [
    {
      id: 1,
      category: 'development',
      icon: <HiCode className="w-8 h-8 text-blue-500" />,
      title: "Web Design & Development",
      description: "We create stunning, responsive websites that engage visitors and convert them into customers.",
      features: [
        "Custom website design",
        "Frontend & backend development",
        "Content Management Systems",
        "Responsive & mobile-friendly",
        "Performance optimization"
      ],
      benefits: [
        "Increased online visibility",
        "Higher conversion rates",
        "Improved user experience",
        "Scalable solutions"
      ]
    },
    {
      id: 2,
      category: 'development',
      icon: <HiDeviceMobile className="w-8 h-8 text-indigo-500" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: [
        "iOS & Android development",
        "React Native cross-platform apps",
        "UI/UX design for mobile",
        "API integration",
        "App store deployment"
      ],
      benefits: [
        "Increased customer engagement",
        "Mobile-first experience",
        "Offline functionality",
        "Push notifications"
      ]
    },
    {
      id: 3,
      category: 'development',
      icon: <HiShoppingCart className="w-8 h-8 text-green-500" />,
      title: "E-Commerce Development",
      description: "Robust online stores with seamless shopping experiences that drive conversions and sales.",
      features: [
        "Shopify, WooCommerce, Magento",
        "Payment gateway integration",
        "Product management",
        "Shopping cart systems",
        "Inventory management"
      ],
      benefits: [
        "24/7 online storefront",
        "Secure transactions",
        "Global customer reach",
        "Sales analytics"
      ]
    },
    {
      id: 4,
      category: 'erp',
      icon: <HiDatabase className="w-8 h-8 text-purple-500" />,
      title: "CRM/ERP Development",
      description: "Custom solutions to streamline your business operations, improve efficiency, and enhance customer relationships.",
      features: [
        "Custom CRM development",
        "ERP system implementation",
        "Business process automation",
        "Data analytics & reporting",
        "Integration with existing systems"
      ],
      benefits: [
        "Improved workflow efficiency",
        "Better customer insights",
        "Reduced operational costs",
        "Scalable business systems"
      ]
    },
    {
      id: 5,
      category: 'marketing',
      icon: <HiSearch className="w-8 h-8 text-amber-500" />,
      title: "SEO Services",
      description: "Improve your visibility in search engines and drive targeted traffic to your website with our SEO strategies.",
      features: [
        "Keyword research & analysis",
        "On-page & technical SEO",
        "Content optimization",
        "Link building strategies",
        "SEO analytics & reporting"
      ],
      benefits: [
        "Higher search rankings",
        "Increased organic traffic",
        "Better online visibility",
        "Long-term growth"
      ]
    },
    {
      id: 6,
      category: 'marketing',
      icon: <HiChartBar className="w-8 h-8 text-rose-500" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your audience, increase engagement, and boost conversions.",
      features: [
        "Social media marketing",
        "PPC & Google Ads management",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Marketing analytics"
      ],
      benefits: [
        "Targeted audience reach",
        "Increased brand awareness",
        "Higher conversion rates",
        "Measurable ROI"
      ]
    },
    {
      id: 7,
      category: 'design',
      icon: <HiTemplate className="w-8 h-8 text-teal-500" />,
      title: "Logo & Brand Design",
      description: "Professional branding that makes your business stand out and creates a memorable impression.",
      features: [
        "Logo design & branding",
        "Brand identity development",
        "Marketing collateral design",
        "UI/UX design services",
        "Brand style guides"
      ],
      benefits: [
        "Strong brand identity",
        "Increased recognition",
        "Professional appearance",
        "Consistent branding"
      ]
    }
  ]

  const filteredServices =
    activeCategory === 'all'
      ? allServices
      : allServices.filter((svc) => svc.category === activeCategory)

  const toggleExpand = (id: number) =>
    setExpandedId((prev) => (prev === id ? null : id))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {filteredServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${
              expandedId === service.id
                ? 'border-blue-300 ring-2 ring-blue-200'
                : 'border-gray-100'
            }`}
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => toggleExpand(service.id)}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === service.id ? 90 : 0 }}
                  className="ml-2 text-blue-500"
                >
                  <HiChevronRight className="w-5 h-5" />
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                              </div>
                            </div>
                            <p className="ml-3 text-gray-700">{f}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">
                        Business Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((b, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-lg font-medium flex items-center justify-center group">
                      Get Started
                      <HiChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ServiceDetails
