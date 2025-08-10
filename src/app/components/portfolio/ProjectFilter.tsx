// src/components/portfolio/ProjectFilter.jsx
import React from 'react';

type Filter = {
  value: string;
  name: string;
};

type ProjectFilterProps = {
  filters: Filter[];
  activeFilter: string;
  setActiveFilter: (value: string) => void;
};

const ProjectFilter: React.FC<ProjectFilterProps> = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={`px-5 py-3 rounded-full font-medium transition-all text-sm md:text-base ${
            activeFilter === filter.value
              ? 'bg-white text-blue-600 shadow-lg'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;