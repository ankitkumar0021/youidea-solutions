// // src/components/portfolio/ProjectGrid.tsx
// import React from 'react';
// import ProjectCard from './ProjectCard';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   client: string;
//   year: string;
//   technologies: string[];
//   challenge: string;
//   solution: string;
//   image: string;
// }

// interface ProjectGridProps {
//   projects: Project[];
//   openProjectModal: (project: Project) => void;
// }

// const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, openProjectModal }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project) => (
//         <ProjectCard 
//           key={project.id} 
//           project={project} 
//           openProjectModal={openProjectModal} 
//         />
//       ))}
//     </div>
//   );
// };

// export default ProjectGrid;

import React from 'react'

export default function ProjectGrid() {
  return (
    <div>ProjectGrid</div>
  )
}
