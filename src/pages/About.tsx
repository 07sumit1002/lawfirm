import { motion } from "framer-motion";
import { Check, Award, Users } from "lucide-react";
import CallToAction from '../components/CallToAction';
import { Link } from "react-router-dom";
import Shahsnk from '../assets/shashank.jpeg';
import Himansh from '../assets/himansh.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const teamMembers = [
  {
    name: 'Adv Himanshu Aggarwal',
    position: 'Legal Aid Counsel',
    image: Himansh,
    specialization: 'Cyber Crime, Data Protection, Criminal Cases, NRI Matrimonial & Other Matters',
    experience: '15 years of experience'
  },
  {
    name: 'Adv Shashank Aggarwal',
    position: 'Former Joint Secretary of Bar Association of Kurukshetra',
    image: Shahsnk,
    specialization: 'Matrimonial Cases, Cyber Crime, Data Protection, Civil Cases, Criminal Cases',
    experience: '7 years of experience'
  }

];

const About = () => {
  return (
    <div>
      <motion.section
        className="pt-32 pb-16 bg-deepRoyal relative"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Aggarwal Legal Firm</h1>
            <p className="text-xl text-gray-100">A premier legal firm with a commitment to excellence and client satisfaction.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-white p-10"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify">
          <div>
            <h2 className="text-4xl font-work font-bold text-deepRoyal mb-6">Our Story</h2>
            <p className="text-black text-lg mb-4">
            Our firm was established in 1970 by Late Shri Vishnu Bhagwan Aggarwal (Tauji) and Late Shri Arvind Kumar Aggarwal (father). 
            Late Shri Vishnu Bhagwan Aggarwal was a renowned senior advocate in the Punjab and Haryana High Court, with a distinguished career spanning over 50 years. 
            Late Shri Arvind Aggarwal was a senior advocate who practiced in Kurukshetra for more than 30 years. 
            A true expert in his field, he was a guiding light in our legal journey and a milestone in our careers.
            </p>
            <p className="text-black text-lg mb-4">
              Established with a vision to deliver trustworthy and client-focused legal services, our firm has stayed true to its founding principles for over five decades.
            </p>
            <p className="text-black text-lg mb-4 font-normal">
              With a legacy of serving more than 3,000 clients, we have handled a wide range of legal matters with professionalism, empathy, and integrity.
            </p>
            <p className="text-black text-lg mb-6 font-extralight">
              Today, Aggarwal Legal Firm is led by two dedicated professionals — Adv. Himanshu Aggarwal, bringing 15 years of legal expertise, and Adv. Shashank Aggarwal, with 7 years of experience. 
              Together, they carry forward a rich tradition of legal excellence and ethical practice.
            </p>

            <div className="space-y-3">
              {["Experienced team of specialized attorneys", "Personalized approach to each case", "Proven track record of successful outcomes", "Commitment to ethical legal practices"].map((text, i) => (
                <div key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-black mt-1 mr-2" />
                  <span className="text-black text-lg font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Law firm office" className="rounded-lg shadow-lg h-[700px] w-full" />
            <div className="absolute -bottom-8 -right-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-deepRoyal font-serif text-2xl font-bold">55+</p>
              <p className="text-deepRoyal">Years of Excellence</p>
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900">Our Values</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-deepRoyal/80 max-w-2xl mx-auto mb-12">These core principles guide our practice and define our approach to legal representation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", description: "We adhere to the highest ethical standards in all our dealings.", icon: <Shield className="h-12 w-12 text-blue-500" /> },
              { title: "Excellence", description: "We strive for excellence in every aspect of our legal practice.", icon: <Award className="h-12 w-12 text-blue-500" /> },
              { title: "Client Focus", description: "We prioritize our clients' needs and work diligently on their behalf.", icon: <Users className="h-12 w-12 text-blue-500" /> },
              { title: "Innovation", description: "We embrace innovative approaches to solve complex legal challenges.", icon: <Lightbulb className="h-12 w-12 text-blue-500" /> }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg border-t-4 border-blue-500 transition-shadow">
                <div className="mb-4">{val.icon}</div>
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-2">{val.title}</h3>
                <p className="text-deepRoyal/80">{val.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Our Team</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet our team of experienced attorneys dedicated to providing exceptional legal representation.</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-8">
              {teamMembers.map((member, index) => (
                <Link
                  to={`/team/${member.name.replace(/\s+/g, '-').toLowerCase()}`}
                  key={index}
                  className="flex bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow w-full max-w-3xl"
                >
                  <div className="flex flex-col md:flex-row w-full">
                    {/* Image Section - 3/10 */}
                    <div className="w-full md:flex-[3] h-48 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Text Section - 7/10 */}
                    <div className="w-full md:flex-[7] p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-serif font-bold text-navy-900">{member.name}</h3>
                      <p className="text-deepRoyal/80 mb-2">{member.position}</p>
                      <p className="text-deepRoyal">Experience: {member.experience}</p>
                      <p className="text-deepRoyal mt-1">Specialization: {member.specialization}</p>
                    </div>
                  </div>

                </Link>
              ))}
            </div>

          </div>

        </div>
      </motion.section>

      <CallToAction />
    </div>
  );
};

const Shield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Lightbulb = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

export default About;
