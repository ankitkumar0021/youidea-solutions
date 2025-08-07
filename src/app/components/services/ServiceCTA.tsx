// src/components/services/ServiceCTA.jsx
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our digital solutions can help you achieve your business goals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-all flex items-center group">
                Get Started
                <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-medium hover:bg-blue-500 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Consultation</h3>
            <p className="text-gray-600 mb-6">
              Fill out this form and we&apos;ll contact you within 24 hours to discuss your project.
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Service</option>
                  <option>Web Design & Development</option>
                  <option>Mobile App Development</option>
                  <option>E-Commerce Development</option>
                  <option>CRM/ERP Development</option>
                  <option>SEO Services</option>
                  <option>Digital Marketing</option>
                  <option>Logo Design</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;