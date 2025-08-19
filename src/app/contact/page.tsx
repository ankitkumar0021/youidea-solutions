'use client';
import React from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';
import Head from 'next/head';

const ContactPage: React.FC = () => {
  const contactInfo = [
    { icon: <HiLocationMarker className="w-6 h-6" />, title: 'Our Location', details: '123 Business Street, Tech City, TC 10001', color: 'bg-blue-100 text-blue-600' },
    { icon: <HiPhone className="w-6 h-6" />, title: 'Phone Number', details: '+1 (123) 456-7890', color: 'bg-green-100 text-green-600' },
    { icon: <HiMail className="w-6 h-6" />, title: 'Email Address', details: 'info@codemantra.com', color: 'bg-purple-100 text-purple-600' }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <FaTwitter />, url: '#', color: 'bg-blue-400 hover:bg-blue-500' },
    { icon: <FaInstagram />, url: '#', color: 'bg-pink-600 hover:bg-pink-700' },
    { icon: <FaLinkedinIn />, url: '#', color: 'bg-blue-800 hover:bg-blue-900' }
  ];

  return (
    <>
    <Head>
        <title>Contact Us | Code Mantra Technologies</title>
        <meta name="description" content="Get in touch with our team for web design, mobile app development, and Video Editing" />
      </Head>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">Have questions or ready to start your project? Reach out to us - we&apos;d love to hear from you!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${item.color}`}>{item.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h3>
                <ul className="space-y-3">
                  {businessHours.map((time, index) => (
                    <li key={index} className="flex justify-between text-gray-600"><span>{time.day}</span><span>{time.hours}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className={`w-10 h-10 rounded-full text-white flex items-center justify-center transition-colors ${link.color}`}>{link.icon}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (component) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 bg-gradient-to-r from-blue-100 to-indigo-100 flex flex-col items-center justify-center">
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.690121552356!2d77.44790541040204!3d28.57816058644747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefdc54239fb5%3A0x86c9bf9ffd9a721!2sPatwari!5e1!3m2!1sen!2sin!4v1755087998616!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { question: 'How long does it take to get a response?', answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.' },
              { question: 'What information should I include in my project request?', answer: 'Please include as much detail as possible about your project goals, target audience, timeline, and budget. The more information you provide, the better we can assist you.' },
              { question: 'Do you offer free consultations?', answer: 'Yes, we offer free 30-minute initial consultations to discuss your project needs and how we can help you achieve your goals.' },
              { question: 'What industries do you work with?', answer: 'We work with businesses across various industries including technology, healthcare, retail, education, finance, and more.' }
            ].map((faq, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions? We&apos;re here to help!</p>
            <a href="https://wa.me/919654272754" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 hover:underline">
              Contact us directly <HiOutlinePaperAirplane className="ml-2 transform rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
