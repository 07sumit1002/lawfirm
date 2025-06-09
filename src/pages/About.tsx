import { motion } from "framer-motion";
import { Check, Award, Users } from "lucide-react";
import CallToAction from '../components/CallToAction';
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const teamMembers = [
  {
    name: 'Rajesh Aggarwal',
    position: 'Founder & Senior Advocate',
    image: 'https://www.nls.ac.in/wp-content/uploads/2023/05/DSC_0507-1-scaled-e1727334727920.jpg',
    specialization: 'Corporate Law'
  },
  {
    name: 'Sunita Sharma',
    position: 'Managing Partner',
    image: 'https://content.jdmagicbox.com/v2/comp/hyderabad/y9/040pxx40.xx40.160226125303.x3y9/catalogue/anuradha-high-court-advocate-a-and-s-law-firm-kothapet-hyderabad-lawyers-for-criminal-2k0oajwezl.jpg',
    specialization: 'Family Law'
  },
  {
    name: 'Vikram Singh',
    position: 'Senior Associate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc2sS6rJSsG9kbHujdYF2eFiy2fP6OlSfFA&s',
    specialization: 'Criminal Defense'
  },
  {
    name: 'Priya Mehta',
    position: 'Associate',
    image: 'https://lawrato.com/expert_images/thumb/webp/advocate-sunita-punia.webp',
    specialization: 'Real Estate Law'
  },
  {
    name: 'Amit Patel',
    position: 'Associate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmH4u3ogtWBSggGrVFTRSBcVGzdT5GJa4jQ&s',
    specialization: 'Civil Litigation'
  },
  {
    name: 'Nisha Verma',
    position: 'Junior Associate',
    image: 'https://www.advotalks.com/images/1719994368-neelam.jpg',
    specialization: 'Intellectual Property'
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
            <p className="text-xl text-gray-100">A premier law firm with a commitment to excellence and client satisfaction.</p>
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
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-deepRoyal mb-6">Our Story</h2>
            <p className="text-deepRoyal/80 mb-4 font-extralight">Founded in 1998 by Senior Advocate Rajesh Aggarwal, our firm has grown from a small practice to one of the most respected legal establishments in the region.</p>
            <p className="text-deepRoyal/80 mb-4 font-normal">Our mission is to deliver high-quality legal services with integrity, efficiency, and a focus on results. We believe in building long-term relationships with our clients based on trust and successful outcomes.</p>
            <p className="text-deepRoyal/80 mb-6 font-extralight">Today, Aggarwal Law Firm is home to a diverse team of legal professionals who share a common commitment to excellence and client advocacy.</p>
            <div className="space-y-3">
              {["Experienced team of specialized attorneys", "Personalized approach to each case", "Proven track record of successful outcomes", "Commitment to ethical legal practices"].map((text, i) => (
                <div key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-2" />
                  <span className="text-deepRoyal font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Law firm office" className="rounded-lg shadow-lg h-[700px] w-full" />
            <div className="absolute -bottom-8 -right-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-deepRoyal font-serif text-2xl font-bold">25+</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto">Meet our team of experienced attorneys dedicated to providing exceptional legal representation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Link
                to={`/team/${member.name.replace(/\s+/g, '-').toLowerCase()}`}
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-900">{member.name}</h3>
                  <p className="text-deepRoyal/80 mb-2">{member.position}</p>
                  <p className="text-deepRoyal">Specialization: {member.specialization}</p>
                </div>
              </Link>
            ))}
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
