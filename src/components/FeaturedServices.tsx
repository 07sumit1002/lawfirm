import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    "id": 1,
    "slug": "matrimonial-cases",
    "title": "Matrimonial Cases",
    "image": "/images/nri matrimonial.jpg"
  },
  {
    "id": 2,
    "slug": "criminal",
    "title": "Criminal Law",
    "image": "/images/criminal law.jpg"
  },
  {
    "id": 3,
    "slug": "insurance-claims",
    "title": "Insurance Claims",
    "image": "/images/insurance.jpg"
  },
  {
    "id": 4,
    "slug": "appellate-law",
    "title": "Appellate Law",
    "image": "/images/appleate.jpg"
  },
  {
    "id": 5,
    "slug": "civil-litigation",
    "title": "Civil Litigation",
    "image": "/images/civil litigation.jpg"
  },
  {
    "id": 6,
    "slug": "intellectual-property",
    "title": "Intellectual Property",
    "image": "/images/intellectual.jpg"
  }
];

const FeaturedServices = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {serviceData.map((service, index) => (
          <Link to={`/practise areas/${service.slug}`} key={service.id} className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-start
                w-72 mt-6 px-6 pt-12 pb-3 m-2 mb-6
                bg-white rounded-xl border shadow-md
                transition-all duration-300
                hover:text-white hover:shadow-2xl cursor-pointer"
            >
              {/* Centered circular image */}
              <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-20">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title and icon */}
              <div className="flex items-center justify-center gap-2 mt-14 mb-2">
                <span className="text-2xl font-bold text-deepRoyal group-hover:text-gray-200 transition-colors text-center">
                  {service.title}
                </span>
                <svg
                  className="w-5 h-4 text-yellow-500 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="mx-auto mb-2 w-10 h-0.5 bg-yellow-500 rounded-full group-hover:bg-white transition-colors"></div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
