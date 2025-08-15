import React from 'react';

const History = () => {
  const milestones = [
    { year: 2018, event: "Code Mantra Technologies founded with a mission to transform digital experiences." },
    { year: 2019, event: "Launched our first major e-commerce platform for a retail client." },
    { year: 2020, event: "Expanded services to include mobile app development and SEO." },
    { year: 2022, event: "Developed a custom CRM/ERP solution for a construction company." },
    { year: 2025, event: "Serving over 50 clients globally with a growing team of experts." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our humble beginnings to becoming a trusted digital partner, here’s our story.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 px-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
              </div>
              <div className="w-1/2 px-6">
                <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <p className="text-gray-600">{milestone.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;