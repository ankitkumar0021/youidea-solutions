// src/components/portfolio/ProjectModal.jsx
import React from 'react';
import { HiX, HiExternalLink } from 'react-icons/hi';

const categoryColors = {
  web: 'bg-blue-600',
  mobile: 'bg-purple-600',
  ecommerce: 'bg-green-600',
  branding: 'bg-yellow-600'
} as const;

type Project = {
  category: keyof typeof categoryColors;
  title: string;
  client: string;
  year: string | number;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
};

type ProjectModalProps = {
  project: Project;
  closeModal: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  const categoryNames = {
    web: 'Web Design',
    mobile: 'Mobile App',
    ecommerce: 'E-Commerce',
    branding: 'Branding'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80" onClick={closeModal}></div>
      
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-80 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
            </div>
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <HiX className="h-6 w-6 text-gray-700" />
            </button>
            
            <div className="absolute bottom-4 left-4">
              <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${categoryColors[project.category]}`}>
                {categoryNames[project.category]}
              </span>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.client} • {project.year}</p>
              </div>
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium flex items-center">
                Visit Project <HiExternalLink className="ml-2" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-700">{project.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                  <p className="text-gray-700">{project.solution}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium">
                View Live Project
              </button>
              <button className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;