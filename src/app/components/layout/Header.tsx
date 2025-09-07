// src/components/Header.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiPhone, HiChevronDown } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ImageComponent from '../ui/ImageComponent';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      subItems: [
        { name: 'Web Design & Development', href: '/services/web-development' },
        { name: 'Mobile App Development', href: '/services/mobile-app' },
        { name: 'E-Commerce Development', href: '/services/ecommerce' },
        { name: 'Graphic Design', href: '/services/graphic-design' },
        { name: 'Video Editing', href: '/services/video-editing' },
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'Logo Design', href: '/services/logo-design' },
      ],
    },
    { name: 'Portfolio', href: '/portfolio' },
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
            <span>+91 9654272754</span>
          </div>
          <div className="text-sm text-gray-600">codemantratechnologies@gmail.com</div>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors"><FaFacebookF size={16} /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors"><FaTwitter size={16} /></a>
          <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors"><FaInstagram size={16} /></a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors"><FaLinkedinIn size={16} /></a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 w-24 h-16 overflow-hidden">
              <Link href={`/`} className="relative block w-full h-full" aria-label={`Open ${`RK Netlinks`}`}>
                  <ImageComponent url={`/home/logo.png`} img_title={`logo`} object_cover={true} />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group" onMouseEnter={() => item.subItems && setServicesMenuOpen(true)} onMouseLeave={() => item.subItems && setServicesMenuOpen(false)}>
                <Link href={item.href} className={`font-montserrat flex items-center px-4 py-2 rounded-lg transition-all ${scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-gray-800 hover:bg-blue-100 hover:text-blue-700'}`}>
                  {item.name}
                  {item.subItems && <HiChevronDown className="ml-1" />}
                </Link>

                {item.subItems && servicesMenuOpen && (
                  <div className="absolute left-0 mt-1 w-64 bg-white shadow-xl rounded-lg py-2 z-50" onMouseEnter={() => setServicesMenuOpen(true)} onMouseLeave={() => setServicesMenuOpen(false)}>
                    {item.subItems.map((subItem, index) => (
                      <Link key={index} href={subItem.href} className="font-montserrat block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
              <a
                href="tel:+911234567890"
                className="ml-4 px-5 py-2 bg-[#d4111e] hover:bg-[#ff4b51] text-white rounded-lg font-medium  transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <HiPhone className="w-5 h-5" />
                Call Us
              </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  <div className="flex justify-between items-center">
                    <Link href={item.href} className="flex-1" onClick={() => { if (!item.subItems) { setMobileMenuOpen(false); setServicesMenuOpen(false); } }}>
                      <span>{item.name}</span>
                    </Link>
                    {item.subItems && (
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setServicesMenuOpen(!servicesMenuOpen); }}
                        aria-expanded={servicesMenuOpen}
                        className="p-1"
                      >
                        <HiChevronDown className={`transform transition-transform ${servicesMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                      </button>
                    )}
                  </div>
                </div>

                {item.subItems && servicesMenuOpen && (
                  <div className="ml-4 bg-blue-50 rounded-lg py-2">
                    {item.subItems.map((subItem, index) => (
                      <Link key={index} href={subItem.href} className="block px-6 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-700" onClick={() => { setMobileMenuOpen(false); setServicesMenuOpen(false); }}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full mt-4 px-4 py-3 bg-[#d4111e] hover:bg-[#ff4b51] text-white rounded-lg font-medium text-center">Get a Quote</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
