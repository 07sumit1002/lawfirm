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
    title: 'Upholding Justice with Integrity',
    subtitle: 'Empowering the voice of law through digital innovation.',
  },
  {
    image: Fair,
    title: 'Fairness in Every Verdict',
    subtitle: 'Driven by values, led by experience.',
  },
  {
    image: Rights,
    title: 'Protecting Constitutional Rights',
    subtitle: 'Defending justice, empowering people.',
  },
  {
    image: Mission,
    title: 'Your Justice, Our Mission',
    subtitle: 'Advocating with heart and mind.',
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
    <section className="relative h-screen overflow-hidden font-work">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-deeproyal/50"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
        <motion.div
          className="text-deepRoyal max-w-2xl"
          key={current + '-text'}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-deepRoyal font-mont"
            style={{ WebkitTextStroke: '0.5px white', textStroke: '0.5px white' }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            className="text-3xl mb-8 text-deepRoyal font-mont"
            style={{ WebkitTextStroke: '0.5px white', textStroke: '0.5px white', fontWeight:'500', color:'#2B526E' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.8 }}
          >
            {slides[current].subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-blue-300 hover:border-white hover:text-blue-300 text-darkblue font-medium rounded-md transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Vertical Dots (hidden on small screens) */}
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
