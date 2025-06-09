import React from 'react';
import { motion } from 'framer-motion';

const serviceData = [
  {
    id: 1,
    title: 'Family Law',
    description: 'Helping families navigate divorce, custody, and support with compassion and expertise.',
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Criminal Defense',
    description: 'Defending your rights against DUI, assault, drug, and other criminal charges.',
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Corporate Law',
    description: 'Guiding business formations, contracts, and mergers to secure your company’s future.',
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Real Estate Law',
    description: 'Resolving property disputes, transactions, and zoning issues with precision.',
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'Civil Litigation',
    description: 'Handling commercial disputes, personal injury claims, and insurance matters effectively.',
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Personal Injury',
    description: 'Helping victims of accidents receive fair compensation for injuries and related damages.',
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const FeaturedServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-12 font-work">
      {serviceData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="group w-full bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200 hover:bg-deepRoyal hover:text-white transition-all duration-500 relative overflow-visible"
        >
          <div className="relative pt-12 px-8 pb-8 text-center overflow-visible">
            {/* Circular image half above the card */}
            <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-20">
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-12 text-2xl font-bold text-deepRoyal group-hover:text-white mb-2 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-deepRoyal group-hover:text-white transition-colors text-base max-w-xs mx-auto">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedServices;
