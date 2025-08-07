import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      description: "Visionary leader with over 15 years of experience in digital transformation.",
      linkedin: "#"
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      description: "Expert in web and mobile app development, passionate about clean code.",
      linkedin: "#"
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      description: "Creative strategist driving impactful digital marketing campaigns.",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team brings expertise and passion to every project, ensuring exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;