// src/components/portfolio/ProjectCard.jsx
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

type CategoryColors = {
  web: string;
  mobile: string;
  ecommerce: string;
  branding: string;
};

type Project = {
  category: keyof CategoryColors;
  title: string;
  description: string;
};

type ProjectCardProps = {
  project: Project;
  openProjectModal: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openProjectModal }) => {
  const categoryColors = {
    web: 'bg-blue-100 text-blue-800',
    mobile: 'bg-purple-100 text-purple-800',
    ecommerce: 'bg-green-100 text-green-800',
    branding: 'bg-yellow-100 text-yellow-800'
  };
  
  const categoryNames = {
    web: 'Web Design',
    mobile: 'Mobile App',
    ecommerce: 'E-Commerce',
    branding: 'Branding'
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 cursor-pointer group"
      onClick={() => openProjectModal(project)}
    >
      <div className="h-56 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="text-white font-medium flex items-center">
            View Details <HiExternalLink className="ml-2" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${categoryColors[project.category]}`}>
          {categoryNames[project.category]}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;