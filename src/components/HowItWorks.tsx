import React from 'react';
import { ClipboardCheck, UserCheck, TrendingUp, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-blue-900" />,
      title: "Free Credit Evaluation",
      description: "We start with a comprehensive review of your credit reports from all three bureaus to identify negative items affecting your score."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-blue-900" />,
      title: "Custom Action Plan",
      description: "Our experts create a personalized strategy to address negative items and improve your credit score effectively."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-900" />,
      title: "Credit Repair Process",
      description: "We work with credit bureaus and creditors to dispute inaccurate items and implement credit building strategies."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-900" />,
      title: "Results & Monitoring",
      description: "Track your progress through our client portal and receive ongoing support to maintain your improved credit score."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our proven process helps you achieve your credit goals step by step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center relative z-10 h-full hover:transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-8 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;