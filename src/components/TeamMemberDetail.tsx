import { useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import shashank from '../assets/shashank.jpeg';
import Legalaid from '../assets/legalaid.jpg';
import Himansh from '../assets/himansh.png';

const teamMembers = [
  {
    name: "Adv Himanshu Aggarwal",
    position: "Legal Aid Counsel",
    image: Himansh,
    specialization: "Corporate Law, Civil Litigation, Matrimonial Cases, Cyber Crime, Data Protection, Criminal Cases, NRI Matrimonial & Other Matters",
    experience: "15 years of experience",
    bio: "Hello! I’m Advocate Himanshu Aggarwal, a new-age legal aid counsel with over 15 years of experience. I serve clients across Kurukshetra, Karnal, Punjab & Haryana High Court, and the Supreme Court of India. I specialize in a wide array of legal domains including corporate law, civil litigation, matrimonial disputes, cyber crime, data protection, and criminal law, with a focus on NRI and international matters. Committed to ethical advocacy and result-driven solutions, I strive to bring clarity and confidence to my clients. I’ve also had the privilege of serving as the Joint Secretary of the Kurukshetra Bar Association.",
    workExperience: [
      {
        title: "Legal Aid counsel",
        company: "Self-employed",
        location: "Kurukshetra, Haryana",
        duration: "Jun 2011 - Present · 14 yrs 1 mo",
        description: "Practicing in Courts. Speciality in drafting cases, agreements, power of attorney, legal notices, application replies etc. Also well-versed in labour law, especially termination-related matters."
      },
      {
        title: "Former Joint Secretary of Bar Association of Kurukshetra",
        company: "",
        location: "Haryana, India",
        duration: "",
        description: ""
      },
      {
        title: "Panel Lawyer For PNB",
        company: "",
        location: "Haryana, India",
        duration: "",
        description: ""
      }
    ],
    education: [
      {
        institute: "Department of Law, Kurukshetra University Kurukshetra",
        degree: "Bachelor of Laws - LLB",
        specialization: "Civil, Criminal, Matrimonial, Service Matter, Labour Matter etc",
        duration: "2006 - 2011"
      }
    ]
  },
  {
    name: "Adv Shashank Aggarwal",
    position: "Former Joint Secretary of Bar Association of Kurukshetra",
    image: shashank,
    specialization: "Matrimonial Cases, Cyber Crime, Data Protection, Civil Cases, Criminal Cases",
    experience: "7 years of experience",
    bio: "Hello! I’m Advocate Shashank Aggarwal, a dynamic new-age legal professional with 7 years of experience in the courts of Haryana. I hold a B.A.LL.B. (Hons) degree and bring a modern, client-focused approach to legal practice. My areas of specialization include matrimonial matters, cyber crime, data privacy, civil disputes, and criminal cases. I also handle cheque bounce, divorce, service law, and NRI legal issues. Fluent in English and Hindi, I am committed to delivering responsive, compassionate, and effective legal support for all.",
    workExperience: [
      {
        title: "Legal Advocate",
        company: "Independent Practitioner",
        location: "Haryana, India",
        duration: "2017 - Present · 8 yrs 2 mo",
        description: "Representing clients in matrimonial, criminal, civil and cyber law matters. Handling NRI legal support and service-related disputes across district and high courts."
      },
      {
        title: "Panel Lawyer For PNB",
        company: "",
        location: "Haryana, India",
        duration: "",
        description: ""
      }
    ],
    education: [
      {
        institute: "Institute of law Kurukshetra University Kurukshetra",
        degree: "B.A.LL.B.",
        specialization: "Matrimonial Law, Cyber Crime, Civil & Criminal Practice",
        duration: "2012 - 2017"
      }
    ]
  }
];


const TeamMemberDetail = () => {
  const { name } = useParams();
  const memberSlug = name?.replace(/-/g, " ").toLowerCase();

  const member = teamMembers.find((m) => m.name.toLowerCase() === memberSlug);

  if (!member) {
    return (
      <div className="p-10 text-center text-red-600">
        Team member not found.
      </div>
    );
  }

  return (
    <div>
      {/* Parallax Header */}
      <div
        className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage: `url('${Legalaid}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-bold mb-2">
            {member.name}
          </h1>
          <p className="text-lg text-blue-100">{member.position}</p>
          <p className="text-lg text-blue-100">{member.experience}</p>
        </div>
      </div>

      {/* Detail Section */}
      <div className="max-w-5xl mx-auto p-6 sm:p-8">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-xl text-deepRoyal mb-2 font-semibold text-justify">
              <span className="text-blue-700 ">Specialization: </span> {member.specialization}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mb-6">{member.bio}</p>

            {member.workExperience && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Work Experience</h3>
                {member.workExperience.map((exp, index) => (
                  <div key={index} className="mb-4 text-gray-800">
                    <p className="font-semibold">{exp.title} · {exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.duration}</p>
                    <p className="text-sm italic">{exp.location}</p>
                    <p className="text-sm mt-1 text-justify">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {member.education && (
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Education</h3>
                {member.education.map((edu, index) => (
                  <div key={index} className="text-gray-800 mb-3">
                    <p className="font-semibold">{edu.institute}</p>
                    <p className="text-sm">{edu.degree}</p>
                    <p className="text-sm italic">{edu.specialization}</p>
                    <p className="text-sm text-gray-600">{edu.duration}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full max-w-xs sm:max-w-sm md:w-64 aspect-square flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default TeamMemberDetail;
