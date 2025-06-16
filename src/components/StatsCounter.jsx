import React, { useState, useEffect, useRef } from 'react';
import { Scale, Users, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const statsData = [
  // {
    // icon: <Scale className="h-8 w-8 text-blue-0" />,
    // count: 500,
    // label: 'Cases Won',
    // suffix: '+'
  // },
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
    count: 3000 ,
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
      className="py-12 bg-white text-deepRoyal"
    >
      <div className="container mx-auto px-4">
        {/* FLEX instead of GRID → centered cards */}
        <motion.div className="flex flex-wrap justify-center gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 bg-white border-b-2 border-gray-500 rounded-2xl transform transition hover:scale-105 hover:bg-gray-100 w-64"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>

              <h3 className="text-4xl font-bold mb-2 font-serif">
                {counters[idx]}
                <span className="text-deepRoyal">{stat.suffix}</span>
              </h3>

              <p className="text-deepRoyal uppercase text-sm tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default StatsCounter;