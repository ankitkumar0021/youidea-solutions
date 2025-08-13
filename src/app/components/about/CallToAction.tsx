// src/components/about/CallToAction.jsx
import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Let&apos;s collaborate to create digital solutions that drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-all flex items-center group">
              Get in Touch 
              <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-medium hover:bg-blue-500 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;