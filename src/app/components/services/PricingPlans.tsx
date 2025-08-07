// src/components/services/PricingPlans.jsx
'use client'
import React, { useState } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';

const PricingPlans = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      price: annualBilling ? "$499" : "$599",
      period: annualBilling ? "/year" : "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Custom website design",
        "5 pages",
        "Mobile responsive",
        "Basic SEO setup",
        "1 month support"
      ],
      excluded: [
        "E-commerce functionality",
        "Content management system",
        "Advanced SEO"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: annualBilling ? "$1,299" : "$1,499",
      period: annualBilling ? "/year" : "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced website design",
        "Up to 15 pages",
        "Content management system",
        "E-commerce functionality",
        "SEO optimization",
        "6 months support"
      ],
      excluded: [
        "Custom web applications",
        "Enterprise-level security"
      ],
      cta: "Popular Choice",
      popular: true
    },
    {
      name: "Enterprise",
      price: annualBilling ? "$2,999" : "$3,499",
      period: annualBilling ? "/year" : "/month",
      description: "For large businesses with complex needs",
      features: [
        "Custom web application",
        "Unlimited pages",
        "Advanced e-commerce",
        "CRM integration",
        "Full SEO package",
        "Priority support",
        "Enterprise security"
      ],
      excluded: [],
      cta: "Contact Us"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible plans designed to fit businesses of all sizes.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              className={`px-5 py-2 rounded-md font-medium ${!annualBilling ? 'bg-white shadow' : 'text-gray-600'}`}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly
            </button>
            <button
              className={`px-5 py-2 rounded-md font-medium ${annualBilling ? 'bg-white shadow' : 'text-gray-600'}`}
              onClick={() => setAnnualBilling(true)}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden border ${
                plan.popular 
                  ? 'border-blue-500 shadow-xl relative transform scale-105' 
                  : 'border-gray-200 shadow'
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 text-green-500">
                        <HiCheck className="w-5 h-5" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.excluded.map((excluded, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <div className="flex-shrink-0">
                        <HiX className="w-5 h-5" />
                      </div>
                      <span className="ml-3 line-through">{excluded}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;