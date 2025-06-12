import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

// Shared data with slug added for routing
const servicesData = [
  {
    "id": 1,
    "slug": "family-law",
    "icon": "<Scale className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Family Law",
    "description": "Helping families navigate divorce, custody, and support with compassion and expertise.",
    "details": "Family Law covers legal issues such as divorce, child custody, child support, alimony, adoption, and domestic violence. Our experienced attorneys provide compassionate guidance and strong representation to protect your family’s interests and help you through difficult times.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Divorce & Separation",
      "Child Custody & Visitation",
      "Child & Spousal Support",
      "Adoption & Guardianship",
      "Domestic Violence Protection",
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
    "testimonials": [
      {
        "client": "Priya S.",
        "feedback": "The team guided me through a difficult custody battle with empathy and professionalism. Highly recommended."
      }
    ],
    "cta": "Contact our Family Law team for a confidential consultation and let us help you protect your family's future.",
    "related_services": ["civil-litigation", "employment-law"]
  },
  {
    "id": 2,
    "slug": "criminal-defense",
    "icon": "<FileText className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Criminal Defense",
    "description": "Defending your rights against DUI, assault, drug, and other criminal charges.",
    "details": "Our Criminal Defense team aggressively defends clients charged with DUI, assault, theft, drug offenses, and other criminal acts. We protect your rights, work to reduce or dismiss charges, and guide you through the complex criminal justice system.",
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
    "testimonials": [
      {
        "client": "Rahul M.",
        "feedback": "They fought hard for my case and got the charges dropped. I am grateful for their dedication."
      }
    ],
    "cta": "If you’re facing criminal charges, contact us immediately for a strong defense.",
    "related_services": ["civil-litigation", "family-law"]
  },
  {
    "id": 3,
    "slug": "corporate-law",
    "icon": "<Briefcase className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Corporate Law",
    "description": "Guiding business formations, contracts, and mergers to secure your company’s future.",
    "details": "Our Corporate Law services assist businesses with formation, contracts, compliance, mergers, and acquisitions. We ensure your company operates within the legal framework and protect your business interests at every stage.",
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
    "testimonials": [
      {
        "client": "Ankit R.",
        "feedback": "Their expertise made our company merger smooth and secure. Highly recommended."
      }
    ],
    "cta": "Secure your business's future—consult our Corporate Law experts today.",
    "related_services": ["tax-law", "intellectual-property"]
  },
  {
    "id": 4,
    "slug": "real-estate-law",
    "icon": "<Home className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Real Estate Law",
    "description": "Resolving property disputes, transactions, and zoning issues with precision.",
    "details": "Our Real Estate Law practice handles property sales and purchases, title issues, landlord-tenant disputes, zoning, and land use. We provide clear guidance to protect your property rights and investments.",
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
    "testimonials": [
      {
        "client": "Meera T.",
        "feedback": "Handled our property dispute efficiently and professionally. Excellent service."
      }
    ],
    "cta": "Protect your property investments—speak to our Real Estate Law team.",
    "related_services": ["civil-litigation", "corporate-law"]
  },
  {
    "id": 5,
    "slug": "civil-litigation",
    "icon": "<Landmark className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Civil Litigation",
    "description": "Handling commercial disputes, personal injury claims, and insurance matters effectively.",
    "details": "Our Civil Litigation team represents clients in disputes involving contracts, personal injury, insurance claims, and more. We fight to protect your legal rights and achieve favorable resolutions.",
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
    "testimonials": [
      {
        "client": "Vikram D.",
        "feedback": "They resolved my commercial dispute quickly and professionally."
      }
    ],
    "cta": "Need help with a dispute? Contact our Civil Litigation experts.",
    "related_services": ["family-law", "real-estate-law"]
  },
  {
    "id": 6,
    "slug": "intellectual-property",
    "icon": "<FileCheck className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Intellectual Property",
    "description": "Protecting your inventions, trademarks, copyrights, and IP rights diligently.",
    "details": "We help clients protect their inventions, brands, and creative works through patents, trademarks, copyrights, and trade secrets. Our team ensures your intellectual property is secure and enforceable.",
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
    "testimonials": [
      {
        "client": "Kiran J.",
        "feedback": "They secured our brand’s trademarks and handled IP disputes efficiently."
      }
    ],
    "cta": "Safeguard your ideas—consult our Intellectual Property specialists.",
    "related_services": ["corporate-law", "civil-litigation"]
  },
  {
    "id": 7,
    "slug": "employment-law",
    "icon": "<BookOpen className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Employment Law",
    "description": "Advising on workplace rights, contracts, harassment, and wrongful termination cases.",
    "details": "Our Employment Law attorneys guide both employees and employers on workplace rights, contracts, discrimination, harassment, and wrongful termination claims to ensure fair treatment and compliance with labor laws.",
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
    "testimonials": [
      {
        "client": "Sonal G.",
        "feedback": "They helped me resolve a workplace harassment issue quickly and professionally."
      }
    ],
    "cta": "Protect your workplace rights—speak to our Employment Law team.",
    "related_services": ["civil-litigation", "family-law"]
  },
  {
    "id": 8,
    "slug": "tax-law",
    "icon": "<Building className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Tax Law",
    "description": "Providing tax planning, audits, dispute resolution, and corporate tax strategies.",
    "details": "Our Tax Law specialists provide advice on tax planning, audits, dispute resolution, estate taxes, and corporate tax matters to minimize liabilities and ensure compliance with tax regulations.",
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
    "testimonials": [
      {
        "client": "Ramesh P.",
        "feedback": "Their advice saved us significant taxes and made the audit process stress-free."
      }
    ],
    "cta": "Optimize your taxes—consult our Tax Law experts today.",
    "related_services": ["corporate-law", "civil-litigation"]
  }
];

const Services = () => {
  return (
    <div>
      <section className="pt-32 pb-16 bg-deepRoyal relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-white">
              Comprehensive legal services tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[70rem] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deepRoyal mb-4">
              Expertise Across Multiple Legal Domains
            </h2>
            <p className="text-lg text-blue-gray-400 leading-snug max-w-3.5xl mx-auto">
              Our team of experienced attorneys provides comprehensive legal
              services across a wide range of practice areas. Whatever your legal
              needs, we have the expertise to help you navigate complex legal
              matters and achieve favorable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {servicesData.map((service, index) => (
              <Link to={`/services/${service.slug}`} key={service.id} className="w-full flex justify-center">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  group relative flex flex-col items-center justify-start
                  w-72 mt-6 px-6 pt-12 pb-3 m-2 mb-6
                  bg-white rounded-xl border shadow-md
                  transition-all duration-300
                  hover:bg-white hover:text-white hover:shadow-2xl cursor-pointer
                "
              >
                {/* Image */}
                <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-20">
                  <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Title & Arrow */}
                <div className="flex items-center justify-center gap-2 mt-14 mb-2">
                  <span className="text-2xl font-bold text-blue-900 group-hover:text-blue-900 transition-colors text-center">
                    {service.title}
                  </span>
                  <svg
                    className="w-5 h-5 text-yellow-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Underline */}
                <div className="mx-auto mb-2 w-10 h-0.5 bg-yellow-500 rounded-full group-hover:bg-white transition-colors"></div>
              </motion.div>

              </Link>
            ))}
          </div>
        </div>
      </section>

     <section className="py-16 bg-gray-50 text-gray-800">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-deepRoyal mb-6">
          Our Approach to Legal Services
        </h2>
        <p className="mb-6 text-base md:text-lg text-gray-700">
          At Aggarwal Legal Firm, we believe in a client-centered approach that focuses on understanding your unique needs and developing tailored legal strategies to achieve your goals.
        </p>
        <div className="space-y-6 text-base md:text-lg text-gray-700">
          {[
            {
              title: "Initial Consultation",
              description:
                "We begin with a thorough consultation to understand your legal needs and objectives.",
            },
            {
              title: "Strategy Development",
              description:
                "Our team develops a customized legal strategy tailored to your specific situation.",
            },
            {
              title: "Execution & Representation",
              description:
                "We implement the strategy with meticulous attention to detail and advocate on your behalf.",
            },
            {
              title: "Ongoing Support",
              description:
                "We provide continuous guidance and support throughout the legal process and beyond.",
            },
          ].map((step, index) => (
            <div key={index} className="flex">
              <div className="mr-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-deepRoyal text-white font-semibold text-base">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deepRoyal mb-1">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <img
          src="/images/laws.png"
          alt="Attorney working with client"
          className="rounded-lg shadow-lg w-full h-[480px] md:h-[580px] lg:h-[620px] object-cover"
        />
      </div>
    </div>
  </div>
</section>


      <CallToAction />
    </div>
  );
};

export default Services;
