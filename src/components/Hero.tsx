import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-6 inline-flex items-center py-1 px-3 bg-blue-700 bg-opacity-30 rounded-full">
              <ShieldCheck size={16} className="mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Trusted by 1000+ Clients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Repair Your Credit. <br />
              <span className="text-yellow-400">Rebuild Your Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Professional credit repair services that help you improve your 
              credit score and regain financial freedom.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors duration-200"
              >
                Free Credit Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#services" 
                className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors duration-200"
              >
                Explore Our Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Financial freedom" 
                className="relative z-10 rounded-lg shadow-xl w-full object-cover h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;