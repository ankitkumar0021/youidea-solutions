import Link from 'next/link';
import React from 'react';
import {  
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaArrowRight,
  FaPhoneAlt
} from 'react-icons/fa';
import ImageComponent from '../ui/ImageComponent';

const Footer = () => {
  const services = [
    { name: 'Web Design & Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'E-Commerce Development', href: '/services/ecommerce' },
    { name: 'Graphic Design', href: '/services/graphic-design' },
    { name: 'Video Editing', href: '/services/video-editing' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'Logo Design', href: '/services/logo-design' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
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
            <div className="flex items-center space-x-2 w-24 h-16 overflow-hidden">
              <Link href={`/`} className="relative block w-full h-full" aria-label={`Open ${`RK Netlinks`}`}>
                  <ImageComponent url={`/home/logo.png`} img_title={`logo`} object_cover={true} />
              </Link>
            </div>
            <p className="mb-6 text-white">
              Code Mantra Technologies is best web development services providing company in India and also provide mobile app development, video editing services.
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
                  <FaArrowRight className="text-white mr-3 text-xs" />
                  <Link 
                    href={service.href} 
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {service.name}
                  </Link>
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
                  <FaArrowRight className="text-white mr-3 text-xs" />
                  <a 
                    href={link.href} 
                    className="text-white hover:text-gray-300 transition-colors"
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
                  <FaMapMarkerAlt className="text-white" size={16} />
                </div>
                <span className="text-white">3rd Floor, JOP Plaza, 305,
                  Sector 18, Noida,
                  Uttar Pradesh, 201301</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-800 p-2 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt className="text-white" size={16} />
                </div>
                <span className="text-white">Sector-2, Greater Noida West, 201306, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-800 p-2 rounded-full mr-3">
                  <FaPhoneAlt  className="text-white" size={16} />
                </div>
                <span className="text-white">7042107723</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-800 p-2 rounded-full mr-3">
                  <FaEnvelope className="text-white" size={16} />
                </div>
                <span className="text-white">codemantratechnologies@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Code Mantra Technologies. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex space-x-4">
            {supportLinks && supportLinks?.length >= 0 && supportLinks?.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-white hover:text-gray-300 text-sm transition-colors"
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