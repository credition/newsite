import React from 'react';
import { FileWarning, BarChart2, BookOpen, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <FileWarning className="h-10 w-10 text-blue-900" />,
      title: 'Credit Dispute Letters',
      description: 'We create and send professional dispute letters to credit bureaus to remove inaccurate, unverifiable, or questionable items from your report.',
    },
    {
      id: 2,
      icon: <BarChart2 className="h-10 w-10 text-blue-900" />,
      title: 'Credit Score Analysis',
      description: 'Comprehensive review of your credit reports to identify negative items and develop a strategic plan to improve your score.',
    },
    {
      id: 3,
      icon: <BookOpen className="h-10 w-10 text-blue-900" />,
      title: 'Credit Education',
      description: 'Learn effective strategies for building and maintaining good credit with our educational resources and one-on-one coaching.',
    },
    {
      id: 4,
      icon: <MessageCircle className="h-10 w-10 text-blue-900" />,
      title: 'Ongoing Support',
      description: 'Receive regular updates on your progress and unlimited consultation with our credit experts throughout your journey.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive credit repair solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-lg p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Ready to improve your credit?</h3>
              <p className="text-blue-100">
                Schedule your free consultation today and take the first step towards financial freedom.
              </p>
            </div>
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors duration-200 whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;