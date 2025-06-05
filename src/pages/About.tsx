import { motion } from "framer-motion";
import { Check, Award, Users } from "lucide-react";
import CallToAction from '../components/CallToAction';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const About = () => {
  return (
    <div>
      <motion.section
        className="pt-32 pb-16 bg-blue-900 relative"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col mx-auto items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              About Aggarwal Law Firm
            </h1>

            <p className="text-xl text-gray-300">
              A premier law firm with a commitment to excellence and client satisfaction.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <div>
              <h2 className="text-3xl font-serif font-bold text-blue-700 mb-6">
                Our Story
              </h2>

              <p className="text-blue-600 mb-4">
                Founded in 1998 by Senior Advocate Rajesh Aggarwal, our firm has grown from a small practice to one of the most respected legal establishments in the region. For over two decades, we have provided exceptional legal representation to individuals and businesses alike.
              </p>

              <p className="text-blue-600 mb-4">
                Our mission is to deliver high-quality legal services with integrity, efficiency, and a focus on results. We believe in building long-term relationships with our clients based on trust and successful outcomes.
              </p>

              <p className="text-blue-600 mb-6">
                Today, Aggarwal Law Firm is home to a diverse team of legal professionals who share a common commitment to excellence and client advocacy.
              </p>

              <div className="space-y-3">
                {[
                  'Experienced team of specialized attorneys',
                  'Personalized approach to each case',
                  'Proven track record of successful outcomes',
                  'Commitment to ethical legal practices'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mt-1 mr-2" />
                    <span className="text-blue-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Law firm office"
                className="rounded-lg shadow-lg h-[700px] w-full"
              />

              <div className="absolute -bottom-8 -right-8 bg-blue-500 p-6 rounded-lg shadow-lg">
                <p className="text-white font-serif text-2xl font-bold">25+</p>
                <p className="text-white">Years of Excellence</p>
              </div>
            </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
            <p className="text-blue-600 max-w-2xl mx-auto">
              These core principles guide our practice and define our approach to legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We adhere to the highest ethical standards in all our dealings.',
                icon: <Shield className="h-12 w-12 text-blue-500" />
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our legal practice.',
                icon: <Award className="h-12 w-12 text-blue-500" />
              },
              {
                title: 'Client Focus',
                description: 'We prioritize our clients\' needs and work diligently on their behalf.',
                icon: <Users className="h-12 w-12 text-blue-500" />
              },
              {
                title: 'Innovation',
                description: 'We embrace innovative approaches to solve complex legal challenges.',
                icon: <Lightbulb className="h-12 w-12 text-blue-500" />
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg border-t-4 border-blue-500 transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-blue-600">{value.description}</p>
              </div>
            ))}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced attorneys dedicated to providing exceptional legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Aggarwal',
                position: 'Founder & Senior Advocate',
                image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
                specialization: 'Corporate Law'
              },
              {
                name: 'Sunita Sharma',
                position: 'Managing Partner',
                image: 'https://images.pexels.com/photos/7645903/pexels-photo-7645903.jpeg?auto=compress&cs=tinysrgb&w=600',
                specialization: 'Family Law'
              },
              {
                name: 'Vikram Singh',
                position: 'Senior Associate',
                image: 'https://images.pexels.com/photos/5668901/pexels-photo-5668901.jpeg?auto=compress&cs=tinysrgb&w=600',
                specialization: 'Criminal Defense'
              },
              {
                name: 'Priya Mehta',
                position: 'Associate',
                image: 'https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=600',
                specialization: 'Real Estate Law'
              },
              {
                name: 'Amit Patel',
                position: 'Associate',
                image: 'https://images.pexels.com/photos/8422415/pexels-photo-8422415.jpeg?auto=compress&cs=tinysrgb&w=600',
                specialization: 'Civil Litigation'
              },
              {
                name: 'Nisha Verma',
                position: 'Junior Associate',
                image: 'https://images.pexels.com/photos/5668907/pexels-photo-5668907.jpeg?auto=compress&cs=tinysrgb&w=600',
                specialization: 'Intellectual Property'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-900">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.position}</p>
                  <p className="text-blue-700">Specialization: {member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <CallToAction />
    </div>
  );
};

const Shield = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
};

const Lightbulb = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
};

export default About;
