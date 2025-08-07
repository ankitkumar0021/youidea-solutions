import React from 'react'
import AboutHero from '../components/about/AboutHero'
import CompanyStory from '../components/about/CompanyStory'
import CoreValues from '../components/about/CoreValues'
import TeamSection from '../components/about/TeamSection'
import WhyChooseUs from '../components/about/WhyChooseUs'
import AchievementTimeline from '../components/about/AchievementTimeline'
import ClientTestimonials from '../components/about/ClientTestimonials'
import CallToAction from '../components/about/CallToAction'

export default function page() {
  return (
    <div>
       <AboutHero />
        <CompanyStory />
        <CoreValues />
        <TeamSection />
        <WhyChooseUs />
        <AchievementTimeline />
        <ClientTestimonials />
        <CallToAction />
    </div>
  )
}
