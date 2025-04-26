import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Thanks to Credition, my credit score improved by 120 points in just 3 months! I was finally able to qualify for a mortgage with a great interest rate.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Their team helped me navigate through complicated business credit issues. My business credit is now in excellent shape, allowing me to secure funding for expansion.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer Wilson',
      role: 'Recent Graduate',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'As a recent graduate with student loan debt, I was struggling with my credit. Credition helped me establish a solid credit history and improve my score significantly.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Elviz Aliyev',
      role: 'Uber Driver',
      image: 'https://images.pexels.com/photos/73323/pexels-photo-73323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'As a full-time Uber driver, my income can be unpredictable, and my credit took a big hit during slow months. Thanks to Credition, I was able to remove old collections and raise my score by over 100 points! Now I finally qualified for a new car loan with a low interest rate. Highly recommend',
      rating: 5,
      
    },
    {
      id: 5,
      name: 'Ramin Djavadov',
      role: 'Chef man',
      image: 'https://images.pexels.com/photos/733858/pexels-photo-733858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'As a full-time Uber driver, my income can be unpredictable, and my credit took a big hit during slow months. Thanks to Credition, I was able to remove old collections and raise my score by over 100 points! Now I finally qualified for a new car loan with a low interest rate. Highly recommend',
      rating: 5,
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            See how we've helped our clients achieve their financial goals
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8">
                  <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-900" />
          </button>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-900" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                current === index ? 'bg-blue-900' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
