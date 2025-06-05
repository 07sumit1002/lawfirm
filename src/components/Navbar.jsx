import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Scale, Phone, PhoneCallIcon } from 'lucide-react';

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

          {/* Separated Call Button */}
          <a
            href="tel:+919876543210"
            className={`ml-4 flex items-center gap-1 px-4 py-2 text-sm rounded-md border ${
              scrolled
                ? 'text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700'
                : 'text-white border-white hover:text-blue-300 hover:border-blue-300'
            } transition-colors`}
          >
            <Phone size={18} />
            Call
          </a>
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

            {/* Separated Call Button for Mobile */}
            {/* <div className="pt-4 border-t border-blue-600">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <a
        href="tel:+919876543210"
        className="fixed bottom-4 right-4 z-50 block md:hidden bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-500 transition-all"
      >
        <PhoneCallIcon size={18} />
        
      </a>
    </header>
  );
}

export default Navbar;
