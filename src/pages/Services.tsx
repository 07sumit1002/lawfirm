import React from 'react';
import { Scale, Home, Briefcase, FileText, Building, Landmark, FileCheck, BookOpen } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { motion } from "framer-motion";
import { Check, Award, Users } from "lucide-react";

const servicesData = [
  {
    id: 1,
    icon: <Scale className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Family Law',
    description: 'Our attorneys provide compassionate guidance through divorce, child custody, support matters, adoption, and other family-related legal issues.',
    items: ['Divorce Proceedings', 'Child Custody', 'Alimony & Support', 'Adoption', 'Domestic Violence']
  },
  {
    id: 2,
    icon: <FileText className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Criminal Defense',
    description: 'Expert criminal defense representation for those facing charges and navigating the justice system, from minor offenses to serious crimes.',
    items: ['DUI Defense', 'Assault Charges', 'Drug Offenses', 'White Collar Crimes', 'Juvenile Cases']
  },
  {
    id: 3,
    icon: <Briefcase className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Corporate Law',
    description: 'Comprehensive legal services for businesses including formation, contracts, compliance, mergers and acquisitions, and corporate governance.',
    items: ['Business Formation', 'Contract Drafting', 'Mergers & Acquisitions', 'Corporate Governance', 'Compliance']
  },
  {
    id: 4,
    icon: <Home className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Real Estate Law',
    description: 'Assistance with property transactions, disputes, leases, zoning issues, and real estate regulations for both residential and commercial properties.',
    items: ['Property Transactions', 'Landlord-Tenant Disputes', 'Zoning Issues', 'Construction Contracts', 'Property Disputes']
  },
  {
    id: 5,
    icon: <Landmark className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Civil Litigation',
    description: 'Strategic representation in disputes, lawsuits, and civil proceedings to protect your interests and achieve favorable outcomes.',
    items: ['Commercial Disputes', 'Personal Injury Claims', 'Contract Disputes', 'Property Litigation', 'Insurance Claims']
  },
  {
    id: 6,
    icon: <FileCheck className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Intellectual Property',
    description: 'Protection for your intellectual assets including patents, trademarks, copyrights, and trade secrets in an increasingly competitive market.',
    items: ['Patent Applications', 'Trademark Registration', 'Copyright Protection', 'IP Litigation', 'Licensing Agreements']
  },
  {
    id: 7,
    icon: <BookOpen className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Employment Law',
    description: 'Legal counsel for both employers and employees on workplace issues, rights, policies, and dispute resolution.',
    items: ['Workplace Discrimination', 'Wrongful Termination', 'Employment Contracts', 'Workplace Harassment', 'Wage Disputes']
  },
  {
    id: 8,
    icon: <Building className="h-12 w-12 text-gold-500 group-hover:text-white transition-colors" />,
    title: 'Tax Law',
    description: 'Expert guidance on tax planning, compliance, audits, and resolution of tax disputes with government authorities.',
    items: ['Tax Planning', 'IRS Audits', 'Tax Dispute Resolution', 'International Taxation', 'Corporate Tax Strategy']
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const Services = () => {
  return (
    <div>
      <motion.section
        className="pt-32 pb-16 bg-navy-900 relative"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 animate-parallax"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our Practice Areas
            </h1>

            <p className="text-xl text-gray-300">
              Comprehensive legal services tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">
              Expertise Across Multiple Legal Domains
            </h2>
            <p className="text-blue-600">
              Our team of experienced attorneys provides comprehensive legal services across a wide range of practice areas. Whatever your legal needs, we have the expertise to help you navigate complex legal matters and achieve favorable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group bg-white hover:bg-navy-900 rounded-lg shadow-md hover:shadow-xl border border-gray-200 hover:border-gold-500 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-white mb-4 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 mb-6 transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Our Approach to Legal Services
              </h2>

              <p className="text-gray-600 mb-6">
                At Aggarwal Law Firm, we believe in a client-centered approach that focuses on understanding your unique needs and developing tailored legal strategies to achieve your goals.
              </p>

              <div className="space-y-6">
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
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-500 text-navy-900 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative ">
              <img
                src="/images/law.jpg"
                alt="Attorney working with client"
                className="rounded-lg shadow-lg w-full transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <CallToAction />
    </div>
  );
};

export default Services;
