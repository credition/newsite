import React, { useState } from 'react';
import { Check } from 'lucide-react';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real application, you would submit the form data to your backend here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-900 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Start Your Credit Repair Journey Today</h2>
              <p className="mb-8 text-blue-100">
                Fill out the form to schedule your free consultation. Our credit experts will analyze your situation and create a personalized plan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-800 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-sm text-blue-100">Free credit report analysis</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-800 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-sm text-blue-100">Customized repair strategy</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-800 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-sm text-blue-100">No obligation consultation</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-800 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-sm text-blue-100">Transparent pricing with no hidden fees</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 p-3 rounded-full inline-flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your information and will contact you shortly to schedule your free consultation.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-900 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Request Free Consultation</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your situation..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                  >
                    Schedule Free Consultation
                  </button>
                  
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    By submitting, you agree to our <a href="#" className="text-blue-900 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-900 hover:underline">Terms of Service</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;