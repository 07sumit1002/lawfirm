import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import shahnk from '../assets/shashank.jpeg';
import Legalaid from '../assets/legalaid.jpg';

const teamMembers = [
  {
    name: "Adv Himanshu Aggarwal",
    position: "Former Joint Secetary of Bar Association of Kurukshetra",
    image:
      "https://www.nls.ac.in/wp-content/uploads/2023/05/DSC_0507-1-scaled-e1727334727920.jpg",
    specialization: "Corporate Law",
    experience: "15 year of experience",
    bio: "Hello! I’m Advocate Himanshu Aggarwal, a legal practitioner with over 15 years of experience, serving clients in Kurukshetra, Karnal, Punjab & Haryana High Court, and the Supreme Court of India. I specialize in criminal, civil, family, and property law. With a result-oriented and ethical approach, I aim to provide clear legal guidance. I also had the honor of serving as Joint Secretary of the Kurukshetra Bar Association.",
  },
  {
    name: "Adv Shashank Aggarwal",
    position: "Legal Aid Counsel",
    image:shahnk,
    specialization: "Civil Litigation",
    experience: "7 year of experience",
    bio: "Hello! I’m Advocate Shashank Aggarwal, a Legal Aid Counsel with 7 years of experience practicing in Haryana courts. I hold a B.A.LL.B. (Hons) degree and specialize in civil, criminal, cheque bounce, divorce, and service matters. Fluent in English and Hindi, I am committed to offering effective and empathetic legal support, ensuring justice is accessible to all who seek it.",
  },
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
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-xl text-blue-700 mb-1 font-semibold">
              Specialization: {member.specialization}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">{member.bio}</p>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default TeamMemberDetail;
