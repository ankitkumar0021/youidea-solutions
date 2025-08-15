// src/components/Contact.jsx
import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import ContactForm from '../contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Get in touch with us and let&apos;s create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Our Location</h4>
                  <p className="text-gray-600">123 Business Street, Tech City, TC 10001</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <HiPhone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Phone Number</h4>
                  <p className="text-gray-600">+91 9654272754</p>
                  <p className="text-gray-600">+91 9315235323</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <HiMail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Email Address</h4>
                  <p className="text-gray-600">info@codemantra.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-600">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
              <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;