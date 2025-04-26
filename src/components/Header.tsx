import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-blue-900">Credition</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-blue-900 hover:text-blue-600' : 'text-blue-900 hover:text-blue-700'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          type="button"
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 py-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;