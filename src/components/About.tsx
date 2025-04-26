import React from 'react';
import { Award, Clock, UserCheck, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Credition</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're dedicated to helping individuals overcome credit challenges and achieve financial freedom.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <img 
              src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our team" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Credition?</h3>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in the credit repair industry, our team of experts has helped thousands of clients improve their credit scores and regain financial stability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Expertise</h4>
                  <p className="text-gray-600 text-sm">Certified credit consultants with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Fast Results</h4>
                  <p className="text-gray-600 text-sm">See improvements in as little as 30-45 days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <UserCheck className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Personalized</h4>
                  <p className="text-gray-600 text-sm">Customized strategies for your unique situation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Guaranteed</h4>
                  <p className="text-gray-600 text-sm">Satisfaction guarantee or your money back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;