import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Scale,
  Home,
  Briefcase,
  FileText,
  Building,
  Landmark,
  FileCheck,
  BookOpen,
} from "lucide-react";

type Service = {
  id: number;
  slug: string;
  icon: React.ReactElement;
  title: string;
  description: string;
  details: string;
  image: string;
};

// Services data with type
const servicesData: Service[] = [
  {
    id: 1,
    slug: "family-law",
    icon: <Scale className="h-12 w-12 text-deepRoyal" />,
    title: "Family Law",
    description:
      "Helping families navigate divorce, custody, and support with compassion and expertise.",
    details:
      "Family Law covers legal issues such as divorce, child custody, child support, alimony, adoption, and domestic violence. Our experienced attorneys provide compassionate guidance and strong representation to protect your family’s interests and help you through difficult times.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    slug: "criminal-defense",
    icon: <FileText className="h-12 w-12 text-deepRoyal" />,
    title: "Criminal Defense",
    description: "Defending your rights against DUI, assault, drug, and other criminal charges.",
    details:
      "Our Criminal Defense team aggressively defends clients charged with DUI, assault, theft, drug offenses, and other criminal acts. We protect your rights, work to reduce or dismiss charges, and guide you through the complex criminal justice system.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    slug: "corporate-law",
    icon: <Briefcase className="h-12 w-12 text-deepRoyal" />,
    title: "Corporate Law",
    description:
      "Guiding business formations, contracts, and mergers to secure your company’s future.",
    details:
      "Our Corporate Law services assist businesses with formation, contracts, compliance, mergers, and acquisitions. We ensure your company operates within the legal framework and protect your business interests at every stage.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    slug: "real-estate-law",
    icon: <Home className="h-12 w-12 text-deepRoyal" />,
    title: "Real Estate Law",
    description: "Resolving property disputes, transactions, and zoning issues with precision.",
    details:
      "Our Real Estate Law practice handles property sales and purchases, title issues, landlord-tenant disputes, zoning, and land use. We provide clear guidance to protect your property rights and investments.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    slug: "civil-litigation",
    icon: <Landmark className="h-12 w-12 text-deepRoyal" />,
    title: "Civil Litigation",
    description:
      "Handling commercial disputes, personal injury claims, and insurance matters effectively.",
    details:
      "Our Civil Litigation team represents clients in disputes involving contracts, personal injury, insurance claims, and more. We fight to protect your legal rights and achieve favorable resolutions.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    slug: "intellectual-property",
    icon: <FileCheck className="h-12 w-12 text-deepRoyal" />,
    title: "Intellectual Property",
    description: "Protecting your inventions, trademarks, copyrights, and IP rights diligently.",
    details:
      "We help clients protect their inventions, brands, and creative works through patents, trademarks, copyrights, and trade secrets. Our team ensures your intellectual property is secure and enforceable.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    slug: "employment-law",
    icon: <BookOpen className="h-12 w-12 text-deepRoyal" />,
    title: "Employment Law",
    description:
      "Advising on workplace rights, contracts, harassment, and wrongful termination cases.",
    details:
      "Our Employment Law attorneys guide both employees and employers on workplace rights, contracts, discrimination, harassment, and wrongful termination claims to ensure fair treatment and compliance with labor laws.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    slug: "tax-law",
    icon: <Building className="h-12 w-12 text-deepRoyal" />,
    title: "Tax Law",
    description:
      "Providing tax planning, audits, dispute resolution, and corporate tax strategies.",
    details:
      "Our Tax Law specialists provide advice on tax planning, audits, dispute resolution, estate taxes, and corporate tax matters to minimize liabilities and ensure compliance with tax regulations.",
    image:
      "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-deepRoyal">
          Service Not Found
        </h1>
        <p className="mb-8 text-gray-600">
          Sorry, we couldn’t find the service you are looking for.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-3 bg-deepRoyal text-white rounded hover:bg-indigo-800 transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <Link
        to="/practise areas"
        className="inline-block mb-8 text-deepRoyal hover:underline font-semibold"
      >
        &larr; Back to Services
      </Link>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            {React.cloneElement(service.icon, {
              className: "h-14 w-14 text-deepRoyal mr-3",
            })}
            <h1 className="text-4xl font-bold text-deepRoyal">{service.title}</h1>
          </div>

          <p className="text-lg mb-6 text-gray-700">{service.details}</p>

          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 bg-deepRoyal text-white rounded hover:bg-indigo-800 transition"
          >
            Contact Us to know more about {service.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
