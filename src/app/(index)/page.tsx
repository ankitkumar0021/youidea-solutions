// src/pages/index.js
import React from 'react';
import Hero from '../components/homepage/Hero';
import Services from '../components/homepage/Services';
import Stats from '../components/homepage/Stats';
import Portfolio from '../components/homepage/Portfolio';
import Testimonials from '../components/homepage/Testimonials';
import About from '../components/homepage/About';
import Contact from '../components/homepage/Contact';
import Head from 'next/head';
import MainBanner from '@/widget/banners/MainBanner';

export default function Home() {
  return (
    <>
    <Head>
        <title>Best web devlopments Services| Best Video Editing | Best Graphic design Services | Best Mobile App Services | Best Seo Services | Best Ecommerce Services | Code Mantra Technologies</title>
        <meta name="description" content="Get in touch with our team for web design, mobile app development, and Video Editing" />
        <meta name="description" content="Code Mantra Technologies delivers professional web design, mobile app development, e-commerce services, SEO services, digital marketing, and logo design. Grow your business with Mycode Mantra technologies" />
        <meta name="keywords" content="web design, mobile app development, e-commerce, SEO services, digital marketing, logo design, web development, responsive websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Code Mantra Technologies | Web development services | Best Software development company" />
        <meta property="og:description" content="Professional web design, mobile app development, and digital marketing services to grow your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mycodemantra.com/" />
        {/* <meta property="og:image" content="https://www.yourideasolutions.com/images/og-image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />

    </Head>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <main className="flex-grow">
        <MainBanner />
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
    </div>
    </>
  );
}