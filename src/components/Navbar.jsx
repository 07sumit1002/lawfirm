import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Home', 'About', 'Practise Areas', 'Legal Learning', 'Blog', 'Contact'];

  return (
    <>
      <header
        className={`fixed w-full z-50 top-0 transition-all duration-300 font-mont ${
          scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <a href="/">
              <h1
                className={`text-[20px] ${scrolled ? 'text-deepRoyal' : 'text-white'} mr-2`}
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
                  `text-sm uppercase tracking-wider transition-colors font-mont ${
                    isActive
                      ? `${scrolled ? 'text-deepRoyal' : 'text-white'} font-bold`
                      : `${scrolled ? 'text-deepRoyal' : 'text-white'} hover:text-blue-500`
                  }`
                }
              >
                {item}
              </NavLink>
            ))}

            {/* Desktop Call Button */}
            <a
              href="tel:+919729079252"
              className={`ml-4 flex gap-1 px-4 py-2 text-sm rounded-md border transition-colors ${
                scrolled
                  ? 'text-deepRoyal border-deepRoyal hover:text-blue-500 hover:border-blue-500'
                  : 'text-white border-white hover:text-blue-500 hover:border-blue-500'
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
              href="tel:+919729079252"
              className={`flex items-center gap-2 px-3 py-2 rounded-[15px] shadow-md transition-colors duration-200 ${
                scrolled
                  ? 'bg-white text-deepRoyal hover:bg-blue-500 hover:text-white'
                  : 'bg-transparent text-white hover:bg-blue-500 hover:text-white'
              }`}
            >
              <Phone size={18} />
              HA
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`${scrolled ? 'text-deepRoyal' : 'text-white'} hover:text-blue-500 focus:outline-none`}
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
                    `text-sm uppercase tracking-wider py-2 transition-colors font-mont ${
                      isActive ? 'text-white font-bold' : 'text-white hover:text-blue-500'
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

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/+919729079252"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <IoLogoWhatsapp  size={28}/>
      </a>
    </>
  );
}

export default Navbar;