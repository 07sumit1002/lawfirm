import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import shahnk from '../assets/shashank.jpeg';
import Legalaid from '../assets/legalaid.jpg';
import Himansh from '../assets/himansh.png';

const teamMembers = [
  {
    name: "Adv Himanshu Aggarwal",
    position: "Legal Aid Counsel",
    image: Himansh,
    specialization: "Corporate Law, Civil Litigation, Matrimonial Cases, Cyber Crime, Data Protection, Criminal Cases, NRI Matrimonial & Other Matters",
    experience: "15 years of experience",
    bio: "Hello! I’m Advocate Himanshu Aggarwal, a new-age legal aid counsel with over 15 years of experience. I serve clients across Kurukshetra, Karnal, Punjab & Haryana High Court, and the Supreme Court of India. I specialize in a wide array of legal domains including corporate law, civil litigation, matrimonial disputes, cyber crime, data protection, and criminal law, with a focus on NRI and international matters. Committed to ethical advocacy and result-driven solutions, I strive to bring clarity and confidence to my clients. I’ve also had the privilege of serving as the Joint Secretary of the Kurukshetra Bar Association."
  },
  {
    name: "Adv Shashank Aggarwal",
    position: "Former Joint Secretary of Bar Association of Kurukshetra",
    image: shahnk,
    specialization: "Matrimonial Cases, Cyber Crime, Data Protection, Civil Cases, Criminal Cases",
    experience: "7 years of experience",
    bio: "Hello! I’m Advocate Shashank Aggarwal, a dynamic new-age legal professional with 7 years of experience in the courts of Haryana. I hold a B.A.LL.B. (Hons) degree and bring a modern, client-focused approach to legal practice. My areas of specialization include matrimonial matters, cyber crime, data privacy, civil disputes, and criminal cases. I also handle cheque bounce, divorce, service law, and NRI legal issues. Fluent in English and Hindi, I am committed to delivering responsive, compassionate, and effective legal support for all."
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
      <div className="max-w-4xl mx-auto p-6 sm:p-8">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-xl text-blue-700 mb-2 font-semibold text-justify">
              Specialization: {member.specialization}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">{member.bio}</p>
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
