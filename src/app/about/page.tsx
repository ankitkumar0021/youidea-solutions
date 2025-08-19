import React from 'react'
import Head from 'next/head'
import AboutHero from '../components/about/AboutHero'
import CompanyStory from '../components/about/CompanyStory'
import CoreValues from '../components/about/CoreValues'
// import TeamSection from '../components/about/TeamSection'
import WhyChooseUs from '../components/about/WhyChooseUs'
// import AchievementTimeline from '../components/about/AchievementTimeline'
import ClientTestimonials from '../components/about/ClientTestimonials'
import CallToAction from '../components/about/CallToAction'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About YourIdea Solutions | Our Story, Values & Team</title>
        <meta name="description" content="Learn about Code Mantra Technologiess - our mission, values, and the team behind our success. Discover why businesses choose us for web design, mobile apps, and digital marketing." />
        <meta name="keywords" content="about us, company story, team, values, mission, web design company, digital agency, who we are" />
        <meta property="og:title" content="About Code Mantra Technologies | Our Story, Values & Team" />
        <meta property="og:description" content="Learn about Code Mantra Technologies - our mission, values, and the team behind our success in digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mycodemantra.com/" />
        {/* <meta property="og:image" content="https://www.yourideasolutions.com/images/about-og-image.jpg" /> */}
      </Head>
      
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      {/* <TeamSection /> */}
      <WhyChooseUs />
      {/* <AchievementTimeline /> */}
      <ClientTestimonials />
      <CallToAction />
    </div>
  )
}