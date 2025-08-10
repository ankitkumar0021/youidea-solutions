// src/pages/career.tsx
'use client'
import React, { useState } from 'react';
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineClock, HiOutlineCash, HiOutlineOfficeBuilding, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineGlobe, HiOutlineAcademicCap, HiOutlineHeart, HiOutlineChevronDown, HiOutlineChevronRight, HiOutlineArrowRight } from 'react-icons/hi';

const CareerPage = () => {
  const [openPositions, setOpenPositions] = useState(true);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const jobPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      experience: "5+ years",
      description: "We're looking for an experienced frontend developer to lead our React-based projects and mentor junior developers.",
      responsibilities: [
        "Develop responsive web applications using React.js and Next.js",
        "Implement state management solutions (Redux, Context API)",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with UX/UI designers to implement design systems",
        "Mentor junior developers and conduct code reviews"
      ],
      requirements: [
        "5+ years of professional frontend development experience",
        "Expertise in React.js, TypeScript, and modern JavaScript",
        "Experience with state management libraries",
        "Knowledge of RESTful APIs and GraphQL",
        "Familiarity with CI/CD pipelines and testing frameworks"
      ],
      benefits: ["Flexible remote work", "Health insurance", "Professional development budget", "Quarterly bonuses"]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      type: "Full-time",
      location: "New York, NY",
      department: "Design",
      experience: "3+ years",
      description: "Join our design team to create beautiful, intuitive interfaces for web and mobile applications.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Develop design systems and component libraries",
        "Collaborate with product managers and developers",
        "Present design concepts to stakeholders"
      ],
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing web/mobile projects",
        "Understanding of user-centered design principles",
        "Experience with design systems and accessibility standards"
      ],
      benefits: ["Competitive salary", "Flexible hours", "Annual design conference budget", "Creative workspace"]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Remote",
      department: "Marketing",
      experience: "3+ years",
      description: "Help us grow our digital presence and execute marketing campaigns across multiple channels.",
      responsibilities: [
        "Develop and implement digital marketing strategies",
        "Manage SEO, SEM, and social media campaigns",
        "Create and analyze marketing performance reports",
        "Collaborate with content creators and designers",
        "Optimize conversion funnels and lead generation"
      ],
      requirements: [
        "3+ years of digital marketing experience",
        "Proven track record in SEO and SEM",
        "Experience with marketing analytics tools",
        "Knowledge of marketing automation platforms",
        "Excellent written and verbal communication skills"
      ],
      benefits: ["Remote work options", "Performance bonuses", "Professional development", "Flexible PTO"]
    },
    {
      id: 4,
      title: "Mobile App Developer (Flutter)",
      type: "Contract",
      location: "Remote",
      department: "Engineering",
      experience: "3+ years",
      description: "Build cross-platform mobile applications using Flutter for our diverse client projects.",
      responsibilities: [
        "Develop and maintain mobile applications using Flutter",
        "Collaborate with backend developers on API integration",
        "Implement clean, efficient, and reusable code",
        "Participate in code reviews and technical discussions",
        "Troubleshoot and resolve technical issues"
      ],
      requirements: [
        "3+ years of mobile development experience",
        "Proficiency in Dart and Flutter framework",
        "Experience with state management solutions",
        "Knowledge of RESTful APIs and third-party libraries",
        "Understanding of mobile app architecture patterns"
      ],
      benefits: ["Remote work", "Flexible schedule", "Competitive hourly rate", "Potential for full-time position"]
    }
  ];

  const benefits = [
    {
      icon: <HiOutlineAcademicCap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual budget for courses, conferences, and certifications to advance your skills"
    },
    {
      icon: <HiOutlineHeart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your family"
    },
    {
      icon: <HiOutlineCash className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Attractive salaries, performance bonuses, and equity options"
    },
    {
      icon: <HiOutlineGlobe className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work-life balance"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Innovation Time",
      description: "Dedicated time to explore new technologies and personal projects"
    },
    {
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      title: "Team Building",
      description: "Regular team events, retreats, and community volunteering opportunities"
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new ideas that push boundaries"
    },
    {
      title: "Collaborative Spirit",
      description: "Teamwork is at our core - we believe in working together to achieve great things"
    },
    {
      title: "Continuous Growth",
      description: "We invest in our people's development and provide opportunities to learn and advance"
    },
    {
      title: "Customer Focus",
      description: "Everything we do is centered around delivering exceptional value to our clients"
    }
  ];

  const applicationSteps = [
    { step: 1, title: "Application Review", description: "Our team reviews your submission within 3-5 business days" },
    { step: 2, title: "Initial Interview", description: "A 30-minute video call to discuss your experience and interests" },
    { step: 3, title: "Skills Assessment", description: "A practical assignment to evaluate your technical abilities" },
    { step: 4, title: "Team Interview", description: "Meet with potential team members and managers" },
    { step: 5, title: "Offer", description: "We extend an offer to join our talented team" }
  ];

  const faqs = [
    {
      question: "What is the typical hiring process timeline?",
      answer: "The entire process usually takes 2-4 weeks from application to offer, depending on the role and team availability."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes, most of our positions are either fully remote or offer flexible remote/in-office arrangements."
    },
    {
      question: "What benefits do you offer?",
      answer: "We provide comprehensive benefits including health insurance, retirement plans, flexible PTO, professional development budget, and more."
    },
    {
      question: "Do you sponsor work visas?",
      answer: "Yes, we sponsor visas for qualified candidates in most countries where we operate."
    },
    {
      question: "What is your company culture like?",
      answer: "We foster a collaborative, innovative environment where team members are empowered to take ownership of their work and grow professionally."
    }
  ];

  const handleJobClick = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setResume(null);
      setCoverLetter('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career with Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of digital solutions.
            </p>
            <div className="mt-10">
              <a 
                href="#open-positions" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-colors"
              >
                View Open Positions <HiOutlineArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join YourIdea Solutions?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600 mb-3">{value.title}</div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at YourIdea</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and do their best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Culture</h3>
              <p className="text-gray-600 mb-6">
                At YourIdea Solutions, we foster a culture of collaboration, innovation, and continuous learning. 
                We believe that great ideas can come from anywhere, and we encourage every team member to contribute 
                their unique perspective.
              </p>
              <p className="text-gray-600">
                Our team is diverse, inclusive, and passionate about solving complex problems with elegant solutions. 
                We celebrate successes together and support each other through challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl h-64 flex items-center justify-center text-white text-xl font-bold">
                Team Events
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl h-64 flex items-center justify-center text-white text-xl font-bold">
                Innovation Days
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl h-64 flex items-center justify-center text-white text-xl font-bold">
                Remote Work
              </div>
              <div className="bg-gradient-to-br from-blue-300 to-indigo-400 rounded-2xl h-64 flex items-center justify-center text-white text-xl font-bold">
                Learning Culture
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-xl">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-xl">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Explore our current opportunities and find the perfect fit for your skills and career goals.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <button 
              className={`px-5 py-2.5 rounded-full font-medium ${activeFilter === 'all' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Positions
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium ${activeFilter === 'engineering' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveFilter('engineering')}
            >
              Engineering
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium ${activeFilter === 'design' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium ${activeFilter === 'marketing' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveFilter('marketing')}
            >
              Marketing
            </button>
          </div>
          
          <div className="space-y-6">
            {jobPositions
              .filter(job => activeFilter === 'all' || job.department.toLowerCase() === activeFilter)
              .map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                  <div 
                    className="p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-between items-center"
                    onClick={() => handleJobClick(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <div className="flex items-center text-gray-600">
                          <HiOutlineBriefcase className="mr-2 text-blue-600" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <HiOutlineLocationMarker className="mr-2 text-blue-600" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <HiOutlineOfficeBuilding className="mr-2 text-blue-600" />
                          {job.department}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <HiOutlineClock className="mr-2 text-blue-600" />
                          {job.experience} experience
                        </div>
                      </div>
                    </div>
                    <div>
                      {expandedJob === job.id ? (
                        <HiOutlineChevronDown className="w-6 h-6 text-blue-600" />
                      ) : (
                        <HiOutlineChevronRight className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <div className="p-6 border-t border-gray-200">
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Job Description</h4>
                        <p className="text-gray-600 mb-6">{job.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="font-bold text-gray-900 mb-3">Responsibilities</h5>
                            <ul className="space-y-2">
                              {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-bold text-gray-900 mb-3">Requirements</h5>
                            <ul className="space-y-2">
                              {job.requirements.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h5 className="font-bold text-gray-900 mb-3">Benefits</h5>
                        <div className="flex flex-wrap gap-3">
                          {job.benefits.map((benefit, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Apply for this Position</h4>
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Resume *</label>
                            <div className="flex items-center">
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg className="w-8 h-8 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                  </svg>
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                                </div>
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                                  required
                                />
                              </label>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                            <textarea
                              value={coverLetter}
                              onChange={(e) => setCoverLetter(e.target.value)}
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Tell us why you're interested in this position..."
                            ></textarea>
                          </div>
                          
                          {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                              Your application has been submitted successfully!
                            </div>
                          )}
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full px-6 py-4 text-white rounded-lg font-medium shadow-lg transition-all flex items-center justify-center ${
                              isSubmitting 
                                ? 'bg-gray-500 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </>
                            ) : (
                              'Submit Application'
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          
          {jobPositions.filter(job => activeFilter === 'all' || job.department.toLowerCase() === activeFilter).length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600 mb-4">No open positions in this category</h3>
              <p className="text-gray-600 mb-6">Check back later or explore other departments</p>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium"
                onClick={() => setActiveFilter('all')}
              >
                View All Positions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-1 bg-blue-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button 
                    className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                    onClick={() => setOpenPositions(!openPositions)}
                  >
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    <HiOutlineChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openPositions ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openPositions && (
                    <div className="p-6 pt-0 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Have more questions? Contact our HR team
              </p>
              <a 
                href="mailto:careers@youridea.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all"
              >
                Contact HR <HiOutlineArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We&apos;re always looking for talented individuals to join our growing team. 
            Even if you don&apos;t see the perfect role now, send us your resume!
          </p>
          <a 
            href="#open-positions" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors"
          >
            View Open Positions <HiOutlineArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;