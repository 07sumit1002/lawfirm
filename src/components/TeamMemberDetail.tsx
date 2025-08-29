import { useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import shashank from '../../public/assets/shashank.jpeg';
import Legalaid from '../../public/assets/legalaid.jpg';
import Himansh from '../../public/assets/himansh.jpeg';

const teamMembers = [
  {
    name: "Adv Himanshu Aggarwal",
    position: "Former Joint Secretary of Bar Association of Kurukshetra",
    image: Himansh,
    specialization: " Civil Litigation, Matrimonial Cases, Cyber Crime, Data Protection, Criminal Cases, NRI Matrimonial & Other Matters",
    experience: "15 years of experience",
    bio: "I'm Advocate Himanshu Aggarwal, a seasoned legal counsel with over 15 years of experience, serving clients across Kurukshetra, Karnal, and the Punjab & Haryana High Court. I hold a BA.LLB (Hons) 5 year degree from Institute of Law Kurukshetra University, Kurukshetra (Batch 2006-2011), which laid the foundation for my deep legal expertise. I combine this foundation with a forward-thinking approach, strategically leveraging AI and other modern tools to provide efficient and effective legal solutions.",
    workExperience: [
      {
        title: " ",
        company: "Self-employed",
        location: "Kurukshetra, Haryana",
        duration: "Jun 2011 - Present · 15 yrs ",
        description: "Practicing in Courts. Speciality in drafting cases, agreements, power of attorney, legal notices, application replies etc. Also well-versed in labour law, especially termination-related matters."
      },
      {
        title: "Former Joint Secretary of Bar Association of Kurukshetra",
        company: "",
        location: "Haryana, India",
        duration: "",
        description: "Beyond our commercial practice, we are deeply committed to serving the community. Advocate Himanshu Aggarwal proudly served as a Legal Aid Counsel on the panel from 2019 to 2025, contributing to the noble cause of ensuring access to justice for society's vulnerable sections. This public service reflects our core values of social responsibility."
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
        degree: "Bachelor of Laws - LLB(Hons.)",
        specialization: "Civil, Criminal, Matrimonial, Service Matter, Labour Matter etc",
        duration: "2006 - 2011"
      }
    ], areasOfExpertise: [
      "Matrimonial Law: Handling divorce, maintenance, child custody, and domestic violence cases with sensitivity and expertise.",
      "Cybercrime & Data Privacy: Representing clients in cases involving online fraud, data breaches, cyberbullying, and ensuring digital rights protection.",
      "Civil Disputes: Addressing a wide range of property disputes, contractual disagreements, and other civil litigations.",
      "Criminal Law: Providing robust defense and prosecution support for various criminal cases.",
      "Cheque Bounce Cases: Expert assistance in recovery proceedings under the Negotiable Instruments Act.",
      "Service Law: Advising and representing individuals on employment and service-related matters.",
      "NRI Legal Issues: Specializing in complex legal challenges faced by Non-Resident Indians."
    ]
  },
  {
    name: "Adv Shashank Aggarwal",
    position: "",
    image: shashank,
    specialization: "Matrimonial Cases, Cyber Crime, Data Protection, Civil Cases, Criminal Cases",
    experience: "8 years of experience",
    bio: " I’m is a new-age and young legal professional dedicated to delivering modern, client-focused legal solutions across Haryana. With 8 years of experience in the courts, Advocate Aggarwal brings a dynamic approach, integrating modern AI technology tools into practice to provide efficient, insightful, and precise legal support.Holding a B.A.LL.B. (Hons) degree from Institute of Law Kurukshetra university Kurukshetra, Advocate Aggarwal combines a strong academic foundation with practical expertise, ensuring comprehensive guidance for clients.",
    workExperience: [
      {
        title: "Legal Advocate",
        company: "Independent Practitioner",
        location: "Haryana, India",
        duration: "2017 - Present · 8 yrs ",
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
        degree: "B.A.LL.B.(Hons)",
        specialization: "Matrimonial Law, Cyber Crime, Civil & Criminal Practice",
        duration: "2012 - 2017"
      }
    ], areasOfExpertise: [
      "Matrimonial Law: Handling divorce, maintenance, child custody, and domestic violence cases with sensitivity and expertise.",
      "Cybercrime & Data Privacy: Representing clients in cases involving online fraud, data breaches, cyberbullying, and ensuring digital rights protection.",
      "Civil Disputes: Addressing a wide range of property disputes, contractual disagreements, and other civil litigations.",
      "Criminal Law: Providing robust defense and prosecution support for various criminal cases.",
      "Cheque Bounce Cases: Expert assistance in recovery proceedings under the Negotiable Instruments Act.",
      "Service Law: Advising and representing individuals on employment and service-related matters.",
      "NRI Legal Issues: Specializing in complex legal challenges faced by Non-Resident Indians."
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
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-start">
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
            {member.areasOfExpertise && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Areas of Expertise</h3>
                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                  {member.areasOfExpertise.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
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
