import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Home', 'About', 'Practise Areas', 'Blog', 'Contact'];

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 font-mont ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-primary/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <a href="/">
            <h1
              className={`text-[20px] ${scrolled ? 'text-deeproyal' : 'text-white'} mr-2`}
              style={{ fontWeight: '700' }}
            >
              ALF
            </h1>
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
                    ? `${scrolled ? 'text-deepRoyal' : 'text-deepRoyal/70'} font-medium`
                    : `${scrolled ? 'text-deepRoyal' : 'text-white'} hover:${
                        scrolled ? 'text-deepRoyal/80' : 'text-deepRoyal/70'
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
                ? 'text-deeproyal border-deepRoyal hover:text-white hover:bg-primary'
                : 'text-white border-white hover:text-deeproyal/70 hover:border-deeproyal/70'
            }`}
          >
            <Phone size={18} />
            Call
          </a>
        </nav>

        {/* Mobile Call & Menu Buttons container */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Call Button */}
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 px-3 py-2 rounded-[15px] shadow-md transition-colors duration-200 ${
              scrolled
                ? 'bg-white text-deeproyal hover:bg-white/20'
                : 'bg-primary text-white hover:bg-deepRoyal/80'
            }`}
          >
            <Phone size={18} />
            HA
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`${scrolled ? 'text-deeproyal' : 'text-white'} focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-primary transition-all duration-300 ease-in-out overflow-hidden ${
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
                    isActive ? 'text-deepRoyal/70 font-medium' : 'text-white hover:text-deeproyal/70'
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