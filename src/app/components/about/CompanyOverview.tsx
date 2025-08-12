import React from 'react';

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 transform ">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-2 rounded-lg inline-block mb-4">
                      <span className="bg-white text-blue-700 rounded px-1 mr-1">YI</span>
                      YourIdea
                    </div>
                    <p className="text-gray-600">Innovative digital solutions since 2018</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div> */}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2018, YourIdea Solutions is dedicated to transforming businesses through innovative digital solutions. We leverage cutting-edge technology to solve complex challenges and create opportunities for growth.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Our vision is to empower businesses worldwide with exceptional digital experiences that drive success. We combine creativity, technical expertise, and a client-centric approach to deliver results that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;