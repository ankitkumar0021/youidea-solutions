// src/components/Portfolio.tsx
'use client'
import React, { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';


// Define types
type ProjectCategory = 'web' | 'mobile' | 'ecommerce' | 'branding' | 'erp' | 'seo' | 'marketing';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  client?: string;
  year?: number;
}

interface Filter {
  name: string;
  value: ProjectCategory | 'all';
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  
  const filters: Filter[] = [
    { name: 'All', value: 'all' },
    { name: 'Web Design', value: 'web' },
    { name: 'Mobile Apps', value: 'mobile' },
    { name: 'E-Commerce', value: 'ecommerce' },
    { name: 'Branding', value: 'branding' },
    { name: 'Construction ERP', value: 'erp' },
    { name: 'SEO', value: 'seo' },
    { name: 'Marketing', value: 'marketing' },
  ];
  
  const projects: Project[] = [
    { 
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "A fully-featured online shopping solution with payment integration.",
      client: "Fashion Retailer",
      year: 2023
    },
    { 
      id: 2,
      title: "Fitness Mobile App",
      category: "mobile",
      description: "Workout tracking and nutrition planning app with social features.",
      client: "FitLife",
      year: 2022
    },
    { 
      id: 3,
      title: "Corporate Website Redesign",
      category: "web",
      description: "Modern website for a financial services company with CMS integration.",
      client: "Global Finance Inc.",
      year: 2023
    },
    { 
      id: 4,
      title: "Restaurant Branding",
      category: "branding",
      description: "Complete branding package including logo, menu design, and signage.",
      client: "Bella Cucina",
      year: 2022
    },
    { 
      id: 5,
      title: "Real Estate Portal",
      category: "web",
      description: "Property listing and management system with virtual tours.",
      client: "Prime Properties",
      year: 2023
    },
    { 
      id: 6,
      title: "Gaming Mobile App",
      category: "mobile",
      description: "Multiplayer mobile game with social features and in-app purchases.",
      client: "Game Studios",
      year: 2021
    },
    { 
      id: 7,
      title: "Construction ERP Solution",
      category: "erp",
      description: "Custom ERP system for construction project management.",
      client: "BuildRight Constructions",
      year: 2023
    },
    { 
      id: 8,
      title: "SEO Campaign",
      category: "seo",
      description: "Comprehensive SEO strategy that increased organic traffic by 240%.",
      client: "TechGadgets",
      year: 2022
    },
    { 
      id: 9,
      title: "Digital Marketing Campaign",
      category: "marketing",
      description: "Multi-channel marketing campaign that increased conversions by 180%.",
      client: "StartUp SaaS",
      year: 2023
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Category to color mapping
  const categoryColors: Record<ProjectCategory, string> = {
    web: 'bg-blue-100 text-blue-800',
    mobile: 'bg-purple-100 text-purple-800',
    ecommerce: 'bg-green-100 text-green-800',
    branding: 'bg-yellow-100 text-yellow-800',
    erp: 'bg-red-100 text-red-800',
    seo: 'bg-teal-100 text-teal-800',
    marketing: 'bg-pink-100 text-pink-800'
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we&apos;ve helped businesses succeed with our digital solutions.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No projects found for this category</h3>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              View All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  {/* Project image placeholder - would be replaced with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center text-blue-600">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Client info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">{project.client}</h4>
                        <p className="text-sm text-blue-200">{project.year}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[project.category]}`}>
                        {filters.find(f => f.value === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${categoryColors[project.category]}`}>
                    {filters.find(f => f.value === project.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group-hover:underline"
                  >
                    View Project <HiExternalLink className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* View all button */}
        {activeFilter !== 'all' && filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setActiveFilter('all')}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all hover:shadow-xl"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;