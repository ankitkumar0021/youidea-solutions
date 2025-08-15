// src/components/Footer.jsx
import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const services = [
    'Web Design & Development',
    'Mobile App Development',
    'E-Commerce Development',
    'Graphic Design',
    'Video Editing',
    'SEO Services',
    'Digital Marketing',
    'Logo Design'
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Graphic Design', href: '/graphics' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Reviews', href: '/reviews' },
  ];

  const supportLinks = [
    { name: 'Career', href: '#career' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-2 rounded-lg">
                <span className="bg-white text-blue-700 rounded px-1 mr-1">YI</span>
                Code Mantra
              </div>
              <span className="ml-2 text-xs font-light text-gray-400">Technologies</span>
            </div>
            <p className="mb-6 text-gray-400">
              We deliver cutting-edge digital solutions that drive business growth and innovation. 
              Transforming your ideas into reality with our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-full transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-500 text-white p-2 rounded-full transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <FaArrowRight className="text-blue-400 mr-3 text-xs" />
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <FaArrowRight className="text-blue-400 mr-3 text-xs" />
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-800 p-2 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt className="text-blue-300" size={16} />
                </div>
                <span className="text-gray-400">Sector-2, Greater Noida West, 201306</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-800 p-2 rounded-full mr-3">
                  <FaPhone className="text-blue-300" size={16} />
                </div>
                <span className="text-gray-400">9315235323</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-800 p-2 rounded-full mr-3">
                  <FaEnvelope className="text-blue-300" size={16} />
                </div>
                <span className="text-gray-400">info@codemantra.com</span>
              </li>
            </ul>
            
            {/* <div className="mt-8">
              <h4 className="text-white mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-2 rounded-r-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Code Mantra Technologies. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex space-x-4">
            {supportLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;