import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Home, Users, Briefcase, FileText, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceData = [
  {
    id: 1,
    icon: <Scale className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors" />,
    title: 'Family Law',
    description: 'Our attorneys provide compassionate guidance through divorce, child custody, and support matters.',
    link: '/services/family-law'
  },
  {
    id: 2,
    icon: <FileText className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors" />,
    title: 'Criminal Defense',
    description: 'Expert criminal defense representation for those facing charges and navigating the justice system.',
    link: '/services/criminal-defense'
  },
  {
    id: 3,
    icon: <Briefcase className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors" />,
    title: 'Corporate Law',
    description: 'Comprehensive legal services for businesses including formation, contracts, and compliance.',
    link: '/services/corporate-law'
  },
  {
    id: 4,
    icon: <Home className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors" />,
    title: 'Real Estate Law',
    description: 'Assistance with property transactions, disputes, leases, and real estate regulations.',
    link: '/services/real-estate-law'
  },
  {
    id: 5,
    icon: <Landmark className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors" />,
    title: 'Civil Litigation',
    description: 'Strategic representation in disputes, lawsuits, and civil proceedings to protect your interests.',
    link: '/services/civil-litigation'
  },
  {
    id: 6,
    icon: <Users className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors" />,
    title: 'Personal Injury',
    description: 'Helping victims of accidents receive fair compensation for injuries and related damages.',
    link: '/services/personal-injury'
  },
];

const FeaturedServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-8">
      {serviceData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="group w-[90%] h-[340px] bg-white rounded-lg shadow-md hover:shadow-xl border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 overflow-hidden hover:bg-blue-700"
        >
          <div className="p-6 h-full flex flex-col justify-between group-hover:text-white transition-colors duration-300">
            <div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold text-black-700 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-blue-600 group-hover:text-white mb-4 transition-colors">
                {service.description}
              </p>
            </div>
            <Link
              to={service.link}
              className="inline-flex items-center text-black-700 group-hover:text-blue-300 font-medium transition-colors"
            >
              Learn More
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedServices;