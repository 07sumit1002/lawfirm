import { useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";

const teamMembers = [
  {
    name: "Rajesh Aggarwal",
    position: "Founder & Senior Advocate",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Corporate Law",
    bio: "Rajesh Aggarwal has over 25 years of experience in corporate litigation, compliance advisory, and mergers & acquisitions. He founded the firm with a vision to deliver reliable and ethical legal services.",
  },
  {
    name: "Sunita Sharma",
    position: "Managing Partner",
    image:
      "https://images.pexels.com/photos/7645903/pexels-photo-7645903.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Family Law",
    bio: "Sunita is known for her compassionate yet strategic approach to family and matrimonial cases. She has helped hundreds of clients navigate complex legal matters with dignity.",
  },
  {
    name: "Vikram Singh",
    position: "Senior Associate",
    image:
      "https://images.pexels.com/photos/5668901/pexels-photo-5668901.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Criminal Defense",
    bio: "Vikram specializes in defending high-profile criminal cases with a meticulous eye for detail and unwavering commitment to justice.",
  },
  {
    name: "Priya Mehta",
    position: "Associate",
    image:
      "https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Real Estate Law",
    bio: "Priya handles a wide range of real estate transactions, regulatory compliance, and property dispute resolution with expertise and efficiency.",
  },
  {
    name: "Amit Patel",
    position: "Associate",
    image:
      "https://images.pexels.com/photos/8422415/pexels-photo-8422415.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Civil Litigation",
    bio: "Amit represents clients in civil courts with a focus on contract disputes, tort claims, and property matters.",
  },
  {
    name: "Nisha Verma",
    position: "Junior Associate",
    image:
      "https://images.pexels.com/photos/5668907/pexels-photo-5668907.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Intellectual Property",
    bio: "Nisha is passionate about protecting intellectual property rights and has successfully handled trademark and copyright cases for startups and artists.",
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
        className="h-[350px] bg-fixed bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage: `url('${member.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-bold mb-2">
            {member.name}
          </h1>
          <p className="text-lg text-blue-100">{member.position}</p>
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
            <p className="text-gray-700 leading-relaxed">{member.bio}</p>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default TeamMemberDetail;
