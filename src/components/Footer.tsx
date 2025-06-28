import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Clock, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepRoyal text-white m-0">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
  <img
    src="/images/logo.jpg"
    alt="Logo"
    className="w-10 h-10 object-contain mr-3 "
  />
  <span className="text-xl font-serif font-bold text-white">Aggarwal Legal Firm</span>
</div>
            <p className="text-white font-light mb-4 text-justify">
              Committed to providing exceptional legal services with integrity and dedication.
              We strive to achieve the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@KanoonKiSALAH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-[#FF0000] w-10 h-10 transition-transform duration-300 hover:scale-110">
                  <Youtube size={24} color="#fff" />
                </span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/kanoon_ki_salah?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-[#E1306C] w-10 h-10 transition-transform duration-300 hover:scale-110">
                  <Instagram size={22} color="#fff" />
                </span>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/himanshu-a-aggarwal-%F0%9F%87%AE%F0%9F%87%B3-51157099?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-[#0077B5] w-10 h-10 transition-transform duration-300 hover:scale-110">
                  <Linkedin size={22} color="#fff" />
                </span>
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
              <li><Link to="/practise areas/medical-negligence" className="text-blue-200 hover:text-blue-500 transition-colors">Medical Negligence</Link></li>
            </ul>

          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-blue-500 pb-2 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Practise Areas','Terms and Condition','Privacy Policy', 'Blog', 'Contact'].map((item) => (
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
                <span className="text-blue-200">Chamber no. 246, District Court, kurukshetra</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <a href="tel:+919729079252" className="text-blue-200 hover:text-blue-500 transition-colors">
                  +91 97290 79252
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <a href="mailto:aggarwalhimanshu8@gmail.com" className="text-blue-200 hover:text-blue-500 transition-colors">
                  aggarwalhimanshu8@gmail.com
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