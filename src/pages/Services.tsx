import React, { useRef, useState } from "react";
import {
  Scale,
  Home,
  Briefcase,
  FileText,
  Building,
  Landmark,
  FileCheck,
  BookOpen,
} from "lucide-react";
import { useInView, motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="will-change-transform group bg-white text-deepRoyal hover:bg-deepRoyal hover:text-white transform transition-all duration-500 rounded-lg shadow-md hover:shadow-xl border border-gray-200 hover:border-deepRoyal overflow-visible relative"
    >
      {children}
    </motion.div>
  );
};

const Popup = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-deepRoyal mb-4">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <h4 className="text-lg font-semibold text-deepRoyal mb-2">
          More Details
        </h4>
        <p className="text-gray-600">{service.details}</p>
      </div>
    </div>
  );
};

const servicesData = [
  {
    id: 1,
    icon: <Scale className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Family Law',
    description: 'Helping families navigate divorce, custody, and support with compassion and expertise.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    icon: <FileText className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Criminal Defense',
    description: 'Defending your rights against DUI, assault, drug, and other criminal charges.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    icon: <Briefcase className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Corporate Law',
    description: 'Guiding business formations, contracts, and mergers to secure your company’s future.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    icon: <Home className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Real Estate Law',
    description: 'Resolving property disputes, transactions, and zoning issues with precision.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    icon: <Landmark className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Civil Litigation',
    description: 'Handling commercial disputes, personal injury claims, and insurance matters effectively.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    icon: <FileCheck className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Intellectual Property',
    description: 'Protecting your inventions, trademarks, copyrights, and IP rights diligently.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    icon: <BookOpen className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Employment Law',
    description: 'Advising on workplace rights, contracts, harassment, and wrongful termination cases.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    icon: <Building className="h-12 w-12 text-deepRoyal group-hover:text-white transition-colors" />,
    title: 'Tax Law',
    description: 'Providing tax planning, audits, dispute resolution, and corporate tax strategies.',
    image:
      'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openPopup = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <div>
      <section className="pt-32 pb-16 bg-deepRoyal relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-white">
              Comprehensive legal services tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white"> */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deepRoyal mb-4">
              Expertise Across Multiple Legal Domains
            </h2>
            <p className="text-lg text-blue-gray-400 leading-snug max-w-3.5xl mx-auto">
              Our team of experienced attorneys provides comprehensive legal services across a wide
              range of practice areas. Whatever your legal needs, we have the expertise to help you
              navigate complex legal matters and achieve favorable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {servicesData.map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 0.1}>
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

                  <h3 className="mt-12 text-2xl font-bold text-deepRoyal group-hover:text-white mb-4 transition-colors">
                    {service.title}
                  </h3>

                  {/* New description text instead of ul */}
                  <p className="text-deepRoyal group-hover:text-white transition-colors text-base max-w-xs mx-auto">
                    {service.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-royal-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Approach to Legal Services
              </h2>
              <p className="mb-6 text-base md:text-lg">
                At Aggarwal Law Firm, we believe in a client-centered approach
                that focuses on understanding your unique needs and developing
                tailored legal strategies to achieve your goals.
              </p>
              <div className="space-y-6 text-base md:text-lg">
                {[
                  {
                    title: "Initial Consultation",
                    description:
                      "We begin with a thorough consultation to understand your legal needs and objectives.",
                  },
                  {
                    title: "Strategy Development",
                    description:
                      "Our team develops a customized legal strategy tailored to your specific situation.",
                  },
                  {
                    title: "Execution & Representation",
                    description:
                      "We implement the strategy with meticulous attention to detail and advocate on your behalf.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "We provide continuous guidance and support throughout the legal process and beyond.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-royal-blue-900 font-semibold text-base">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/laws.png"
                alt="Attorney working with client"
                className="rounded-lg shadow-lg w-full h-[480px] md:h-[580px] lg:h-[620px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        service={selectedService}
      />
    </div>
  );
};

export default Services;
