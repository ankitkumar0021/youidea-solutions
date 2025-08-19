'use client'
import React, { useState } from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServiceCategories from '../components/services/ServiceCategories'
import ServiceDetails from '../components/services/ServiceDetails'
import ProcessSection from '../components/services/ProcessSection'
import ServiceTestimonials from '../components/services/ServiceTestimonials'
import ServiceFAQ from '../components/services/ServiceFAQ'
import ServiceCTA from '../components/services/ServiceCTA'
import Head from 'next/head'

export default function ServicesPage() {
  // can be string or number
  const [activeCategory, setActiveCategory] = useState<string | number>('all')

  const categories = [
    {
      id: 'all',
      name: 'All Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'development',
      name: 'Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'design',
      name: 'Design',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      )
    },
    
  ]

  return (
    <>
    <Head>
  <title>Services | Code Mantra Technologies</title>
  <meta name="description" content="Our services: Web Design, Mobile App Development, E-commerce Development, SEO, Video Editing and Custom Software solutions." />
  <link rel="canonical" href="https://www.mycodemantra.com/services" />
  <meta name="keywords" content="web design services, mobile app services, e-commerce development, SEO services, video editing services, custom software India" />  
  <meta property="og:title" content="Services | Code Mantra Technologies" />
  <meta property="og:description" content="Explore Code Mantra's services: websites, mobile apps, e-commerce, SEO and video editing." />
  {/* <meta property="og:image" content="https://www.mycodemantra.com/images/og-services.jpg" /> */}
  <meta name="twitter:card" content="summary_large_image" />
</Head>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <main className="flex-grow">
        <ServicesHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of digital solutions to help your business thrive in the digital age.
            </p>
          </div>

          <ServiceCategories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <ServiceDetails activeCategory={activeCategory} />
        </div>

        <ProcessSection />
        <ServiceTestimonials />
        <ServiceFAQ />
        <ServiceCTA />
      </main>
    </div>
    
</>
  )
}
