import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

// Shared data with slug added for routing
const servicesData = [
  {
    "id": 1,
    "slug": "matrimonial-cases",
    "icon": "<Scale className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Matrimonial Cases",
    "description": "Navigating divorce, custody, and family disputes with compassion and expertise.",
    "details": "Our Matrimonial Cases practice handles legal matters such as divorce, child custody, alimony, adoption, and domestic violence issues. Our experienced attorneys provide empathetic guidance and robust representation to safeguard your family’s interests during challenging times.",
    "image": "images/nri matrimonial.jpg",
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
        "question": "What documents are needed for a divorce consultation?",
        "answer": "Bring marriage certificates, court orders, financial records, and a list of your concerns or questions."
      },
      {
        "question": "How long does a divorce process typically take?",
        "answer": "Depending on complexity and whether it’s contested, most cases resolve within 6-12 months."
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
        "feedback": "Their compassionate approach made my custody case manageable. Highly professional team."
      }
    ],
    "cta": "Contact our Family Law team for a confidential consultation to secure your family’s future.",
    "related_services": ["civil-litigation", "nri-cases"]
  },
  {
    "id": 2,
    "slug": "criminal",
    "icon": "<FileText className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Criminal Defense",
    "description": "Vigorous defense for charges like DUI, assault, drug offenses, and more.",
    "details": "Our Criminal Defense team provides aggressive representation for clients facing charges such as DUI, assault, theft, drug offenses, and white-collar crimes. We protect your rights, aim to reduce or dismiss charges, and guide you through the criminal justice system.",
    "image": "/images/criminal law.jpg",
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
        "question": "What should I do if arrested?",
        "answer": "Stay calm, remain silent, and request an attorney before answering questions."
      },
      {
        "question": "Can charges be dropped before trial?",
        "answer": "Yes, charges may be reduced or dismissed based on evidence and legal arguments."
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
        "feedback": "Their dedication got my charges dropped. Exceptional defense team."
      }
    ],
    "cta": "Facing criminal charges? Contact us for a strong and immediate defense.",
    "related_services": ["civil-litigation", "appellate-law"]
  },
  {
    "id": 3,
    "slug": "appellate-law",
    "icon": "<Gavel className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Appellate Law",
    "description": "Appealing court decisions with strategic precision and expertise.",
    "details": "Our Appellate Law practice focuses on reviewing and challenging court decisions to achieve favorable outcomes. We handle appeals in civil, criminal, and administrative cases with meticulous legal strategies.",
    "image": "images/appleate.jpg",
    "features": [
      "Civil Appeals",
      "Criminal Appeals",
      "Administrative Appeals",
      "Brief Writing & Filing",
      "Oral Arguments",
      "Case Review & Strategy"
    ],
    "faqs": [
      {
        "question": "What is an appeal?",
        "answer": "An appeal is a request to a higher court to review and overturn a lower court’s decision."
      },
      {
        "question": "How long does an appeal take?",
        "answer": "Appeals can take several months to years, depending on the case complexity and court schedule."
      }
    ],
    "process": [
      "Case Review & Grounds for Appeal",
      "Filing Notice of Appeal",
      "Brief Preparation & Submission",
      "Oral Arguments (if required)",
      "Court Decision & Follow-up"
    ],
    "testimonials": [
      {
        "client": "Suresh K.",
        "feedback": "Their appellate expertise turned my case around. Outstanding representation."
      }
    ],
    "cta": "Need to appeal a court decision? Contact our Appellate Law specialists.",
    "related_services": ["civil-litigation", "criminal"]
  },
  {
    "id": 4,
    "slug": "civil-litigation",
    "icon": "<Landmark className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Civil Litigation",
    "description": "Resolving disputes in contracts, injuries, and commercial matters effectively.",
    "details": "Our Civil Litigation team represents clients in disputes involving contracts, personal injuries, property, and commercial issues. We strive for favorable resolutions through negotiation or robust court representation.",
    "image": "images/civil litigation.jpg",
    "features": [
      "Contract Disputes",
      "Personal Injury Claims",
      "Property Disputes",
      "Commercial Litigation",
      "Debt Recovery",
      "Alternative Dispute Resolution"
    ],
    "faqs": [
      {
        "question": "What is civil litigation?",
        "answer": "It involves legal disputes between individuals or organizations seeking compensation or specific performance."
      },
      {
        "question": "How long does a civil case take?",
        "answer": "Cases typically resolve within 6-18 months, depending on complexity and court schedules."
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
    "cta": "Facing a legal dispute? Contact our Civil Litigation experts today.",
    "related_services": ["appellate-law", "insurance-claims"]
  },
  {
    "id": 5,
    "slug": "intellectual-property",
    "icon": "<FileCheck className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Intellectual Property",
    "description": "Protecting your inventions, trademarks, copyrights, and IP rights diligently.",
    "details": "We help clients protect their inventions, brands, and creative works through patents, trademarks, copyrights, and trade secrets. Our team ensures your intellectual property is secure and enforceable.",
    "image": "images/intellectual.jpg",
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
    "related_services": ["corporate-law", "digital-crime"]
  },
  {
    "id": 6,
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
    "related_services": ["civil-litigation", "matrimonial-cases"]
  },
  {
    "id": 7,
    "slug": "digital-crime",
    "icon": "<Shield className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Cyber Crime",
    "description": "Defending against cybercrimes like hacking, data breaches, and online fraud.",
    "details": "Our Digital Crime/Cyber Crime practice addresses legal issues involving hacking, identity theft, data breaches, cyber fraud, and online harassment. We provide robust defense and proactive strategies to protect your digital assets and reputation.",
    "image": "images/cyber-law.jpg",
    "features": [
      "Hacking & Data Breach Defense",
      "Identity Theft Cases",
      "Cyber Fraud Representation",
      "Online Harassment & Cyberbullying",
      "Data Privacy Compliance",
      "Cybercrime Litigation"
    ],
    "faqs": [
      {
        "question": "What should I do if I’m a victim of cybercrime?",
        "answer": "Report the incident to authorities, secure your accounts, and consult a lawyer to protect your rights."
      },
      {
        "question": "Can cybercrimes be prosecuted?",
        "answer": "Yes, cybercrimes like hacking or fraud are prosecutable under cyber laws with proper evidence."
      }
    ],
    "process": [
      "Incident Assessment & Reporting",
      "Evidence Collection & Analysis",
      "Legal Strategy Development",
      "Representation in Court",
      "Resolution & Preventive Measures"
    ],
    "testimonials": [
      {
        "client": "Neha V.",
        "feedback": "They handled my data breach case with expertise and protected my business."
      }
    ],
    "cta": "Victimized by cybercrime? Contact our Cyber Law experts for immediate assistance.",
    "related_services": ["intellectual-property", "criminal"]
  },
  {
    "id": 8,
    "slug": "medical-negligence",
    "icon": "<Heart className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Medical Negligence",
    "description": "Seeking justice for medical malpractice and negligence cases.",
    "details": "Our Medical Negligence practice represents clients harmed by medical malpractice, misdiagnosis, surgical errors, or inadequate care. We fight for fair compensation and accountability from healthcare providers.",
    "image": "images/medical negligence.jpg",
    "features": [
      "Medical Malpractice Claims",
      "Misdiagnosis & Delayed Diagnosis",
      "Surgical Error Cases",
      "Hospital Negligence",
      "Birth Injury Claims",
      "Wrongful Death due to Negligence"
    ],
    "faqs": [
      {
        "question": "What qualifies as medical negligence?",
        "answer": "Negligence occurs when a healthcare provider fails to meet the standard of care, causing harm."
      },
      {
        "question": "How long do I have to file a medical negligence claim?",
        "answer": "The statute of limitations varies by jurisdiction, typically 1-3 years from the incident."
      }
    ],
    "process": [
      "Case Evaluation & Medical Review",
      "Evidence & Expert Testimony",
      "Negotiation with Insurers",
      "Filing Claims",
      "Litigation & Resolution"
    ],
    "testimonials": [
      {
        "client": "Amit K.",
        "feedback": "They secured fair compensation for my family after a surgical error. Exceptional service."
      }
    ],
    "cta": "Harmed by medical negligence? Contact our experts for justice and compensation.",
    "related_services": ["civil-litigation", "insurance-claims"]
  },
  {
    "id": 9,
    "slug": "motor-vehicle-accidental-claims",
    "icon": "<Car className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Motor Vehicle Accidental Claims",
    "description": "Securing compensation for injuries and damages from vehicle accidents.",
    "details": "Our Motor Vehicle Accidental Claims practice helps clients recover compensation for injuries, property damage, and losses from car, motorcycle, or truck accidents caused by negligence.",
    "image": "images/accident.jpg",
    "features": [
      "Car Accident Claims",
      "Motorcycle Accident Claims",
      "Truck Accident Litigation",
      "Pedestrian Accident Cases",
      "Wrongful Death Claims",
      "Insurance Negotiations"
    ],
    "faqs": [
      {
        "question": "What compensation can I claim after an accident?",
        "answer": "You may claim medical expenses, lost wages, pain and suffering, and property damage."
      },
      {
        "question": "Do I need a lawyer for an accident claim?",
        "answer": "A lawyer ensures fair compensation and handles negotiations with insurers."
      }
    ],
    "process": [
      "Accident Review & Consultation",
      "Evidence Gathering (Police Reports, Witnesses)",
      "Insurance Negotiations",
      "Filing Claims",
      "Litigation (if needed)"
    ],
    "testimonials": [
      {
        "client": "Ravi N.",
        "feedback": "They fought for my accident claim and secured a fair settlement. Highly professional."
      }
    ],
    "cta": "Injured in a vehicle accident? Contact us for expert claim assistance.",
    "related_services": ["insurance-claims", "medical-negligence"]
  },
  {
    "id": 10,
    "slug": "insurance-claims",
    "icon": "<FileShield className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Insurance Claims",
    "description": "Handling disputes and denials for property, health, and auto insurance claims.",
    "details": "Our Insurance Claims practice assists clients in disputes with insurers over denied or underpaid claims for property, health, auto, or other policies. We ensure you receive the coverage you’re entitled to.",
    "image": "images/insurance.jpg",
    "features": [
      "Property Insurance Disputes",
      "Health Insurance Claims",
      "Auto Insurance Claims",
      "Bad Faith Insurance Practices",
      "Policy Review & Analysis",
      "Claim Denials & Appeals"
    ],
    "faqs": [
      {
        "question": "What is a bad faith insurance claim?",
        "answer": "It occurs when an insurer unreasonably denies or delays a valid claim."
      },
      {
        "question": "How long does an insurance claim take?",
        "answer": "Timelines vary, but disputes may take months; we work to expedite fair resolutions."
      }
    ],
    "process": [
      "Claim Review & Policy Analysis",
      "Evidence Collection",
      "Negotiation with Insurers",
      "Appeals & Dispute Resolution",
      "Litigation (if necessary)"
    ],
    "testimonials": [
      {
        "client": "Lata M.",
        "feedback": "They resolved my denied insurance claim quickly and got me fair compensation."
      }
    ],
    "cta": "Denied insurance claim? Contact our experts to fight for your coverage.",
    "related_services": ["civil-litigation", "motor-vehicle-accidental-claims"]
  },
  {
    "id": 11,
    "slug": "nri-cases",
    "icon": "<Globe className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "NRI Cases",
    "description": "Assisting NRIs with property, family, and legal disputes across jurisdictions.",
    "details": "Our NRI Cases practice supports Non-Resident Indians with legal issues such as property disputes, matrimonial cases, inheritance, and cross-border litigation, ensuring seamless representation.",
    "image": "images/nri.jpg",
    "features": [
      "Property Disputes & Management",
      "Matrimonial & Family Law",
      "Inheritance & Succession",
      "Cross-Border Litigation",
      "Power of Attorney Services",
      "Taxation for NRIs"
    ],
    "faqs": [
      {
        "question": "Can NRIs file cases from abroad?",
        "answer": "Yes, we represent NRIs remotely through power of attorney or virtual consultations."
      },
      {
        "question": "What documents are needed for NRI property disputes?",
        "answer": "Property deeds, ownership records, and any related legal agreements are essential."
      }
    ],
    "process": [
      "Consultation & Case Assessment",
      "Document Verification",
      "Legal Strategy & Filing",
      "Cross-Border Coordination",
      "Resolution & Enforcement"
    ],
    "testimonials": [
      {
        "client": "Arjun P.",
        "feedback": "They handled my overseas property dispute efficiently, saving me time and stress."
      }
    ],
    "cta": "NRI facing legal issues? Contact us for expert cross-border legal support.",
    "related_services": ["matrimonial-cases", "tax-law"]
  },
  {
    "id": 12,
    "slug": "drafting",
    "icon": "<PenTool className=\"h-12 w-12 text-deepRoyal\" />",
    "title": "Drafting",
    "description": "Crafting precise legal documents, contracts, and agreements tailored to your needs.",
    "details": "Our Drafting services provide expertly crafted legal documents, including contracts, wills, trusts, agreements, and compliance documents, ensuring clarity and legal enforceability.",
    "image": "images/drafting.jpg",
    "features": [
      "Contract Drafting & Review",
      "Wills & Trusts",
      "Business Agreements",
      "Lease & Property Agreements",
      "Power of Attorney",
      "Compliance Documents"
    ],
    "faqs": [
      {
        "question": "Why is professional drafting important?",
        "answer": "Professionally drafted documents ensure clarity, enforceability, and compliance with laws."
      },
      {
        "question": "Can I modify a drafted contract later?",
        "answer": "Yes, contracts can be amended with mutual consent and proper documentation."
      }
    ],
    "process": [
      "Consultation & Needs Assessment",
      "Document Drafting",
      "Client Review & Feedback",
      "Finalization & Execution",
      "Ongoing Support (if needed)"
    ],
    "testimonials": [
      {
        "client": "Deepa S.",
        "feedback": "Their precise contract drafting saved my business from potential disputes."
      }
    ],
    "cta": "Need precise legal documents? Contact our Drafting experts today.",
    "related_services": ["corporate-law", "nri-cases"]
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
              <Link to={`/practise areas/${service.slug}`} key={service.id} className="w-full flex justify-center">
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
        <p className="mb-6 text-base md:text-lg text-gray-700 text-justify">
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
                <p className="text-justify">{step.description}</p>
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
