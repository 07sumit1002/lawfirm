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
        // buttonText="Free Consultation"
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
            <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                {
                  icon: "Google Reviews",
                  rating: "4.8/5",
                  logo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
                  link: "https://www.google.com/search?q=aggarwal+law+firm+reviews",
                },
                {
                  icon: "Justdial",
                  rating: "4.7/5",
                  logo: "https://cdn.pnggallery.com/wp-content/uploads/justdial-jd-logo-04.png",
                  link: "https://www.justdial.com/",
                },
                {
                  icon: "Trustpilot",
                  rating: "4.6/5",
                  logo: "https://companieslogo.com/img/orig/TRST.L-5ada9c92.png?t=1663382464",
                  link: "https://www.trustpilot.com/",
                },{
                  icon: "LawRato",
                  rating: "4.0/5",
                  logo: "https://play-lh.googleusercontent.com/FrfTAo5rpKvRgubrkpyEtkZeI8epH6IERDroFZIrlOre-gUqHmGUgL2zmAcL4eF-kB4",
                  link: "https://lawrato.com/advocate-himanshu-aggarwal",
                },
              ].map((review, index) => (
                <a
                  key={index}
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow hover:scale-[1.]"
                ><div className="flex items-center justify-center space-x-3">
                  <img
                    src={review.logo}
                    alt={review.icon}
                    className="h-10 w-[30px]"
                  />
                  {/* <h3 className="text-lg font-semibold text-navy-900 text-center">{review.icon}</h3> */}
                  <p className="text-gray-600 text-[20px]">Rating: {review.rating}</p>
                  </div>
                </a>
              ))}
            </div>


          </div>
            
          </motion.div>
          
          <TestimonialSlider />
        </div>
      </motion.section>
      
      <CallToAction />
    </div>
  );
};

export default Home;