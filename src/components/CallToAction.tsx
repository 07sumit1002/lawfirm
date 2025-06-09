import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section 
      className="py-16 bg-deepRoyal relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-work font-bold text-white mb-6" 
            initial={{ y: 20 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            Need Legal Assistance? We're Here to Help
          </motion.h2>
          <p className="text-white text-lg mb-8 font-work">
            Schedule a consultation...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-deepRoyal hover:bg-blue-400 text-white font-work rounded-md transition-all transform hover:scale-105 hover:shadow-lg flex items-center">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:+919876543210" className="px-8 py-3 border-2 border-white hover:border-blue-500 hover:text-blue-500 text-white font-medium rounded-md transition-colors">
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
