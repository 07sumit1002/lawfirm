import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import FeaturedServices from '../components/FeaturedServices';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <Hero 
        title="Experienced & Trusted Legal Solutions"
        subtitle="Protecting your rights and fighting for justice with expert legal representation."
        buttonText="Free Consultation"
        buttonLink="/contact"
      />
      
      <StatsCounter />
      
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
            <p className="text-blue-600 max-w-2xl mx-auto">
              Our experienced attorneys provide expert legal representation across a wide range of practice areas.
            </p>
          </motion.div>
          
          <FeaturedServices />
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <a 
              href="/services" 
              className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >
              View All Practice Areas
              <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </motion.section>
      
      <WhyChooseUs />
      
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
            <p className="text-blue-600 max-w-2xl mx-auto">
              We take pride in delivering exceptional legal services that exceed our clients' expectations.
            </p>
          </motion.div>
          
          <TestimonialSlider />
        </div>
      </motion.section>
      
      <CallToAction />
    </div>
  );
};

export default Home;