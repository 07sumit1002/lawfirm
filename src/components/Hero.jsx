import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Rights from '../assets/rights.jpg';
import Mission from '../assets/mission.jpg';
import Fair from '../assets/fairness.jpg';
import Integrity from '../assets/integrity.jpg';

const slides = [
  {
    image: Integrity,
    
    title: <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >Upholding Justice with Integrity
            </motion.h1>,

    subtitle: <motion.p
              className="text-xl mb-8 text-white font-bold font-mont"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empowering the voice of law through digital innovation.
            </motion.p>,
  },
  {
    image: Fair,

    title: <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >Fairness in Every Verdict
            </motion.h1>,

    subtitle: <motion.p
              className="text-xl mb-8 text-white font-mont font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Driven by values, led by experience.
            </motion.p>,
  },
  {
    image: Rights,

    title: <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >Protecting Constitutional Rights
            </motion.h1>,

    subtitle: <motion.p
              className="text-xl mb-8 text-white font-bold font-mont"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Defending justice, empowering people.
            </motion.p>,
  },
  {
    image: Mission,

    title: <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white font-mont"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >Your Justice, Our Mission
            </motion.h1>,

    subtitle: <motion.p
              className="text-xl mb-8 text-white font-bold font-mont"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Advocating with heart and mind.
            </motion.p>,
  },
];


function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden font-mont">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0.2 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-blue-400/30"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            className="text-white max-w-2xl"
            key={current + '-text'}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            {slides[current].title}
            {slides[current].subtitle}

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/about"
                className="px-8 py-3 border-2 border-white hover:border-primary hover:text-primary text-white font-medium rounded-md transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:flex flex-col items-center gap-3 absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? 'bg-white' : 'bg-white/50 hover:bg-primary'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;