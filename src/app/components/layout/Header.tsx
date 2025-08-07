// src/components/Header.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiPhone, HiChevronDown } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', href: '#about' },
    { 
      name: 'Services', 
      href: '/services',
      subItems: [
        'Web Design & Development',
        'Mobile App Development',
        'E-Commerce Development',
        'Graphic Design',
        'Video Editing',
        'SEO Services',
        'Digital Marketing',
        'Logo Design'
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-0' : 'bg-gradient-to-r from-blue-50 to-indigo-50 py-2'}`}>
      {/* Top bar */}
      <div className={`hidden md:flex items-center justify-between px-6 py-1 transition-all duration-300 ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-blue-700">
            <HiPhone className="mr-1" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="text-sm text-gray-600">info@youridea.com</div>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-2 rounded-lg">
                <span className="bg-white text-blue-700 rounded px-1 mr-1">YI</span>
                YourIdea
              </div>
              <span className="ml-2 text-xs font-light text-gray-500">SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                      : 'text-gray-800 hover:bg-blue-100 hover:text-blue-700'
                  }`}
                  onMouseEnter={() => item.subItems && setServicesMenuOpen(true)}
                  onMouseLeave={() => item.subItems && setServicesMenuOpen(false)}
                >
                  {item.name}
                  {item.subItems && <HiChevronDown className="ml-1" />}
                </a>
                
                {item.subItems && servicesMenuOpen && (
                  <div 
                    className="absolute left-0 mt-1 w-64 bg-white shadow-xl rounded-lg py-2 z-50"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    {item.subItems.map((subItem, index) => (
                      <a 
                        key={index} 
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg">
              Get a Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiX className="h-8 w-8" />
            ) : (
              <HiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                  onClick={() => {
                    if (!item.subItems) setMobileMenuOpen(false)
                  }}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {item.subItems && (
                      <HiChevronDown 
                        className="transform transition-transform"
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesMenuOpen(!servicesMenuOpen);
                        }}
                      />
                    )}
                  </div>
                </a>
                {item.subItems && servicesMenuOpen && (
                  <div className="ml-4 bg-blue-50 rounded-lg py-2">
                    {item.subItems.map((subItem, index) => (
                      <a 
                        key={index} 
                        href="#"
                        className="block px-6 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium text-center">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;