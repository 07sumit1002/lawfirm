import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Clock, Facebook, TwitterXFill, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepRoyal text-white m-0">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-blue-100 mr-2" />
              <span className="text-xl font-serif font-bold text-white">Aggarwal Legal Firm</span>
            </div>
            <p className="text-white font-light mb-4 text-justify">
              Committed to providing exceptional legal services with integrity and dedication.
              We strive to achieve the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <span className="inline-block h-5 w-5 text-center leading-5 text-[20px]">𝕏</span>
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-blue-500 pb-2 text-white">Practice Areas</h3>
            <ul className="space-y-2">
              <li><Link to="/practise areas/matrimonial-cases" className="text-blue-200 hover:text-blue-500 transition-colors">Matrimonial Cases</Link></li>
              <li><Link to="/practise areas/criminal-defense" className="text-blue-200 hover:text-blue-500 transition-colors">Criminal Defense</Link></li>
              <li><Link to="/practise areas/corporate-law" className="text-blue-200 hover:text-blue-500 transition-colors">Corporate Law</Link></li>
              <li><Link to="/practise areas/real-estate-law" className="text-blue-200 hover:text-blue-500 transition-colors">Real Estate Law</Link></li>
              <li><Link to="/practise areas/civil-litigation" className="text-blue-200 hover:text-blue-500 transition-colors">Civil Litigation</Link></li>
            </ul>

          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-blue-500 pb-2 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Practise Areas', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-blue-200 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-blue-500 pb-2 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-blue-200">123 Legal Avenue, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <a href="tel:+919876543210" className="text-blue-200 hover:text-blue-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <a href="mailto:info@aggarwallaw.com" className="text-blue-200 hover:text-blue-500 transition-colors">
                  info@aggarwallaw.com
                </a>
              </li>

              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-blue-200">Monday - Friday: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Aggarwal Legal Firm. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;