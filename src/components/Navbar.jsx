import React, { useState } from 'react';
import { NavLink, useHref } from 'react-router-dom';
import { Menu, X, Scale, Phone } from 'lucide-react';

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Home', 'About', 'Services', 'Testimonials', 'Gallery', 'Contact'];

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-blue-700/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <Scale className={`h-8 w-8 ${scrolled ? 'text-blue-500' : 'text-white'} mr-2`} />
          <span className={`font-serif text-xl font-bold ${scrolled ? 'text-blue-700' : 'text-white'}`}>
            Aggarwal Law Firm
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
        {/* Call Icon Desktop */}
          <a
            href="tel:+91 98765 43210"
            className={`flex items-center gap-1 px-4 py-2 text-sm rounded-md transition-colors ${
              scrolled ? 'text-blue-700 hover:text-blue-500' : 'text-white hover:text-blue-300'
            }`}
          >
            <Phone size={18} />
            Call
          </a>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition-colors ${
                  isActive
                    ? `${scrolled ? 'text-blue-500' : 'text-blue-300'} font-medium`
                    : `${scrolled ? 'text-blue-700' : 'text-white'} hover:${
                        scrolled ? 'text-blue-500' : 'text-blue-300'
                      }`
                }`
              }
            >
              {item}
            </NavLink>
          ))}

          
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-blue-700' : 'text-white'} focus:outline-none`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-blue-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
        
          <div className="flex flex-col space-y-4">
          <a
              href="tel:+4733378901"
              className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <Phone size={18} />
              Call Us
            </a>
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider py-2 transition-colors ${
                    isActive ? 'text-blue-300 font-medium' : 'text-white hover:text-blue-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}

            {/* Call Icon Mobile */}
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;