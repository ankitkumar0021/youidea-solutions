// src/components/Testimonials.jsx
// 'use client'
import React from 'react';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechGrow Solutions",
    content: "YourIdea Solutions made our website look new and professional. In just 3 months, our leads increased by 150%. Great work.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Head, BizBoost",
    content: "The mobile app they built for us works very smoothly. Our customers like the design and speed a lot.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Founder, TrendBazaar",
    content: "Working with YourIdea helped our e-commerce business grow fast. Their marketing strategy doubled our sales.",
    rating: 4
  }
];


  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <HiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;