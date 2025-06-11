import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const servicesData=[
  {
    "id": 1,
    "slug": "family-law",
    "title": "Family Law",
    "description": "Helping families navigate divorce, custody, and support with compassion and expertise.",
    "details": "Our Family Law practice is dedicated to guiding clients through some of life’s most challenging and sensitive moments. We handle all aspects of family relationships, including divorce, legal separation, child custody and visitation, child and spousal support, adoption, and domestic violence protection. We understand that every family is unique, and we tailor our approach to achieve the best possible outcomes while minimizing emotional and financial stress. Our attorneys combine legal expertise with empathy, working closely with clients to protect their interests and ensure the well-being of their loved ones. Whether you are seeking to resolve disputes amicably through mediation or require assertive representation in court, we are committed to standing by your side every step of the way.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Divorce & Legal Separation",
      "Child Custody & Visitation Arrangements",
      "Child & Spousal Support",
      "Adoption & Guardianship",
      "Domestic Violence Restraining Orders",
      "Prenuptial & Postnuptial Agreements"
    ],
    "faqs": [
      {
        "question": "What should I bring to my first consultation?",
        "answer": "Bring any relevant legal documents such as marriage certificates, court orders, financial records, and a list of questions or concerns you have."
      },
      {
        "question": "How long does a typical divorce process take?",
        "answer": "The duration varies depending on the complexity of the case and whether it is contested, but most cases resolve within 6-12 months."
      }
    ],
    "process": [
      "Initial Consultation & Case Assessment",
      "Document Collection & Review",
      "Negotiation & Mediation",
      "Court Representation (if needed)",
      "Resolution & Follow-up"
    ],
    "cta": "Contact our Family Law team for a confidential consultation and let us help you protect your family's future."
  },
  {
    "id": 2,
    "slug": "criminal-defense",
    "title": "Criminal Defense",
    "description": "Defending your rights against DUI, assault, drug, and other criminal charges.",
    "details": "Our Criminal Defense attorneys provide aggressive and strategic representation for individuals facing criminal charges. We handle a wide range of cases, including DUI and DWI, drug offenses, assault and battery, theft, white-collar crimes, and juvenile offenses. We understand the stakes are high—your reputation, freedom, and future are on the line. From the moment you contact us, we work tirelessly to investigate the facts, challenge the prosecution’s evidence, and protect your constitutional rights. Our team is experienced in both negotiation and trial advocacy, striving to reduce or dismiss charges whenever possible. We also guide clients through bail hearings, pre-trial motions, and, if necessary, appeals. We believe everyone deserves a robust defense and are committed to providing personalized attention and clear communication throughout the process.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "DUI & DWI Defense",
      "Drug Offense Representation",
      "Assault & Battery Cases",
      "Theft & Burglary Defense",
      "White Collar Crimes",
      "Juvenile Defense"
    ],
    "faqs": [
      {
        "question": "What should I do if I'm arrested?",
        "answer": "Remain calm, exercise your right to remain silent, and request an attorney before answering any questions."
      },
      {
        "question": "Can charges be dropped before trial?",
        "answer": "Yes, in some cases charges can be reduced or dismissed depending on the evidence and legal arguments presented."
      }
    ],
    "process": [
      "Case Evaluation & Strategy",
      "Investigation & Evidence Gathering",
      "Pre-Trial Motions",
      "Trial Preparation & Representation",
      "Appeals (if necessary)"
    ],
    "cta": "If you’re facing criminal charges, contact us immediately for a strong defense."
  },
  {
    "id": 3,
    "slug": "corporate-law",
    "title": "Corporate Law",
    "description": "Guiding business formations, contracts, and mergers to secure your company’s future.",
    "details": "Our Corporate Law practice supports businesses of all sizes, from startups to established enterprises, in navigating the complex legal landscape of commerce. We assist with business formation and structuring, drafting and reviewing contracts, mergers and acquisitions, regulatory compliance, and corporate governance. Our attorneys are adept at identifying potential risks and opportunities, helping you make informed decisions that support your business goals. We also advise on shareholder agreements, intellectual property protection, and dispute resolution. Our proactive approach ensures that your company operates within the legal framework and is prepared for growth, investment, and market challenges. We are committed to building long-term partnerships with our clients, offering ongoing legal counsel to support your success at every stage.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Business Formation & Structuring",
      "Contract Drafting & Review",
      "Mergers & Acquisitions",
      "Regulatory Compliance",
      "Shareholder Agreements",
      "Corporate Governance"
    ],
    "faqs": [
      {
        "question": "How do I choose the right business structure?",
        "answer": "Our attorneys assess your goals and recommend the best structure, such as LLC, partnership, or corporation."
      },
      {
        "question": "What is due diligence in mergers?",
        "answer": "It involves a thorough review of financial, legal, and operational aspects before finalizing a merger or acquisition."
      }
    ],
    "process": [
      "Consultation & Needs Assessment",
      "Entity Formation & Documentation",
      "Contract Negotiation",
      "Ongoing Legal Compliance",
      "Dispute Resolution (if needed)"
    ],
    "cta": "Secure your business's future—consult our Corporate Law experts today."
  },
  {
    "id": 4,
    "slug": "real-estate-law",
    "title": "Real Estate Law",
    "description": "Resolving property disputes, transactions, and zoning issues with precision.",
    "details": "Our Real Estate Law practice provides comprehensive legal support for all types of property transactions and disputes. We represent buyers, sellers, landlords, tenants, developers, and investors in matters ranging from residential and commercial sales to complex zoning and land use issues. Our services include title searches and clearance, lease agreements, landlord-tenant disputes, property development, and real estate litigation. We ensure that every transaction is conducted smoothly and that your rights and investments are protected. Our attorneys are skilled negotiators and litigators, prepared to resolve disputes through negotiation or in court when necessary. We stay current with evolving real estate laws and regulations, offering clients practical advice and innovative solutions for even the most challenging property matters.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Property Sales & Purchases",
      "Title Search & Clearance",
      "Landlord-Tenant Disputes",
      "Zoning & Land Use",
      "Lease Agreements",
      "Real Estate Litigation"
    ],
    "faqs": [
      {
        "question": "What is a title search?",
        "answer": "A title search verifies legal ownership and checks for liens or claims on the property."
      },
      {
        "question": "Do I need a lawyer for property transactions?",
        "answer": "Legal guidance ensures your interests are protected and all documents are properly executed."
      }
    ],
    "process": [
      "Consultation & Property Review",
      "Document Preparation",
      "Negotiation & Agreement",
      "Due Diligence & Title Search",
      "Transaction Closure"
    ],
    "cta": "Protect your property investments—speak to our Real Estate Law team."
  },
  {
    "id": 5,
    "slug": "civil-litigation",
    "title": "Civil Litigation",
    "description": "Handling commercial disputes, personal injury claims, and insurance matters effectively.",
    "details": "Our Civil Litigation team provides assertive representation for individuals and businesses involved in legal disputes. We handle a wide range of civil matters, including contract disputes, personal injury claims, insurance litigation, commercial disagreements, and debt recovery. Our attorneys are skilled in negotiation, mediation, arbitration, and trial advocacy, always striving for the most favorable outcome for our clients. We conduct thorough investigations, develop strong legal arguments, and keep clients informed at every stage of the process. Whether you are seeking to enforce your rights or defend against a claim, our goal is to resolve disputes efficiently while minimizing risk and expense. We are committed to protecting your interests and achieving justice on your behalf.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Contract Disputes",
      "Personal Injury Claims",
      "Insurance Litigation",
      "Commercial Disputes",
      "Debt Recovery",
      "Alternative Dispute Resolution"
    ],
    "faqs": [
      {
        "question": "What is civil litigation?",
        "answer": "It involves legal disputes between individuals or organizations seeking monetary compensation or specific performance."
      },
      {
        "question": "How long does a civil case take?",
        "answer": "Timelines vary, but many cases resolve within 6-18 months depending on complexity."
      }
    ],
    "process": [
      "Case Assessment",
      "Pleadings & Discovery",
      "Negotiation & Settlement",
      "Trial Representation",
      "Judgment & Enforcement"
    ],
    "cta": "Need help with a dispute? Contact our Civil Litigation experts."
  },
  {
    "id": 6,
    "slug": "intellectual-property",
    "title": "Intellectual Property",
    "description": "Protecting your inventions, trademarks, copyrights, and IP rights diligently.",
    "details": "Our Intellectual Property (IP) practice empowers innovators, creators, and businesses to protect and maximize the value of their ideas. We provide end-to-end services for patents, trademarks, copyrights, and trade secrets, including registration, enforcement, licensing, and litigation. Our attorneys help you identify and secure your IP assets, monitor for infringement, and take swift action to defend your rights. We also advise on IP strategy, portfolio management, and commercialization, ensuring your innovations are protected and leveraged for growth. Whether you are an individual inventor, a startup, or a multinational corporation, our team delivers practical, business-focused solutions to help you stay competitive in a rapidly evolving marketplace.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Patent Registration & Enforcement",
      "Trademark Filing & Protection",
      "Copyright Registration",
      "Trade Secret Protection",
      "IP Litigation",
      "Licensing Agreements"
    ],
    "faqs": [
      {
        "question": "How do I protect my invention?",
        "answer": "File for a patent to secure exclusive rights and prevent unauthorized use."
      },
      {
        "question": "What is the difference between copyright and trademark?",
        "answer": "Copyright protects creative works; trademarks protect brand names, logos, and slogans."
      }
    ],
    "process": [
      "IP Assessment & Strategy",
      "Filing Applications",
      "Office Actions & Responses",
      "Enforcement & Monitoring",
      "Litigation (if needed)"
    ],
    "cta": "Safeguard your ideas—consult our Intellectual Property specialists."
  },
  {
    "id": 7,
    "slug": "employment-law",
    "title": "Employment Law",
    "description": "Advising on workplace rights, contracts, harassment, and wrongful termination cases.",
    "details": "Our Employment Law attorneys provide comprehensive legal support for both employees and employers in all aspects of workplace law. We advise on employment contracts, workplace discrimination and harassment, wrongful termination, wage and hour disputes, and compliance with labor laws. Our team is dedicated to ensuring fair treatment in the workplace, helping clients resolve conflicts through negotiation, mediation, or litigation. We also assist employers in developing policies and procedures to prevent legal issues and foster a positive work environment. Whether you are facing a workplace dispute or seeking proactive legal guidance, our attorneys are committed to protecting your rights and achieving practical, effective solutions.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Employment Contracts",
      "Workplace Discrimination",
      "Harassment Claims",
      "Wrongful Termination",
      "Wage & Hour Disputes",
      "Employee Handbook Policies"
    ],
    "faqs": [
      {
        "question": "What counts as wrongful termination?",
        "answer": "Termination based on discrimination, retaliation, or breach of contract may be considered wrongful."
      },
      {
        "question": "How can I address workplace harassment?",
        "answer": "Document incidents and consult an attorney to understand your rights and options."
      }
    ],
    "process": [
      "Consultation & Case Review",
      "Investigation & Evidence Collection",
      "Negotiation & Mediation",
      "Filing Claims",
      "Litigation & Resolution"
    ],
    "cta": "Protect your workplace rights—speak to our Employment Law team."
  },
  {
    "id": 8,
    "slug": "tax-law",
    "title": "Tax Law",
    "description": "Providing tax planning, audits, dispute resolution, and corporate tax strategies.",
    "details": "Our Tax Law team delivers expert advice and representation for individuals and businesses navigating complex tax regulations. We assist with tax planning and advisory, audit representation, dispute resolution, estate and gift tax planning, and international tax matters. Our attorneys work closely with clients to develop strategies that minimize tax liabilities, ensure compliance, and resolve disputes efficiently. We stay up-to-date with constantly evolving tax laws and regulations, enabling us to provide proactive solutions and defend your interests before tax authorities. Whether you are facing an audit, planning your estate, or seeking guidance on corporate tax matters, we are committed to protecting your financial well-being and achieving your goals.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Tax Planning & Advisory",
      "Audit Representation",
      "Tax Dispute Resolution",
      "Corporate Tax Strategies",
      "Estate & Gift Tax Planning",
      "International Taxation"
    ],
    "faqs": [
      {
        "question": "How can I reduce my tax liability?",
        "answer": "Effective tax planning and use of available deductions and credits can help minimize your liability."
      },
      {
        "question": "What happens during a tax audit?",
        "answer": "Authorities review your financial records to ensure compliance; we represent and guide you through the process."
      }
    ],
    "process": [
      "Initial Consultation & Review",
      "Tax Strategy Development",
      "Documentation & Filing",
      "Audit Support",
      "Dispute Resolution"
    ],
    "cta": "Optimize your taxes—consult our Tax Law experts today."
  }
]
;

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-deepRoyal">Service Not Found</h1>
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
    <div className="text-black">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center">{service.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <p className="text-lg mb-6 text-gray-700">{service.details}</p>

        {/* Features Section */}
        {service.features?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-deepRoyal mb-4">Key Features</h2>
            <ul className="list-disc ml-6 text-gray-800 space-y-3 text-lg">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQs Section */}
        {service.faqs?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-deepRoyal mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-deepRoyal rounded p-4 shadow"
                >
                  <h3 className="font-semibold text-lg text-deepRoyal">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Section */}
        {service.process?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-deepRoyal mb-6">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Dot */}
                  <span className="mt-2 w-3 h-3 bg-deepRoyal rounded-full flex-shrink-0" />
                  
                  {/* Text */}
                  <p className="text-gray-800 text-lg leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Contact Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300 text-lg font-semibold shadow-md"
          >
            Contact Us to know more about {service.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;