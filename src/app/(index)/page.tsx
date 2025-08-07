// src/pages/index.js
import React from 'react';
import Hero from '../components/homepage/Hero';
import Services from '../components/homepage/Services';
import Stats from '../components/homepage/Stats';
import Portfolio from '../components/homepage/Portfolio';
import Testimonials from '../components/homepage/Testimonials';
import About from '../components/homepage/About';
import Contact from '../components/homepage/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <main className="flex-grow">
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
    </div>
  );
}