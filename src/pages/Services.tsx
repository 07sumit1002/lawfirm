import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

// Shared data with slug added for routing
const servicesData = [
  {
    id: 1,
    slug: "family-law",
    title: "Family Law",
    description:
      "Helping families navigate divorce, custody, and support with compassion and expertise.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    slug: "criminal-defense",
    title: "Criminal Defense",
    description: "Defending your rights against DUI, assault, drug, and other criminal charges.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    slug: "corporate-law",
    title: "Corporate Law",
    description:
      "Guiding business formations, contracts, and mergers to secure your company’s future.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    slug: "real-estate-law",
    title: "Real Estate Law",
    description: "Resolving property disputes, transactions, and zoning issues with precision.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    slug: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Handling commercial disputes, personal injury claims, and insurance matters effectively.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    slug: "intellectual-property",
    title: "Intellectual Property",
    description: "Protecting your inventions, trademarks, copyrights, and IP rights diligently.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    slug: "employment-law",
    title: "Employment Law",
    description:
      "Advising on workplace rights, contracts, harassment, and wrongful termination cases.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    slug: "tax-law",
    title: "Tax Law",
    description:
      "Providing tax planning, audits, dispute resolution, and corporate tax strategies.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// AnimatedCard component
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
      animate={inView ? "visible" : "hidden"}
      className="will-change-transform group bg-white text-deepRoyal hover:bg-deepRoyal hover:text-white transform transition-all duration-500 rounded-lg shadow-md hover:shadow-xl border border-gray-200 hover:border-deepRoyal overflow-visible relative cursor-pointer flex flex-col h-full"
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deepRoyal mb-4">
              Expertise Across Multiple Legal Domains
            </h2>
            <p className="text-lg text-blue-gray-400 leading-snug max-w-3.5xl mx-auto">
              Our team of experienced attorneys provides comprehensive legal
              services across a wide range of practice areas. Whatever your legal
              needs, we have the expertise to help you navigate complex legal
              matters and achieve favorable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {servicesData.map((service, index) => (
              <Link to={`/services/${service.slug}`} key={service.id}>
                <AnimatedCard delay={index * 0.1}>
                  <div className="relative pt-10 px-8 pb-8 text-center overflow-visible flex flex-col h-full">
                    {/* Circular image half above the card */}
                    <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 z-20">
                      <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="mt-10 text-2xl font-bold text-deepRoyal group-hover:text-white mb-4 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-deepRoyal group-hover:text-white transition-colors text-base max-w-xs mx-auto flex-grow">
                      {service.description}
                    </p>
                  </div>
                </AnimatedCard>
              </Link>
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
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
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
    </div>
  );
};

export default Services;
