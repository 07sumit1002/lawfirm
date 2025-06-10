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
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    slug: "criminal-defense",
    title: "Criminal Defense",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    slug: "corporate-law",
    title: "Corporate Law",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    slug: "real-estate-law",
    title: "Real Estate Law",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    slug: "civil-litigation",
    title: "Civil Litigation",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    slug: "intellectual-property",
    title: "Intellectual Property",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    slug: "employment-law",
    title: "Employment Law",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    slug: "tax-law",
    title: "Tax Law",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

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
        <div className="max-w-[70rem] mx-auto px-4">
          <div className="text-center mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {servicesData.map((service, index) => (
              <Link to={`/services/${service.slug}`} key={service.id} className="w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="
                    group relative flex flex-col items-center justify-start
                    w-72 mt-6 px-6 pt-12 pb-3 m-2 mb-6
                    bg-white rounded-xl border shadow-md
                    transition-all duration-300
                    hover:bg-blue-900 hover:text-white hover:shadow-2xl cursor-pointer
                  "
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
                  {/* Title, arrow, and golden underline */}
                  <div className="flex items-center justify-center gap-2 mt-14 mb-2">
                    <span className="text-2xl font-bold text-blue-900 group-hover:text-white transition-colors text-center">
                      {service.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-yellow-500 group-hover:text-white transition-colors"
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
