import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: 'Expert Attorneys',
    description: 'Our team consists of highly qualified lawyers with specialized expertise across various practice areas.'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: 'Prompt Response',
    description: 'We value your time and provide timely responses and solutions to all your legal concerns.'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: 'Proven Results',
    description: 'Our track record speaks for itself with numerous successful cases and satisfied clients.'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Client-Focused',
    description: 'We prioritize your needs and work diligently to achieve the best possible outcome for your case.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white font-mont" style={{overflow:'hidden',}}>
    {/* <section className="py-16 bg-white" style={{overflow:'hidden'}}> */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-work font-bold text-deepRoyal mb-6">
              Why Choose Aggarwal Law Firm?
            </h2>
            <p className="text-deepRoyal mb-8 font-work font-semibold">
              With decades of combined experience, our attorneys bring knowledge, skill, and dedication to every case...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-primary hover:shadow-md">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-work text-deepRoyal mb-2" style={{fontWeight:'700'}}>{feature.title}</h3>
                  <p className="text-deepRoyal" style={{fontWeight:'600'}}>{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Attorneys"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-700 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-white font-serif text-xl mb-2">25+ Years of Experience</p>
              <p className="text-white text-sm">Serving clients since 1998.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
