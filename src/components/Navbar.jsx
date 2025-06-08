import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Scale, Phone } from 'lucide-react';

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Home', 'About', 'Practise Areas', 'Blog', 'Contact'];

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-blue-700/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Section (Logo or Call button on mobile) */}
        <div className="flex items-center">
          {/* <Scale className={`h-8 w-8 ${scrolled ? 'text-blue-500' : 'text-white'} mr-2`} /> */}
          <a href='/'><h1 className={`text-[20px] ${scrolled ? 'text-blue-500' : 'text-white'} mr-2`} style={{fontWeight:'700'}}>ALF</h1>
          {/* Call Button - visible only on mobile
          <a
            href="tel:+919876543210"
            className={`md:hidden flex items-center gap-2 px-2 py-2 rounded-[15px] shadow-md transition-colors duration-200 ${
              scrolled
                ? 'bg-white text-blue-600 hover:bg-blue-200'
                : 'bg-blue-700 text-white hover:bg-blue-800'
            }`} style={{right:'10px'}}
          >
            <Phone size={18} />
            HA
          </a> */}
            </a>
        </div>

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

          {/* Desktop Call Button */}
          <a
            href="tel:+919876543210"
            className={`ml-4 flex gap-1 px-4 py-2 text-sm rounded-md border transition-colors ${
              scrolled
                ? 'text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700'
                : 'text-white border-white hover:text-blue-300 hover:border-blue-300'
            }`} 
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
          {isOpen ? <X size={24} /> : <div className='flex gap-3'><a
            href="tel:+919876543210"
            className={`md:hidden flex items-center gap-2 px-2 py-2 rounded-[15px] shadow-md transition-colors duration-200 ${
              scrolled
                ? 'bg-white text-blue-600 hover:bg-blue-200'
                : 'bg-blue-700 text-white hover:bg-blue-800'
            }`} style={{right:'10px'}}
          >
            <Phone size={18} />
            HA
          </a><Menu size={24} /></div>}
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
