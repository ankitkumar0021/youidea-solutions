// src/components/services/ServiceTestimonials.jsx
import React from 'react';
import { HiStar } from 'react-icons/hi';

const ServiceTestimonials = () => {
  const testimonials = [
    {
    id: 1,
    name: "Jacky TR",
    role: "Director, TR Restaurent & Cafe",
    service: "Online Food",
    content: "Our online food booking system is now completely online. It has made things much easier for our clients.",
    rating: 5
  },
  
  {
    id: 2,
    name: "Sneha Kapoor",
    role: "Manager, Om Sai Boutique",
    service: "Mobile App Development",
    content: "They made an easy-to-use app for my shop. Orders have increased in just a few weeks.",
    rating: 5
  },
  {
    id: 3,
    name: "Rajesh Nair",
    role: "Founder, Gupta Electronics",
    service: "E-commerce Store Setup",
    content: "Good service and quick delivery. My online store is getting more visitors now.",
    rating: 4
  },
  {
    id: 4,
    name: "Deepak Kumar",
    role: "Owner, Infinity bliss",
    service: "Event Decoration",
    content: "They designed a simple and attractive website for my Event decoration. Customers can now view our menu online.",
    rating: 5
  },
  {
    id: 5,
    name: "Karan Malhotra",
    role: "Owner, RK Furniture",
    service: "Website Design & Development",
    content: "Very professional team. My website looks modern and customers like it a lot.",
    rating: 5
  },
  {
    id: 6,
    name: "Pooja Deshmukh",
    role: "Owner, Unique Creations",
    service: "Online Store Development",
    content: "They helped me start selling handmade products online. Business is growing every month.",
    rating: 4
  }
];


  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our services have helped businesses achieve remarkable results.
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
                  <div className="mt-1">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;