// src/components/services/ServiceFAQ.jsx
'use client'
import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const ServiceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

interface FAQ {
    question: string;
    answer: string;
}

const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
};

  const faqs: FAQ[] = [
    {
      question: "How long does a typical web development project take?",
      answer: "The timeline varies based on project complexity. A standard website takes 4-8 weeks, while complex web applications may take 3-6 months. We provide a detailed timeline after our initial consultation."
    },
    {
      question: "Do you offer ongoing maintenance after project completion?",
      answer: "Yes, we offer comprehensive maintenance plans that include updates, security monitoring, performance optimization, and technical support. We can customize a plan based on your specific needs."
    },
    {
      question: "Can you help with domain registration and hosting?",
      answer: "Absolutely! We can assist with domain registration, hosting setup, and email configuration. We partner with reliable hosting providers to ensure optimal performance and security for your website."
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our SEO package includes comprehensive site audit, keyword research, on-page optimization, technical SEO, content strategy, link building, and monthly performance reporting. We tailor our approach to your business goals."
    },
    {
      question: "How do you ensure the mobile responsiveness of websites?",
      answer: "We follow a mobile-first design approach and test websites on various devices and screen sizes. We use modern CSS frameworks and responsive design techniques to ensure optimal performance across all devices."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <HiChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <HiChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;