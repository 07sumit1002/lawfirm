import React, { useState, useEffect, useRef } from 'react';
import { Scale, Users, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const statsData = [
  {
    icon: <Scale className="h-8 w-8 text-blue-0" />,
    count: 500,
    label: 'Cases Won',
    suffix: '+'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-0" />,
    count: 25,
    label: 'Expert Attorneys',
    suffix: '+'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-0" />,
    count: 120,
    label: 'Awards Won',
    suffix: '+'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-0" />,
    count: 1500,
    label: 'Satisfied Clients',
    suffix: '+'
  }
];

function StatsCounter() {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      const target = stat.count;
      let current = 0;
      const increment = Math.ceil(target / 50);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, 30);
    });
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-12 bg-white text-deepRoyal relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-blue-100 border-b-2 border-gray-500 transform transition hover:scale-105 hover:bg-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.5, delay: 0.7 + index * 0.2 }}
              style={{borderRadius:'20px'}}
            >
              <motion.div 
                className="mb-4 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5, delay: 0.9 + index * 0.2 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold mb-2 font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5, delay: 1.1 + index * 0.2 }}
              >
                {counters[index]}
                <span className="text-deepRoyal">{stat.suffix}</span>
              </motion.h3>
              <motion.p 
                className="text-deepRoyal uppercase text-sm tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5, delay: 1.3 + index * 0.2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default StatsCounter;