import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero({ title, subtitle, buttonLink }) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://www.livelaw.in/h-upload/2022/01/04/406951-supreme-court-of-india-sc.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-700/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-xl text-white mb-8 max-w-lg">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <Link
                to={buttonLink}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-all transform hover:scale-105 hover:shadow-lg"
              >
                {buttonText}
              </Link> */}

              <Link
                to="/about"
                className="px-8 py-3 border-2 border-white hover:border-blue-500 hover:text-blue-500 text-white font-medium rounded-md transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;