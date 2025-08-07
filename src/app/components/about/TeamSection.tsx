// src/components/about/TeamSection.jsx
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Tech enthusiast with 15+ years of experience in software development and business strategy."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Creative Director",
      bio: "Award-winning designer passionate about creating engaging user experiences."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in scalable architecture and innovative solutions."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      bio: "Digital marketing expert with a track record of driving growth for tech companies."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to transforming your ideas into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gradient-to-b from-white to-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-blue-100"
            >
              <div className="h-64 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="bg-white w-40 h-40 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <FaDribbble size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">We&apos;re always looking for talented individuals to join our team</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;